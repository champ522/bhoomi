import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/WhyChooseBhoomiTechzone.module.css';

const WhyChooseBhoomiTechzone = () => {
  const [openFeature, setOpenFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      const mobile = width <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFeature = (featureId) => {
    setOpenFeature(openFeature === featureId ? null : featureId);
  };

  const handleFeatureClick = (featureId) => (event) => {
    if (isMobile) {
      event.stopPropagation();
      toggleFeature(featureId);
    }
  };

  const handleArrowClick = (featureId) => (event) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();
      toggleFeature(featureId);
    }
  };

  const handleMouseEnter = (featureId) => {
    // Only handle hover on desktop
    if (!isMobile) {
      setOpenFeature(featureId);
    }
  };

  const handleMouseLeave = () => {
    // Only handle hover on desktop
    if (!isMobile) {
      setOpenFeature(null);
    }
  };
  const features = [
    {
      id: 1,
      title: "Expert Team",
      description: "Our skilled developers and designers have delivered 200+ successful projects across diverse industries, bringing deep technical knowledge and creative problem-solving to every engagement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "24/7 Support",
      description: "From initial consultation to post-launch maintenance, we're with you every step of the way. Our dedicated support team ensures your technology runs smoothly 24/7",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Every project undergoes comprehensive testing protocols and quality checks. Our QA team ensures bug-free deployment with performance optimization and security validation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9,12 11,14 16,9"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies and creative problem-solving approaches to transform your business challenges into competitive advantages with modern, scalable solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "On-Time Delivery",
      description: "With proven project management methodologies and agile development processes, we consistently deliver high-quality solutions within agreed timelines and budget constraints.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <polyline points="11,14 12,15 16,11"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Cost-Effective",
      description: "Strategic pricing models designed to maximize your technology ROI. We provide transparent cost structures with flexible payment options and long-term value propositions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12"/>
          <path d="M6 8h12"/>
          <path d="M6 8h6c2.5 0 4 1.5 4 4s-1.5 4-4 4H6"/>
          <path d="M8 16l8 5"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        {/* Header Section - Outside Grid */}
        <div className={styles.headerSection}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Why Choose Us</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Why Choose <span className={styles.titleHighlight}>Bhoomi Techzone</span>?
          </h2>
          <p className={styles.sectionDescription}>
            There are hundreds of IT companies out there. Here's why growing businesses keep choosing us - and coming back.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.featuresGrid}>
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className={`${styles.featureItem} ${openFeature === feature.id ? styles.featureItemActive : ''} ${isMobile ? styles.mobileMode : ''}`}
                  onClick={handleFeatureClick(feature.id)}
                  onMouseEnter={!isMobile ? () => handleMouseEnter(feature.id) : undefined}
                  onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openFeature === feature.id}
                >
                  <div className={styles.featureHeader}>
                    <div className={styles.featureIcon}>
                      {feature.icon}
                    </div>
                    <div className={styles.featureTitleWrapper}>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <div 
                        className={styles.dropdownArrow}
                        onClick={handleArrowClick(feature.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6,9 12,15 18,9"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.featureContent} ${openFeature === feature.id ? styles.featureContentOpen : ''}`}>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <div className={styles.mainImage}>
                <picture>
                  <source srcSet="/images/bhoomilogo.webp" type="image/webp" />
                  <img 
                    src="/images/bhoomilogo.png" width="210" height="63" 
                    alt="Bhoomi Techzone - Technology Solutions"
                    className={styles.heroImage}
                    loading="lazy"
                  />
                </picture>
              </div>

              {/* Background Decorations */}
              <div className={styles.backgroundPattern}></div>
            </div>
          </div>
        </div>

        {/* CTA Section - Outside Grid */}
        <div className={styles.ctaSection}>
          <Link to="/contact" className={styles.ctaButton}>
            <span>Get Started Today</span>
            <svg className={styles.ctaArrow} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBhoomiTechzone;