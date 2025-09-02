"use client";

import { useState, useEffect, type FunctionComponent } from 'react';
// Use named or default import depending on how you export in Feature3.tsx
import { ProBlocksFeatureSection3 } from './Feature3';
import { ProBlocksFeatureSection5 } from './Feature3Mobile';

const Feature3Section: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (windowWidth === 0) {
    return null; // avoid flicker
  }

  return (
    <section id="whyUs">
      {windowWidth < breakpoint ? (
        <ProBlocksFeatureSection5 />
      ) : (
          <ProBlocksFeatureSection3 />
        )}
    </section>
  );
};

export default Feature3Section;
