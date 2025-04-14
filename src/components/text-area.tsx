import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface CustomTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export const CustomTextArea = forwardRef<
  HTMLTextAreaElement,
  CustomTextAreaProps
>(({ label, className, id, ...props }, ref) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <Label htmlFor={inputId} className="ml-2">
        {label}
      </Label>
      <Textarea
        id={inputId}
        ref={ref}
        className="min-h-32 resize-none rounded-xl"
        {...props}
      />
    </div>
  );
});
CustomTextArea.displayName = "CustomTextArea";
