import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts, getPostById } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

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
    <Card className="max-w-4xl mx-auto border-none shadow-none">
      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="mb-8"
      >
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      <CardHeader className="space-y-4 px-0">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {post.excerpt}
        </p>
      </CardHeader>

      <CardContent className="px-0">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {post.content}
        </div>
      </CardContent>
    </Card>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: BlogPost) => ({
    id: post.id,
  }));
}
