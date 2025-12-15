import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Features.module.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Curstomer Relationship Management",
      category: "CRM Software",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Human Resource Management", 
      category: "HRM Software",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Hospital Management System",
      category: "HMS Software",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "School Management System",
      category: "SMS Software",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "INVENTORY MANAGEMENT",
      category: "SOFTWARES",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "ERP SOLUTIONS",
      category: "SOFTWARES",
      bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Our Features</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Software <span className={styles.titleHighlight}>Solutions</span>
          </h2>
          <p className={styles.sectionDescription}>
            Comprehensive software solutions designed to streamline your business operations and drive growth
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            pagination={{
              el: `.${styles.swiperPagination}`,
              clickable: true,
              bulletClass: styles.swiperBullet,
              bulletActiveClass: styles.swiperBulletActive,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            loop={true}
            className={styles.featuresSwiper}
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div className={styles.featureCard}>
                  <div 
                    className={styles.cardBackground}
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  >
                    <div className={styles.cardOverlay}>
                      <svg className={styles.waveOverlay} viewBox="0 0 400 300" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`waveGradient-${feature.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(74, 144, 226, 0.8)" />
                            <stop offset="50%" stopColor="rgba(126, 211, 33, 0.8)" />
                            <stop offset="100%" stopColor="rgba(92, 184, 92, 0.8)" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M0,300 Q100,200 200,250 T400,200 L400,300 Z" 
                          fill={`url(#waveGradient-${feature.id})`}
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>
                      {feature.category}
                    </div>
                    
                    <h3 className={styles.featureTitle}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className={`${styles.swiperButtonPrev} ${styles.swiperNavButton}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </div>
          
          <div className={`${styles.swiperButtonNext} ${styles.swiperNavButton}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className={styles.swiperPagination}></div>
        </div>
      </div>
    </section>
  );
};

export default Features;