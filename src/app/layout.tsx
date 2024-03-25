import { cn } from "@/util";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Source_Serif_4 } from "next/font/google";
import Script from "next/script";

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
    <html lang="en">
      <body
        className={cn(
          sourceSerif.variable,
          robotoCondensed.variable,
          roboto.variable,
          "min-h-screen flex flex-col items-center antialiased",
          false &&
            "bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100",
          true && "bg-neutral-800 text-neutral-300",
        )}
      >
        {!!process.env.ENABLE_CLOUDFLARE_ANALYTICS && (
          <Script
            strategy="afterInteractive"
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": process.env.CLOUDFLARE_ANALYTICS_TOKEN}'
          />
        )}
        {children}
      </body>
    </html>
  );
}
