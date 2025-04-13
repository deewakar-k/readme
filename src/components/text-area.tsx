import { cn } from "@/lib/utils";

import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface CustomTextAreaProps {
  label: string;
  defaultValue: string;
  placeholder: string;
  className?: string;
}

export const CustomTextArea = ({
  label,
  defaultValue,
  placeholder,
  className,
}: CustomTextAreaProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor={label.toLocaleLowerCase()} className="ml-2">
        {label}
      </Label>
      <Textarea
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn("resize-none rounded-xl", className)}
      />
    </div>
  );
};
