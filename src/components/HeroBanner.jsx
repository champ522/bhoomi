import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';
import styles from '../styles/HeroBanner.module.css';

const HeroBanner = () => {
  const swiperRef = useRef(null);

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
      
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        parallax={true}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        pagination={{
          el: `.${styles.swiperPagination}`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${styles.customBullet}"><span class="${styles.bulletContent}"></span></span>`;
          },
        }}
        onSlideChange={() => {
          // Add slide change animations
          const activeSlide = document.querySelector('.swiper-slide-active');
          if (activeSlide) {
            activeSlide.classList.add(styles.slideAnimation);
            setTimeout(() => {
              activeSlide.classList.remove(styles.slideAnimation);
            }, 1000);
          }
        }}
        className={styles.heroSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles.heroSlide}>
            
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <div className={styles.contentWrapper}>
                  <div className={styles.textContent} data-swiper-parallax="-300">
                    <h2 className={styles.slideTitle} data-swiper-parallax="-200">
                      <span className={styles.titlePart1}>{slide.title}</span>
                      <span className={styles.titleHighlight}>{slide.highlight}</span>
                    </h2>
                    <h3 className={styles.slideSubtitle} data-swiper-parallax="-100">
                      {slide.subtitle}
                    </h3>
                    <p className={styles.slideDescription} data-swiper-parallax="0">
                      {slide.description}
                    </p>
                    <div className={styles.slideButtons} data-swiper-parallax="100">
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
                  
                  <div className={styles.imageContent} data-swiper-parallax="300">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className={styles.swiperButtonPrev}>
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={styles.swiperButtonNext}>
        <svg viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Custom Pagination */}
      {/* <div className={styles.swiperPagination}></div> */}
    </section>
  );
};

export default HeroBanner;