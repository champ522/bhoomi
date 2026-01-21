import React from 'react';
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
      {/* Web Development Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Web Development</h1>
            <p className={styles.subtitle}>
              Creating stunning, responsive websites that drive business growth
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
                We specialize in creating custom websites that combine stunning design with powerful functionality. 
                Our web development team uses cutting-edge technologies to build responsive, fast, and secure websites 
                that help your business stand out in the digital landscape.
              </p>
              <p className={styles.description}>
                From simple business websites to complex web applications, we deliver solutions that are tailored to 
                your specific needs. Our development process focuses on user experience, performance optimization, 
                and scalability to ensure your website grows with your business.
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
                src="https://lottie.host/97b6e0e6-223c-469d-aece-84a4ae835c37/fTvUjslsAk.json"
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
              In today's digital-first world, web development has become the cornerstone of business success. A professional website serves as your digital storefront, available 24/7 to showcase your products, services, and brand value to potential customers worldwide. With over 4.9 billion internet users globally, having a strong web presence is no longer optional—it's essential for survival and growth in any competitive market.
            </p>
            <p className={styles.paragraph}>
              Modern consumers expect businesses to have a professional online presence. A well-designed website builds credibility, establishes trust, and provides customers with instant access to information about your business. It serves as a powerful marketing tool that can reach audiences far beyond traditional geographical boundaries, enabling small businesses to compete with larger enterprises on a level playing field.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 reasons behind website development:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Brand Visibility</h4>
                <p className={styles.reasonText}>A professional website increases your brand's online visibility, making it easier for potential customers to find and learn about your business through search engines.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. 24/7 Business Accessibility</h4>
                <p className={styles.reasonText}>Unlike physical stores, websites operate round the clock, allowing customers to access information, make purchases, or contact you anytime, anywhere.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Cost-Effective Marketing</h4>
                <p className={styles.reasonText}>Digital marketing through websites is more affordable than traditional advertising methods while offering better targeting and measurable results.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Competitive Advantage</h4>
                <p className={styles.reasonText}>A modern, user-friendly website sets you apart from competitors who may lack an online presence or have outdated web solutions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Customer Engagement & Analytics</h4>
                <p className={styles.reasonText}>Websites provide valuable insights into customer behavior, preferences, and demographics, helping you make data-driven business decisions.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive web development services tailored to meet diverse business needs. Our expert team specializes in creating responsive, SEO-optimized websites that deliver exceptional user experiences across all devices. From simple business websites to complex e-commerce platforms and web applications, we provide end-to-end solutions that drive results.
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
              At Bhoomi Techzone, we believe in creating websites that truly serve our clients' needs. Our development philosophy centers around these key principles that guide every project we undertake:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User-First Design:</strong> We put your users at the heart of everything we build. Every button, page, and feature is designed with real people in mind, making sure your website is easy to use and enjoyable to navigate.
              </li>
              <li className={styles.principleItem}>
                <strong>Speed That Matters:</strong> Nobody likes waiting for slow websites. We optimize every line of code to ensure your site loads lightning-fast, keeping your visitors happy and engaged.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-First Thinking:</strong> Since most people browse on their phones these days, we design for mobile devices first, then scale up. Your website will look and work perfectly on any screen size.
              </li>
              <li className={styles.principleItem}>
                <strong>Search Engine Friendly:</strong> What's the point of a beautiful website if no one can find it? We build SEO into the foundation of your site, helping you rank higher on Google and attract more visitors.
              </li>
              <li className={styles.principleItem}>
                <strong>Built to Grow:</strong> Your business will evolve, and your website should too. We create flexible, scalable solutions that can expand with your needs without requiring a complete rebuild.
              </li>
              <li className={styles.principleItem}>
                <strong>Consistency is Key:</strong> Every page, button, and interaction feels familiar and predictable. We maintain visual and functional consistency throughout your entire website, making it easy for users to navigate and understand.
              </li>
              <li className={styles.principleItem}>
                <strong>Keep It Simple:</strong> We believe in the power of simplicity. Clean designs, clear messaging, and intuitive interfaces ensure your visitors can find what they need quickly without getting confused or overwhelmed.
              </li>
              <li className={styles.principleItem}>
                <strong>Always Deliver the Best:</strong> We're not satisfied until it's perfect. From the smallest detail to the overall experience, we strive for excellence in every aspect of your website, ensuring you get nothing but the best quality.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in web design process:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to web development ensures that every project is delivered on time, within budget, and exceeds client expectations. We follow a proven methodology that combines creativity with technical expertise.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Discovery & Planning</h4>
                  <p className={styles.stepText}>We start by understanding your business goals, target audience, and project requirements through comprehensive consultation.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Design & Wireframing</h4>
                  <p className={styles.stepText}>Our design team creates wireframes and mockups that align with your brand identity and user experience goals.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Coding</h4>
                  <p className={styles.stepText}>Our developers bring designs to life using modern technologies and best coding practices for optimal performance.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Quality Assurance</h4>
                  <p className={styles.stepText}>Rigorous testing across different devices and browsers ensures flawless functionality and user experience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Launch & Ongoing Support</h4>
                  <p className={styles.stepText}>We handle the launch process and provide ongoing maintenance and support to keep your website running smoothly.</p>
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
                    <img src={project.image} alt={project.title} />
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