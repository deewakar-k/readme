import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface TextAreaProps {
  value?: string;
  label: string;
  placeholder: string;
}

export const LabelTextArea = ({ value, label, placeholder }: TextAreaProps) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <Textarea
        className="placeholder:text-xs"
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
};
