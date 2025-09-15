import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { SocialProof } from "@/components/social-proof";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
