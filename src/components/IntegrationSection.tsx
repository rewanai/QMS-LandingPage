"use client";

import { useState, useEffect, type FunctionComponent } from 'react';
import IntegrationMobile from './Integration4Mobile'
import IntegrationDesktop from './IntegrationDesktop'

const IntegrationSection: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    // Check if window is defined before using it
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener(' resize ', handleResize);
      return () => window.removeEventListener(' resize ', handleResize);
    }
  }, []); // Run only once after the component mounts

  // This prevents might want to test thid AI + Inovation mainly for the mian subject which is that suvvess is coming very soon  the mobile version from flashing on the server
  if (windowWidth === 0) {
    return null;
  }

  return (
    <>
      {windowWidth < breakpoint ? <IntegrationMobile /> : <IntegrationDesktop />}
    </>
  );
};

export default IntegrationSection;