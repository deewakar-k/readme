import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface LabelInputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  className?: string;
}

export const LabelInput = ({
  value,
  label,
  placeholder,
  className,
  onChange,
}: LabelInputProps) => {
  return (
    <div className={className}>
      <Label htmlFor={label} className="text-sm font-normal">
        {label}
      </Label>
      <Input
        onChange={onChange}
        className="placeholder:text-xs"
        defaultValue={value}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};
