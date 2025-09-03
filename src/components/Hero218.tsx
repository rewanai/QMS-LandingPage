'use client';

import { motion } from "framer-motion";
import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { Particles } from "@/components/magicui/particles";
import styles from './ProBlocksHeroSection8.module.css';

const Hero218: FunctionComponent = () => {
  return (
    <section className="relative h-screen py-20 md:py-32 px-4">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color="#000000"
        refresh
      />

      {/* Blur Layer */}
      <div className="h-92 -translate-y-15 absolute inset-0 w-full z-0">
        <div className="h-92 bg-background absolute w-full blur-xl" />
        <div className="h-92 -translate-y-62 bg-background absolute w-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 text-center">
        <div className="relative mx-auto w-full max-w-3xl">
          {/* Tagline */}
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <Image className={styles.iconSparkles} alt="Sparkles icon" src="/qms/Sparkles.svg" width={24} height={24} />
              <div className={styles.tagline}>AI-Driven Quality Management</div>
            </div>
          </div>

          {/* Animated Title */}
          <h1 className="relative z-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center leading-tight">
            <span
              className={styles.featureRichLayoutThatContainer}
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"The Smartest Path to ISO 9001:2015 Certification & Implementation"
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    className="relative inline-block px-[6px] leading-[none]"
                    key={i}
                    initial={{
                      opacity: 0,
                      y: "70%",
                      rotateX: "-28deg",
                    }}
                    animate={{
                      opacity: 1,
                      y: "0%",
                      rotateX: "0deg",
                    }}
                    transition={{
                      delay: i * 0.08 + 0.1,
                      duration: 0.8,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
            </span>
          </h1>

          {/* Description & Button */}
          <div className={styles.container}>
            <div className={styles.div}>
              <div className={styles.proBlocksSectionTitle}>
                <div className={styles.addAConcise}>
                  Achieve audit-ready compliance with Rewan QMS—an intelligent platform with an AI ISO consultant that simplifies every standard clause.
                </div>
              </div>
              <div className={styles.button}>
                <a href="#contact" className={styles.button}>
                  <div className={styles.tagline}>Request a Personalized Demo</div>
                  <Image className={styles.iconArrowright} alt="Arrow right icon" src="/qms/ArrowRight.svg" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero218 };