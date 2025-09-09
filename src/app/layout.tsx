import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import "./reset.css";

export const metadata: Metadata = {
  title: "Wing's Protfolio",
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
