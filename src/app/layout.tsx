//components
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

//styles
import "./globals.css";

//internal components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

//fonts
const inter = Inter({ subsets: ["latin"] });

//metadata
export const metadata: Metadata = {
  title: "English with Labelle | Aulas personalizadas e online de inglês",
  description: "English with Labelle | Aulas personalizadas e online de inglês",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-K5KG2TXQ" />
      <GoogleAnalytics gaId="G-LY1TZ876EX" />
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
