import { useState, useMemo } from 'react';
import { SpotType } from '@/types/spots';

interface UseSpotFilterProps {
  spots: SpotType[];
}

interface UseSpotFilterReturn {
  filteredSpots: SpotType[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (amenities: string[]) => void;
  toggleAmenity: (amenityId: string) => void;
}

export function useSpotFilter({ spots }: UseSpotFilterProps): UseSpotFilterReturn {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  // Memoize filtered spots to avoid unnecessary recalculations
  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => {
      // Search in name, location, and description
      const matchesSearch = 
        searchQuery === '' || 
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by selected amenities
      const matchesAmenities = 
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) => spot.amenities.includes(amenity));
      
      return matchesSearch && matchesAmenities;
    });
  }, [spots, searchQuery, selectedAmenities]);

  // Toggle amenity selection
  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities((prev) => 
      prev.includes(amenityId)
        ? prev.filter((id) => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  return {
    filteredSpots,
    searchQuery,
    setSearchQuery,
    selectedAmenities,
    setSelectedAmenities,
    toggleAmenity,
  };
} 