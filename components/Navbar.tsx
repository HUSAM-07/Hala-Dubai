"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const routes = [
  { name: "Home", path: "/" },
  { name: "Student Spots", path: "/student-spots" },
  { name: "Internships", path: "/internships" },
  { name: "Blog", path: "/blog" },
  { name: "Company", path: "/company" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-200",
        scrolled 
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border/40" 
          : "bg-background/50 supports-[backdrop-filter]:bg-background/30 border-transparent",
        "dark:border-violet-3/40"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" aria-label="Hala Dubai Home">
            <Building2 className="h-6 w-6 text-violet-9 dark:text-violet-9" aria-hidden="true" />
            <span className="font-bold text-xl">Hala Dubai</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <Link href={route.path} legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === route.path && "bg-accent text-accent-foreground"
                      )}
                      aria-current={pathname === route.path ? "page" : undefined}
                    >
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 dark:bg-violet-1/95 backdrop-blur-sm p-6 animate-in slide-in-from-top-5"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link 
                  key={route.path} 
                  href={route.path}
                  className={cn(
                    "text-lg font-medium px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                    pathname === route.path && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === route.path ? "page" : undefined}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 