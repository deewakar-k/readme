import { Plus } from "lucide-react";

import { Button } from "./ui/button";

export const Add = () => {
  return (
    <Button size={"icon"} className="rounded-full">
      <Plus className="text-muted-foreground" strokeWidth={1.2} />
    </Button>
  );
};
