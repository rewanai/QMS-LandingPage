import { FunctionComponent } from 'react';
import styles from './ProBlocksLogoSection22.module.css';

const Integration4Mobile: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksLogoSection2}>
      <div className={styles.container}>
        <div className={styles.flexVertical}>
          {/* TEXT SECTION */}
          <b className={styles.featureRichLayoutThat}>
            Navigating ISO 9001:2015 Shouldn't Be a Struggle
          </b>
          <div className={styles.addAConcise}>
            Achieving certification is a powerful mark of quality, but the journey is often fragmented and frustrating. Your team juggles disconnected spreadsheets for risks, scattered documents in shared drives, endless email chains for approvals, and the constant pressure of upcoming audits. This disjointed approach creates information silos, increases the risk of nonconformities, and drains valuable resources
          </div>

          {/* CARDS SECTION */}
          <div className={styles.flex}>
            <div className={styles.flex1}>
              <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
              <div className={styles.subheading}>Simplified Document Control</div>
            </div>
            <div className={styles.flex1}>
              <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
              <div className={styles.subheading}>Integrated Quality Systems</div>
            </div>
            <div className={styles.flex1}>
              <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
              <div className={styles.subheading}>Reduced Consultant Dependency</div>
            </div>
            <div className={styles.flex1}>
              <img className={styles.iconCirclecheckbig} alt="" src="CircleCheckBig.svg" />
              <div className={styles.subheading}>Improved Team Engagement</div>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <img
            className={styles.imagePlaceholder}
            src="Mhero.png"
            alt="ISO Certification Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Integration4Mobile;
