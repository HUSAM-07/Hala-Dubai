"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SPOTS, AMENITIES } from "@/app/data/spots";
import type { AmenityType, SpotType } from "@/types/spots";
import { Skeleton } from "@/components/ui/skeleton";
import { useSpotFilter } from "@/hooks/useSpotFilter";

// Separate component for the spot card to improve readability and maintainability
const SpotCard = ({ spot }: { spot: SpotType }) => {
  return (
    <article
      className="bg-white dark:bg-violet-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-violet-9 dark:focus-within:ring-violet-11"
    >
      <div className="relative h-40 sm:h-48">
        <Image
          src={spot.image}
          alt={`${spot.name} - ${spot.location}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <Badge variant="outline" className="text-xs dark:border-violet-6 dark:text-violet-11">
            <Clock className="mr-1 h-3 w-3" aria-hidden="true" />
            <span>{spot.hours}</span>
          </Badge>
          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-violet-11" aria-label={`${spot.currentOccupancy} out of ${spot.capacity} seats occupied`}>
            <span>{spot.currentOccupancy}</span>
            <span>/</span>
            <span>{spot.capacity}</span>
            <span className="text-xs">seats</span>
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-violet-12">
          <a href="#" className="focus:outline-none after:absolute after:inset-0" onClick={(e) => e.preventDefault()}>
            {spot.name}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-violet-11 text-xs sm:text-sm mb-3 flex items-center gap-1">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 dark:text-violet-9 flex-shrink-0" aria-hidden="true" />
          <span>{spot.location}</span>
        </p>
        <p className="text-gray-600 dark:text-violet-11 text-xs sm:text-sm mb-4 line-clamp-2">{spot.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Amenities">
          {spot.amenities.map((amenityId) => {
            const amenity = AMENITIES.find(a => a.id === amenityId);
            if (!amenity) return null;
            return (
              <Badge 
                key={amenityId} 
                variant="outline" 
                className="text-[10px] sm:text-xs flex items-center gap-1 py-0.5 dark:border-violet-6 dark:text-violet-11"
              >
                <amenity.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 dark:text-violet-9" aria-hidden="true" />
                <span>{amenity.label}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </article>
  );
};

// Separate component for the filter section
const FilterSection = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedAmenities, 
  toggleAmenity 
}: { 
  searchQuery: string; 
  setSearchQuery: (query: string) => void; 
  selectedAmenities: string[]; 
  toggleAmenity: (amenityId: string) => void; 
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6 sm:mb-8">
      <div className="relative">
        <label htmlFor="spot-search" className="sr-only">Search spots</label>
        <Input
          id="spot-search"
          placeholder="Search spots..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full dark:bg-violet-2 dark:border-violet-6 dark:text-violet-12 dark:placeholder:text-violet-11/50"
          aria-label="Search spots"
        />
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by amenities">
        {AMENITIES.map((amenity: AmenityType) => (
          <Button
            key={amenity.id}
            variant={selectedAmenities.includes(amenity.id) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleAmenity(amenity.id)}
            className={`flex items-center gap-1.5 text-xs sm:text-sm py-1.5 h-auto ${
              selectedAmenities.includes(amenity.id) 
                ? "dark:bg-violet-9 dark:text-white" 
                : "dark:border-violet-6 dark:text-violet-11 dark:hover:bg-violet-3"
            }`}
            aria-pressed={selectedAmenities.includes(amenity.id)}
          >
            <amenity.icon className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
            <span>{amenity.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default function StudentSpots() {
  const [isLoading, setIsLoading] = useState(true);
  const { 
    filteredSpots, 
    searchQuery, 
    setSearchQuery, 
    selectedAmenities, 
    toggleAmenity 
  } = useSpotFilter({ spots: SPOTS });

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7] dark:bg-violet-1">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-violet-12 mb-2">Student Spots</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-violet-11">Discover the spots popular amongst students in Dubai</p>
        </header>

        {/* Search and Filter Section */}
        <FilterSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedAmenities={selectedAmenities}
          toggleAmenity={toggleAmenity}
        />

        {/* Spots Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-violet-2 rounded-xl overflow-hidden shadow-sm">
                <Skeleton className="h-40 sm:h-48 w-full dark:bg-violet-3" />
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between mb-4">
                    <Skeleton className="h-4 w-20 dark:bg-violet-3" />
                    <Skeleton className="h-4 w-16 dark:bg-violet-3" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-2 dark:bg-violet-3" />
                  <Skeleton className="h-4 w-1/2 mb-3 dark:bg-violet-3" />
                  <Skeleton className="h-4 w-full mb-4 dark:bg-violet-3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 dark:bg-violet-3" />
                    <Skeleton className="h-6 w-16 dark:bg-violet-3" />
                    <Skeleton className="h-6 w-16 dark:bg-violet-3" />
                  </div>
                </div>
              </div>
            ))
          ) : filteredSpots.length > 0 ? (
            filteredSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-violet-11">No spots found matching your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}