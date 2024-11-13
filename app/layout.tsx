import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/toaster';
import { NavigationMenu } from '@/components/navigation-menu';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${GeistSans.className} min-h-screen bg-background antialiased overflow-x-hidden`}>
        <NavigationMenu />
        <main className="relative flex-1">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}