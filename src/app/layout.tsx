import { cn } from "@/util";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-source-serif",
});
const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: process.env.SITE_TAG,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          sourceSerif.variable,
          robotoCondensed.variable,
          roboto.variable,
          "min-h-screen flex flex-col items-center antialiased",
        )}
      >
        {!!process.env.ENABLE_CLOUDFLARE_ANALYTICS && (
          <Script
            strategy="afterInteractive"
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": ${process.env.CLOUDFLARE_ANALYTICS_TOKEN}}`}
          />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
