"use client";

import { useState } from "react";
import BuonAppetito from "@/components/BuonAppetito";
import Hero from "@/components/Hero";
import IntroSplash from "@/components/IntroSplash";
import MenuJourney from "@/components/MenuJourney";
import Timeline from "@/components/Timeline";

export default function HomeExperience() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone ? <IntroSplash onDone={() => setIntroDone(true)} /> : null}
      <Hero />
      <MenuJourney />
      <Timeline />
      <BuonAppetito />
    </>
  );
}
