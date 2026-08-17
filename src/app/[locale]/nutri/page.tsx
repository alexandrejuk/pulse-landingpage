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
    title: dict.nutriPage.meta.title,
    description: dict.nutriPage.meta.description,
  };
}

export default async function NutriPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.nutriPage;

  return (
    <div className="theme-nutri flex flex-1 flex-col">
      <Navbar locale={locale} dict={dict.nav} logoVariant="nutri" />
      <main className="flex-1">
        <Hero dict={page.hero} screenshotVariant="nutri" />
        <WhatIsPulseUp dict={page.whatIs} />
        <SocialFitness dict={page.tracking} screenshotVariant="nutri" />
        <FeatureGrid dict={page.featureGrid} />
        <Gamification dict={page.howItWorks} screenshotVariant="nutri" />
        <WorkoutExperience dict={page.meals} screenshotVariant="nutri" />
        <ForCoaches dict={page.templates} screenshotVariant="nutri" />
        <Faq dict={page.faq} />
        <FinalCta dict={page.finalCta} />
      </main>
      <Footer dict={dict.footer} logoVariant="nutri" />
    </div>
  );
}
