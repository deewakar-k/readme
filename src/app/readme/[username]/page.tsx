import { About } from "@/components/profile/about";
import { Contacts } from "@/components/profile/contact";
import { Header } from "@/components/profile/header";
import { Projects } from "@/components/profile/projects";
import { WorkExperience } from "@/components/profile/work";

export default async function Page() {
  return (
    <div className="mx-auto mt-8 flex max-w-lg flex-col items-start justify-start gap-4">
      <Header />
      <About />
      <Projects />
      <WorkExperience />
      <Contacts />
    </div>
  );
}
