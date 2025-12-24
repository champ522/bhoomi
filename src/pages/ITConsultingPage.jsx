import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ITConsultingPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ITConsultingPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const projectsCount = useCounter(350, 2000, isStatsVisible);
  const clientSatisfactionCount = useCounter(98, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "IT Strategy Consulting",
      description: "Strategic technology planning and digital transformation roadmaps",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Cloud Migration", 
      description: "Seamless cloud adoption and infrastructure modernization services",
      image: "/images/dmarketing.png"
    },
    {
      title: "Cybersecurity Consulting",
      description: "Comprehensive security assessments and risk management strategies",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital modernization and process automation solutions",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Infrastructure Assessment",
      description: "Technology audits and infrastructure optimization recommendations",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Enterprise Architecture",
      description: "Scalable IT architecture design and technology stack optimization",
      image: "/images/dmarketing.png"
    },
    {
      title: "IT Governance & Compliance",
      description: "Regulatory compliance and IT governance framework implementation",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
      {/* IT Consulting Hero Section */}
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
                <span className={styles.breadcrumbCurrent}>IT Consulting</span>
              </div>
              <h1 className={styles.heroTitle}>IT Consulting Services That Drive Digital Growth</h1>
              <p className={styles.heroSubtitle}>
                Expert technology guidance for digital transformation and business growth.
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
            <h2 className={styles.sectionTitle}>Our IT Consulting Expertise</h2>
            <p className={styles.sectionSubtitle}>Comprehensive technology solutions tailored to your business needs</p>
          </div>
          
          <div className={styles.servicesCards}>
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>IT Strategy & Planning</h3>
                <p>Develop comprehensive technology roadmaps aligned with your business objectives and plans.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Cloud Migration</h3>
                <p>Seamlessly migrate to cloud platforms with minimal downtime and maximum efficiency.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Cybersecurity</h3>
                <p>Implement robust security frameworks to protect your assets and ensure compliance.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Digital Transformation</h3>
                <p>Modernize your businesses with cutting-edge technology solutions and automation.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Infrastructure Design</h3>
                <p>Build scalable, reliable IT infrastructure that grows with your business requirements.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>IT Governance</h3>
                <p>Establish effective IT governance frameworks for better decision-making and compliance.</p>
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
              <h2 className={styles.whyChooseTitle}>Why Choose Bhoomi Techzone for IT Consulting?</h2>
              <div className={styles.chooseReasons}>
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>15+ Years of Excellence</h4>
                    <p>Decades of experience delivering successful IT transformation projects across industries.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Certified Experts</h4>
                    <p>Team of certified professionals with expertise in latest technologies and methodologies.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Vendor Neutral Approach</h4>
                    <p>Unbiased recommendations based on your needs, not vendor partnerships or commissions.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>ROI-Focused Solutions</h4>
                    <p>Every recommendation is designed to deliver measurable business value and returns.</p>
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
                  <p>Successful Projects</p>
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

      {/* Consulting Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.processTitle}>Our Proven IT Consulting Process</h2>
          <p className={styles.processSubtitle}>A systematic approach that ensures successful technology outcomes</p>
          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Discovery & Assessment</h3>
                <p>We analyze your current IT infrastructure, business processes, and strategic objectives to identify opportunities and challenges.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Strategy Development</h3>
                <p>Our experts craft customized IT strategies and technology roadmaps aligned with your business goals and budget.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Solution Architecture</h3>
                <p>We design scalable, secure technology architectures that support your strategic objectives and ensure optimal performance.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Implementation Support</h3>
                <p>We provide expert guidance throughout implementation, ensuring projects meet quality standards and deliver expected outcomes.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Optimization & Support</h3>
                <p>We monitor performance and provide ongoing optimization to ensure continued value realization and system effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>Transform Your Business with Us</h2>
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
              <h3>Strategic Technology Planning</h3>
              <p>Align technology investments with business objectives for maximum ROI and competitive advantage in your industry.</p>
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
              <h3>Risk Mitigation & Security</h3>
              <p>Identify vulnerabilities and implement robust cybersecurity measures to protect your business assets and reputation.</p>
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
              <h3>Cost Optimization</h3>
              <p>Reduce IT spending through strategic planning, vendor management, and elimination of redundant systems and processes.</p>
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
              <h3>Accelerated Innovation</h3>
              <p>Fast-track digital initiatives with proven methodologies and expert guidance for faster time-to-market and results.</p>
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
              <h3>Expert Knowledge Access</h3>
              <p>Leverage specialized expertise without hiring full-time staff, gaining access to cutting-edge solutions and innovations.</p>
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
              <h3>Operational Excellence</h3>
              <p>Optimize business processes and improve operational efficiency through strategic technology implementation and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Transform Your IT Strategy</h2>
            <p className={styles.ctaSubtitle}>Let our experts help you navigate your digital transformation journey</p>
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
    </>
  );
};

export default ITConsultingPage;