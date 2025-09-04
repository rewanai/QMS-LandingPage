import { FunctionComponent } from 'react';
import styles from './ProBlocksCTASection6.module.css'


const ProBlocksCTASection6: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksCtaSection6}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.proBlocksSectionTitle}>
            <b className={styles.featureRichLayoutThat}>Transform Your Project Management Today</b>
            <div className={styles.addAConcise}>Join thousands of teams already using Masar to streamline operations and achieve better results.</div>
          </div>
          <div className={styles.flex1}>
            <div className={styles.button}>
              <div className={styles.button1}>Start Your Journey Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export { ProBlocksCTASection6 };
