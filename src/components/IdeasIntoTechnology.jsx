import React from 'react';
import styles from '../styles/IdeasIntoTechnology.module.css';

const IdeasIntoTechnology = () => {
  return (
    <section className={styles.ideasSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Ideas into <span className={styles.highlight}> Technology</span>
          </h2>
          <p className={styles.description}>
            At BhoomiTechzone, we bring your vision to life through innovative technology solutions. 
            From concept to deployment.
          </p>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.videoFrame}>
          <video 
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Replace this URL with your custom corporate video */}
            <source src="/images/videobnr1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img 
            src="/images/vidframe.png" 
            alt="Video Frame" 
            className={styles.frameOverlay}
          />
        </div>
      </div>
    </section>
  );
};

export default IdeasIntoTechnology;
