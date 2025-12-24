import React from 'react';
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
      {/* Digital Marketing Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Digital Marketing</h1>
            <p className={styles.subtitle}>
              Data-driven marketing strategies that deliver measurable results
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
                <span className={styles.highlight}>Digital </span> Marketing
              </h2>
              <p className={styles.description}>
                We specialize in creating comprehensive digital marketing strategies that drive measurable growth 
                for your business. Our data-driven approach combines SEO, PPC, social media marketing, and content 
                strategy to maximize your online presence, attract qualified leads, and convert them into loyal customers 
                across all digital touchpoints.
              </p>
              <p className={styles.description}>
                From search engine optimization to social media campaigns, we deliver integrated marketing solutions 
                that are tailored to your business objectives. Our marketing approach focuses on ROI optimization, 
                audience targeting, and continuous performance improvement to ensure sustainable business growth.
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
                src="https://lottie.host/5b877ef8-d7a1-4617-a7ed-97494a0ee582/UbTcgh4Rjp.json"
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
              In today's digital-first economy, traditional marketing approaches are no longer sufficient to reach and engage modern consumers. Digital marketing has become the cornerstone of business growth, enabling companies to connect with their target audience where they spend most of their time—online. With over 4.9 billion internet users worldwide and digital channels accounting for the majority of consumer touchpoints, businesses without a strong digital marketing presence are missing enormous opportunities for growth and customer acquisition.
            </p>
            <p className={styles.paragraph}>
              Digital marketing provides unprecedented opportunities for precise targeting, real-time optimization, and measurable results. Unlike traditional marketing, digital strategies allow businesses to track every interaction, measure ROI accurately, and adjust campaigns in real-time based on performance data. This level of transparency and control enables businesses to maximize their marketing investment while building meaningful relationships with customers through personalized, relevant experiences across multiple digital channels.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 advantages of professional digital marketing:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Precise Audience Targeting</h4>
                <p className={styles.reasonText}>Digital marketing allows you to target specific demographics, interests, and behaviors, ensuring your message reaches the right people at the right time.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Measurable ROI & Analytics</h4>
                <p className={styles.reasonText}>Track every click, conversion, and dollar spent with detailed analytics that provide clear insights into campaign performance and return on investment.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Cost-Effective Marketing</h4>
                <p className={styles.reasonText}>Digital marketing typically costs less than traditional advertising while offering better targeting and higher conversion rates.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Real-Time Optimization</h4>
                <p className={styles.reasonText}>Adjust campaigns instantly based on performance data, optimize for better results, and respond quickly to market changes.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Global Reach & Accessibility</h4>
                <p className={styles.reasonText}>Reach customers worldwide 24/7 through various digital channels, breaking down geographical and time barriers.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR DIGITAL MARKETING SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive digital marketing services that cover all aspects of online promotion and customer acquisition. Our experienced marketing team specializes in creating integrated campaigns that drive traffic, generate leads, and increase conversions across all digital channels.
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
              At Bhoomi Techzone, we believe that successful digital marketing is built on strategic thinking, creative execution, and continuous optimization. Our marketing philosophy is grounded in principles that ensure every campaign delivers measurable results and drives sustainable business growth:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Data-Driven Decision Making:</strong> We base all marketing strategies on comprehensive data analysis, customer insights, and performance metrics to ensure optimal results and ROI.
              </li>
              <li className={styles.principleItem}>
                <strong>Customer-Centric Approach:</strong> We create personalized marketing experiences that resonate with your target audience's needs, preferences, and buying journey stages.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Channel Integration:</strong> We develop cohesive campaigns across all digital channels, ensuring consistent messaging and maximum reach while optimizing each channel's unique strengths.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Optimization:</strong> We constantly test, measure, and refine campaigns based on real-time performance data to improve results and maximize your marketing investment.
              </li>
              <li className={styles.principleItem}>
                <strong>ROI-Focused Strategy:</strong> Every marketing activity is designed to deliver measurable business value, whether it's increased leads, sales, brand awareness, or customer retention.
              </li>
              <li className={styles.principleItem}>
                <strong>Transparent Reporting:</strong> We provide detailed, easy-to-understand reports that show exactly how your marketing investment is performing and contributing to business growth.
              </li>
              <li className={styles.principleItem}>
                <strong>Agile Methodology:</strong> We adapt quickly to market changes, algorithm updates, and new opportunities, ensuring your marketing strategy remains competitive and effective.
              </li>
              <li className={styles.principleItem}>
                <strong>Long-Term Relationship Building:</strong> We focus on building lasting customer relationships through valuable content, consistent engagement, and exceptional customer experiences.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in digital marketing process:</h3>
            <p className={styles.paragraph}>
              Our comprehensive digital marketing methodology ensures successful campaign execution through strategic planning, creative implementation, and continuous performance optimization. We follow a data-driven approach that maximizes ROI while building sustainable customer relationships.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Market Research & Strategy</h4>
                  <p className={styles.stepText}>We conduct thorough market analysis, competitor research, and audience profiling to develop comprehensive marketing strategies aligned with your business goals.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Campaign Planning & Setup</h4>
                  <p className={styles.stepText}>Our team creates detailed campaign plans, sets up tracking systems, and prepares all creative assets and content for multi-channel deployment.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Execution & Launch</h4>
                  <p className={styles.stepText}>We launch integrated campaigns across selected digital channels, implementing best practices for each platform while maintaining consistent messaging.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Monitoring & Optimization</h4>
                  <p className={styles.stepText}>Continuous campaign monitoring and real-time optimization ensure maximum performance and ROI through data-driven adjustments and improvements.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Analysis & Reporting</h4>
                  <p className={styles.stepText}>We provide comprehensive performance reports and strategic recommendations for future campaigns based on detailed analytics and insights.</p>
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
                    <img src={project.image} alt={project.title} />
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
    </>
  );
};

export default DigitalMarketingPage;