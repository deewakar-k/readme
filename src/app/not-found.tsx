import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>
        this page cannot be found.{" "}
        <span>
          <Link
            href="/"
            className="text-gray-900 underline decoration-gray-400"
          >
            go back
          </Link>
        </span>
      </p>
    </div>
  );
}
