import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/reusable/NavBar";
import Footer from "./components/reusable/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zvhomes.org/"),

  title: "Z&V Homeconstruction LLC | General Contractor in Bothell, WA",
  description: "Z&V Homeconstruction LLC provides residential, small commercial renovation and handyman services in Bothell, WA and the Greater Seattle Area.",
  icons: {
    icon: [
      { url: "/zv-icon-light.png" },
      { url: "/zv-icon-light.png", sizes: "48x48", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Z&V Homeconstruction LLC | General Contractor in Bothell, WA",
    description:
      "Z&V Homeconstruction LLC provides residential, small commercial renovation and handyman services in Bothell, WA and the Greater Seattle Area.",
    url: "zvhomes.org",
    siteName: "Z&V Homeconstruction LLC",
    images: [
      {
        url: "/zv-icon-light.png",
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
      className="h-full"
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}