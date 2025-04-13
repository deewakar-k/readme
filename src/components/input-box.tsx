import { cn } from "@/lib/utils";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputBoxProps {
  label: string;
  value: string;
  placeholder: string;
  className?: string;
}

export const InputBox = ({
  label,
  value,
  placeholder,
  className,
}: InputBoxProps) => {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <Label htmlFor={label.toLocaleLowerCase()} className="ml-2">
        {label}
      </Label>
      <Input
        defaultValue={value}
        placeholder={placeholder}
        className="rounded-xl"
      />
    </div>
  );
};
