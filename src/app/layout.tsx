import { cn } from "@/util";
import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
          jetbrainsMono.variable,
          "min-h-screen flex flex-col items-center antialiased font-jetbrains-mono font-medium",
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
