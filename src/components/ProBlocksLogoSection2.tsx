'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './ProBlocksLogoSection2.module.css';

const ProBlocksLogoSection2: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksLogoSection2}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>About Us</div>
            </div>
            <b className={styles.featureRichLayoutThat}>Transform Ideas into Reality with AI Precision</b>
            <div className={styles.addAConcise}>Masar isn&apos;t just a tool—it&apos;s your strategic partner for turning concepts into successful outcomes.</div>
          </div>
          <div className={styles.rowParent}>
            <div className={styles.row}>
              <div className={styles.flex1}>
                <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                <div className={styles.subheading}>Strategic Partner</div>
              </div>
              <div className={styles.flex1}>
                <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                <div className={styles.subheading}>AI-Driven Insights</div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flex1}>
                <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                <div className={styles.subheading}>All-in-One Platform</div>
              </div>
              <div className={styles.flex1}>
                <Image className={styles.iconCirclecheckbig} alt="Checkmark icon" src="/CircleCheckBig.svg" width={24} height={24} />
                <div className={styles.subheading}>No App Juggling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProBlocksLogoSection2 };