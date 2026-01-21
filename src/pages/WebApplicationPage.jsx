import React from 'react';
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
      {/* Web Application Banner */}
      <section className={styles.webappBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Customized Web Apps</h1>
            <p className={styles.subtitle}>
              Build powerful, scalable web applications tailored to your business needs
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
                <span className={styles.highlight}>Custom </span> Web Apps
              </h2>
              <p className={styles.description}>
                We develop custom web applications that transform your business processes and deliver exceptional 
                user experiences. Our web apps are built with modern technologies, scalable architectures, and 
                user-centric design principles to solve complex business challenges and drive digital transformation.
              </p>
              <p className={styles.description}>
                From startups to enterprises, our web applications adapt to your unique requirements and scale with 
                your growth. Whether you need a customer portal, SaaS platform, internal business tool, or data 
                analytics dashboard, we create solutions that enhance productivity, improve efficiency, and deliver 
                measurable business value.
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
              Custom web applications provide tailored solutions that off-the-shelf software cannot match. They address 
              your specific business processes, integrate seamlessly with existing systems, scale with your growth, and 
              provide competitive advantages through unique features and workflows. Web applications are accessible from 
              any device with a browser, require no installation, enable real-time collaboration, and can be updated 
              instantly without user intervention.
            </p>
            <p className={styles.paragraph}>
              Businesses without custom web applications often struggle with inefficient processes, manual data entry, 
              disconnected systems, limited scalability, and inability to adapt software to changing needs. Our custom 
              web application development eliminates these challenges by creating purpose-built solutions with automated 
              workflows, seamless integrations, real-time data access, responsive design, and the flexibility to evolve 
              with your business requirements.
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
              Bhoomi Techzone develops comprehensive web applications with cutting-edge technologies and best practices. 
              Our solutions are fully customizable to your business domain, target audience, and technical requirements.
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
              At Bhoomi Techzone, we build web applications that deliver exceptional performance, security, and user 
              experiences. Our development approach focuses on creating robust, scalable, and maintainable solutions 
              using modern technologies and industry best practices:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Modern Tech Stack:</strong> We use cutting-edge technologies like React, Node.js, Angular, Vue, 
                Python, .NET, and cloud platforms to build fast, reliable, and future-proof web applications.
              </li>
              <li className={styles.principleItem}>
                <strong>User-Centric Design:</strong> Our applications prioritize user experience with intuitive interfaces, 
                responsive design, accessibility features, and seamless navigation across all devices.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Architecture:</strong> We design applications with microservices, cloud infrastructure, 
                load balancing, and database optimization to handle growth and traffic spikes effortlessly.
              </li>
              <li className={styles.principleItem}>
                <strong>API-First Approach:</strong> RESTful APIs and GraphQL enable flexible integrations, mobile apps, 
                third-party connections, and future extensibility without rewriting core functionality.
              </li>
              <li className={styles.principleItem}>
                <strong>Security by Design:</strong> Built-in security with encryption, authentication, authorization, 
                input validation, SQL injection prevention, and regular security audits.
              </li>
              <li className={styles.principleItem}>
                <strong>Real-Time Features:</strong> WebSocket integration enables live updates, real-time notifications, 
                chat functionality, collaborative editing, and instant data synchronization.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> Code splitting, lazy loading, caching strategies, CDN integration, 
                and database optimization ensure fast load times and smooth interactions.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Deployment:</strong> CI/CD pipelines, automated testing, version control, and monitoring 
                enable rapid updates, bug fixes, and feature releases with zero downtime.
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
                    <img src={feature.image} alt={feature.title} />
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
