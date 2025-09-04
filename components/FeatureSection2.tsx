// src/components/FeatureSection2.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";

// Load the sub-components only on the client
const FeatureMobile = dynamic(() => import("./FeatureMobile"), { ssr: false });
const FeatureDesktop = dynamic(() => import("./FeatureDesktop"), { ssr: false });

const BREAKPOINT = 768;

const FeatureSection2: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < BREAKPOINT);
    onResize(); // set initial value after mount (safe to use window here)
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="features">
      {isMobile ? <FeatureMobile /> : <FeatureDesktop />}
    </section>
  );
};

export default FeatureSection2;
export { FeatureSection2 }; // optional named export
