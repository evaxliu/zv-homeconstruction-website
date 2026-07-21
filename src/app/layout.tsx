import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/reusable/NavBar";
import Footer from "./components/reusable/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zvhomes.org"),

  title: {
    default: "Z&V Home Construction LLC | General Contractor in Bothell, WA",
    template: "%s | Z&V Home Construction LLC",
  },

  description:
    "Licensed, bonded, and insured general contractor serving Bothell and the Greater Seattle area. Remodeling, renovations, flooring, drywall, carpentry, and handyman services.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/zv-icon-light.png" },
      {
        url: "/zv-icon-light.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Z&V Home Construction LLC | General Contractor in Bothell, WA",
    description:
      "Licensed, bonded, and insured general contractor providing remodeling, renovation, and handyman services in Bothell and the Greater Seattle area.",
    url: "/",
    siteName: "Z&V Home Construction LLC",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Z&V Home Construction LLC | General Contractor in Bothell, WA",
    description:
      "Licensed, bonded, and insured general contractor providing remodeling, renovation, and handyman services in Bothell and the Greater Seattle area.",
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