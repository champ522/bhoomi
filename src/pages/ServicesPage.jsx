import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ServicesPage.module.css';
import WhyChooseBhoomiTechzone from '../components/WhyChooseBhoomiTechzone';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import CallToAction from '../components/CallToAction';
import Certifications from '../components/Certifications';

const ServicesPage = () => {
  // Service images array
  const serviceImages = [
  "https://assets2.lottiefiles.com/packages/lf20_vnikrcia.json",
  "https://assets7.lottiefiles.com/packages/lf20_5ngs2ksb.json",
  "https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",
  "https://assets6.lottiefiles.com/packages/lf20_2cwDXD.json",
  "https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json",
  "https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json"
];

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "We create visually stunning, user-friendly websites optimized for performance and conversions. From corporate sites to landing pages, our designs reflect your brand identity and engage your audience.",
      features: [
        "Responsive Design for All Devices",
        "SEO-Optimized Structure",
        "Fast Loading Performance",
        "Custom CMS Solutions",
        "E-commerce Integration",
        "SSL Security & Hosting"
      ],
      technologies: ["React", "Next.js", "Javascript", "HTML5", "CSS3"]
    },
    {
      id: 2,
      title: "App Development",
      description: "Build powerful iOS and Android applications with intuitive interfaces and robust functionality. We specialize in Flutter, React Native, and native development for seamless cross-platform experiences.",
      features: [
        "Cross-Platform Development",
        "Native iOS & Android Apps",
        "Real-time Synchronization",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization"
      ],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "MongoDB"]
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Drive measurable growth with data-driven digital marketing strategies. From SEO and PPC to content marketing and social media campaigns, we help you reach your target audience effectively.",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Analytics & Reporting",
        "Conversion Optimization"
      ],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "HubSpot"]
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Build meaningful connections with your audience across Instagram, Facebook, LinkedIn, and more. Our strategic social media campaigns boost brand awareness and drive customer engagement.",
      features: [
        "Social Media Strategy",
        "Content Creation & Design",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Advertising",
        "Performance Analytics"
      ],
      technologies: ["Hootsuite", "Buffer", "Canva", "Adobe Creative Suite", "Sprout Social", "Later"]
    },
    {
      id: 5,
      title: "Application Development",
      description: "Scalable web applications with robust backends and intuitive frontends for complex business needs. We deliver Custom Solutions, Cloud Ready applications, seamless API Integration, and Secure infrastructure for your business growth.",
      features: [
        "Custom Web Applications",
        "Enterprise Solutions",
        "Cloud-Ready Architecture",
        "API Development & Integration",
        "Database Design",
        "Security Implementation"
      ],
      technologies: ["Node.js", "Python", "Java", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: 6,
      title: "Software Development",
      description: "Tailored software solutions designed specifically for your unique business requirements and workflows. Our approach includes Bespoke Solutions, Agile methodology, Integration Ready systems, and ongoing Maintenance support.",
      features: [
        "Custom Software Solutions",
        "Legacy System Modernization",
        "Third-party Integrations",
        "Agile Development Process",
        "Quality Assurance Testing",
        "Ongoing Maintenance & Support"
      ],
      technologies: [".NET", "Java", "Python", "C++", "SQL Server", "Oracle"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Our IT Services | Web, App, Marketing & Software Solutions"
        description="Explore comprehensive IT services by Bhoomi Techzone: web development, mobile apps, digital marketing, SEO, ERP, CRM, HRM, LMS, billing software and more."
        keywords="IT services Noida, web development services, app development services, digital marketing services"
        canonical="https://bhoomitechzone.in/services"
      />
      {/* Services Banner */}
      <section className={styles.servicesBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Our Services</h1>
            <p className={styles.subtitle}>
              Comprehensive technology solutions to transform your business
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Your Existing Services Component */}
      <Services />

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          className={`${styles.serviceDetailSection} ${index % 2 === 1 ? styles.reverse : ''}`}
        >
          <div className={styles.container}>
            <div className={styles.serviceRow}>
              <div className={styles.serviceContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <div className={styles.serviceFeatures}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.serviceTechnologies}>
                  <h4 className={styles.techTitle}>Technologies:</h4>
                  <div className={styles.techBadges}>
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className={styles.getQuoteButton}>
                  Read More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              
              <div className={styles.serviceImage}>
                <div className={styles.imageContainer}>
                  {(index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) ? (
                    <lottie-player
                      src={serviceImages[index]}
                      background="transparent"
                      speed="0.5"
                      className={styles.serviceImg}
                      loop
                      autoplay
                    ></lottie-player>
                  ) : (
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title}
                      className={styles.serviceImg}
                    />
                  )}
                  <div className={styles.imageOverlay}>
                    <div className={styles.imageDecoration}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <WhyChooseBhoomiTechzone />
      <TechnologyStack />
      <WorkProcess />
      <Certifications />
      <CallToAction />              
    </>
  );
};

export default ServicesPage;