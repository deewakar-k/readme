"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface YearSelectorProps {
  onChange?: (value: { year: number | null; ongoing: boolean }) => void;
  className?: string;
  defaultValue?: string;
  startYear?: number;
  endYear?: number;
}

export function YearSelector({
  onChange,
  className,
  defaultValue = new Date().getFullYear().toString(),
  startYear = 1975,
  endYear = new Date().getFullYear(),
}: YearSelectorProps) {
  const [value, setValue] = useState<string>(defaultValue);

  // Generate years array
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => endYear - i
  );

  const handleValueChange = (newValue: string) => {
    setValue(newValue);

    if (newValue === "ongoing") {
      onChange?.({ year: null, ongoing: true });
    } else {
      onChange?.({ year: Number.parseInt(newValue), ongoing: false });
    }
  };

  return (
    <div className={cn("mt-4.5", className)}>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent className="max-h-[500px]">
          <SelectItem value="ongoing">Ongoing</SelectItem>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
