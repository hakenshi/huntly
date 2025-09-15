import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { SocialProof } from "@/components/social-proof";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

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
