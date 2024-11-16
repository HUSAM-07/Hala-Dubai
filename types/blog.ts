export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  content: React.ReactNode;
} 