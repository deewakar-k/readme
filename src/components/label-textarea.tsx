import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface TextAreaProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  placeholder: string;
}

export const LabelTextArea = ({
  value,
  label,
  placeholder,
  onChange,
}: TextAreaProps) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <Textarea
        onChange={onChange}
        className="placeholder:text-xs resize-none"
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
};
