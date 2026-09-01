import React from 'react';
import styles from '../styles/Partnership.module.css';

const Partnership = () => {
  const partners = [
    {
      id: 1,
      name: 'AWS',
      logo: '/images/awspartner',
      alt: 'AWS Logo',
      isLocal: true,
      width: 200,
      height: 200
    },
    {
      id: 2,
      name: 'Azure',
      logo: '/images/azurepartner',
      alt: 'Microsoft Azure Logo',
      isLocal: true,
      width: 200,
      height: 200
    },
    {
      id: 3,
      name: 'Salesforce',
      logo: '/images/salesforcepartner',
      alt: 'Salesforce Logo',
      isLocal: true,
      width: 200,
      height: 200
    },
    {
      id: 4,
      name: 'Google Cloud Platform',
      logo: '/images/cloudpartner',
      alt: 'Google Cloud Platform Logo',
      isLocal: true,
      width: 200,
      height: 200
    },
    {
      id: 5,
      name: 'Microsoft 365',
      logo: '/images/commonpartners',
      alt: 'Microsoft 365 Logo',
      isLocal: true,
      width: 200,
      height: 200
    },
    {
      id: 6,
      name: 'IBM Cloud',
      logo: '/images/ibmpartners',
      alt: 'IBM Cloud Logo',
      isLocal: true,
      width: 200,
      height: 200
    }
  ];

  return (
    <section className={styles.partnershipSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Partnership & Collaborations</h2>
        
        <div className={styles.partnersGrid}>
          {partners.map((partner) => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.logoContainer}>
                {partner.isLocal ? (
                  <picture>
                    <source srcSet={`${partner.logo}.webp`} type="image/webp" />
                    <img 
                      src={`${partner.logo}.png`} 
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className={styles.logo}
                      loading="lazy"
                    />
                  </picture>
                ) : (
                  <img 
                    src={partner.logo} 
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className={styles.logo}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-logo.png';
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
