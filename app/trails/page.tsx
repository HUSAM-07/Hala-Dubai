"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Clock, MapPin, MountainSnow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SPOTS, AMENITIES } from "@/app/data/spots";
import type { AmenityType } from "@/types/spots";

export default function TrailsComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <MountainSnow className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Trails Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          We're working on bringing you an amazing trails experience. Stay tuned!
        </p>
      </div>
    </div>
  );
}