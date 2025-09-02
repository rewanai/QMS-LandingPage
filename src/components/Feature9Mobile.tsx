import { FunctionComponent } from 'react';
import styles from './ProBlocksFeatureSection99.module.css';

const ProBlocksFeatureSection9Mobile: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFeatureSection}>
      <div className={styles.container}>
        <div className={styles.div}>
          {/* Section Title */}
          <div className={styles.proBlocksSectionTitle}>
            <div className={styles.proBlocksTagline}>
              <div className={styles.tagline}>How Rewan QMS Works</div>
            </div>
            <b className={styles.featureRichLayoutThatContainer}>
              <p className={styles.clearSteps}>Every Module, Meticulously</p>
              <p className={styles.clearSteps}>Mapped to ISO 9001:2015</p>
            </b>

          </div>

          {/* Mobile Feature Stack */}
          <div className={styles.flexVertical}>
            <div className={styles.proBlocksFeatureSection_flexVertical}>
              <img className={styles.iconWrapper} alt="" src="Icon Wrapper 2.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>{`Build a Strong Foundation`}</div>
                <div className={styles.shortlyDescribeHow}>
                  Clauses 4, 5 & 6 – Define context, leadership, and planning with stakeholder registers, process mapping, and proactive risk management.
                </div>
              </div>
            </div>

            <div className={styles.proBlocksFeatureSection_flexVertical}>
              <img className={styles.iconWrapper} alt="" src="Icon Wrapper-1.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>Control, Train & Support</div>
                <div className={styles.shortlyDescribeHow}>
                  Clause 7 – Centralize documents, automate approvals, and track training to maintain compliance, competence, and awareness.
                </div>
              </div>
            </div>

            <div className={styles.proBlocksFeatureSection_flexVertical}>
              <img className={styles.iconWrapper} alt="" src="Icon Wrapper-2.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>{`Evaluate & Improve Continuously`}</div>
                <div className={styles.shortlyDescribeHow}>
                  Clauses 9 & 10 – Manage audits, CAPAs, and reviews in one system to capture issues, analyze trends, and drive improvement.
                </div>
              </div>
            </div>

            <div className={styles.proBlocksFeatureSection_flexVertical}>
              <img className={styles.iconWrapper} alt="" src="Icon Wrapper-3.svg" />
              <div className={styles.flexVertical1}>
                <div className={styles.subheading}>{`Execute with Accountability`}</div>
                <div className={styles.shortlyDescribeHow}>
                  Clause 8 – Run operational plans through a connected Kanban board, task assignments, and traceable workflows that ensure accountability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBlocksFeatureSection9Mobile;
