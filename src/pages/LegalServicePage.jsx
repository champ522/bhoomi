import React from 'react';
import SEOHead from '../components/SEOHead';
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
      <SEOHead
        title="Legal Software Development Services in Noida"
        description="Legal software development services in Noida to streamline case management, improve security, and automate workflows with scalable legal tech solutions."
        keywords="Legal Software Development services, Legal Software Development services In Noida"
        canonical="https://bhoomitechzone.in/legal-service"
      />
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
              <h1 className={styles.heroTitle}>Legal Software Development Services in Noida</h1>
              <p className={styles.heroSubtitle}>
                Empower your law firm with advanced <strong style={{ color: 'black' }}>Legal Software Development services in Noida</strong> to streamline case management, enhance security, automate workflows, and improve client experience.
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
                    <p>We offer specialized Legal Software Development <Link to="/services">services</Link> with deep knowledge of legal workflows, case management systems, compliance standards, and law firm operations.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Security & Confidentiality</h4>
                    <p>Our Legal <Link to="/software-development">Software Development</Link> services in Noida ensure bank-grade encryption, secure access control, and complete protection of sensitive client and case data.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Compliance Ready</h4>
                    <p>We build solutions aligned with legal regulations, data protection laws, and industry compliance requirements to ensure your practice remains secure and audit-ready.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Customizable Solutions</h4>
                    <p>Our platforms are fully flexible and tailored to your legal practice, enabling you to manage cases, documents, and workflows according to your unique requirements.</p>
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
          <p className={styles.processSubtitle}>A systematic and result-driven approach to deliver secure, scalable, and efficient legal tech solutions that align with your practice requirements:</p>
          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Practice Analysis</h3>
                <p>We begin by thoroughly analyzing your legal workflows, case management processes, and compliance requirements. Our team studies how your firm handles cases, documents, billing, and client communication to identify gaps and opportunities for improvement. This helps us build a strong foundation for delivering tailored <strong style={{ color: 'black' }}>Legal Software Development services</strong> that truly match your operational needs.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Solution Design</h3>
                <p>Based on the analysis, our experts design customized <strong style={{ color: 'black' }}>Legal Software Development services in Noida</strong> with a focus on usability, scalability, and security. We create detailed system architecture, user flows, and feature planning to ensure the software aligns perfectly with your practice. Our goal is to deliver an intuitive solution that improves productivity and simplifies complex legal processes.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Development & Testing</h3>
                <p>We develop robust and secure legal software using modern technologies and industry best practices. Each module is built with precision and undergoes rigorous testing to ensure accuracy, performance, and reliability. Our <strong style={{ color: 'black' }}>Legal Software Development services</strong> include security testing, functionality checks, and performance optimization to deliver a flawless system.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Training & Deployment</h3>
                <p>Once the system is ready, we provide comprehensive training to your team to ensure smooth adoption. Our deployment process is carefully managed to avoid disruptions in your daily operations. With our <strong style={{ color: 'black' }}>Legal Software Development services in Noida</strong>, we ensure seamless integration with your existing systems and workflows.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Support & Updates</h3>
                <p>After deployment, our dedication doesn't stop. To keep your system safe and in compliance with changing legal requirements, we provide ongoing support, upkeep, and frequent upgrades. Our legal software development services guarantee that your software stays current, effective, and in line with your expanding business requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>Transform Your Legal Practice</h2>
          <p className={styles.processSubtitle}>Our <strong style={{ color: 'black' }}>Legal Software Development services in Noida</strong> help modern law firms streamline operations, improve efficiency, and deliver better client outcomes with advanced legal technology.</p>
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
              <p>Centralize case tracking, document handling, and communication to improve productivity and reduce manual effort with our <strong style={{ color: 'black' }}>Legal Software Development services</strong>.</p>
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
              <p>Protect confidential legal data with advanced encryption, secure storage, and compliance-driven architecture designed for modern law practices.</p>
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
              <p>Automate time tracking and billing processes to minimize errors and improve revenue management for your legal firm.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_khzniaya.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Faster Legal Research</h3>
              <p> Use smart tools to simplify legal research, reduce manual work, and improve decision-making speed with technology-driven solutions.</p>
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
              <p>Generate contracts, agreements, and legal documents quickly using predefined templates and automation tools.</p>
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
              <p>Provide client portals, real-time updates, and seamless communication to enhance trust and satisfaction.</p>
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
