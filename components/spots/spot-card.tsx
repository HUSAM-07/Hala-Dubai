"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Clock } from "lucide-react";
import { SpotType, AmenityType } from "@/types/spots";
import Image from "next/image";

interface SpotCardProps {
  spot: SpotType;
  amenities: AmenityType[];
}

export function SpotCard({ spot, amenities }: SpotCardProps) {
  return (
    <Card className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors">
      <CardHeader>
        <div className="aspect-video relative rounded-md overflow-hidden mb-4">
          <Image
            src={spot.image}
            alt={spot.name}
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <CardTitle>{spot.name}</CardTitle>
        <CardDescription className="text-white/60">
          {spot.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>
              {spot.currentOccupancy}/{spot.capacity} spots taken
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{spot.hours}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {spot.amenities.map((amenityId) => {
              const amenity = amenities.find((a) => a.id === amenityId);
              if (!amenity) return null;
              return (
                <Badge key={amenityId} variant="secondary" className="bg-white/20">
                  <amenity.icon className="mr-1 h-3 w-3" />
                  {amenity.label}
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Book a Spot
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book a Study Spot</DialogTitle>
              <DialogDescription>
                Reserve your spot at {spot.name}. Current availability: {spot.capacity - spot.currentOccupancy} spots.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm">{spot.description}</p>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>Operating Hours:</span>
                  <span>{spot.hours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Current Occupancy:</span>
                  <span>{spot.currentOccupancy}/{spot.capacity}</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                Confirm Booking
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}