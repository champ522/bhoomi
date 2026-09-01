import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/MarketingAgenciesPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const MarketingAgenciesPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const campaignsCount = useCounter(850, 2000, isStatsVisible);
  const clientSatisfactionCount = useCounter(98, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  return (
    <>
      <SEOHead
        title="Digital Marketing Agency Software Solutions in Noida | Bhoomi Techzone"
        description="Get advanced digital marketing agency software solutions in Noida to manage campaigns, clients, and analytics. Boost productivity, improve ROI, and scale your agency."
        keywords="digital marketing agency software solutions, digital marketing agency software solutions In noida "
        canonical="https://bhoomitechzone.in/marketing-agencies"
      />
      {/* Marketing Agencies Hero Section */}
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
                <span className={styles.breadcrumbCurrent}>Marketing Agencies</span>
              </div>
              <h1 className={styles.heroTitle}>Digital Marketing Agency Software Solutions in Noida</h1>
              <p className={styles.heroSubtitle}>
                Boost your agency growth with powerful <strong style={{ color: 'black' }}>digital marketing agency software solutions in Noida</strong> designed to streamline campaigns, manage clients, and improve overall performance.
              </p>
            </div>
            <div className={styles.heroImage}>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
                background="transparent"
                speed="1"
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
            <h2 className={styles.sectionTitle}>Our Marketing Agency Solutions</h2>
            <p className={styles.sectionSubtitle}>We offer comprehensive <strong style={{ color: 'black' }}>digital marketing agency software solutions</strong> tailored to meet the needs of modern marketing professionals:</p>
          </div>
          
          <div className={styles.servicesCards}>
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Campaign Management</h3>
                <p>All-in-one platform to plan, execute, and track multi-channel marketing campaigns.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Client Portal & CRM</h3>
                <p>Centralized client management with transparent reporting and collaboration tools.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Analytics Dashboard</h3>
                <p>Real-time performance metrics and ROI tracking across all client campaigns.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Social Media Manager</h3>
                <p>Schedule, publish, and monitor social media across all major platforms.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Content Calendar</h3>
                <p>Organize and plan content across teams with collaborative editorial tools.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Time & Billing</h3>
                <p>Track team hours, automate invoicing, and manage agency finances effortlessly.</p>
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
              <h2 className={styles.whyChooseTitle}>Why Marketing Agencies Choose Bhoomi Techzone</h2>
              <div className={styles.chooseReasons}>
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Agency-Centric Design</h4>
                    <p>Our <strong style={{ color: 'black' }}>digital marketing agency software solutions in Noida</strong> are built specifically for agency workflows, ensuring ease of use and maximum efficiency.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Scalable Infrastructure</h4>
                    <p>Grow your business with software that scales as your agency expands without performance issues.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>White-Label Solutions</h4>
                    <p>Customize platforms with your branding to maintain a professional identity with your clients.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Integration Ready</h4>
                    <p>Seamlessly connect with tools like Google Ads, <Link to="/social-media-marketing">social media</Link> platforms, <Link to="/crm-systems">CRM systems</Link>, and analytics tools.</p>
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
                  <h3>{campaignsCount}+</h3>
                  <p>Campaigns</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{clientSatisfactionCount}%</h3>
                  <p>Client Retention</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{supportCount}/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.processTitle}>Our Agency Software Development Process</h2>
          <p className={styles.processSubtitle}>Our structured and result-driven approach ensures the delivery of high-quality <strong style={{ color: 'black' }}>digital marketing agency software solutions</strong> that align with your business goals and improve overall efficiency.</p>
          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Agency Audit</h3>
                <p>We begin by analyzing your existing tools, campaign workflows, client management processes, and operational challenges. This helps us identify gaps and opportunities to build effective <strong style={{ color: 'black' }}>digital marketing agency software solutions in Noida</strong> tailored to your agency’s needs.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Custom Solution Design</h3>
                <p>Based on insights gathered, we design customized and scalable <strong style={{ color: 'black' }}>digital marketing agency software solutions</strong> that match your business model. Our focus is on creating intuitive platforms that improve workflow automation, campaign tracking, and client collaboration.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Agile Development</h3>
                <p>Our development team builds secure, flexible, and high-performance platforms using modern technologies. Through agile methodology, we ensure continuous improvements, regular feedback, and faster delivery of <strong style={{ color: 'black' }}>digital marketing agency software solutions in Noida</strong>.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Team Training</h3>
                <p>We provide complete onboarding and hands-on training to ensure your team can effectively use the platform. Our training sessions help maximize productivity and ensure smooth adoption of your new <strong style={{ color: 'black' }}>digital marketing agency software solutions</strong>.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Ongoing Optimization</h3>
                <p>After deployment, our collaboration continues. We provide technical assistance, performance enhancements, feature updates, and ongoing monitoring. This guarantees that your Noida digital marketing agency software solutions adapt to shifting business needs and marketing trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>Transform Your Marketing Agency</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_4kx2q32n.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Streamlined Operations</h3>
              <p>Our <strong style={{ color: 'black' }}>digital marketing agency software solutions</strong> automate repetitive tasks and centralize operations.</p>
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
              <h3>Enhanced Collaboration</h3>
              <p>Keep your team aligned with real-time updates and communication tools.</p>
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
              <h3>Data-Driven Decisions</h3>
              <p>Advanced analytics help track performance and improve campaign ROI.</p>
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
              <h3>Increased Productivity</h3>
              <p>Reduce manual work and focus on strategy and creativity.</p>
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
              <h3>Client Transparency</h3>
              <p>Provide clients with real-time reports and insights for better trust.</p>
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
              <h3>Revenue Growth</h3>
              <p>Scale your agency efficiently with optimized workflows and tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Scale Your Marketing Agency?</h2>
            <p className={styles.ctaSubtitle}>Let's build the perfect technology solution to grow your agency and delight your clients</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryButton}>
                <span>Schedule Free Demo</span>
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

export default MarketingAgenciesPage;
