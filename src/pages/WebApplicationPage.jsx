import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/WebApplicationPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebApplicationPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const projectsCount = useCounter(250, 2000, isStatsVisible);
  const satisfactionCount = useCounter(95, 2000, isStatsVisible);
  const performanceCount = useCounter(90, 1500, isStatsVisible);

  const webAppFeatures = [
    {
      title: "Progressive Web Apps",
      description: "Build fast, reliable PWAs that work offline and provide native app-like experiences",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Single Page Application", 
      description: "Dynamic SPAs with React, Angular, or Vue for seamless user experiences",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Real-Time Applications",
      description: "Live chat, notifications, collaborative tools with WebSocket and real-time updates",
      image: "/images/appdev.png"
    },
    {
      title: "API Integration",
      description: "RESTful APIs, GraphQL, third-party integrations, and microservices architecture",
      image: "/images/dmarketing.png"
    },
    {
      title: "Cloud-Based Solutions",
      description: "Scalable web applications hosted on AWS, Azure, or Google Cloud platforms",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Admin Dashboards",
      description: "Feature-rich admin panels with analytics, reporting, and management tools",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Secure Web Apps",
      description: "OAuth, JWT, two-factor authentication, and enterprise-grade security measures",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Web Application Development in Noida | Custom Web Apps"
        description="Elevate your business with our professional web application development in Noida. We build secure, scalable custom solutions that boost growth, efficiency, and user experience."
        keywords="Web Application Development, Web Application Development In noida"
        canonical="https://bhoomitechzone.in/web-application"
      />
      {/* Web Application Banner */}
      <section className={styles.webappBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Web Application Development in Noida</h1>
            <p className={styles.subtitle}>
              Build high-performance solutions with expert <strong style={{ fontWeight: 'bold' }}>Web Application Development in Noida</strong>, designed to streamline operations and enhance user experience. 
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Web Apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Content Section */}
      <section className={styles.webappSection}>
        <div className={styles.webappContainer}>
          <div className={styles.webappContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/c5602fdb-7a1c-4697-bb11-cb1b598557c7/g0Xn1ir7Th.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Customized</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.webappTitle}>
                Custom <span className={styles.highlight}>Web Application</span> Development Solutions
              </h2>
              <p className={styles.description}>
                We provide advanced Web Application Development <Link to="/services">services</Link> to help businesses build scalable, secure, and high-performing web apps. As a trusted provider of <strong style={{ color: 'black' }}>Web Application Development in Noida</strong>, we create solutions that streamline operations, improve efficiency, and enhance user experience.
              </p>
              <p className={styles.description}>
                From startups to enterprises, our web applications are designed to meet your unique requirements. Our <strong style={{ color: 'black' }}>Web Application Development services</strong> include customer portals, SaaS platforms, dashboards, and enterprise tools that deliver real business value. We focus on delivering future-ready solutions with modern <Link to="/technology">technologies</Link>, ensuring seamless integration, faster performance, and long-term scalability for your business growth.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{projectsCount}+</h3>
                  <p>Apps Delivered</p>
                </div>
                <div className={styles.stat}>
                  <h3>{satisfactionCount}%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className={styles.stat}>
                  <h3>{performanceCount}%</h3>
                  <p>Performance Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why are custom web applications essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              Custom web application development offers specialised solutions that precisely match your business procedures. It facilitates workflow automation, enhances teamwork, and integrates systems for increased efficiency. Businesses may create feature-rich apps that support their objectives and provide flawless user experiences across all platforms with the help of professional <strong style={{ color: 'black' }}>Web Application Development in Noida</strong>.
            </p>
            <p className={styles.paragraph}>
              Without custom applications, businesses often face inefficiencies, manual work, and limited scalability. Our <strong style={{ color: 'black' }}>Web Application Development in Noida</strong> solves these challenges with secure, scalable, and flexible solutions.With cutting-edge technologies, real-time functionality, and strict security guidelines, we develop high-performing web applications. Our solutions boost efficiency, facilitate long-term digital growth, and improve productivity for both startups and large corporations.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of custom web application development:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Tailored Functionality</h4>
                <p className={styles.reasonText}>Built specifically for your business processes, workflows, and requirements without unnecessary features or limitations.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Seamless Integration</h4>
                <p className={styles.reasonText}>Integrate with existing systems, databases, APIs, and third-party services for unified business operations.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Scalability & Performance</h4>
                <p className={styles.reasonText}>Built to scale with your business growth, handle increasing users, and maintain high performance under load.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Enhanced Security</h4>
                <p className={styles.reasonText}>Custom security measures, data encryption, access controls, and compliance with industry standards.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Competitive Advantage</h4>
                <p className={styles.reasonText}>Unique features and capabilities that differentiate your business and provide superior customer experiences.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR WEB APPLICATION SERVICES:</h3>
            <p className={styles.paragraph}>
              Our end-to-end <strong style={{ color: 'black' }}>Web Application Development in Noida</strong> offers scalable, secure, and high-performing solutions that are customized to your company's objectives, guaranteeing smooth integration, increased productivity, and outstanding user experiences across all platforms.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Progressive Web Apps (PWAs)</div>
              <div className={styles.serviceItem}>• Single Page Applications (SPAs)</div>
              <div className={styles.serviceItem}>• Real-Time Web Applications</div>
              <div className={styles.serviceItem}>• API Development & Integration</div>
              <div className={styles.serviceItem}>• Cloud-Based Solutions</div>
              <div className={styles.serviceItem}>• Admin Dashboards & Portals</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF WEB APPLICATION DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              Our approach focuses on delivering high-quality <strong style={{ color: 'black' }}>Web Application Development in Noida</strong> with a strong emphasis on performance, security, scalability, and user experience. We follow modern development practices to build reliable, future-ready web applications that help businesses grow and adapt in a competitive digital environment :
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Modern Tech Stack:</strong> We use advanced technologies like React, Node.js, Angular, and cloud platforms to deliver fast, scalable, and future-ready <strong style={{ color: 'black' }}>Web Application Development</strong> solutions tailored to your business needs.
              </li>
              <li className={styles.principleItem}>
                <strong>User-Centric Design:</strong> Our <strong style={{ color: 'black' }}>Web Application Service</strong> prioritizes intuitive, responsive, and user-friendly interfaces that enhance engagement and ensure a seamless experience across all devices.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Architecture:</strong> We design applications with scalable architecture that can handle increasing users, high traffic, and complex business operations without compromising performance.
              </li>
              <li className={styles.principleItem}>
                <strong>API-First Approach:</strong> Our development strategy includes flexible API integration, enabling smooth connectivity with mobile apps, third-party tools, and enterprise systems.
              </li>
              <li className={styles.principleItem}>
                <strong>Security by Design:</strong> Security is a core part of our <strong style={{ color: 'black' }}>Web Application Development</strong> process, with strong measures like encryption, authentication, authorization, and data protection to safeguard your business.
              </li>
              <li className={styles.principleItem}>
                <strong>Real-Time Features:</strong> We build applications with real-time capabilities such as live updates, notifications, chat systems, and instant data synchronization to improve efficiency.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> Our team ensures high-speed performance with optimized coding practices, caching strategies, and efficient database management.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Deployment:</strong> We follow continuous integration and deployment practices to deliver regular updates, faster improvements, and scalable <strong style={{ color: 'black' }}>Web Application Development in Noida</strong> solutions.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in web application development:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to web application development ensures we deliver solutions that perfectly align 
              with your business objectives and technical requirements. We follow an agile methodology that combines 
              planning, iterative development, and continuous feedback.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Discovery & Requirements Analysis</h4>
                  <p className={styles.stepText}>We analyze your business needs, user requirements, technical constraints, and project goals to create a comprehensive development roadmap.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Architecture & Design</h4>
                  <p className={styles.stepText}>Our team designs the system architecture, database schema, API structure, and UI/UX prototypes for stakeholder approval.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Agile Development</h4>
                  <p className={styles.stepText}>We develop the application in iterative sprints with regular demos, allowing for continuous feedback and adjustments.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Quality Assurance</h4>
                  <p className={styles.stepText}>Comprehensive testing including unit tests, integration tests, security audits, and user acceptance testing ensure reliability.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & Support</h4>
                  <p className={styles.stepText}>We deploy to production with monitoring, provide training, and offer ongoing maintenance and support for continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Features Section */}
      <section className={styles.webappFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Web App Solutions</span></h2>
            <p className={styles.sectionSubtitle}>Comprehensive web application development services for every business need</p>
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
            className={styles.webappSwiper}
          >
            {webAppFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.webappCard}>
                  <div className={styles.webappImage}>
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
                    <div className={styles.webappOverlay}>
                      <Link to="/contact" className={styles.webappButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.webappCardContent}>
                    <h3 className={styles.webappCardTitle}>{feature.title}</h3>
                    <p className={styles.webappDescription}>{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default WebApplicationPage;
