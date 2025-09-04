export const dynamic = 'force-static';
export const dynamicParams = false;

import { Navbar5 } from "@/components/navbar-5";
import { ProBlocksCTASection6 } from "@/components/ProBlocksCTASection6";
import { ProBlocksFooter7 } from "@/components/footer-2";
import { ProBlocksPricingSection4 } from "@/components/ContactSection";
import { Hero218 } from '@/components/Hero218';
import { FeatureSection2 } from '@/components/FeatureSection2';
import { FeatureSection22 } from '@/components/FeatureSection2Copy';
import Hero2Section from "@/components/Hero2Section";
import IntegrationSection from "@/components/IntegrationSection";
import Feature3Section from "@/components/Feature3Section";
import Feature9Section from "@/components/Feature9Section";

export default function Home() {
  return (
    <>
      <Navbar5 />
      <Hero218 />
      <IntegrationSection />
      <Hero2Section />
      <Feature3Section />
      <Feature9Section />
      <FeatureSection2 />
      <FeatureSection22 />
      <ProBlocksPricingSection4 />
      <ProBlocksCTASection6 />
      <ProBlocksFooter7 />
    </>
  );
}
