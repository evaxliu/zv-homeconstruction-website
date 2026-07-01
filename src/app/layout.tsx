import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Z&V Homeconstruction LLC | Bothell WA | General Contractor",
  description: "Z&V Homeconstruction is a general construction company 18949 108th Ave NE Bothell, WA 98011 (945) 304-9455. HOURS: Mon - Fri: 7am - 5pm Saturday: Closed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
