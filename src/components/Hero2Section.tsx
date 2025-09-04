"use client";

import { useState, useEffect, type FunctionComponent } from 'react';
import Hero2Mobile from './Hero2Mobile'
import Hero2Desktop from './Hero2Desktop'

const Hero2Section: FunctionComponent = () => {
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

  if (windowWidth === 0) return null; // prevent SSR flicker

  return windowWidth < breakpoint ? <Hero2Mobile /> : <Hero2Desktop />;
};

export default Hero2Section;
