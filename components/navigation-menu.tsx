"use client";

import Link from "next/link";
import { Menu, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationMenu() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left section - Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Building2 
            className="h-8 w-8 text-primary" 
            strokeWidth={1.5}
          />
          <span className="font-semibold text-lg text-gray-900">Hala Dubai</span>
        </Link>

        {/* Right section - Mobile menu button */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/feature">How it works</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/student-spots">Student Spots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/trails">Trails in UAE</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/student-spots" className="bg-primary text-white">
                  Try for Free
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

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
          <Button 
            variant="default" 
            className="bg-primary text-white hover:bg-primary/90"
          >
            <Link href="/student-spots">Try for Free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}