import React from 'react';
import styles from '../styles/Partnership.module.css';

const Partnership = () => {
  const partners = [
    {
      id: 1,
      name: 'AWS',
      logo: '/images/awspartner.png',
      alt: 'AWS Logo'
    },
    {
      id: 2,
      name: 'Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
      alt: 'Microsoft Azure Logo'
    },
    {
      id: 3,
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
      alt: 'Salesforce Logo'
    },
    {
      id: 4,
      name: 'Google Cloud Platform',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      alt: 'Google Cloud Platform Logo'
    },
    {
      id: 5,
      name: 'Microsoft 365',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg',
      alt: 'Microsoft 365 Logo'
    },
    {
      id: 6,
      name: 'IBM Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      alt: 'IBM Cloud Logo'
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
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className={styles.logo}
                  onError={(e) => {
                    e.target.src = '/images/placeholder-logo.png';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
