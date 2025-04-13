import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { VerticalName } from "@/components/Utils/VerticalName";
import { VersionText } from "@/components/Utils/VersionText";
import { PageNavigation } from "@/components/Utils/PageNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghesquier Hugo CV",
  description: "My Interactive CV",
};

const navItems = [
  { name: "Home", url: "/" },
  { name: "Education", url: "/education" },
  { name: "Skills", url: "/skills" },
  { name: "Projects", url: "/projects" },
  { name: "Experience", url: "/experience" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`h-full overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar items={navItems} />
        <VerticalName />
        <main className="h-full flex flex-col">
          {children}
          <PageNavigation />
        </main>
        <VersionText />
      </body>
    </html>
  );
}