export const Error = ({ label }: { label: string }) => {
  return (
    <div className="mx-auto flex min-h-screen items-center justify-center">
      oops error loading user {label}.
    </div>
  );
};
