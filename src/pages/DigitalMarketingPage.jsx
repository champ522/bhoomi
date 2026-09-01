import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/DigitalMarketingPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const DigitalMarketingPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const campaignsCount = useCounter(500, 2000, isStatsVisible);
  const roiCount = useCounter(250, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve search engine rankings",
      image: "/images/dmarketing.png"
    },
    {
      title: "Google Ads Management", 
      description: "Professional PPC campaign management for maximum ROI",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Social Media Marketing",
      description: "Engaging social media campaigns across all major platforms",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation that drives engagement and conversions",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive sales",
      image: "/images/dmarketing.png"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and performance tracking solutions",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Brand Strategy",
      description: "Complete brand positioning and digital presence strategies",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone- Best Digital Marketing Services for You"
        description="Looking for the best digital marketing services? Bhoomi Techzone helps your business grow online with practical strategies, better visibility and real results that bring you more traffic and leads."
        keywords="Digital Marketing Services, Digital Marketing Company in noida"
        canonical="https://bhoomitechzone.in/digital-marketing"
      />
      {/* Digital Marketing Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Result-Driven Digital Marketing Services</h1>
            <p className={styles.subtitle}>
              Data-driven Digital Marketing Services to grow your online presence Generate leads, increase traffic, and maximize ROI with expert strategies
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Digital Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Content Section */}
      <section className={styles.webDevSection}>
        <div className={styles.webDevContainer}>
          <div className={styles.webDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Strategic</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.webDevTitle}>
                Strategic <span className={styles.highlight}>Digital </span> Marketing
              </h2>
              <p className={styles.description}>
                We specialize in creating comprehensive Digital Marketing Services strategies that drive measurable growth for your business. Our data-driven approach as a trusted Digital Marketing Company in Noida combines <Link to="/seo-optimization">SEO</Link>, PPC, social media marketing, and content strategy to maximize your online presence, attract qualified leads, and convert them into loyal customers across all digital touchpoints. Digital marketing company in noida sector 63. Lead generation services in noida

              </p>
              <p className={styles.description}>
                From search engine optimization to <Link to="/social-media-marketing">social media</Link> campaigns, we deliver integrated marketing solutions that are tailored to your business objectives. Our performance-focused Digital Marketing <Link to="/services">Services</Link> approach emphasizes ROI optimization, audience targeting, and continuous improvement to ensure sustainable business growth. Digital marketing agency in noida sector 63. Lead generation services in noida
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{campaignsCount}+</h3>
                  <p>Campaigns</p>
                </div>
                <div className={styles.stat}>
                  <h3>{roiCount}%</h3>
                  <p>Average ROI</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Marketing Support</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Growth-Driven Marketing</h4>
                  <p>Strategies that deliver real results</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is digital marketing essential for modern business success?</h3>
            <p className={styles.paragraph}>
              In today's digital-first economy, traditional marketing approaches are no longer sufficient to reach and engage modern consumers. Professional Digital Marketing Services have become the cornerstone of business growth, enabling companies to connect with their target audience where they spend most of their time—online. With over 4.9 billion internet users worldwide and digital channels accounting for the majority of consumer touchpoints, businesses without strong Digital Marketing Services are missing enormous opportunities for growth and customer acquisition.
            </p>
            <p className={styles.paragraph}>
              Digital marketing provides unprecedented opportunities for precise targeting, real-time optimization, and measurable results. As a reliable Digital Marketing Company in Noida, we ensure that digital strategies allow businesses to track every interaction, measure ROI accurately, and adjust campaigns in real time based on performance data. This level of transparency and control enables businesses to maximize their marketing investment while building meaningful relationships with customers through personalized, relevant experiences across multiple digital channels.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 advantages of professional digital marketing:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Precise Audience Targeting</h4>
                <p className={styles.reasonText}>Professional Digital Marketing Services allow you to target specific demographics, interests, and behaviors, ensuring your message reaches the right people at the right time.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Measurable ROI & Analytics</h4>
                <p className={styles.reasonText}>Track every click, conversion, and dollar spent with detailed analytics that provide clear insights into campaign performance and return on investment through effective Digital Marketing Services.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Cost-Effective Marketing</h4>
                <p className={styles.reasonText}>Compared to traditional advertising, Digital Marketing Services typically cost less while offering better targeting and higher conversion rates.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Real-Time Optimization</h4>
                <p className={styles.reasonText}>Adjust campaigns instantly based on performance data and improve results continuously with expert Digital Marketing Services strategies.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Global Reach & Accessibility</h4>
                <p className={styles.reasonText}>Reach customers worldwide 24/7 through various digital channels with scalable Digital Marketing Services that break geographical and time barriers.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR DIGITAL MARKETING SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive Digital Marketing Services that cover all aspects of online promotion and customer acquisition. As a leading Digital Marketing Company in Noida, our experienced marketing team specializes in creating integrated campaigns that drive traffic, generate leads, and increase conversions across all digital channels.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Search Engine Optimization (SEO)</div>
              <div className={styles.serviceItem}>• Pay-Per-Click Advertising (PPC)</div>
              <div className={styles.serviceItem}>• Social Media Marketing & Management</div>
              <div className={styles.serviceItem}>• Content Marketing & Strategy</div>
              <div className={styles.serviceItem}>• Email Marketing Campaigns</div>
              <div className={styles.serviceItem}>• Analytics & Performance Tracking</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF DIGITAL marketing:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe that successful Digital Marketing Services are built on strategic thinking, creative execution, and continuous optimization. As a trusted Digital Marketing Company in Noida, our marketing philosophy is grounded in principles that ensure every campaign delivers measurable results and drives sustainable business growth:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Data-Driven Decision Making:</strong> Our Digital Marketing Services are based on comprehensive data analysis, customer insights, and performance metrics to ensure optimal results and ROI.
              </li>
              <li className={styles.principleItem}>
                <strong>Customer-Centric Approach:</strong> As a professional Digital Marketing Company in Noida, we create personalized marketing experiences that resonate with your target audience's needs and preferences.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Channel Integration:</strong> We develop cohesive campaigns through integrated Digital Marketing Services, ensuring consistent messaging and maximum reach.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Optimization:</strong>  We constantly refine campaigns using advanced Digital Marketing Services techniques based on real-time performance data.
              </li>
              <li className={styles.principleItem}>
                <strong>ROI-Focused Strategy:</strong> Every activity within our Digital Marketing Services is designed to deliver measurable business value and growth.
              </li>
              <li className={styles.principleItem}>
                <strong>Transparent Reporting:</strong> As a reliable Digital Marketing Company in Noida, we provide clear and detailed reporting for every campaign.
              </li>
              <li className={styles.principleItem}>
                <strong>Agile Methodology:</strong> Our Digital Marketing Services adapt quickly to market changes and new opportunities.
              </li>
              <li className={styles.principleItem}>
                <strong>Long-Term Relationship Building:</strong> We focus on sustainable growth through consistent and effective Digital Marketing Services strategies.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in digital marketing process:</h3>
            <p className={styles.paragraph}>
              Our comprehensive Digital Marketing Services methodology ensures successful campaign execution through strategic planning, creative implementation, and continuous optimization. As an experienced Digital Marketing Company in Noida, we follow a data-driven approach that maximizes ROI while building sustainable customer relationships.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Market Research & Strategy</h4>
                  <p className={styles.stepText}>We conduct thorough market analysis, competitor research, and audience profiling to build strong Digital Marketing Services strategies aligned with your business goals.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Campaign Planning & Setup</h4>
                  <p className={styles.stepText}>Our team prepares detailed campaign plans and sets up systems for effective execution of Digital Marketing Services across channels.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Execution & Launch</h4>
                  <p className={styles.stepText}>We launch campaigns using integrated Digital Marketing Services, ensuring consistent messaging across platforms.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Monitoring & Optimization</h4>
                  <p className={styles.stepText}>Continuous monitoring and improvement through advanced Digital Marketing Services ensure maximum performance and ROI.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Analysis & Reporting</h4>
                  <p className={styles.stepText}>We deliver detailed insights and reports based on Digital Marketing Services performance to guide future strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Digital Marketing</span></h2>
            <p className={styles.sectionSubtitle}>From SEO to social media marketing campaigns</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className={styles.projectsSwiper}
          >
            {projectTypes.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} width="350" height="250" loading="lazy" />
                    <div className={styles.projectOverlay}>
                      <Link to="/contact" className={styles.projectButton}>Get Quote</Link>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components similar to other development pages */}
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default DigitalMarketingPage;