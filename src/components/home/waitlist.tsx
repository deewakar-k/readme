import { Dialog, DialogTrigger } from "../ui/dialog";
import { SignInModal } from "./signin-modal";

export const WaitlistButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative h-12 w-full max-w-[140px] cursor-pointer rounded-full border border-stone-300 bg-neutral-100 shadow-xl dark:border-stone-700 dark:bg-neutral-800">
          <div className="relative flex h-full">
            <div className="z-10 flex flex-1 items-center justify-center text-lg text-black transition-colors duration-300 dark:text-white">
              Build Now
            </div>
          </div>
        </div>
      </DialogTrigger>
      <SignInModal />
    </Dialog>
  );
};
