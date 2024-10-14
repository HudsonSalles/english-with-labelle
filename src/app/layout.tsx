//components
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

//internal components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

//fonts
const inter = Inter({ subsets: ["latin"] });

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
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LY1TZ876EX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LY1TZ876EX');
`,
          }}
        />
      </Head>
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
