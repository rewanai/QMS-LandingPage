'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './ProBlocksFeatureSection3.module.css';

const ProBlocksFeatureSection3: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>Meet Rewan QMS</div>
            </div>
            <b className={styles.featureRichLayoutThatContainer}>
              <p className={styles.onePlatform}>Why Hire a Consultant</p>
              <p className={styles.onePlatform}>When You Can Have One Built-in?</p>
            </b>
            <div className={styles.addAConcise}>Introducing Rewan QMS, your intelligent partner in building a world-class QMS.</div>
          </div>
          <div className={styles.flexVerticalParent}>
            <div className={styles.flexVertical}>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="AI icon" src="/Icon Wrapper.svg" width={48} height={48} />
                <div className={styles.flexVertical1}>
                  <div className={styles.subheading}>AI-Powered Compliance</div>
                  <div className={styles.harnessAdvancedAlgorithms}>Transform complex requirements into audit-ready documents with an AI agent that acts as your personal ISO consultant.</div>
                </div>
              </div>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="Reliability icon" src="/IconWrapper2.svg" width={48} height={48} />
                <div className={styles.flexVertical1}>
                  <div className={styles.subheading}>Precision & Reliability</div>
                  <div className={styles.harnessAdvancedAlgorithms}>Every clause of the standard streamlined—delivering accurate, consistent, and compliant outputs across your QMS.</div>
                </div>
              </div>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="Scalability icon" src="/IconWrapper3.svg" width={48} height={48} />
                <div className={styles.flexVertical1}>
                  <div className={styles.subheading}>Fully Scalable</div>
                  <div className={styles.harnessAdvancedAlgorithms}>Whether for startups, SME, or enterprises, Rewan QMS adapts to your needs and industry.</div>
                </div>
              </div>
            </div>
            <div className={styles.flex3}>
              <div className={styles.card}>
                <div className={styles.frameParent}>
                  <div className={styles.subheadingWrapper}>
                    <b className={styles.subheading3}>Why Choose Rewan QMS?</b>
                  </div>
                  <div className={styles.flexVertical4}>
                    <div className={styles.flex4}>
                      <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                      <div className={styles.subheading4}>Streamline every ISO clause with ease</div>
                    </div>
                    <div className={styles.flex4}>
                      <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                      <div className={styles.subheading4}>AI-powered agent for real-time guidance</div>
                    </div>
                    <div className={styles.flex4}>
                      <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                      <div className={styles.subheading4}>Achieve complete, audit-ready compliance</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.subheadingContainer}>
                    <b className={styles.subheading3}>Perfect for</b>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.flex7}>
                      <div className={styles.subheading8}>Startups</div>
                      <div className={styles.subheading9}>Quick setup</div>
                    </div>
                    <div className={styles.flex7}>
                      <div className={styles.subheading8}>SME</div>
                      <div className={styles.subheading9}>Manage compliance complexity</div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.flex7}>
                      <div className={styles.subheading8}>Teams</div>
                      <div className={styles.subheading9}>Collaborate efficiently</div>
                    </div>
                    <div className={styles.flex7}>
                      <div className={styles.subheading8}>Enterprises</div>
                      <div className={styles.subheading9}>Scale compliance programs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProBlocksFeatureSection3 };