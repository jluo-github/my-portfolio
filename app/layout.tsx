import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import StoreProvider from "./StoreProvider";

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
    template: "%s | my-portfolio",
    default: "my-portfolio",
  },
  description: "my-portfolio",
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
        className={`bg-violet-50 text-black dark:bg-slate-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
            {" "}
            <main className=''> {children}</main>
          </ThemeProvider>
        </StoreProvider>
        <Toaster position='bottom-center' />
      </body>
    </html>
  );
}
