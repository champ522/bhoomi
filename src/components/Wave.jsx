import React from 'react';
import styles from '../styles/Wave.module.css';

const Wave = () => {
  return (
    <div className={styles.waveContainer}>
      <div className={styles.waveWrapper}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.waveSvg}
        >
          <path
            d="M0,60 Q360,0 720,60 T1440,60 V120 H0 V60 Z"
            className={styles.wavePath}
          ></path>
        </svg>
      </div>
      <div className={styles.waveWrapper}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.waveSvg}
        >
          <path
            d="M0,60 Q360,0 720,60 T1440,60 V120 H0 V60 Z"
            className={styles.wavePath}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Wave;