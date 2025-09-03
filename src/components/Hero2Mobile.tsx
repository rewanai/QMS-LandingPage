'use client';

import { type FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './ProBlocksGallerySection4.module.css';

const Hero2Mobile: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksGallerySection}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.proBlocksSectionTitle}>
          <b className={styles.featureRichLayoutThat}>The Solution: A Single Source of Truth for Quality</b>
          <div className={styles.addAConcise}>
            Rewan QMS replaces chaos with clarity. We have meticulously engineered a single, unified platform that addresses every core requirement of the ISO 9001:2015 standard in an intuitive and interconnected way.
          </div>
        </div>

        {/* Cards Stack for Mobile */}
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Unified icon" src="/qms/uni.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Unified & Integrated</b>
                  <div className={styles.text}>
                    All your QMS modules—from Audits to Management Reviews—are in one place, providing a holistic view of your quality performance
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Intelligently automated icon" src="/qms/Int.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Intelligently Automated</b>
                  <div className={styles.text}>
                    Drastically reduce manual effort with our Genesis AI agent for document creation and streamlined workflows for approvals and tasks
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Always audit-ready icon" src="/qms/Alw.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Always Audit-Ready</b>
                  <div className={styles.text}>
                    With centralized records, complete version history, and clear audit trails, you can face any internal or external audit with total confidence
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Fosters collaboration icon" src="/qms/Fos.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Fosters Collaboration</b>
                  <div className={styles.text}>
                    With clear tasks, intuitive documentation, and accessible QMS processes, every team member actively supports your quality journey.
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

export default Hero2Mobile;