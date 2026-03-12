import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Atharva Nagarsekar | Aspiring Commercial Pilot",
  description:
    "Portfolio of Atharva Nagarsekar — Aspiring Commercial Pilot, AI Engineer, and builder of aviation-intelligence systems. Mumbai, India.",
  keywords: ["Commercial Pilot", "Aviation", "AI Engineer", "SkyCoach", "ATC", "Atharva Nagarsekar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans bg-white dark:bg-[#0a0f1e] text-slate-900 dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
