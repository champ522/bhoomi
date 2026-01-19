import React from 'react';
import styles from '../styles/CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Ready to Turn Your Idea into a Scalable Product?
            </h2>
            <p className={styles.description}>
              From web & mobile development to cloud, DevOps, and dedicated teams — we help businesses build, launch, and scale with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;