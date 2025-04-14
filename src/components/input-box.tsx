import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ label, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex w-full flex-col gap-2", className)}>
        <Label htmlFor={inputId} className="ml-2">
          {label}
        </Label>
        <Input id={inputId} ref={ref} className="rounded-xl" {...props} />
      </div>
    );
  }
);
InputBox.displayName = "InputBox";
