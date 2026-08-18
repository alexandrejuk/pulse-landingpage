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
import { PulseAiChat } from "@/components/sections/PulseAiChat";
import { LiveCardio } from "@/components/sections/LiveCardio";
import { WorkoutParty } from "@/components/sections/WorkoutParty";
import { FeedShowcase } from "@/components/sections/FeedShowcase";
import { Achievements } from "@/components/sections/Achievements";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-1 flex-col">
      <Navbar locale={locale} dict={dict.nav} />
      <main className="flex-1">
        <Hero dict={dict.hero} />
        <WhatIsPulseUp dict={dict.whatIsPulseUp} />
        <SocialFitness dict={dict.socialFitness} />
        <FeatureGrid dict={dict.featureGrid} />
        <Gamification dict={dict.gamification} />
        <WorkoutExperience dict={dict.workoutExperience} />
        <PulseAiChat dict={dict.pulseAiChat} />
        <LiveCardio dict={dict.liveCardio} />
        <WorkoutParty dict={dict.workoutParty} />
        <FeedShowcase dict={dict.feed} cardsDict={dict.feedCards} />
        <Achievements dict={dict.achievements} />
        <Statistics dict={dict.stats} />
        <Testimonials dict={dict.testimonials} />
        <Faq dict={dict.faq} />
        <FinalCta dict={dict.finalCta} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}
