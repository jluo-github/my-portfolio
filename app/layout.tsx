import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | My Portfolio",
    default: "My Portfolio",
  },
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>'
        />
      </head>
      <body
        className={`flex flex-col max-w-7xl min-h-screen mx-auto bg-violet-50 text-black dark:bg-slate-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            <main className='flex-1 py-4 px-4 md:py-24 lg:py-28 gap-4 md:gap-8'>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </StoreProvider>
        <Toaster position='bottom-right' theme='dark' />
      </body>
    </html>
  );
}
