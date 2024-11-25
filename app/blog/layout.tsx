import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Hala Dubai',
  description: 'Discover insights about Dubai\'s best spots and local experiences.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
} 