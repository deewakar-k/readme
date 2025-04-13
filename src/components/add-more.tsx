import { Plus } from "lucide-react";

import { Button } from "./ui/button";

export const Add = ({ handleOnClick }: { handleOnClick: () => void }) => {
  return (
    <Button
      onClick={handleOnClick}
      size={"icon"}
      variant={"outline"}
      className="cursor-pointer rounded-full"
    >
      <Plus className="text-muted-foreground" strokeWidth={1.3} />
    </Button>
  );
};
