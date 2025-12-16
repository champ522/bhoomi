import React, { useRef, useEffect } from 'react';
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
    "/images/sliderimg1.png",      // Slide 1
    "/images/sliderimg2.png",        // Slide 2  
    "/images/bhoomilogo.png"       // Slide 3
  ];

  const slides = [
    {
      id: 1,
      title: "Transform Your",
      highlight: "Digital Future",
      subtitle: "Innovative Solutions for Modern Businesses",
      description: "We create cutting-edge software solutions that drive growth, enhance efficiency, and transform your business for the digital age.",
      buttonText: "Get Started",
      buttonLink: "#contact",
      image: "/images/bhoomilogo.png"
    },
    {
      id: 2,
      title: "Expert Software",
      highlight: "Development",
      subtitle: "Custom Applications & Web Solutions",
      description: "From web applications to mobile apps, we deliver powerful, scalable solutions tailored to your specific business requirements.",
      buttonText: "Our Services",
      buttonLink: "#services",
      image: "/images/bhoomilogo.png"
    },
    {
      id: 3,
      title: "Innovation Meets",
      highlight: "Excellence",
      subtitle: "Your Trusted Technology Partner",
      description: "Join hundreds of satisfied clients who have transformed their businesses with our comprehensive technology solutions and expert guidance.",
      buttonText: "View Portfolio",
      buttonLink: "#portfolio",
      image: "/images/bhoomilogo.png"
    }
  ];



  return (
    <section className={styles.heroBanner}>
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
            <div className={styles.slideBackground}>
              <div 
                className={styles.backgroundImage} 
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              ></div>
              <div className={styles.backgroundPattern}></div>
              <div className={styles.floatingElements}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`${styles.floatingElement} ${styles[`element${i + 1}`]}`}></div>
                ))}
              </div>
            </div>
            
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <div className={styles.contentWrapper}>
                  <div className={styles.textContent} data-swiper-parallax="-300">
                    <h1 className={styles.slideTitle} data-swiper-parallax="-200">
                      <span className={styles.titlePart1}>{slide.title}</span>
                      <span className={styles.titleHighlight}>{slide.highlight}</span>
                    </h1>
                    <h2 className={styles.slideSubtitle} data-swiper-parallax="-100">
                      {slide.subtitle}
                    </h2>
                    <p className={styles.slideDescription} data-swiper-parallax="0">
                      {slide.description}
                    </p>
                    <div className={styles.slideButtons} data-swiper-parallax="100">
                      <a href={slide.buttonLink} className={styles.primaryButton}>
                        <span>{slide.buttonText}</span>
                      </a>
                      <a href="#about" className={styles.secondaryButton}>
                        <span>Learn More</span>
                        <svg className={styles.buttonArrow} viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.imageContent} data-swiper-parallax="300">
                    <div className={styles.heroImage}>
                      <img 
                        src={rightImages[index]}
                        alt={`${slide.title} ${slide.highlight}`}
                        className={styles.slideImage}
                      />
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