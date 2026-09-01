import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ConsultingFirmsPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ConsultingFirmsPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const projectsCount = useCounter(250, 2000, isStatsVisible);
  const clientSatisfactionCount = useCounter(97, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Strategy Consulting Software",
      description: "Digital platforms for strategic planning and business analysis",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Client Portal Solutions", 
      description: "Secure client collaboration and project management platforms",
      image: "/images/dmarketing.png"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and automated reporting dashboards",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Project Management Tools",
      description: "Comprehensive project tracking and resource allocation systems",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Knowledge Management",
      description: "Centralized knowledge bases and consulting frameworks",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Time & Billing Systems",
      description: "Automated time tracking and invoicing for consulting engagements",
      image: "/images/dmarketing.png"
    },
    {
      title: "Proposal Automation",
      description: "Streamlined proposal generation and contract management",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Business Consulting Software Solutions in Noida"
        description="Business consulting software solutions and IT solutions for consulting firms to improve efficiency, client delivery, and growth with secure, scalable platforms."
        keywords="business consulting software solutions, IT solutions for consulting firms"
        canonical="https://bhoomitechzone.in/consulting-firms"
      />
      {/* Consulting Firms Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                <span className={styles.separator}>/</span>
                <Link to="/services" className={styles.breadcrumbLink}>Industries</Link>
                <span className={styles.separator}>/</span>
                <span className={styles.breadcrumbCurrent}>Consulting Firms</span>
              </div>
              <h1 className={styles.heroTitle}>Business Consulting Software Solutions</h1>
              <p className={styles.heroSubtitle}>
                Empower your firm with advanced <strong style={{ color: 'black' }}>business consulting software solutions</strong> and <strong style={{ color: 'black' }}>IT solutions for consulting firms</strong> to enhance client delivery, streamline operations, and drive growth.
              </p>
            </div>
            <div className={styles.heroImage}>
              <lottie-player
                src="https://lottie.host/64c06a0d-e8b8-4d81-b00b-2899a9e3ec70/Q9xUwOb4Lv.json"
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
            <h2 className={styles.sectionTitle}>Our Consulting Technology Solutions</h2>
            <p className={styles.sectionSubtitle}>Comprehensive software platforms designed for consulting excellence</p>
          </div>
          
          <div className={styles.servicesCards}>
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Client Management</h3>
                <p>Comprehensive CRM and client relationship management tailored for consulting firms.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Project Tracking</h3>
                <p>Real-time project management with resource allocation and milestone tracking.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Analytics Dashboards</h3>
                <p>Data-driven insights and performance metrics for consulting engagements.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Knowledge Base</h3>
                <p>Centralized repository for frameworks, templates, and best practices.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Billing Automation</h3>
                <p>Automated time tracking, invoicing, and revenue recognition systems.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Client Portals</h3>
                <p>Secure collaboration platforms for seamless client communication.</p>
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
              <h2 className={styles.whyChooseTitle}>Why Choose Bhoomi Techzone for Consulting Firms?</h2>
              <div className={styles.chooseReasons}>
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Industry Expertise</h4>
                    <p>We deliver tailored <strong style={{ color: 'black' }}>business consulting software solutions</strong> with a deep understanding of <Link to="/it-consulting">consulting</Link> workflows, engagement models, and client delivery processes.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Scalable Solutions</h4>
                    <p>Our <strong style={{ color: 'black' }}>IT solutions for consulting firms</strong> are built to grow with your business, from small <Link to="/it-consulting">consulting teams</Link> to large enterprise firms.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Client-Centric Design</h4>
                    <p>We create intuitive platforms that improve collaboration between consultants and clients for better outcomes.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Data Security</h4>
                    <p>Our <strong style={{ color: 'black' }}>business consulting software solutions</strong> ensure enterprise-grade security to protect sensitive client data and intellectual property.</p>
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
                  <h3>{projectsCount}+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{clientSatisfactionCount}%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{supportCount}/7</h3>
                  <p>Expert Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.processTitle}>Our Consulting Firms Development Process</h2>
          <p className={styles.processSubtitle}>Our structured approach to delivering <strong style={{ color: 'black' }}>business consulting software solutions</strong> ensures seamless implementation, improved efficiency, and long-term scalability for consulting firms.</p>
          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Practice Assessment</h3>
                <p>We begin by analyzing your consulting workflows, client engagement models, and operational challenges in detail. This helps us identify gaps, inefficiencies, and opportunities where our <strong style={{ color: 'black' }}>IT solutions for consulting firms</strong> can add maximum value and improve performance.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Solution Architecture</h3>
                <p>Based on the assessment, our experts design scalable and customized <strong style={{ color: 'black' }}>IT solutions for consulting firms</strong> tailored to your business needs. We focus on building flexible architectures that enhance collaboration, streamline processes, and support future growth.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Agile Development</h3>
                <p>We develop secure and high-performing platforms using agile methodologies, ensuring continuous feedback, faster delivery, and adaptability. Our <strong style={{ color: 'black' }}>business consulting software solutions</strong> are built with modern technologies to deliver reliability, performance, and seamless user experience.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Training & Rollout</h3>
                <p>We ensure smooth system adoption through comprehensive training sessions for your team. Our phased rollout strategy minimizes disruption, allowing your firm to transition efficiently to new <strong style={{ color: 'black' }}>business consulting software solutions</strong> without affecting daily operations.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Continuous Enhancement</h3>
                <p>Our work doesn’t stop at deployment. We provide ongoing support, maintenance, and feature enhancements as part of our <strong style={{ color: 'black' }}>IT solutions for consulting firms</strong>, ensuring your system evolves with changing business requirements and industry trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>Transform Your Consulting Practice</h2>
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
              <h3>Enhanced Client Delivery</h3>
              <p>Streamlined project management and collaboration tools improve consulting engagement outcomes.</p>
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
              <h3>Improved Efficiency</h3>
              <p>Automation of routine tasks frees consultants to focus on high-value client work.</p>
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
              <h3>Better Revenue Tracking</h3>
              <p>Accurate time tracking and billing ensure proper revenue capture and profitability.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_5tkzkblw.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Knowledge Retention</h3>
              <p>Centralized knowledge management preserves institutional knowledge and best practices.</p>
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
              <h3>Data-Driven Insights</h3>
              <p>Analytics and reporting provide actionable insights for practice growth and optimization.</p>
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
              <h3>Client Satisfaction</h3>
              <p>Enhanced transparency and communication improve client relationships and retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Elevate Your Consulting Practice</h2>
            <p className={styles.ctaSubtitle}>Let our experts help you build technology solutions that transform your consulting delivery</p>
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

export default ConsultingFirmsPage;
