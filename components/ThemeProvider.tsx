"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Check if the browser supports P3 color space
  React.useEffect(() => {
    const supportsP3 = window.matchMedia("(color-gamut: p3)").matches;
    if (supportsP3) {
      document.documentElement.classList.add("supports-p3");
    }
  }, []);

  return (
    <NextThemesProvider 
      {...props}
      defaultTheme="system"
      enableSystem
      attribute="class"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
} 