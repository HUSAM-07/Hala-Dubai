"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";
import { AmenityType } from "@/types/spots";

interface FilterAmenitiesProps {
  amenities: AmenityType[];
  selectedAmenities: string[];
  onAmenitiesChange: (amenities: string[]) => void;
}

export function FilterAmenities({ amenities, selectedAmenities, onAmenitiesChange }: FilterAmenitiesProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white/10 border-none text-white">
          <Filter className="mr-2 h-4 w-4" />
          Filter Amenities
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filter by Amenities</DialogTitle>
          <DialogDescription>
            Select the amenities you need for your study session.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.id}
                checked={selectedAmenities.includes(amenity.id)}
                onCheckedChange={(checked) => {
                  onAmenitiesChange(
                    checked
                      ? [...selectedAmenities, amenity.id]
                      : selectedAmenities.filter((id) => id !== amenity.id)
                  );
                }}
              />
              <label htmlFor={amenity.id} className="flex items-center">
                <amenity.icon className="mr-2 h-4 w-4" />
                {amenity.label}
              </label>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}