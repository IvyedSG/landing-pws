"use client"

import { useRef } from "react"
import { useScroll } from "framer-motion"
import {HeroSection} from "./pages/HeroSection"
import {TrustedBySection} from "./pages/TrustedBySection"
import FeaturesCardsSection from "./pages/FeaturesCardsSection"
import { VisualizationSection } from "./pages/VisualizationSection"
import { TimelineSection } from "./pages/TimelineSection"
import { FeaturesGridSection } from "./pages/FeaturesGridSection"
import { EnhancedMetricsSection } from "./pages/EnhancedMetricsSection"
import { CTASection } from "./pages/CTASection"
import { ContactSection } from "./pages/ContactSection"

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  return (
    <div className="flex flex-col pt-12">
      <div className="fixed inset-0 bg-grid-small [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      
      <HeroSection />
      <TrustedBySection />
      <FeaturesCardsSection id="features" />
      <VisualizationSection id="visualization" />
      <TimelineSection id="timeline" />
      <FeaturesGridSection id="features-grid" />
      <EnhancedMetricsSection id="metrics" />
      <ContactSection id="contact" />
      <CTASection />
    </div>
  )
}

