import React from 'react';
import styles from '../styles/Certifications.module.css';

const Certifications = () => {
  // Certification images with dimensions (prevents CLS)
  const certifications = [
    { src: '/images/iso', alt: 'ISO 9001:2015 Certified', width: 200, height: 200 },
    { src: '/images/startup', alt: 'Startup India', width: 200, height: 200 },
    { src: '/images/razorpay', alt: 'Razorpay Partner', width: 200, height: 200 },
    { src: '/images/msme', alt: 'Ministry of MSME', width: 200, height: 200 },
    { src: '/images/legalbhoomi', alt: 'Bhoomi Techzone Certification', width: 200, height: 200 },
    { src: '/images/gst', alt: 'DPIIT Recognized', width: 200, height: 200 },
  ];

  return (
    <section className={styles.certificationsSection}>
      <div className={styles.container}>
        <div className={styles.certificationsSlider}>
          <div className={styles.certificationsTrack}>
            {/* First set */}
            {certifications.map((cert, index) => (
              <div key={`cert-${index}`} className={styles.certificationItem}>
                <picture>
                  <source srcSet={`${cert.src}.webp`} type="image/webp" />
                  <img 
                    src={`${cert.src}.jpg`} 
                    alt={cert.alt}
                    width={cert.width}
                    height={cert.height}
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {certifications.map((cert, index) => (
              <div key={`cert-dup-${index}`} className={styles.certificationItem}>
                <picture>
                  <source srcSet={`${cert.src}.webp`} type="image/webp" />
                  <img 
                    src={`${cert.src}.jpg`} 
                    alt={cert.alt}
                    width={cert.width}
                    height={cert.height}
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
