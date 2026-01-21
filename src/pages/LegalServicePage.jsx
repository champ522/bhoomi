import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/LegalServicePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const LegalServicePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const casesCount = useCounter(100, 2000, isStatsVisible);
  const clientSatisfactionCount = useCounter(99, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Legal Practice Management",
      description: "Comprehensive case management and client relationship software",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Document Automation", 
      description: "Automated legal document generation and contract management systems",
      image: "/images/dmarketing.png"
    },
    {
      title: "E-Discovery Solutions",
      description: "Advanced litigation support and electronic discovery platforms",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Legal Research Tools",
      description: "AI-powered legal research and case law analysis systems",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Manage Compliances",
      description: "Regulatory compliance tracking and risk management solutions",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Billing & Time Tracking",
      description: "Legal billing software with automated time tracking and invoicing",
      image: "/images/dmarketing.png"
    },
    {
      title: "Legal Analytics",
      description: "Data-driven insights for case outcomes and practice performance",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
      {/* Legal Service Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                <span className={styles.separator}>/</span>
                <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
                <span className={styles.separator}>/</span>
                <span className={styles.breadcrumbCurrent}>Legal Service</span>
              </div>
              <h1 className={styles.heroTitle}>Legal Tech Solutions for Modern Law Practices</h1>
              <p className={styles.heroSubtitle}>
                Innovative software solutions that empower legal professionals and streamline practice management.
              </p>
            </div>
            <div className={styles.heroImage}>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_qp1q7mct.json"
                background="transparent"
                speed="0.7"
                className={styles.heroLottie}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className={styles.servicesGrid}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Legal Technology Expertise</h2>
            <p className={styles.sectionSubtitle}>Comprehensive legal software solutions tailored to your practice needs</p>
          </div>
          
          <div className={styles.servicesCards}>
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Practice Management</h3>
                <p>Comprehensive case and client management systems for efficient law practice operations.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Document Automation</h3>
                <p>Streamline contract drafting and legal document creation with intelligent templates.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Legal Research</h3>
                <p>AI-powered legal research platforms with advanced case law and statute search.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>E-Discovery</h3>
                <p>Advanced litigation support and electronic discovery solutions for complex cases.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Billing Solutions</h3>
                <p>Automated time tracking, billing, and invoicing systems for law firms.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Manage Compliances</h3>
                <p>Regulatory compliance tracking and risk management for legal practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.whyChooseContent}>
            <div className={styles.whyChooseText}>
              <h2 className={styles.whyChooseTitle}>Why Choose Bhoomi Techzone for Legal Technology?</h2>
              <div className={styles.chooseReasons}>
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Legal Industry Expertise</h4>
                    <p>Deep understanding of legal workflows, compliance requirements, and practice management needs.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Security & Confidentiality</h4>
                    <p>Bank-grade encryption and security measures to protect sensitive client information.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Compliance Ready</h4>
                    <p>Built-in compliance features for legal ethics, data protection, and regulatory requirements.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Customizable Solutions</h4>
                    <p>Flexible platforms tailored to your practice area and specific workflow requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.whyChooseImage}>
              <div className={styles.lottieContainer}>
                <lottie-player
                  src="https://lottie.host/f66a0ef7-ec8a-42eb-9fb8-38e63c7cf1cc/FCyMljPR7M.json"
                  background="transparent"
                  speed="1"
                  className={styles.statsLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className={styles.statsContainer} ref={statsRef}>
                <div className={styles.statCard}>
                  <h3>{casesCount}+</h3>
                  <p>Cases Managed</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{clientSatisfactionCount}%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{supportCount}/7</h3>
                  <p>Legal Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.processTitle}>Our Legal Software Development Process</h2>
          <p className={styles.processSubtitle}>A systematic approach ensuring compliant and effective legal solutions</p>
          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Practice Analysis</h3>
                <p>We analyze your legal practice workflows, case management needs, and compliance requirements to understand challenges.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Solution Design</h3>
                <p>Our experts design custom legal technology solutions with security, compliance, and usability at the forefront.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Development & Testing</h3>
                <p>We build secure, compliant legal software with rigorous testing for accuracy and reliability.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Training & Deployment</h3>
                <p>Comprehensive training for your team and seamless deployment with minimal disruption to operations.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Support & Updates</h3>
                <p>Ongoing technical support and regular updates to maintain compliance with evolving legal regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>Transform Your Legal Practice</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Streamlined Case Management</h3>
              <p>Centralized case tracking, document management, and client communication for improved practice efficiency.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://lottie.host/9b6ebf1e-650c-46e7-975c-b10998bd6674/xo36t3WHed.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Enhanced Security</h3>
              <p>Protect sensitive client data with enterprise-grade encryption and compliance with legal ethics rules.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://lottie.host/e20c14a1-cb35-4c94-9874-be75cab64f47/KLeSJhQyME.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Improved Billing Accuracy</h3>
              <p>Automated time tracking and billing reduce errors and improve revenue capture for your firm.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://lottie.host/5ba5bf8c-480d-413f-815c-44bd492dc4a0/1IlpWLqQBh.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Faster Legal Research</h3>
              <p>AI-powered research tools reduce time spent on case law analysis and legal research.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://lottie.host/64c06a0d-e8b8-4d81-b00b-2899a9e3ec70/Q9xUwOb4Lv.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Document Automation</h3>
              <p>Generate legal documents and contracts quickly with intelligent templates and clause libraries.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://lottie.host/b7207656-a396-4641-9875-9bc2bfedf4e6/Atylh8eRdF.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Better Client Experience</h3>
              <p>Client portals and communication tools enhance transparency and improve client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Modernize Your Legal Practice</h2>
            <p className={styles.ctaSubtitle}>Let our experts help you transform your legal operations with innovative technology</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryButton}>
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Include other components */}
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default LegalServicePage;
