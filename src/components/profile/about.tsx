import { getUser } from "@/actions/user";

export const About = async () => {
  const user = await getUser();
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1>About</h1>
      <p className="text-muted-foreground text-sm">{user?.about}</p>
    </div>
  );
};
