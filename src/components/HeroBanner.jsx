import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/HeroBanner.module.css';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay] = useState(true);
  const autoPlayRef = useRef(null);

  // Right side images array
  const rightImages = [
    "/images/bhoomi-black",      // Slide 1
    "/images/bhoomi-black",        // Slide 2  
    "/images/bhoomi-black"       // Slide 3
  ];

  const slides = [
    {
      id: 1,
      title: "India's Trusted IT Services Company for",
      highlight: "Future-Ready Businesses",
      subtitle: "We Build. We Grow. We Deliver- From Code to Customers.",
      description: "Bhoomi Techzone helps startups, SMEs, and enterprises build powerful IT Services Company- from custom software to data-driven marketing strategies.",
      buttonText: "View Portfolio",
      buttonLink: "/our-clients",
      secondaryButtonText: "Know Us",
      secondaryButtonLink: "/about"
    },
    {
      id: 2,
      title: "Your Growth Starts with the Right Website",
      highlight: "Development Company",
      subtitle: "SEO-Ready, Mobile-First Websites That Convert Visitors Into Customers.",
      description: "We design and develop fast, responsive, and conversion-focused websites-built with SEO best practices and a strong user experience at the core.",
      buttonText: "Our Services",
      buttonLink: "/services",
      secondaryButtonText: "Projects",
      secondaryButtonLink: "/our-clients"
    },
    {
      id: 3,
      title: "Result-Driven Digital Marketing Services That Grow ",
      highlight: "Your Brand Online",
      subtitle: "SEO · Social Media · PPC · Content Marketing-All Under One Roof.",
      description: "Bhoomi Techzone helps businesses increase online visibility, drive qualified traffic, and generate consistent leads through targeted SEO and digital marketing campaigns.",
      buttonText: "Get Started",
      buttonLink: "/contact",
      secondaryButtonText: "Services",
      secondaryButtonLink: "/services"
    }
  ];

  // Autoplay carousel every 4 seconds
  useEffect(() => {
    if (!autoPlay) return;
    
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, slides.length]);

  // Lightweight CSS-based background - no JavaScript animations needed

  return (
    <section className={styles.heroBanner}>
      {/* CSS Animated Gradient Background */}
      <div className={styles.particleCanvas} />

      {/* 3D Cube */}
      <div className={styles.cubeContainer}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}>
            <picture>
              <source srcSet="/images/bhoomi-black.webp" type="image/webp" />
              <img src="/images/bhoomi-black.png" width="164" height="160" alt="Bhoomi Techzone Private Limited - Software Development Company Logo" className={styles.faceImage} />
            </picture>
          </div>
          <div className={`${styles.face} ${styles.back}`}>
            <picture>
              <source srcSet="/images/bhoomi-black.webp" type="image/webp" />
              <img src="/images/bhoomi-black.png" width="164" height="160" alt="Bhoomi Techzone - Web Development Services" className={styles.faceImage} />
            </picture>
          </div>
          <div className={`${styles.face} ${styles.right}`}>
            <picture>
              <source srcSet="/images/bhoomi-black.webp" type="image/webp" />
              <img src="/images/bhoomi-black.png" width="164" height="160" alt="Bhoomi Techzone - Mobile App Development" className={styles.faceImage} />
            </picture>
          </div>
          <div className={`${styles.face} ${styles.left}`}>
            <picture>
              <source srcSet="/images/bhoomi-black.webp" type="image/webp" />
              <img src="/images/bhoomi-black.png" width="164" height="160" alt="Bhoomi Techzone - Digital Marketing Agency" className={styles.faceImage} />
            </picture>
          </div>
          <div className={`${styles.face} ${styles.top}`}>
            <picture>
              <source srcSet="/images/bhoomi-black.webp" type="image/webp" />
              <img src="/images/bhoomi-black.png" width="164" height="160" alt="Bhoomi Techzone - Custom Software Solutions" className={styles.faceImage} />
            </picture>
          </div>
          <div className={`${styles.face} ${styles.bottom}`}>
            <picture>
              <source srcSet="/images/bhoomi-black.webp" type="image/webp" />
              <img src="/images/bhoomi-black.png" width="164" height="160" alt="Bhoomi Techzone - IT Consulting Services" className={styles.faceImage} />
            </picture>
          </div>
        </div>
      </div>
      
      {/* LIGHTWEIGHT CSS-BASED CAROUSEL (replacing 96KB Swiper) */}
      <div className={styles.carouselContainer}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`${styles.carouselSlide} ${currentSlide === index ? styles.active : ''}`}
          >
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <div className={styles.contentWrapper}>
                  <div className={styles.textContent}>
                    <h2 className={styles.slideTitle}>
                      <span className={styles.titlePart1}>{slide.title}</span>
                      <span className={styles.titleHighlight}>{slide.highlight}</span>
                    </h2>
                    <h3 className={styles.slideSubtitle}>
                      {slide.subtitle}
                    </h3>
                    <p className={styles.slideDescription}>
                      {slide.description}
                    </p>
                    <div className={styles.slideButtons}>
                      <a href={slide.buttonLink} className={styles.primaryButton}>
                        <span>{slide.buttonText}</span>
                      </a>
                      <a href={slide.secondaryButtonLink} className={styles.secondaryButton}>
                        <span>{slide.secondaryButtonText}</span>
                        <svg className={styles.buttonArrow} viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.imageContent}>
                    <div className={styles.heroImage}>
                      <picture>
                        <source srcSet={`${rightImages[index]}.webp`} type="image/webp" />
                        <img 
                          src={`${rightImages[index]}.png`}
                          alt={`${slide.title} ${slide.highlight}`}
                          className={styles.slideImage}
                          loading="lazy"
                        />
                      </picture>
                      <div className={styles.imageDecoration}></div>
                      <div className={styles.imageGlow}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        className={styles.swiperButtonPrev}
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className={styles.swiperButtonNext}
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className={styles.carouselPagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;