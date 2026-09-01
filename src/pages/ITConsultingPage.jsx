import React from 'react';
import SEOHead from '../components/SEOHead';
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
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Bhoomi Techzone - Best IT Companies in Noida for Business Solutions"
        description="The Best IT companies in Noida lead with expert teams in AI, mobile apps, IT consulting and long-term business growth. Check our list and connect with winners today."
        keywords="Best it companies in noida, Best it services company in noida"
        canonical="https://bhoomitechzone.in/it-consulting"
      />
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
              <h1 className={styles.heroTitle}>Best IT Companies in Noida</h1>
              <p className={styles.heroSubtitle}>
                Professional technology advice from a Best it companies in Noida for digital transformation and business development. As a leading IT services provider in Noida, we offer strategic IT solutions that connect <Link to="/technology">technology</Link> with your business objectives
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
                    <p>Being among the Best it companies in Noida, we offer years of expertise in executing successful IT transformation initiatives across various sectors</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Certified Experts</h4>
                    <p> Our team includes certified professionals with deep expertise, making us a trusted Best IT services company in Noida for modern technology solutions.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Vendor Neutral Approach</h4>
                    <p>We offer impartial suggestions tailored to your business requirements, fostering transparency and confidence as a leading IT firm in Noida</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>ROI-Focused Solutions</h4>
                    <p>Every solution is made to produce quantifiable outcomes, strengthening our standing as Noida's top provider of IT services with an emphasis on corporate expansion.</p>
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
          <p className={styles.processSubtitle}>A systematic approach followed by one of the Best IT companies in Noida to ensure successful technology outcomes</p>          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Discovery & Assessment</h3>
                <p>We analyze your IT infrastructure, business operations, and goals to identify opportunities and challenges effectively.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Strategy Development</h3>
                <p>Our experts create customized strategies, positioning us as a Best IT services company in Noida delivering tailored IT roadmaps.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Solution Architecture</h3>
                <p>We design scalable and secure systems aligned with your business needs and long-term growth.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Implementation Support</h3>
                <p>We guide your team throughout implementation to ensure quality, performance, and successful delivery.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Optimization & Support</h3>
                <p>We continuously monitor systems and optimize performance to maintain efficiency and long-term value.</p>
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
              <p>As one of the Best IT companies in Noida, we align technology investments with business goals for better ROI and growth.</p>
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
              <p>We help secure your business by identifying risks and implementing strong cybersecurity practices as a Best IT services company in Noida.</p>
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
              <p>Reduce unnecessary IT expenses with efficient planning and resource optimization strategies.</p>
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
              <p>We enable faster innovation with expert guidance and proven IT methodologies.</p>
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
              <p>Gain access to experienced professionals without the need for full-time hiring.</p>
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
              <p>Improve efficiency and streamline processes through advanced IT solutions and automation.</p>
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
      <CallToAction />
    </>
  );
};

export default ITConsultingPage;