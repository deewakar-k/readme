import type { Metadata } from "next";

import "./globals.css";
import Providers from "./providers";
import { inclusive_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "readme",
  description: "elevate your professional presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-screen w-screen ${inclusive_sans.className}`}>
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
