import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "auto-repo-snap",
  description: "Automatically capture, archive, and share visual snapshots of any public GitHub repository.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
