import React from 'react';
import { Link } from 'react-router-dom';
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
            {/* <p className={styles.description}>
              From web & mobile development to cloud, DevOps, and dedicated teams — we help businesses build, launch, and scale with confidence.
            </p> */}
          </div>
          <Link to="/schedule-meeting" className={styles.button}>
            <div className={styles.buttonInner}>
              <span className={styles.buttonText}>
                Start your project Today
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;