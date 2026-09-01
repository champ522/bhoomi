import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/WebDevelopmentPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebDevelopmentPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();

  const websitesCount = useCounter(150, 2000, isStatsVisible);
  const satisfactionCount = useCounter(99, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Business Websites",
      description: "Professional corporate websites that establish your brand presence online",
      image: "/images/sliderimg1.png"
    },
    {
      title: "E-commerce Stores",
      description: "Full-featured online stores with secure payment processing",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Web Applications",
      description: "Custom web applications tailored to your business processes",
      image: "/images/appdev.png"
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages optimized for marketing campaigns",
      image: "/images/dmarketing.png"
    },
    {
      title: "Portfolio Websites",
      description: "Stunning portfolio websites to showcase your work and achievements",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Blog & News Sites",
      description: "Content-rich websites with CMS for easy blog and news management",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Booking Systems",
      description: "Online booking and appointment scheduling systems for service businesses",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone- Website Development Company"
        description="Bhoomi Techzone is a leading website development company offering custom web development services to build fast, responsive, and SEO-friendly websites."
        keywords="Web Development Services, Website Development Company"
        canonical="https://bhoomitechzone.in/web-development"
      />
      {/* Web Development Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}> Website Development Company - Bhoomi Techzone</h1>
            <p className={styles.subtitle}>
              Creating stunning, responsive websites that drive real business growth and results.
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Content Section */}
      <section className={styles.webDevSection}>
        <div className={styles.webDevContainer}>
          <div className={styles.webDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Professional</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.webDevTitle}>
                <span className={styles.highlight}>Web </span> Development
              </h2>
              <p className={styles.description}>
                As a trusted Website Development Company in Noida, we specialize in creating custom websites that combine stunning design with powerful functionality. Our web development team uses cutting-edge technologies to build responsive, fast, and secure websites tailored to your business needs - helping your brand stand out and perform in today's competitive digital landscape.
              </p>
              <p className={styles.description}>
                From simple business websites to complex web applications, we deliver solutions designed around your specific requirements. Our development process focuses on user experience, performance optimization, and scalability - ensuring your website not only looks great but actively drives traffic, generates leads, and grows alongside your business at every stage.
              </p>

              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{websitesCount}+</h3>
                  <p>Websites Delivered</p>
                </div>
                <div className={styles.stat}>
                  <h3>{satisfactionCount}%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_vnikrcia.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Modern Web Solutions</h4>
                  <p>Cutting-edge technology for your business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is web development important in today's competitive world?</h3>
            <p className={styles.paragraph}>
              In today's digital-first world, web development has become the cornerstone of business success. A professional Website Development Company builds your digital storefront - available 24/7 to showcase your products, services, and brand value to potential customers worldwide. With over 4.9 billion internet users globally, having a strong web presence is no longer optional. It is an essential driver of growth and credibility in any competitive market today.
            </p>
            <p className={styles.paragraph}>
              Modern customers expect businesses to maintain a professional online presence. A well-developed website builds trust, establishes credibility, and provides visitors with instant access to information about your business. It serves as a powerful marketing tool that can reach audiences beyond traditional geographical boundaries - enabling small businesses to compete effectively with large enterprises on a completely level playing field.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 reasons behind website development:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Brand Visibility</h4>
                <p className={styles.reasonText}>A professional website increases your brand's online visibility, making it easier for potential customers to find and learn about your business through search engines.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. 24/7 Business Accessibility</h4>
                <p className={styles.reasonText}>Unlike physical stores, websites operate round the clock - allowing customers to access information, make purchases, or contact you anytime, anywhere.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Cost-Effective Marketing</h4>
                <p className={styles.reasonText}>Digital marketing through your website is far more affordable than traditional advertising, while offering better audience targeting and measurable, trackable results.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Competitive Advantage</h4>
                <p className={styles.reasonText}>A modern, user-friendly website sets you apart from competitors who may lack an online presence or rely on outdated web solutions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Customer Engagement & Analytics</h4>
                <p className={styles.reasonText}>Websites provide valuable insights into customer behavior, preferences, and demographics - helping you make smarter, data-driven decisions that fuel business growth.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone, a leading Website Development Company, offers comprehensive web development services tailored to meet diverse business needs. Our expert team specializes in creating responsive, <Link to="/seo-optimization">SEO-optimized</Link> websites that deliver exceptional user experiences across all devices - from simple business websites to complex <Link to="/ecommerce-platform">e-commerce platforms</Link> and web applications.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Custom Website Design & Development</div>
              <div className={styles.serviceItem}>• E-commerce Development & Integration</div>
              <div className={styles.serviceItem}>• Content Management Systems (CMS)</div>
              <div className={styles.serviceItem}>• Progressive Web Applications (PWA)</div>
              <div className={styles.serviceItem}>• API Development & Integration</div>
              <div className={styles.serviceItem}>• Website Maintenance & Support</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF WEB development:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe in creating websites that truly serve our clients' needs. As a results-driven Website Development Company, our development philosophy centers around these key principles that guide every project we undertake:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User-First Design:</strong>  We put your users at the heart of everything we build. Every button, page, and feature is designed with real people in mind - making your website intuitive, easy to use, and effortless to navigate.
              </li>
              <li className={styles.principleItem}>
                <strong>Speed That Matters:</strong> Nobody tolerates slow websites. We optimize every line of code to ensure your site loads at lightning-fast speeds, keeping your visitors happy, engaged, and converting.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-First Thinking:</strong> Since most people browse on mobile devices, we design for mobile first, then scale up. Your website will look and perform perfectly on any screen size, on any device.
              </li>
              <li className={styles.principleItem}>
                <strong>Search Engine Friendly:</strong> What's the point of a beautiful website no one can find? We build SEO into the foundation of your site - helping you rank higher on Google and consistently attract more visitors.
              </li>
              <li className={styles.principleItem}>
                <strong>Built to Grow:</strong> Your business will evolve, and your website should too. We build flexible, scalable solutions that expand with your needs without requiring a costly complete rebuild.
              </li>
              <li className={styles.principleItem}>
                <strong>Consistency is Key:</strong> Every page, button, and interaction feels familiar and predictable. We maintain full visual and functional consistency throughout your website, making it easy for users to navigate and understand with confidence.
              </li>
              <li className={styles.principleItem}>
                <strong>Keep It Simple:</strong> We believe in the power of simplicity. Clean design, clear messaging, and intuitive interfaces ensure your visitors find what they need quickly - without confusion or frustration.
              </li>
              <li className={styles.principleItem}>
                <strong>Always Deliver the Best:</strong> Not satisfied until it's perfect. From the smallest detail to the overall experience, we strive for excellence in every aspect of your website - ensuring you get nothing but the very best quality.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in web design process:</h3>
            <p className={styles.paragraph}>
              Our systematic approach as a trusted Website Development Company ensures that every project is delivered on time, within budget, and exceeds client expectations. We follow a proven, transparent methodology that seamlessly combines creativity with deep technical expertise at every step.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Discovery & Planning</h4>
                  <p className={styles.stepText}>We start by understanding your business goals, target audience, and project requirements through a comprehensive consultation and discovery session.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Design & Wireframing</h4>
                  <p className={styles.stepText}>Our design team creates detailed wireframes and mockups that align perfectly with your brand identity and user experience goals.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Coding</h4>
                  <p className={styles.stepText}>Our developers bring designs to life using modern technologies and best coding practices, ensuring optimal performance and clean, maintainable code.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Quality Assurance</h4>
                  <p className={styles.stepText}>Rigorous testing across different devices and browsers ensures flawless functionality, perfect user experience, and zero performance issues at launch.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Launch & Ongoing Support</h4>
                  <p className={styles.stepText}>We handle the complete launch process and provide comprehensive ongoing maintenance and support to keep your website running smoothly always.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Project Types Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Web Projects</span></h2>
            <p className={styles.sectionSubtitle}>From simple websites to complex web applications</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className={styles.projectsSwiper}
          >
            {projectTypes.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} width="350" height="250" loading="lazy" />
                    <div className={styles.projectOverlay}>
                      <Link to="/contact" className={styles.projectButton}>Get Quote</Link>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components similar to About page */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default WebDevelopmentPage;