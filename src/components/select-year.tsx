import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface YearSelectProps {
  value: number;
  onChange: (value: number) => void;
  startYear?: number;
  endYear?: number;
  label?: string;
  className?: string;
}

export const YearSelect: React.FC<YearSelectProps> = ({
  value,
  onChange,
  startYear = 2000,
  endYear = new Date().getFullYear(),
  label = "year",
  className = "",
}) => {
  const years = React.useMemo(
    () =>
      Array.from({ length: endYear - startYear + 1 }, (_, i) =>
        (endYear - i).toString(),
      ),
    [startYear, endYear],
  );

  return (
    <div className={`${className}`}>
      <label htmlFor="year-select" className="text-sm">
        {label}
      </label>
      <Select
        value={value ? value.toString() : undefined}
        onValueChange={(val: string) => onChange(parseInt(val, 10))}
      >
        <SelectTrigger id="year-select" className="w-full">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearSelect;
