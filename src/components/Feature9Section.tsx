"use client";

import { useState, useEffect, type FunctionComponent } from 'react';
import ProBlocksFeatureSection9 from './Feature9'
import ProBlocksFeatureSection9Mobile from './Feature9Mobile'

const Feature9Section: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener(' resize ', handleResize);
      return () => window.removeEventListener(' resize ', handleResize);
    }
  }, []);

  if (windowWidth === 0) {
    return null; // avoid SSR flicker
  }

  return (
    <section id="benefits">
      {windowWidth < breakpoint ? (
        <ProBlocksFeatureSection9Mobile />
      ) : (
          <ProBlocksFeatureSection9 />
        )}
    </section>
  );
};

export default Feature9Section;
