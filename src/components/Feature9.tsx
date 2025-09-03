'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './ProBlocksFeatureSection9.module.css';

const ProBlocksFeatureSection9: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>How Rewan QMS Works</div>
            </div>
            <b className={styles.featureRichLayoutThatContainer}>
              <p className={styles.clearSteps}>Every Module, Meticulously</p>
              <p className={styles.clearSteps}>Mapped to ISO 9001:2015</p>
            </b>
            <div className={styles.addAConcise}>Rewan QMS is a purpose-built ecosystem designed around each ISO clause—transforming compliance into an integrated framework for a world-class Quality Management System.</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.flexVertical}>
              <Image className={styles.iconWrapper} alt="Foundation icon" src="/Icon Wrapper 2.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>{`Build a Strong Foundation`}</div>
                <div className={styles.shortlyDescribeHow}>Clauses 4, 5 & 6 – Define context, leadership, and planning with stakeholder registers, process mapping, and proactive risk management.</div>
              </div>
            </div>
            <div className={styles.flexVertical}>
              <Image className={styles.iconWrapper} alt="Control icon" src="/Icon Wrapper-1.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Control, Train & Support</div>
                <div className={styles.shortlyDescribeHow}>Clause 7 – Centralize documents, automate approvals, and track training to maintain compliance, competence, and awareness.</div>
              </div>
            </div>
            <div className={styles.flexVertical}>
              <Image className={styles.iconWrapper} alt="Evaluation icon" src="/Icon Wrapper-2.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>{`Evaluate & Improve Continuously`}</div>
                <div className={styles.shortlyDescribeHow}>Clauses 9 & 10 – Manage audits, CAPAs, and reviews in one system to capture issues, analyze trends, and drive improvement.</div>
              </div>
            </div>
            <div className={styles.flexVertical}>
              <Image className={styles.iconWrapper} alt="Execution icon" src="/Icon Wrapper-3.svg" width={48} height={48} />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>{`Execute with Accountability`}</div>
                <div className={styles.shortlyDescribeHow}>Clause 8 – Run operational plans through a connected Kanban board, task assignments, and traceable workflows that ensure accountability.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBlocksFeatureSection9;
export { ProBlocksFeatureSection9 };