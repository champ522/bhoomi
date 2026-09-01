import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/AboutPage.module.css';
import WhyChooseBhoomiTechzone from '../components/WhyChooseBhoomiTechzone';
import StatsCounter from '../components/StatsCounter';
import TechnologyStack from '../components/TechnologyStack';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <>
      <SEOHead
        title="About Bhoomi Techzone | Leading IT Services Company in Noida"
        description="Know about Bhoomi Techzone, a trusted IT Services Company in Noida offering website development, digital marketing, and custom software solutions for business growth."
        keywords="About Bhoomi Techzone"
        canonical="https://bhoomitechzone.in/about"
      />
      {/* About Banner */}
      <section className={styles.aboutBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>About Bhoomi Techzone — Web Development & Digital Solutions Company</h1>
            <p className={styles.subtitle}>
              Bhoomi Techzone delivers cutting-edge web development, software solutions, and digital services — empowering businesses to grow and succeed online.
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
                <strong style={{ color: "#07552b" }} >About Bhoomi Techzone - since 2021,</strong> we have been empowering businesses across Noida & NCR with advanced technology solutions. We are a passionate team of technology experts dedicated to transforming businesses through innovative software that bridges the gap between complex technology and simple, effective business outcomes.
                 {' '}<Link to="/software-development">Software Development</Link> Company, <Link to="/web-development">Web Development</Link>, Mobile App Development, <Link to="/digital-marketing">Digital Marketing</Link>, SEO Services, Custom Software Solutions, Bhoomi Techzone, IT Company India, App Development Company, IT Support Services, Website Design Company, Best CRM Company, IT Services Company, Web Development Company, Custom Website Development, Best SEO Service Company, Mobile App Development Company, Best CRM for Small Business, SEO Services Company, eCommerce Website Development, Hospital Management System Software, Custom Software Development Company in India.
              </p>
              <p className={styles.description}>
                With over 4 years of experience, we have successfully delivered 480+ projects to 389+ satisfied clients across diverse industries. Headquartered in Noida, Bhoomi Techzone Pvt. Ltd. partners with businesses to create custom web solutions, mobile applications, and enterprise software that accelerate real growth. Our team of experienced developers and digital strategists blends technical expertise with creative innovation to build solutions that truly make a difference. We specialize in custom website development, mobile app development, SEO services, digital marketing, IT support, and CRM solutions for businesses of all sizes.
              </p>
            </div>
            <div className={styles.imageContent}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/aboutimg.jpg" width="382" height="273"
                  alt="About Bhoomi Techzone"
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
              At Bhoomi Techzone, our vision is to become a global leader in technology innovation - delivering world-class digital solutions that empower businesses to thrive in the digital age. About Bhoomi Techzone's mission is to be the most trusted technology partner for businesses of all sizes, providing cutting-edge solutions that transform ideas into digital realities. We envision a future where technology seamlessly integrates with business operations, creating unprecedented opportunities for growth and success across Noida, NCR, and beyond - making advanced technology practical and accessible for every business.
            </p>

            <h3 className={styles.sectionHeading}>Our Expertise & Tech Stack</h3>
            <p className={styles.paragraph}>
              We leverage cutting-edge technologies and industry-leading frameworks to build robust, scalable solutions. Our expertise spans Python for backend development and machine learning, Java for Android apps and enterprise solutions, React and Node.js for modern web applications, PHP and Laravel for dynamic websites, Dart and Kotlin for cross-platform mobile apps, and .NET for secure enterprise applications. We master cloud platforms including AWS, Google Cloud, and Azure - ensuring every solution we deliver is scalable, secure, and future-ready for your business.
            </p>

            <h3 className={styles.sectionHeading}>Why Choose Bhoomi Techzone</h3>
            <p className={styles.paragraph}>
              Choosing About Bhoomi Techzone means partnering with a certified, award-winning team that genuinely cares about your success. We are ISO 9001:2015 certified, recognized by Startup India, DPIIT, and MSME, and trusted by leading payment partners including Razorpay. With 4+ years of experience, 480+ completed projects, 389+ happy clients, and 10 winning awards, we pride ourselves on a client-first approach, transparent communication, and commitment to delivering results that exceed expectations. Our agile development methodology ensures faster time-to-market, comprehensive post-launch support, and competitive pricing for businesses of every size.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseBhoomiTechzone />
      <StatsCounter />
      <TechnologyStack />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default About;
