import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface YearSelectorProps {
  onChange?: (value: string) => void;
  className?: string;
  defaultValue?: string;
  startYear?: number;
  endYear?: number;
  label?: string;
  showOngoing?: boolean;
}

export function YearSelector({
  onChange,
  className,
  defaultValue = new Date().getFullYear().toString(),
  startYear = 1975,
  endYear = new Date().getFullYear(),
  label,
  showOngoing = false,
}: YearSelectorProps) {
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    onChange?.(defaultValue);
  }, []);

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => endYear - i
  );

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label className="block">{label}</Label>}
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent className="max-h-[500px]">
          {showOngoing && <SelectItem value="ongoing">Ongoing</SelectItem>}
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
