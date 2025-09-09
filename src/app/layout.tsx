import type { Metadata } from "next";
import "./globals.css";
import "./style.css";

export const metadata: Metadata = {
  title: "Wing's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

          {children}

      </body>
    </html>
  );
}
