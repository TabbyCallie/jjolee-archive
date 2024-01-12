import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png", // /public path
  },
  title: "_jjolee's archive",
  description: "An archive created by fans for _jjolee's work",
  keywords: [
    "jjolee",
    "Lost in Translation",
    "Wyld",
    "Aphelios",
    "League of Legends",
    "Mayhem",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jjolee-archive.vercel.app/",
    title: "_jjolee's archive",
    description: "An archive created by fans for _jjolee's work",
    siteName: "_jjolee's archive",
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: "_jjolee's archive",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
