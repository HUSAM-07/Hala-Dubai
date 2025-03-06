'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLinkIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const footerSections = [
  {
    title: 'Resources',
    links: [
      { name: 'Student Spots', href: '/student-spots' },
      { name: 'About Us', href: '/feature' },
      { name: 'Explore Trails', href: '/trails' },
    ]
  },
  {
    title: 'Social',
    links: [
      { name: 'Instagram', href: 'https://www.instagram.com/itshu.sam/', icon: <InstagramLogoIcon className="h-4 w-4" aria-hidden="true" /> },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammedhusamuddin/', icon: <LinkedInLogoIcon className="h-4 w-4" aria-hidden="true" /> }
    ]
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-violet-1 border-t dark:border-violet-3" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Desktop and Tablet Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 dark:text-violet-12">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-gray-900 dark:text-violet-11 dark:hover:text-violet-12 flex items-center"
                      {...('href' in link && link.href.startsWith('http') ? { 
                        target: "_blank", 
                        rel: "noopener noreferrer",
                        'aria-label': `${link.name} (opens in a new tab)`
                      } : {})}
                    >
                      {link.name}
                      {'icon' in link && <span className="ml-1">{link.icon}</span>}
                      {('href' in link && link.href.startsWith('http')) && (
                        <ExternalLinkIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold mb-4 dark:text-violet-12">Support Us</h3>
            <Link 
              href="https://buymeacoffee.com/unihusam" 
              className="text-gray-600 hover:text-gray-900 dark:text-violet-11 dark:hover:text-violet-12 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Thank the Author (opens in a new tab)"
            >
              <PersonIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              Thank the Author
              <ExternalLinkIcon className="ml-1 h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          <Accordion type="single" collapsible className="w-full">
            {footerSections.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="dark:border-violet-3">
                <AccordionTrigger className="dark:text-violet-12">{section.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href} 
                          className="text-gray-600 hover:text-gray-900 dark:text-violet-11 dark:hover:text-violet-12 flex items-center"
                          {...('href' in link && link.href.startsWith('http') ? { 
                            target: "_blank", 
                            rel: "noopener noreferrer",
                            'aria-label': `${link.name} (opens in a new tab)`
                          } : {})}
                        >
                          {link.name}
                          {'icon' in link && <span className="ml-1">{link.icon}</span>}
                          {('href' in link && link.href.startsWith('http')) && (
                            <ExternalLinkIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="support-us" className="dark:border-violet-3">
              <AccordionTrigger className="dark:text-violet-12">Support Us</AccordionTrigger>
              <AccordionContent>
                <Link 
                  href="https://www.buymeacoffee.com/yourname" 
                  className="text-gray-600 hover:text-gray-900 dark:text-violet-11 dark:hover:text-violet-12 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Thank the Author (opens in a new tab)"
                >
                  <PersonIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                  Thank the Author
                  <ExternalLinkIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 pt-8 border-t dark:border-violet-3 text-center text-sm text-gray-500 dark:text-violet-11">
          <p>© {new Date().getFullYear()} Hala Dubai All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/company/terms" className="hover:text-gray-900 dark:hover:text-violet-12">Privacy Policy</Link>
            <Link href="/company/terms" className="hover:text-gray-900 dark:hover:text-violet-12">Terms of Service</Link>
            <Link href="/company/terms" className="hover:text-gray-900 dark:hover:text-violet-12">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer