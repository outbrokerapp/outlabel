import type { Metadata, Viewport } from "next";
import { Poppins, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const headingFont = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

const analyticsEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

export const metadata: Metadata = {
  title: "OutLabel - Solucoes White Label",
  description:
    "OutLabel: solucoes white label para imobiliarias. Transforme sua rede em sistema com tecnologia inteligente.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>
        {children}
        {analyticsEndpoint && analyticsWebsiteId ? (
          <Script
            strategy="afterInteractive"
            src={`${analyticsEndpoint}/umami`}
            data-website-id={analyticsWebsiteId}
          />
        ) : null}
      </body>
    </html>
  );
}
