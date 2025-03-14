import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import OurNavigationMenu from "@/components/our-navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

export type Folder = { name: string; path: string };

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jjolee-archive.vercel.app/"),
  icons: {
    icon: "/icon.png", // /public path
  },
  title: {
    template: "%s |  _jjolee's archive",
    default: "_jjolee's archive", // a default is required when creating a template
  },
  // description: "An archive created by fans for _jjolee's work",
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
    // title: "_jjolee's archive",
    // description: "An archive created by fans for _jjolee's work",
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
  twitter: {
    card: "summary",
    title: "_jjolee's archive",
    // description: 'The React Framework for the Web',
    // siteId: '1467726470533754880',
    creator: "@_jjolee",
    creatorId: "2321718872",
    // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
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
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <div className="p-2 py-3 flex flex-row space-x-2 justify-between">
                <OurNavigationMenu />
                <ModeToggle />
              </div>
            </header>
            <main className="flex flex-col items-center p-4 md:px-24 mx-auto max-w-6xl">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
