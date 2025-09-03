'use client';

import { type FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './ProBlocksFooter7.module.css';

const ProBlocksFooter7: FunctionComponent = () => {
  return (
    <div className={styles.proBlocksFooter7}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.flex}>
            <Image className={styles.groupIcon} alt="Rewan logo" src="/qms/qms.png" width={100} height={50} />
            <div className={styles.flex1}>
              <div className={styles.buildingAiPoweredCyber}>Building AI-powered Cyber Employees to automate operations and liberate human talent for what matters most. Made in Oman for the world.</div>
            </div>
            <div className={styles.flex1}>
              <div className={styles.buildingAiPoweredCyber}>Salalah, Sultanate of Oman</div>
            </div>
            <div className={styles.flex3}>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/rewan_ai/" className={styles.socialMediaIcon} target="_blank" rel="noopener noreferrer">
                <Image className={styles.vectorIcon} alt="Instagram" src="/qms/Social Media IconI.svg" width={24} height={24} />
              </a>

              {/* Twitter/X Icon */}
              <a href="https://x.com/Rewan_Ai" className={styles.socialMediaIcon} target="_blank" rel="noopener noreferrer">
                <Image className={styles.vectorIcon2} alt="Twitter/X" src="/qms/Social Media IconX.svg" width={24} height={24} />
              </a>

              {/* YouTube Icon */}
              <a href="https://www.linkedin.com/company/rewanai/?trk=public_post_feed-actor-name&originalSubdomain=om" className={styles.socialMediaIcon} target="_blank" rel="noopener noreferrer">
                <Image className={styles.vectorIcon3} alt="LinkedIn" src="/qms/Social Media IconY.svg" width={24} height={24} />
              </a>

              {/* WhatsApp Icon */}
              <a href="https://api.whatsapp.com/send/?phone=96876626636&text&type=phone_number&app_absent=0" className={styles.socialMediaIcon1} target="_blank" rel="noopener noreferrer">
                <Image className={styles.vectorIcon4} alt="WhatsApp" src="/qms/Social Media IconW.svg" width={24} height={24} />
              </a>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.company}>Company</div>
            <div className={styles.flexVertical}>
              <div className={styles.buildingAiPoweredCyber}>Our Technology</div>
              <div className={styles.buildingAiPoweredCyber}>Success Stories</div>
              <div className={styles.buildingAiPoweredCyber}>Our Principle</div>
              <div className={styles.buildingAiPoweredCyber}>Contact</div>
            </div>
          </div>
        </div>
        <div className={styles.separator}>
          <div className={styles.separator1} />
        </div>
        <div className={styles.flex4}>
          <div className={styles.rewanAllRights}>© 2025 rewan. All rights reserved.</div>
          <div className={styles.flex5}>
            <div className={styles.rewanAllRights}>Privacy Policy</div>
            <div className={styles.rewanAllRights}>Terms of Service</div>
            <div className={styles.rewanAllRights}>Cookies Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProBlocksFooter7 };