"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Building2 } from "lucide-react";
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
      <div className="container flex h-16 items-center justify-between">
        {/* Left section - Mobile menu button */}
        <div className="md:hidden">
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
                    <div className="flex items-center gap-2">
                      <Building2 
                        className="h-8 w-8 text-primary" 
                        strokeWidth={1.5}
                      />
                      <span className="font-semibold text-lg text-gray-900">Hala Dubai</span>
                    </div>
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
                    <Link
                      href="/trails"
                      className="text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Trails in UAE
                    </Link>
                  </div>
                </div>
                <div className="p-6 border-t">
                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                  >
                    <Link href="/student-spots">Try for Free</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center section - Logo and navigation */}
        <div className="flex flex-1 items-center justify-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Building2 
              className="h-8 w-8 text-primary" 
              strokeWidth={1.5}
            />
            <span className="font-semibold text-lg text-gray-900">Hala Dubai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            <Link 
              href="/trails" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 relative group"
            >
              Trails in UAE
              <span className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Right section - CTA button */}
        <div className="flex items-center">
          <Button 
            variant="default" 
            className="bg-primary text-white hover:bg-primary/90 hidden md:flex"
          >
            <Link href="/student-spots">Try for Free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}