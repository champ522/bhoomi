import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Services.module.css';

const Services = () => {
  // Service images array
  const serviceImages = [
    "/images/sliderimg1.png",     // Website Development
    "/images/sliderimg2.png",     // App Development  
    "/images/dmarketing.png",   // Digital Marketing
    "/images/socialmediaa.png",        // Social Media Marketing
    "/images/appdev.png",     // Application Development
    "/images/softdev.png"         // Software Development
  ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Build websites that don't just look good - they perform. We design and develop SEO-ready, mobile-first websites that drive traffic and convert visitors into customers.",
      tags: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      route: "/web-development",
      buttonText: "Explore Web Services",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "App Development",
      description: "Your customers are on their phones. We build intuitive Android and iOS apps that keep your audience engaged and your business running smoothly - on every screen.",
      tags: ["iOS & Android", "Cross-Platform", "Native Apps", "UI/UX Design"],
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      route: "/mobile-app-development",
      buttonText: "View App Solutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Digital Marketing Services",
      description: "Great products need great visibility. Our digital marketing team runs result-focused campaigns across SEO, social media, PPC, and content marketing to get your brand in front of the right audience.",
      tags: ["SEO", "PPC Campaigns", "Content Marketing", "Analytics"],
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      route: "/digital-marketing",
      buttonText: "Grow Your Business",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Build meaningful connections with your audience across Instagram, Facebook, LinkedIn, and more. Our strategic campaigns boost brand awareness.",
      tags: ["Instagram", "Facebook", "LinkedIn", "Brand Strategy"],
      bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      route: "/social-media-marketing",
      buttonText: "Boost Your Reach",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Application Development",
      description: "Scalable web applications with robust backends and intuitive frontends for complex business needs. We deliver Custom Solutions and Cloud Ready applications.",
      tags: ["Custom Solutions", "Cloud Ready", "API Integration", "Secure"],
      bgImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&h=300&fit=crop",
      route: "/web-development",
      buttonText: "Build Your App",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M10 4v4h4V4"/>
          <circle cx="8" cy="14" r="2"/>
          <path d="M14 14h2v2h-2z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Software Development",
      description: "Tailored software solutions designed specifically for your unique business requirements and workflows. Our approach includes Bespoke Solutions.",
      tags: ["Custom Built", "Agile Process", "Easy Integration", "Support"],
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      route: "/software-development",
      buttonText: "Start Your Project",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Our Services</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            What We Do - Complete <span className={styles.titleHighlight}>IT Services</span> Under One Roof
          </h2>
          <p className={styles.sectionDescription}>
            From the first line of code to your first online sale, Bhoomi Techzone covers every step of your digital journey. Here's how our IT services company helps you move faster and smarter.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardInner}>
                {/* Front Side */}
                <div 
                  className={styles.cardFront}
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div className={styles.cardOverlay}>
                    <div className={styles.frontContent}>
                      <h3 className={styles.frontTitle}>{service.title}</h3>
                      <p className={styles.frontDescription}>{service.description}</p>
                      <div className={styles.tagsContainer}>
                        {service.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className={styles.cardBack}>
                  <div className={styles.backContent}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <h3 className={styles.backTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <Link to={service.route} className={styles.serviceButton}>
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;