import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/SoftwareDevelopmentPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SoftwareDevelopmentPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const solutionsCount = useCounter(200, 2000, isStatsVisible);
  const uptimeCount = useCounter(98, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Enterprise Software",
      description: "Robust enterprise solutions for large-scale business operations",
      image: "/images/softdev.png"
    },
    {
      title: "CRM Systems", 
      description: "Customer relationship management systems to streamline sales processes",
      image: "/images/sliderimg1.png"
    },
    {
      title: "ERP Solutions",
      description: "Enterprise resource planning software for complete business management",
      image: "/images/appdev.png"
    },
    {
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Desktop Applications",
      description: "Native desktop software for Windows, macOS, and Linux platforms",
      image: "/images/softdev.png"
    },
    {
      title: "LMS Solutions",
      description: "Comprehensive learning platforms for educational institutions and corporate training",
      image: "/images/sliderimg1.png"
    },
    {
      title: "API Development",
      description: "RESTful APIs and microservices for seamless system integration",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone- Software Development Company in Noida"
        description="Choose our Software Development Company in Noida  and Software Development Services for expert web and mobile apps. Save time and costs on projects that grow. Contact us today!"
        keywords="Software Development Company in Noida, Software Development Services"
        canonical="https://bhoomitechzone.in/software-development"
      />
      {/* Software Development Banner */}
      <section className={styles.softwareDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Software Development Company in Noida</h1>
            <p className={styles.subtitle}>
              Custom software solutions tailored to your business needs
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Software Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Content Section */}
      <section className={styles.softwareDevSection}>
        <div className={styles.softwareDevContainer}>
          <div className={styles.softwareDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Bespoke</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.softwareDevTitle}>
                <span className={styles.highlight}>Software </span> Development
              </h2>
              <p className={styles.description}>
                We specialize in developing custom software solutions that address your unique business challenges with precision and purpose. Our team as a trusted Software Development Company in Noida uses modern programming languages and frameworks to build scalable, secure, and maintainable applications that integrate seamlessly with your existing systems and workflows, driving efficiency and measurable growth across your organization. 
              </p>
              <p className={styles.description}>
                From enterprise-level applications to specialized business tools, we deliver software solutions designed to evolve alongside your business. As a reliable Software Development Company in Noida, our development approach emphasizes clean code, robust architecture, and thorough testing to ensure your software performs reliably in production environments - today and in the years ahead.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{solutionsCount}+</h3>
                  <p>Software Solutions</p>
                </div>
                <div className={styles.stat}>
                  <h3>{uptimeCount}%</h3>
                  <p>Uptime Guarantee</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Enterprise-Grade Solutions</h4>
                  <p>Scalable software for growing businesses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is custom software development essential for business success?</h3>
            <p className={styles.paragraph}>
              In today's competitive business landscape, off-the-shelf software often falls short of meeting specific operational requirements. As a dedicated Software Development Company in Noida, we provide businesses with tailored solutions that align perfectly with their unique processes, workflows, and strategic objectives. Unlike generic software, custom applications are built to solve your exact problems while providing the flexibility to scale and adapt as your business grows over time.
            </p>
            <p className={styles.paragraph}>
              Custom software eliminates the limitations imposed by generic solutions, offering complete control over functionality, user experience, and integration capabilities. A professional Software Development Company in Noida helps you gain a genuine competitive advantage by automating complex business processes, improving operational efficiency, and enabling data-driven decision making through advanced analytics and reporting features that are designed specifically for your business model and goals.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 benefits of custom software development:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Perfect Business Fit</h4>
                <p className={styles.reasonText}>Custom software is built specifically for your business processes, ensuring perfect alignment with your operational requirements and workflows. A trusted Software Development Company in Noida ensures every feature, every module, and every user flow is designed around how your team actually works - not how a generic vendor assumes you do.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Scalability & Flexibility</h4>
                <p className={styles.reasonText}>Easily scale and modify your software as your business grows, adding new features and capabilities without being constrained by vendor limitations. With the support of a Software Development Company in Noida, your software grows right along with you.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Security</h4>
                <p className={styles.reasonText}>Custom software provides superior security through personalized protection measures, reducing vulnerabilities common in widely-used commercial software. A professional Software Development Company in Noida gives you full control over security protocols, access levels, and data handling practices.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Cost-Effective Long-term</h4>
                <p className={styles.reasonText}>While the initial investment may be higher, custom software eliminates recurring licensing fees and reduces dependency on multiple third-party solutions. Working with a Software Development Company in Noida ensures long-term ROI and sustainability.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Competitive Advantage</h4>
                <p className={styles.reasonText}>Unique software solutions give you a competitive edge by enabling proprietary processes and capabilities that competitors simply cannot replicate. A strategic Software Development Company in Noida helps transform your software into a true business asset.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SOFTWARE DEVELOPMENT SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers end-to-end Software Development <Link to="/services">Services</Link> that cover the entire software lifecycle from initial consultation to ongoing maintenance. As a leading Software Development Company in Noida, our experienced development team specializes in creating robust, scalable software solutions using cutting-edge technologies and industry best practices - ensuring that every product we deliver is built to perform under real-world conditions.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Enterprise Software Development</div>
              <div className={styles.serviceItem}>• Desktop Application Development</div>
              <div className={styles.serviceItem}>• Database Design & Management</div>
              <div className={styles.serviceItem}>• API Development & Integration</div>
              <div className={styles.serviceItem}>• Legacy System Modernization</div>
              <div className={styles.serviceItem}>• Software Maintenance & Support</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF SOFTWARE development:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe in creating software that not only meets current needs but also anticipates future requirements. Our software development philosophy as a result-driven Software Development Company in Noida is grounded in principles that ensure every solution we deliver is robust, maintainable, and future-ready.
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Requirement-Driven Development:</strong> We thoroughly analyze your business requirements to create software that addresses real problems and delivers measurable value to your organization at every stage of the project lifecycle.
              </li>
              <li className={styles.principleItem}>
                <strong>Clean Code Architecture:</strong> We write clean, well-documented code that is easy to maintain, modify, and scale, ensuring your software remains manageable as it grows in complexity and your team expands.
              </li>
              <li className={styles.principleItem}>
                <strong>Robust Testing Framework:</strong> Every piece of software undergoes rigorous testing including unit tests, integration tests, and user acceptance testing to ensure reliability and consistent performance across environments.
              </li>
              <li className={styles.principleItem}>
                <strong>Security-First Approach:</strong> We implement security measures at every layer of your software, following best practices used by every top Software Development Company in Noida, protecting your business and user data against threats.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Infrastructure:</strong> Our software is built with growth in mind, using modular architecture and cloud-ready technologies that can handle increasing loads and feature expansions without requiring a complete rebuild.
              </li>
              <li className={styles.principleItem}>
                <strong>Seamless Integration:</strong> We ensure your new software integrates smoothly with existing systems, maintaining data consistency and workflow continuity across your entire technology stack.
              </li>
              <li className={styles.principleItem}>
                <strong>User-Centric Design:</strong> While focusing on functionality, we never compromise on user experience, creating intuitive interfaces that enhance productivity and user satisfaction from day one.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Improvement:</strong> We provide ongoing support and enhancement services, continuously optimizing your software based on user feedback and changing business needs over time - a core strength of a reliable Software Development Company in Noida.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in software development process:</h3>
            <p className={styles.paragraph}>
              Our comprehensive Software Development <Link to="/services">Services</Link> methodology ensures successful project delivery through clear phases, regular communication, and quality checkpoints. As an experienced Software Development Company in Noida, we follow an agile approach that allows for flexibility while maintaining strict quality standards and timeline adherence throughout the project.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Requirements Analysis</h4>
                  <p className={styles.stepText}> We conduct comprehensive business analysis to understand your requirements, workflows, and technical constraints for optimal solution design. Our team works closely with your stakeholders to document every need clearly before a single line of code is written.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Architecture Design</h4>
                  <p className={styles.stepText}>Our architects design scalable system architecture and create detailed technical specifications that guide the entire development process. This phase ensures that the foundation of your software is solid, secure, and built to handle your long-term growth.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Implementation</h4>
                  <p className={styles.stepText}>Our developers build your software using agile methodologies, ensuring regular progress updates and stakeholder feedback integration at every sprint. As a reliable Software Development Company in Noida, we keep you involved and informed throughout the entire build process.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Quality Assurance & Testing</h4>
                  <p className={styles.stepText}>Comprehensive testing including functional, performance, and security testing ensures your software meets all quality standards and requirements before it ever reaches your users or production environment.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & Support</h4>
                  <p className={styles.stepText}>We handle deployment, provide user training, and offer ongoing maintenance and support to ensure continued software success. As your long-term Software Development Company in Noida, our relationship doesn't end at launch - we stay with you as your technology partner.</p>
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
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Software Solutions</span></h2>
            <p className={styles.sectionSubtitle}>From enterprise systems to specialized business applications</p>
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

      {/* Include other components similar to other development pages */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default SoftwareDevelopmentPage;