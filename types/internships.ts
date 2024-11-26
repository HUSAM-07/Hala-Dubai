import { LucideIcon } from "lucide-react";

export interface InternshipType {
  id: number;
  company: string;
  role: string;
  location: string;
  description: string;
  icon: LucideIcon;
}