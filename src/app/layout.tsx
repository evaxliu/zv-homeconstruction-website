import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  // metadataBase: new URL("https://your-domain.com"),

  title: "Z&V Homeconstruction LLC | General Contractor in Bothell, WA",
  description:
    "Z&V Homeconstruction LLC provides residential and small commercial renovation services in Bothell, WA and the Greater Seattle Area.",

  openGraph: {
    title: "Z&V Homeconstruction LLC | General Contractor in Bothell, WA",
    description:
      "Residential and small commercial renovation services in Bothell, WA and the Greater Seattle Area.",
    // url: "https://your-domain.com",
    siteName: "Z&V Homeconstruction LLC",
    images: [
      {
        url: "/zvicon.jpg",
        width: 1200,
        height: 630,
        alt: "Z&V Homeconstruction LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}