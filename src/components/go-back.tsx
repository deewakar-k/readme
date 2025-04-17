import { Undo2 } from "lucide-react";

import { Button } from "./ui/button";

export const GoBack = ({ handleOnClick }: { handleOnClick: () => void }) => {
  return (
    <Button
      onClick={handleOnClick}
      size={"icon"}
      variant={"ghost"}
      className="cursor-pointer rounded-full"
    >
      <Undo2 className="text-muted-foreground" strokeWidth={1.3} />
    </Button>
  );
};
