"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const YearSelect = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index,
  );

  return (
    <div className="w-[250px] space-y-2">
      <Label htmlFor="year-select">Project Year</Label>
      <Select>
        <SelectTrigger id="year-select">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearSelect;
