import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blue Chip Staffing LLC | Nationwide Recruitment Services",
    template: "%s | Blue Chip Staffing",
  },
  description: "Blue Chip Staffing provides nationwide recruitment services across all 50 states. Executive search, direct hire, contract staffing, and contract-to-hire solutions for every industry.",
  keywords: [
    "staffing agency",
    "recruitment services",
    "executive search",
    "direct hire",
    "contract staffing",
    "nationwide staffing",
    "employment agency",
    "talent acquisition",
    "HR solutions",
  ],
  openGraph: {
    title: "Blue Chip Staffing LLC | Nationwide Recruitment Services",
    description: "Your premier nationwide staffing agency. Family-owned and operated, delivering high-end recruitment services across every state.",
    url: "https://bluechipstaff.com",
    siteName: "Blue Chip Staffing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Chip Staffing LLC",
    description: "Nationwide Recruitment Services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
