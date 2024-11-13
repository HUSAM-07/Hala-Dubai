"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full items-center">
          {/* Logo - Always visible */}
          <div className="flex items-center mr-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/dubai-logo.jpg"
                alt="Hala Dubai Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/feature" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 relative group"
            >
              How it works
              <span className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
            <Link 
              href="/student-spots" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 relative group"
            >
              Student Spots
              <span className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
          </div>

          {/* Desktop CTA - Hidden on mobile */}
          <div className="hidden md:flex ml-auto">
            <Button 
              variant="default" 
              className="bg-primary text-white hover:bg-primary/90"
            >
              Try for Free
            </Button>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle>
                      <Image
                        src="/dubai-logo.jpg"
                        alt="Hala Dubai Logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-auto py-6">
                    <div className="flex flex-col space-y-3 px-6">
                      <Link
                        href="/feature"
                        className="text-lg font-medium py-2 hover:text-primary transition-colors"
                      >
                        How it works
                      </Link>
                      <Link
                        href="/student-spots"
                        className="text-lg font-medium py-2 hover:text-primary transition-colors"
                      >
                        Student Spots
                      </Link>
                    </div>
                  </div>
                  <div className="p-6 border-t">
                    <Button 
                      className="w-full bg-primary text-white hover:bg-primary/90"
                    >
                      Try for Free
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}