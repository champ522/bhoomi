import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import * as THREE from 'three';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';
import styles from '../styles/HeroBanner.module.css';

const HeroBanner = () => {
  const swiperRef = useRef(null);
  const canvasRef = useRef(null);

  // Right side images array
  const rightImages = [
    "/images/bhoomi-black.png",      // Slide 1
    "/images/bhoomi-black.png",        // Slide 2  
    "/images/bhoomi-black.png"       // Slide 3
  ];

  const slides = [
    {
      id: 1,
      title: "Innovation Meets",
      highlight: "Excellence",
      subtitle: "Your Trusted Technology Partner",
      description: "Join hundreds of satisfied clients who have transformed their businesses with our comprehensive technology solutions and expert guidance.",
      buttonText: "View Portfolio",
      buttonLink: "/our-clients"
    },
    {
      id: 2,
      title: "Expert Software",
      highlight: "Development",
      subtitle: "Custom Applications & Web Solutions",
      description: "From web applications to mobile apps, we deliver powerful, scalable solutions tailored to your specific business requirements.",
      buttonText: "Our Services",
      buttonLink: "/services"
    },
    {
      id: 3,
      title: "Transform Your",
      highlight: "Digital Future",
      subtitle: "Innovative Solutions for Modern Businesses",
      description: "We create cutting-edge software solutions that drive growth, enhance efficiency, and transform your business for the digital age.",
      buttonText: "Get Started",
      buttonLink: "/contact"
    }
  ];

  // Particle Background Effect (3D with Three.js)
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    // Green color variations
    const colors = [
      new THREE.Color(0x4CAF50),
      new THREE.Color(0x28a745),
      new THREE.Color(0x03ba58),
      new THREE.Color(0x0bca81)
    ];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Color
      const color = colors[Math.floor(Math.random() * colors.length)];
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animate() {
      requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Move with mouse
      particlesMesh.rotation.y += mouseX * 0.001;
      particlesMesh.rotation.x += mouseY * 0.001;

      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);


  return (
    <section className={styles.heroBanner}>
      {/* Particle Background */}
      <div ref={canvasRef} className={styles.particleCanvas} />
      
      {/* 3D Cube */}
      <div className={styles.cubeContainer}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}>
            <img src="/images/bhoomi-black.png" alt="Bhoomi Tech" className={styles.faceImage} />
          </div>
          <div className={`${styles.face} ${styles.back}`}>
            <img src="/images/bhoomi-black.png" alt="Bhoomi Tech" className={styles.faceImage} />
          </div>
          <div className={`${styles.face} ${styles.right}`}>
            <img src="/images/bhoomi-black.png" alt="Bhoomi Tech" className={styles.faceImage} />
          </div>
          <div className={`${styles.face} ${styles.left}`}>
            <img src="/images/bhoomi-black.png" alt="Bhoomi Tech" className={styles.faceImage} />
          </div>
          <div className={`${styles.face} ${styles.top}`}>
            <img src="/images/bhoomi-black.png" alt="Bhoomi Tech" className={styles.faceImage} />
          </div>
          <div className={`${styles.face} ${styles.bottom}`}>
            <img src="/images/bhoomi-black.png" alt="Bhoomi Tech" className={styles.faceImage} />
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
                      <a href="/about" className={styles.secondaryButton}>
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