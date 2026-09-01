import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/NonProfitPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const NonProfitPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const organizationsCount = useCounter(250, 2000, isStatsVisible);
  const clientSatisfactionCount = useCounter(99, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone-Digital Solutions for Nonprofits in Noida"
        description="Digital solutions for nonprofits and Non-Profit Solution Development in Noida to improve operations, donor engagement, and impact with secure, scalable platforms."
        keywords="digital solutions for nonprofits, Non-Profit Solution Development in Noida"
        canonical="https://bhoomitechzone.in/non-profit"
      />
      {/* Non-Profit Hero Section */}
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
                <span className={styles.breadcrumbCurrent}>Non-Profit Organizations</span>
              </div>
              <h1 className={styles.heroTitle}>Digital Solutions for Nonprofits in Noida</h1>
              <p className={styles.heroSubtitle}>
                Empower your mission with <strong style={{ color: 'black' }}>digital solutions for nonprofits</strong> and <strong style={{ color: 'black' }}>Non-Profit Solution Development in Noida</strong> to streamline operations, increase impact, and improve donor engagement.
              </p>
            </div>
            <div className={styles.heroImage}>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json"
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
            <h2 className={styles.sectionTitle}>Technology Solutions for Non-Profits</h2>
            <p className={styles.sectionSubtitle}>Mission-focused platforms to help you make a greater difference</p>
          </div>
          
          <div className={styles.servicesCards}>
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Donor Management</h3>
                <p>Complete CRM for tracking donations, managing relationships, and supporters.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Fundraising Platforms</h3>
                <p>Online donation portals, manage campaign, and peer-to-peer fundraising tools.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Volunteer Management</h3>
                <p>Coordinate volunteers, schedule shifts, and track hours with intuitive tools.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Grant Management</h3>
                <p>Track applications, manage reporting requirements, and measure grant outcomes.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Impact Reporting</h3>
                <p>Measure and communicate your organization's impact with powerful analytics.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center)'}}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Member Portals</h3>
                <p>Engage members with self-service portals, event registration, and communication tools.</p>
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
              <h2 className={styles.whyChooseTitle}>Why Non-Profits Trust Bhoomi Techzone</h2>
              <div className={styles.chooseReasons}>
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Mission-Aligned Solutions</h4>
                    <p>We deliver purpose-driven <strong style={{ color: 'black' }}>digital solutions for nonprofits</strong> that align with your mission and help you achieve greater impact through technology.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Affordable Pricing</h4>
                    <p>Our <strong style={{ color: 'black' }}>Non-Profit Solution Development in Noida</strong> offers cost-effective and flexible pricing models designed specifically for non-profit organizations.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Easy to Use</h4>
                    <p>We build intuitive platforms that are easy for staff and volunteers to use, reducing the need for extensive training.</p>
                  </div>
                </div>
                
                <div className={styles.chooseReason}>
                  <div className={styles.reasonIcon}>✓</div>
                  <div className={styles.reasonContent}>
                    <h4>Security & Compliance</h4>
                    <p>Our <strong style={{ color: 'black' }}>digital solutions for nonprofits</strong> ensure strong data protection, safeguarding donor information with secure and compliant systems.</p>
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
                  <h3>{organizationsCount}+</h3>
                  <p>Firms Served</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{clientSatisfactionCount}%</h3>
                  <p>Satisfaction Rate</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{supportCount}/7</h3>
                  <p>Dedicated Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.processTitle}>Our Non-Profit Solution Development Process</h2>
          <p className={styles.processSubtitle}>Our collaborative and structured approach ensures successful implementation of <strong style={{ color: 'black' }}>Non-Profit Solution Development in Noida</strong>, helping organizations streamline operations, improve donor engagement, and maximize their social impact through reliable <Link to="/technology">technology</Link>.</p>
          
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Mission Discovery</h3>
                <p>We start by understanding your organization’s mission, goals, and operational challenges in detail. This allows us to design impactful <strong style={{ color: 'black' }}>digital solutions for nonprofits</strong> that align with your vision and support long-term growth while addressing real-world challenges faced by your team.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Budget-Conscious Planning</h3>
                <p>We develop a cost-effective roadmap tailored to your financial constraints and priorities. Our approach to <strong style={{ color: 'black' }}>Non-Profit Solution Development in Noida</strong> ensures you receive maximum value without compromising on quality, performance, or essential features.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Collaborative Development</h3>
                <p>Our team builds customized platforms using a collaborative approach, with regular updates and feedback cycles. This ensures the final solution meets your expectations and delivers effective <strong style={{ color: 'black' }}>digital solutions for nonprofits</strong> that are practical, scalable, and easy to use.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>4</div>
              <div className={styles.stepContent}>
                <h3>Training & Launch</h3>
                <p>We provide comprehensive training for your staff and volunteers, ensuring they can confidently use the system. Our smooth deployment process minimizes disruptions and ensures quick adoption of your new <strong style={{ color: 'black' }}>Non-Profit Solution Development in Noida</strong>.</p>
              </div>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepCircle}>5</div>
              <div className={styles.stepContent}>
                <h3>Long-Term Partnership</h3>
                <p>We believe in building lasting relationships. Our <strong style={{ color: 'black' }}>digital solutions for nonprofits</strong> include ongoing support, regular updates, and performance enhancements to help your organization adapt, grow, and continue making an impact over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>Amplify Your Impact with Technology</h2>
          <div className={styles.benefitsGrid}>
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
              <h3>Increased Donations</h3>
              <p>User-friendly donation platforms and tools to engage donors and increase giving.</p>
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
              <h3>Operational Efficiency</h3>
              <p>Automate administrative tasks to spend more time on your mission.</p>
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
              <h3>Better Engagement</h3>
              <p>Connect with donors, volunteers, and beneficiaries through powerful tools.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_3rwasyjy.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Transparent Reporting</h3>
              <p>Demonstrate impact to stakeholders with clear, compelling reports.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <lottie-player
                  src="https://assets3.lottiefiles.com/packages/lf20_qp1q7mct.json"
                  background="transparent"
                  speed="1"
                  className={styles.benefitLottie}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3>Scalable Growth</h3>
              <p>Platforms that grow with your organization as your impact expands.</p>
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
              <h3>Cost Savings</h3>
              <p>Reduce overhead costs with integrated systems and automated processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Let's Amplify Your Mission Together</h2>
            <p className={styles.ctaSubtitle}>Partner with us to build technology that helps your non-profit create lasting change</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryButton}>
                <span>Schedule a Demo</span>
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

export default NonProfitPage;
