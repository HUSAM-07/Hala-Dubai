import { Wifi, Battery, Coffee } from "lucide-react";
import { SpotType, AmenityType } from "@/types/spots";

export const AMENITIES: AmenityType[] = [
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "power", label: "Power Outlets", icon: Battery },
  { id: "coffee", label: "Coffee Available", icon: Coffee },
];

export const SPOTS: SpotType[] = [
  {
    id: 1,
    name: "Knowledge Hub",
    location: "Dubai Knowledge Park",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    capacity: 50,
    currentOccupancy: 28,
    amenities: ["wifi", "power", "coffee"],
    hours: "7:00 AM - 10:00 PM",
    description: "Modern study space with individual and group areas",
  },
  {
    id: 2,
    name: "Creative Corner",
    location: "Dubai Media City",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    capacity: 35,
    currentOccupancy: 15,
    amenities: ["wifi", "power"],
    hours: "8:00 AM - 11:00 PM",
    description: "Quiet workspace perfect for focused study sessions",
  },
  {
    id: 3,
    name: "Innovation Lab",
    location: "Dubai Internet City",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4",
    capacity: 75,
    currentOccupancy: 45,
    amenities: ["wifi", "power", "coffee"],
    hours: "24/7",
    description: "Tech-enabled study space with modern amenities",
  },
];