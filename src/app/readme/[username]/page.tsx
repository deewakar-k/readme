import { About } from "@/components/profile/about";
import { Header } from "@/components/profile/header";
import { Projects } from "@/components/profile/projects";

export default async function Page() {
  return (
    <div className="mx-auto mt-8 flex max-w-lg flex-col items-start justify-start gap-4">
      <Header />
      <About />
      <Projects />
    </div>
  );
}
