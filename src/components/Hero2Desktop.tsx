'use client';

import { type FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './ProBlocksHeroSection10.module.css';

const Hero2Desktop: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksHeroSection10}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.flexVertical}>
            <div className={styles.proBlocksSectionTitle}>
              <b className={styles.yourBestPeople}>The Solution: A Single Source of Truth for Quality</b>
              <div className={styles.addAConcise}>
                Rewan QMS replaces chaos with clarity. We have meticulously engineered a single, unified platform that addresses every core requirement of the ISO 9001:2015 standard in an intuitive and interconnected way.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Unified icon" src="/uni.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Unified & Integrated</b>
                  <div className={styles.text}>All your QMS modules—from Audits to Management Reviews—are in one place, providing a holistic view of your quality performance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Intelligent icon" src="/Int.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Intelligently Automated</b>
                  <div className={styles.text}>Drastically reduce manual effort with our Genesis AI agent for document creation and streamlined workflows for approvals and tasks
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Always audit-ready icon" src="/Alw.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Always Audit-Ready</b>
                  <div className={styles.text}>With centralized records, complete version history, and clear audit trails, you can face any internal or external audit with total confidence
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <Image className={styles.svgviewerOutput21Icon} alt="Collaboration icon" src="/Fos.png" width={48} height={48} />
                <div className={styles.content1}>
                  <b className={styles.heading}>Fosters Collaboration</b>
                  <div className={styles.text}>With clear tasks, intuitive documentation, and accessible QMS processes, every team member actively supports your quality journey.
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

export default Hero2Desktop;