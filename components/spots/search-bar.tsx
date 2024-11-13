"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative flex-1 w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search study spots..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/10 border-none text-white placeholder:text-white/60"
      />
    </div>
  );
}