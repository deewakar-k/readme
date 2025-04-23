import { MoreVerticalIcon, Pencil, Trash2 } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface ActionMenuProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export const ActionMenu = ({ onEditClick, onDeleteClick }: ActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="cursor-pointer hover:bg-transparent dark:hover:bg-transparent"
        >
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onEditClick}>
          {" "}
          <Pencil /> <span>edit</span>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-400" onClick={onDeleteClick}>
          {" "}
          <Trash2 className="text-red-400" /> <span>remove</span>{" "}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
