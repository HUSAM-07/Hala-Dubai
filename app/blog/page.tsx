import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600">
            Discover insights about Dubai's best spots and local experiences.
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <Link 
                href={`/blog/${post.id}`}
                className="group block space-y-3"
              >
                <div>
                  <time className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </time>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center text-primary font-medium">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 