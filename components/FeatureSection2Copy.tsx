// src/components/FeatureSection2.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";

// Load the sub-components only on the client
const FeatureMobile = dynamic(() => import("./FeatureMobile copy"), { ssr: false });
const FeatureDesktop = dynamic(() => import("./FeatureDesktop copy"), { ssr: false });

const BREAKPOINT = 768;

const FeatureSection22: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < BREAKPOINT);
    onResize(); // set initial value after mount (safe to use window here)
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div id="our-Framework">
      {isMobile ? <FeatureMobile /> : <FeatureDesktop />}
    </div>
  );
};

export default FeatureSection22;
export { FeatureSection22 }; // optional named export
