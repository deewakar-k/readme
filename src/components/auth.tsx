import GithubButton from "./github";
import { GoogleButton } from "./google";

export const Auth = () => {
  return (
    <>
      <section className="w-full max-w-sm">
        <header className="space-y-2">
          <h1 className="font-semibold text-sm">Sign in</h1>
          <p className="text-sm">to continue to readme.</p>
        </header>

        <section className="space-y-2 mt-4">
          <GoogleButton />
          <GithubButton />
        </section>
      </section>
    </>
  );
};
