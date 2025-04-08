import { ShimmerButton } from "../magicui/shimmer-button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { SignInModal } from "./signin-modal";

export const WaitlistButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<ShimmerButton shimmerDuration="2s" className="shadow-2xl">
					<span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-sm dark:from-white dark:to-slate-900/10">
						Join Now
					</span>
				</ShimmerButton>
			</DialogTrigger>
			<SignInModal />
		</Dialog>
	);
};
