import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";

// Shares the same GA4 property as the app (account "Pulse", account id
// 403209054, property id 549937509) instead of the separate landing-only
// property that was drafted earlier and never finished -- keeping landing
// traffic and app funnel events (sign_up, workout_completed, etc.) in one
// place is what makes the Google Ads conversion linkage meaningful across
// the full acquisition funnel, not just the app-install half of it.
const GA_MEASUREMENT_ID = "G-KVRWEVKP6Y";

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
      "fitness app",
      "workout app",
      "workout tracker",
      "workout plans",
      "exercise tracker",
      "cardio tracking",
      "running tracker",
      "gym workouts",
      "personal trainer",
      "fitness coaching",
      "social fitness",
      "workout programs",
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
