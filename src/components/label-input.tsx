import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface LabelInputProps {
  value?: string;
  label: string;
  placeholder: string;
  className?: string;
}

export const LabelInput = ({
  value,
  label,
  placeholder,
  className,
}: LabelInputProps) => {
  return (
    <div className={className}>
      <Label htmlFor={label} className="text-sm font-normal">
        {label}
      </Label>
      <Input
        className="placeholder:text-xs"
        defaultValue={value}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};
