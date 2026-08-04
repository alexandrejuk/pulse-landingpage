import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";

// Pulse Landing GA4 property (account "Pulse", account id 403209054, property
// id 548194152) is created, but the web data stream — and therefore this
// measurement ID — can't be finalized until the production domain is live.
const GA_MEASUREMENT_ID = "G-9MVPGGPDF9";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pulseup.io";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: "%s · PulseUp",
    },
    description: dict.meta.description,
    keywords: [
      "PulseUp",
      "social fitness app",
      "fitness app",
      "workout with friends",
      "live cardio",
      "party workout",
      "gamified fitness",
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])),
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
      siteName: "PulseUp",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseUp — Social Fitness" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">{children}</body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
