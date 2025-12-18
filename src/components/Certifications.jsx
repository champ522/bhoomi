import React from 'react';
import styles from '../styles/Certifications.module.css';

const Certifications = () => {
  return (
    <section className={styles.certificationsSection}>
      <div className={styles.container}>
        <div className={styles.certificationsSlider}>
          <div className={styles.certificationsTrack}>
            <div className={styles.certificationItem}>
              <img src="/images/iso.jpg" alt="ISO 9001:2015 Certified" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/startup.jpg" alt="Startup India" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/razorpay.png" alt="Razorpay Partner" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/msme.jpg" alt="Ministry of MSME" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/legalbhoomi.jpg" alt="Bhoomi Techzone Certification" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/gst.jpg" alt="DPIIT Recognized" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className={styles.certificationItem}>
              <img src="/images/iso.jpg" alt="ISO 9001:2015 Certified" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/startup.jpg" alt="Startup India" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/razorpay.png" alt="Razorpay Partner" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/msme.jpg" alt="Ministry of MSME" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/legalbhoomi.jpg" alt="Bhoomi Techzone Certification" />
            </div>
            <div className={styles.certificationItem}>
              <img src="/images/gst.jpg" alt="DPIIT Recognized" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
