import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputBoxProps {
  label: string;
  value: string;
  placeholder: string;
}

export const InputBox = ({ label, value, placeholder }: InputBoxProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
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
