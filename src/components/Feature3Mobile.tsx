'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './ProBlocksFeatureSection5.module.css';

const ProBlocksFeatureSection5: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          {/* Section Title */}
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>Meet Rewan QMS</div>
            </div>
            <b className={styles.featureRichLayoutThatContainer}>
              <p className={styles.onePlatform}>Why Hire a Consultant</p>
              <p className={styles.onePlatform}>When You Can Have One Built-in?</p>
            </b>
            <div className={styles.addAConcise}>
              Introducing Rewan QMS, your intelligent partner in building a world-class QMS.
            </div>
          </div>

          {/* Features Stack */}
          <div className={styles.flexVertical}>
            <div className={styles.card}>
              <Image className={styles.iconWrapper} alt="AI icon" src="/Icon Wrapper.svg" width={48} height={48} />
              <div className={styles.proBlocksFeatureSection_flexVertical}>
                <div className={styles.subheading}>AI-Powered Compliance</div>
                <div className={styles.harnessAdvancedAlgorithms}>
                  Transform complex requirements into audit-ready documents with an AI agent that acts as your personal ISO consultant.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image className={styles.iconWrapper} alt="Reliability icon" src="/IconWrapper2.svg" width={48} height={48} />
              <div className={styles.proBlocksFeatureSection_flexVertical}>
                <div className={styles.subheading}>Precision & Reliability</div>
                <div className={styles.harnessAdvancedAlgorithms}>
                  Every clause of the standard streamlined—delivering accurate, consistent, and compliant outputs across your QMS.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image className={styles.iconWrapper} alt="Scalability icon" src="/IconWrapper3.svg" width={48} height={48} />
              <div className={styles.proBlocksFeatureSection_flexVertical}>
                <div className={styles.subheading}>Fully Scalable</div>
                <div className={styles.harnessAdvancedAlgorithms}>
                  Whether for startups, SME, or enterprises, Rewan QMS adapts to your needs and industry.
                </div>
              </div>
            </div>
          </div>

          {/* Side Card (Why + Perfect For) */}
          <div className={styles.proBlocksFeatureSection_flex}>
            <div className={styles.card2}>
              {/* Why Choose */}
              <div className={styles.frameParent}>
                <div className={styles.subheadingWrapper}>
                  <b className={styles.subheading2}>Why Choose Rewan QMS?</b>
                </div>
                <div className={styles.flexVertical3}>
                  <div className={styles.flex1}>
                    <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                    <div className={styles.subheading3}>Streamline every ISO clause with ease</div>
                  </div>
                  <div className={styles.flex1}>
                    <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                    <div className={styles.subheading3}>AI-powered agent for real-time guidance</div>
                  </div>
                  <div className={styles.flex1}>
                    <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                    <div className={styles.subheading3}>Achieve complete, audit-ready compliance</div>
                  </div>
                </div>
              </div>

              {/* Perfect For */}
              <div className={styles.frameGroup}>
                <div className={styles.subheadingWrapper}>
                  <b className={styles.subheading2}>Perfect For</b>
                </div>
                <div className={styles.row}>
                  <div className={styles.flex4}>
                    <div className={styles.subheading7}>Startups</div>
                    <div className={styles.harnessAdvancedAlgorithms}>Quick setup</div>
                  </div>
                  <div className={styles.flex4}>
                    <div className={styles.subheading7}>SME</div>
                    <div className={styles.harnessAdvancedAlgorithms}>Manage compliance complexity</div>
                  </div>
                  <div className={styles.flex4}>
                    <div className={styles.subheading7}>Teams</div>
                    <div className={styles.harnessAdvancedAlgorithms}>Collaborate efficiently</div>
                  </div>
                  <div className={styles.flex4}>
                    <div className={styles.subheading7}>Enterprises</div>
                    <div className={styles.harnessAdvancedAlgorithms}>Scale compliance programs</div>
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

export { ProBlocksFeatureSection5 };