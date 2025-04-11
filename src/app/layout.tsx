import type { Metadata } from "next";

import "./globals.css";
import Providers from "./providers";
import { inclusive_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Create Zen App",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" +
          "<text y='.9em' font-size='90'>🏗️</text>" +
          "</svg>",
      },
    ],
  },
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
