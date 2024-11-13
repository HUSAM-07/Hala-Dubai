"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SPOTS, AMENITIES } from "@/data/spots";
import type { AmenityType } from "@/types/spots";

export default function StudentSpots() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const filteredSpots = SPOTS.filter((spot) => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAmenities = selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) => spot.amenities.includes(amenity));
    return matchesSearch && matchesAmenities;
  });

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Student Spots</h1>
          <p className="text-sm sm:text-base text-gray-600">Discover the perfect study spots in Dubai</p>
        </header>

        {/* Search and Filter Section */}
        <div className="flex flex-col gap-4 mb-6 sm:mb-8">
          <Input
            placeholder="Search spots..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          <div className="flex flex-wrap gap-2">
            {AMENITIES.map((amenity: AmenityType) => (
              <Button
                key={amenity.id}
                variant={selectedAmenities.includes(amenity.id) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedAmenities(
                    selectedAmenities.includes(amenity.id)
                      ? selectedAmenities.filter((a) => a !== amenity.id)
                      : [...selectedAmenities, amenity.id]
                  );
                }}
                className="flex items-center gap-1.5 text-xs sm:text-sm py-1.5 h-auto"
              >
                <amenity.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                {amenity.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Spots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSpots.map((spot) => (
            <article
              key={spot.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 sm:h-48">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Badge variant="outline" className="text-xs">
                    {spot.hours}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                    <span>{spot.currentOccupancy}</span>
                    <span>/</span>
                    <span>{spot.capacity}</span>
                    <span className="text-xs">seats</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{spot.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {spot.location}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">{spot.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {spot.amenities.map((amenityId) => {
                    const amenity = AMENITIES.find(a => a.id === amenityId);
                    if (!amenity) return null;
                    return (
                      <Badge 
                        key={amenityId} 
                        variant="outline" 
                        className="text-[10px] sm:text-xs flex items-center gap-1 py-0.5"
                      >
                        <amenity.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        {amenity.label}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}