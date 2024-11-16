import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts, getPostById } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getPostById(params.id);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - Hala Dubai Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: BlogPost) => ({
    id: post.id,
  }));
}
