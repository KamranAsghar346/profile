import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Kamran Asghar",
  description:
    "Kamran Asghar is a proficient Software Engineer and AI Engineer from Pakistan, skilled in computer vision and generative AI development using modern tech stacks.",
  metadataBase: new URL("https://my-kamran--asghar-portfolio.vercel.app/"),
  openGraph: {
    title: "Kamran Asghar",
    description:
      "Kamran Asghar is a proficient Software Engineer and AI Engineer from Pakistan, skilled in computer vision and generative AI development using modern tech stacks.",
    url: "https://my-kamran--asghar-portfolio.vercel.app/",
    siteName: "Kamran Asghar Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/delzaebal/image/upload/v1737240721/dnzlgwxtry6znby4bxln.png",
        width: 1200,
        height: 630,
        alt: "Kamran Asghar - AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamran Asghar",
    description:
      "Kamran Asghar is a proficient Software Engineer and AI Engineer from Pakistan, skilled in computer vision and generative AI development using modern tech stacks.",
    images: [
      "https://res.cloudinary.com/delzaebal/image/upload/v1737240721/dnzlgwxtry6znby4bxln.png",
    ],
    creator: "@KamranAsghar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon-16x16.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon-32x32.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon-48x48.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicon-64x64.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "Kamran Asghar",
    "Kamran",
    "AI Engineer",
    "Computer Vision",
    "full stack developer",
  ],
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
