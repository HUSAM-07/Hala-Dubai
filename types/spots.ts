import { LucideIcon } from "lucide-react";

export interface AmenityType {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SpotType {
  id: number;
  name: string;
  location: string;
  image: string;
  capacity: number;
  currentOccupancy: number;
  amenities: string[];
  hours: string;
  description: string;
}