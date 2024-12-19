import { useShowInputStore } from "@/store/input";
import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";
import { useState } from "react";
import { useCreateEducation } from "@/queries/education";
import { Education } from "@/types/education";
import YearSelect from "./select-year";
import { Button } from "./ui/button";

interface EducationInputProps {
  onBackAction: () => void;
}

export const EducationInput = ({ onBackAction }: EducationInputProps) => {
  const { setShowInput } = useShowInputStore();
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [location, setLocation] = useState("");
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [description, setDescription] = useState("");

  const createEducation = useCreateEducation();

  const handleSave = () => {
    const data: Education = {
      degree: degree,
      institution: institution,
      year: selectedYear,
      location: location,
      description: description,
    };
    createEducation.mutate(data);
    setShowInput(false);
  };

  return (
    <>
      <LabelInput
        label="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="youtuber"
      />
      <LabelInput
        label="institution"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        placeholder="MIT"
      />

      <LabelInput
        label="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="location"
      />
      <YearSelect value={selectedYear} onChange={setSelectedYear} />

      <LabelTextArea
        label="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="few words about your education..."
      />

      <div className="mt-auto flex justify-between w-full">
        <Button onClick={onBackAction} variant="link">
          back
        </Button>
        <Button onClick={handleSave} variant="link">
          save
        </Button>
      </div>
    </>
  );
};
