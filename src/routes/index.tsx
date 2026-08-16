import { useState } from "react";
import { motion } from "motion/react";
import { createFileRoute } from "@tanstack/react-router";

import { LangProvider } from "@/lib/i18n";
import { Backdrop } from "@/components/nexarc/Backdrop";
import { EnterGate } from "@/components/nexarc/EnterGate";
import { Navbar } from "@/components/nexarc/Navbar";
import { Hero } from "@/components/nexarc/Hero";
import { About } from "@/components/nexarc/About";
import { Thesis } from "@/components/nexarc/Thesis";
import { Community } from "@/components/nexarc/Community";
import { Culture } from "@/components/nexarc/Culture";
import { Roadmap } from "@/components/nexarc/Roadmap";
import { HowToBuy } from "@/components/nexarc/HowToBuy";
import { Faq, FAQ_ITEMS } from "@/components/nexarc/Faq";
import { FinalCta, Footer } from "@/components/nexarc/FinalCta";

const TITLE = "NEXARC ($NEXARC) — The Next Meme on ARC";
const DESC =
  "NEXARC is a community-driven memecoin on the ARC chain. Memes, culture and community energy for the next chapter of ARC. Buy $NEXARC on Radardex.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "theme-color", content: "#020817" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Thesis />
        <Community />
        <Culture />
        <Roadmap />
        <HowToBuy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
