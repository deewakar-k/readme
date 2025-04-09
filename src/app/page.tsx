import { Hero } from "@/components/home/hero";
import { WaitlistButton } from "@/components/home/waitlist";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Hero />
      <WaitlistButton />
    </div>
  );
}
