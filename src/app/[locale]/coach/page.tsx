import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatIsPulseUp } from "@/components/sections/WhatIsPulseUp";
import { SocialFitness } from "@/components/sections/SocialFitness";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Gamification } from "@/components/sections/Gamification";
import { WorkoutExperience } from "@/components/sections/WorkoutExperience";
import { ForCoaches } from "@/components/sections/ForCoaches";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return {
    title: dict.coachPage.meta.title,
    description: dict.coachPage.meta.description,
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.coachPage;

  return (
    <div className="theme-coach flex flex-1 flex-col">
      <Navbar locale={locale} dict={dict.nav} logoVariant="coach" />
      <main className="flex-1">
        <Hero dict={page.hero} screenshotVariant="coach" />
        <WhatIsPulseUp dict={page.whatIs} />
        <SocialFitness dict={page.tracking} screenshotVariant="coach" />
        <FeatureGrid dict={page.featureGrid} />
        <Gamification dict={page.howItWorks} screenshotVariant="coach" />
        <WorkoutExperience dict={page.templates} screenshotVariant="coach" />
        <ForCoaches dict={page.moments} screenshotVariant="coach" />
        <Faq dict={page.faq} />
        <FinalCta dict={page.finalCta} />
      </main>
      <Footer dict={dict.footer} logoVariant="coach" locale={locale} />
    </div>
  );
}
