"use client";
import React from "react";
import { FunctionComponent } from 'react';
import styles from './ProBlocksFeatureSection11.module.css';

const ProBlocksFeatureSection52: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        {/* Top Image */}

        {/* Section Title & Description */}
        <div className={styles.div}>
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>Advantages</div>
            </div>
            <b className={styles.featureRichLayoutThat}>
              From Compliance to Strategy Rewan QMS Delivers.
            </b>
            <div className={styles.addAConciseContainer}>
              <p className={styles.poweredExclusivelyBy}>
                Adopting Rewan QMS is an investment in your organization's future. By unifying your processes and empowering your people, you move beyond simply "meeting the standard" to building a resilient and thriving quality culture.
              </p>
            </div>
          </div>

          {/* Feature Cards Stack */}
          <div className={styles.flexVertical}>
            <div className={styles.flex}>
              <img className={styles.iconWrapper} alt="" src="/Icon Wrapper.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Drastically Reduce Administrative Overhead</div>
                <div className={styles.advancedReasoningAnd}>
                  Eliminate manual tasks with AI-driven documents, automated workflows, and real-time dashboard insights.
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <img className={styles.iconWrapper} alt="" src="/Icon Wrapper.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Achieve Perpetual Audit-Readiness</div>
                <div className={styles.advancedReasoningAnd}>
                  Maintain one source of truth with version control and audit trails to prove compliance anytime.
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <img className={styles.iconWrapper} alt="" src="/Icon Wrapper.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Drive Measurable, Continuous Improvement</div>
                <div className={styles.advancedReasoningAnd}>
                  Capture issues, run CAPAs, and track effectiveness to turn challenges into lasting improvements.
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <img className={styles.iconWrapper} alt="" src="/Icon Wrapper.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Empower and Engage Your Entire Team</div>
                <div className={styles.advancedReasoningAnd}>
                  Make quality part of daily work with tasks, clear processes, and defined team roles.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.aspectRatioIcon} alt="" src="/Ava.png" />

      </div>
    </div>
  );
};

export default ProBlocksFeatureSection52;
