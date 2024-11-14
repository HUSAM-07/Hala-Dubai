import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Menu, Building2 } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const metadata: Metadata = {
  title: 'Hala Dubai - Discover Dubai\'s Best Spots',
  description: 'Your guide to Dubai\'s best student hangouts and dining destinations',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: {
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    shortcut: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
  },
};

function DesktopMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex space-x-6">
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/feature">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/student-spots">Student Spots</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/trails">Explore Trails</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild variant="outline" size="sm">
            <NavigationMenuLink className="inline-flex items-center" href="/student-spots">
              Try Now
              <Building2 className="ml-2 h-4 w-4" />
            </NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <a href="/" className="w-full">Home Page</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/feature" className="w-full">About</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/student-spots" className="w-full">Student Spots</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/trails" className="w-full">Explore Trails</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button asChild variant="outline" className="w-full justify-start">
            <a href="/student-spots" className="inline-flex items-center justify-start w-full">
              Try Now
              <Building2 className="ml-auto h-4 w-4" />
            </a>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <header className="flex justify-between items-center p-4 md:px-8 border-b border-gray-200">
          <nav className="w-full">
            <DesktopMenu />
            <MobileMenu />
          </nav>
        </header>
        <main className="max-w-full px-4 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}