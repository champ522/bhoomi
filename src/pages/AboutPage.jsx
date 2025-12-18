import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import styles from '../styles/AboutPage.module.css';
import WhyChooseBhoomiTechzone from '../components/WhyChooseBhoomiTechzone';
import StatsCounter from '../components/StatsCounter';
import TechnologyStack from '../components/TechnologyStack';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <>
      {/* About Banner */}
      <section className={styles.aboutBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.subtitle}>
              Empowering businesses with innovative technology solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Welcome to</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.aboutTitle}>
                <span className={styles.highlight}>Bhoomi</span> Techzone Pvt. Ltd.
              </h2>
              <p className={styles.description}>
                Empowering businesses in Noida & NCR with cutting-edge technology since 2021. We are a passionate team of technology experts dedicated to transforming businesses through innovative software solutions. Our mission is to bridge the gap between complex technology and simple, effective business solutions.
              </p>
              <p className={styles.description}>
                With over 4 years of experience, we have successfully delivered 480+ projects to 389+ satisfied clients across various industries. Based in Noida, Bhoomi Techzone Pvt. Ltd. partners with businesses to create custom web solutions, mobile applications, and enterprise software that drive growth. Our team of experienced developers and digital strategists combines technical expertise with creative innovation to build solutions that truly make a difference.
              </p>
            </div>
            <div className={styles.imageContent}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/aboutimg.jpg"
                  alt="BhoomiTech About Us"
                  className={styles.aboutImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                  <div className={styles.placeholderIcon}>🏢</div>
                  <p>About BhoomiTech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Paragraphs */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Our Vision & Mission</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, our vision is to become a global leader in technology innovation, delivering world-class digital solutions that empower businesses to thrive in the digital age. We envision a future where technology seamlessly integrates with business operations, creating unprecedented opportunities for growth and success across Noida, NCR, and beyond. Our mission is to be the trusted technology partner for businesses of all sizes, providing cutting-edge solutions that transform ideas into digital realities.
            </p>
            
            <h3 className={styles.sectionHeading}>Our Expertise & Tech Stack</h3>
            <p className={styles.paragraph}>
              We leverage cutting-edge technologies and industry-leading frameworks to build robust, scalable solutions. Our expertise spans modern programming languages including Python for backend development and machine learning, Java for Android apps and enterprise solutions, React and Node.js for modern web applications, PHP and Laravel for dynamic websites, Dart and Kotlin for cross-platform mobile apps, and .NET for secure enterprise applications. We master cloud platforms like AWS, Google Cloud, and Azure, ensuring your solutions are scalable, secure, and future-ready.
            </p>
            
            <h3 className={styles.sectionHeading}>Why Choose Bhoomi Techzone</h3>
            <p className={styles.paragraph}>
              Choosing Bhoomi Techzone means partnering with a certified and recognized team that genuinely cares about your success. We are ISO 9001:2015 certified, recognized by Startup India, DPIIT, and MSME, and trusted by leading payment gateway providers like Razorpay. With 4+ years of experience, 480+ completed projects, 389+ happy customers, and 10 winning awards, we pride ourselves on our client-centric approach, transparent communication, and commitment to delivering results that exceed expectations. Our agile development methodology ensures faster time-to-market while maintaining the highest quality standards, with comprehensive post-launch support and competitive pricing.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseBhoomiTechzone />
      <StatsCounter />
      <TechnologyStack />
      <Testimonials />
    </>
  );
};

export default About;
