import { Hero } from "@/src/components/hero";
import { Features } from "@/src/components/features";
import { SocialProof } from "@/src/components/social-proof";
import { Pricing } from "@/src/components/pricing";
import { FAQ } from "@/src/components/faq";
import { CTA } from "@/src/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      {/* <SocialProof /> */}
      <Pricing />
      <section id="faq" className="px-6 space-y-10 py-32 min-h-screen text-white">
        <FAQ />
        <CTA />
      </section>
    </main>
  );
}
