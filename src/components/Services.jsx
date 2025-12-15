import React from 'react';
import styles from '../styles/Services.module.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We create visually stunning, user-friendly websites optimized for performance and conversions. From corporate sites to landing pages, our designs reflect your brand identity and engage your audience.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "App Development",
      description: "Build powerful iOS and Android applications with intuitive interfaces and robust functionality. We specialize in Flutter, React Native, and native development for seamless cross-platform experiences.",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Drive measurable growth with data-driven digital marketing strategies. From SEO and PPC to content marketing and social media campaigns, we help you reach your target audience effectively.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Build meaningful connections with your audience across Instagram, Facebook, LinkedIn, and more. Our strategic social media campaigns boost brand awareness and drive customer engagement.",
      bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Application Development",
      description: "Scalable web applications with robust backends and intuitive frontends for complex business needs. We deliver Custom Solutions, Cloud Ready applications, seamless API Integration, and Secure infrastructure for your business growth.",
      bgImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&h=300&fit=crop",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M10 4v4h4V4"/>
          <circle cx="8" cy="14" r="2"/>
          <path d="M14 14h2v2h-2z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Software Development",
      description: "Tailored software solutions designed specifically for your unique business requirements and workflows. Our approach includes Bespoke Solutions, Agile methodology, Integration Ready systems, and ongoing Maintenance support.",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Our Services</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            What We <span className={styles.titleHighlight}>Offer</span>
          </h2>
          <p className={styles.sectionDescription}>
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardInner}>
                {/* Front Side */}
                <div 
                  className={styles.cardFront}
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div className={styles.cardOverlay}>
                    <div className={styles.frontContent}>
                      <h3 className={styles.frontTitle}>{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className={styles.cardBack}>
                  <div className={styles.backContent}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <h3 className={styles.backTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <button className={styles.serviceButton}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;