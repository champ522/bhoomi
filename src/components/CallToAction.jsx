import React from 'react';
import styles from '../styles/CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Ready to Transform Your <br />
              Business with <span className={styles.highlight}>Technology?</span>
            </h2>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3 className={styles.contactTitle}>Get contact now</h3>
                  <p className={styles.contactDetails}>+91 8130787194</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3 className={styles.contactTitle}>Send e-mail</h3>
                  <p className={styles.contactDetails}>info@bhoomitechzone.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageSection}>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional woman working with technology" 
              className={styles.ctaImage}
            />
            <div className={styles.decorativeArrow}>
              <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25 Q 30 10, 50 25 T 90 25" stroke="#0e8d38" strokeWidth="2" fill="none"/>
                <path d="M85 20 L90 25 L85 30" stroke="#0e8d38" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;