'use client';

import React from "react";
import { FunctionComponent } from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './ProBlocksFeatureSection11.module.css';

const ProBlocksFeatureSection52: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        {/* Top Image */}
        <Image className={styles.aspectRatioIcon} alt="Ava" src="/Ava.png" width={500} height={300} />

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
                Adopting Rewan QMS is an investment in your organization&apos;s future. By unifying your processes and empowering your people, you move beyond simply &quot;meeting the standard&quot; to building a resilient and thriving quality culture.
              </p>
            </div>
          </div>

          {/* Feature Cards Stack */}
          <div className={styles.flexVertical}>
            <div className={styles.flex}>
              <Image className={styles.iconWrapper} alt="Administrative overhead icon" src="/Icon Wrapper.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Drastically Reduce Administrative Overhead</div>
                <div className={styles.advancedReasoningAnd}>
                  Eliminate manual tasks with AI-driven documents, automated workflows, and real-time dashboard insights.
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <Image className={styles.iconWrapper} alt="Audit-readiness icon" src="/Icon Wrapper.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Achieve Perpetual Audit-Readiness</div>
                <div className={styles.advancedReasoningAnd}>
                  Maintain one source of truth with version control and audit trails to prove compliance anytime.
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <Image className={styles.iconWrapper} alt="Continuous improvement icon" src="/Icon Wrapper.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Drive Measurable, Continuous Improvement</div>
                <div className={styles.advancedReasoningAnd}>
                  Capture issues, run CAPAs, and track effectiveness to turn challenges into lasting improvements.
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <Image className={styles.iconWrapper} alt="Team empowerment icon" src="/Icon Wrapper.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Empower and Engage Your Entire Team</div>
                <div className={styles.advancedReasoningAnd}>
                  Make quality part of daily work with tasks, clear processes, and defined team roles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBlocksFeatureSection52;