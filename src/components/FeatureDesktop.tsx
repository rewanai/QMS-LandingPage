'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './ProBlocksFeatureSection522.module.css';

const ProBlocksFeatureSection5: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>Features</div>
            </div>
            <b className={styles.featureRichLayoutThat}>Every Module, Aligned with ISO 9001:2015</b>
            <div className={styles.addAConciseContainer}>
              <p className={styles.poweredExclusivelyBy}>Standard Rewan QMS isn&apos;t just a collection of features; it&apos;s a purpose-built ecosystem designed to address the specific requirements of each clause. Explore how our integrated modules provide the framework for a robust and effective Quality Management System.</p>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.row}>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="Strategic foundation icon" src="/qms/Icon Wrapper.svg" width={48} height={48} />
                <div className={styles.flexVertical}>
                  <div className={styles.subheading}>Establish Strategic Foundation</div>
                  <div className={styles.advancedReasoningAnd}>Define context and planning with integrated tools for stakeholders, processes, and risk management.</div>
                </div>
              </div>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="Control and awareness icon" src="/qms/Icon Wrapper.svg" width={48} height={48} />
                <div className={styles.flexVertical}>
                  <div className={styles.subheading}>Ensure Control & Awareness</div>
                  <div className={styles.advancedReasoningAnd}>Centralize documents, automate approvals, and manage training to support team compliance.</div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="Measure and analyze icon" src="/qms/Icon Wrapper.svg" width={48} height={48} />
                <div className={styles.flexVertical}>
                  <div className={styles.subheading}>Measure, Analyze, Improve</div>
                  <div className={styles.advancedReasoningAnd}>Capture issues, run CAPAs, and streamline audits to drive insight and continual improvement.</div>
                </div>
              </div>
              <div className={styles.flex}>
                <Image className={styles.iconWrapper} alt="Plans and actions icon" src="/qms/Icon Wrapper.svg" width={48} height={48} />
                <div className={styles.flexVertical}>
                  <div className={styles.subheading}>Turn Plans into Actions</div>
                  <div className={styles.advancedReasoningAnd}>Manage quality tasks across teams with full traceability, from planning to execution.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image className={styles.aspectRatioIcon} alt="FEAT image" src="/qms/FEAT.png" width={500} height={300} />
      </div>
    </div>
  );
};

export default ProBlocksFeatureSection5;