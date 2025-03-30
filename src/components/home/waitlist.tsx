import { ShimmerButton } from "../magicui/shimmer-button";

export const WaitlistButton = () => {
  return (
    <ShimmerButton shimmerDuration="2s" className="shadow-2xl">
      <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
        Join Waitlist
      </span>
    </ShimmerButton>
  );
};
