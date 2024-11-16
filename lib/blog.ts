import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { BlogPost } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const id = fileName.replace(/\.mdx$/, '');
        const post = await getPostById(id);
        return post;
      })
  );

  // Filter out any null posts and sort by date
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  });

  return {
    id,
    content: mdxContent,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readingTime: data.readingTime,
  };
} 