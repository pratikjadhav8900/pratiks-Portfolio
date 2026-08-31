"use client";

import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import StorySection from "@/components/StorySection";
import Experience from "@/components/Experience";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="portfolio-wrapper">
      <CustomCursor />
      <Navigation />
      <Hero />
      <MarqueeTicker />
      <StorySection />
      <Experience />
      <SelectedWork />
      <About />
      <WhatIDo />
      <Services />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}