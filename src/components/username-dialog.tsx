import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

export const UsernameDialog = () => {
  return (
    <Dialog open={true}>
      <DialogContent className="space-y-2 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-medium">
            welcome to readme! 🌱
          </DialogTitle>
          <DialogDescription>
            please give yourself a unique username!
          </DialogDescription>
        </DialogHeader>
        <div>
          <label>username</label>
          <Input required placeholder="something cool" />
        </div>
        <DialogFooter>
          <Button className="rounded-md">continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
