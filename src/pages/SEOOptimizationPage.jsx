import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/SEOOptimizationPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SEOOptimizationPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const keywordsCount = useCounter(2500, 2000, isStatsVisible);
  const rankingImprovementCount = useCounter(185, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "On-Page SEO",
      description: "Complete optimization of your website's content, structure, and technical elements",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Off-Page SEO", 
      description: "Building authority through quality backlinks and digital PR strategies",
      image: "/images/dmarketing.png"
    },
    {
      title: "Technical SEO",
      description: "Website speed optimization, mobile-friendliness, and crawlability improvements",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your area",
      image: "/images/sliderimg2.png"
    },
    {
      title: "E-commerce SEO",
      description: "Product page optimization and category structure for online stores",
      image: "/images/sliderimg1.png"
    },
    {
      title: "SEO Audits",
      description: "Comprehensive analysis of your website's SEO performance and opportunities",
      image: "/images/dmarketing.png"
    },
    {
      title: "Keyword Research",
      description: "Strategic keyword analysis and competitive intelligence for your industry",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="SEO Optimization Services in Noida for Better Rankings"
        description="Boost your rankings with expert SEO Optimization Services by Bhoomi Techzone. Drive organic traffic & grow your business online effectively."
        keywords="SEO Optimization Services, Best SEO Services in noida"
        canonical="https://bhoomitechzone.in/seo-optimization"
      />
      {/* SEO Optimization Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>SEO Optimization Services</h1>
            <p className={styles.subtitle}>
              Result-driven SEO Optimization Services to boost rankings and organic traffic. Recognized for delivering the Best SEO Services in Noida with measurable growth
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>SEO Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization Content Section */}
      <section className={styles.webDevSection}>
        <div className={styles.webDevContainer}>
          <div className={styles.webDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Strategic</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.webDevTitle}>
                <span className={styles.highlight}>SEO </span> Optimization Services
              </h2>
              <p className={styles.description}>
                We provide advanced SEO Optimization <Link to="/services">Services</Link> that improve your website visibility, increase organic traffic, and drive real business results. Our approach combines technical SEO, content optimization, and data-driven strategies to help your <Link to="/website-design">website</Link> rank higher on search engines and outperform competitors in your industry.
              </p>
              <p className={styles.description}>
                From on-page improvements and technical fixes to local SEO and <Link to="/ecommerce-platform">eCommerce</Link> optimization, our SEO Optimization Services are designed to deliver measurable growth. As a team delivering the Best SEO Services in Noida, we focus on long-term ranking stability, better user experience, and sustainable organic performance across all major search engines.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{keywordsCount}+</h3>
                  <p>Keywords Ranked</p>
                </div>
                <div className={styles.stat}>
                  <h3>{rankingImprovementCount}%</h3>
                  <p>Rank Improvement</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>SEO Support</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_s2lryxtd.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>SEO Excellence</h4>
                  <p>Ranking strategies that work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why are SEO optimization critical for business success?</h3>
            <p className={styles.paragraph}>
              In today’s digital-first world, most online experiences begin with a search engine, making SEO Optimization Services essential for visibility and growth. Businesses that invest in SEO gain consistent organic traffic, higher conversion rates, and long-term online presence compared to traditional marketing approaches.
            </p>
            <p className={styles.paragraph}>
              Effective SEO Optimization Services help your website appear in front of users actively searching for your products or services. Unlike paid ads, SEO delivers continuous results without ongoing ad spend. With the Best SEO Services in Noida, businesses can achieve better rankings, stronger credibility, and improved lead generation through organic search.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 benefits of professional SEO optimization Services :</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Increased Organic Traffic</h4>
                <p className={styles.reasonText}>Drive qualified visitors to your website through improved search engine rankings, resulting in consistent traffic growth without ongoing advertising costs.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Higher Conversion Rates</h4>
                <p className={styles.reasonText}>SEO traffic converts 14.6% higher than traditional outbound marketing because visitors are actively searching for your products or services.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Brand Credibility</h4>
                <p className={styles.reasonText}>Top search rankings build trust and authority in your industry, with users perceiving higher-ranked websites as more credible and trustworthy.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Long-Term ROI</h4>
                <p className={styles.reasonText}>SEO provides sustainable results that compound over time, delivering continuous traffic growth and lead generation with lasting impact.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Competitive Advantage</h4>
                <p className={styles.reasonText}>Outrank competitors in search results to capture market share, attract their potential customers, and establish market dominance.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SEO OPTIMIZATION SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive SEO optimization services that cover every aspect of search engine visibility and organic traffic growth. Our expert SEO team specializes in delivering measurable results through technical optimization, content strategy, and strategic link building across all search engines and industries.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Complete SEO Audits & Analysis</div>
              <div className={styles.serviceItem}>• Keyword Research & Strategy</div>
              <div className={styles.serviceItem}>• On-Page SEO Optimization</div>
              <div className={styles.serviceItem}>• Technical SEO Implementation</div>
              <div className={styles.serviceItem}>• Link Building & Off-Page SEO</div>
              <div className={styles.serviceItem}>• Local SEO & Google My Business</div>
              <div className={styles.serviceItem}>• E-commerce SEO Solutions</div>
              <div className={styles.serviceItem}>• SEO Performance Monitoring</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF SEO optimization:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe that successful SEO optimization is built on technical excellence, strategic content development, and ethical optimization practices. Our SEO philosophy is grounded in principles that ensure sustainable rankings, long-term growth, and compliance with search engine guidelines:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>White-Hat SEO Practices:</strong> We strictly follow search engine guidelines and use only ethical optimization techniques that ensure long-term ranking stability and protect your website from penalties.
              </li>
              <li className={styles.principleItem}>
                <strong>Data-Driven Strategy:</strong> Every SEO decision is backed by thorough research, competitive analysis, and performance data to ensure maximum impact and measurable results.
              </li>
              <li className={styles.principleItem}>
                <strong>Technical Excellence:</strong> We prioritize technical SEO fundamentals including site speed, mobile optimization, crawlability, and indexation to create a solid foundation for rankings.
              </li>
              <li className={styles.principleItem}>
                <strong>Content-First Approach:</strong> We focus on creating valuable, user-focused content that naturally attracts links and provides genuine value to your target audience.
              </li>
              <li className={styles.principleItem}>
                <strong>Holistic SEO Strategy:</strong> We integrate on-page, off-page, and technical SEO elements into a comprehensive strategy that addresses all ranking factors and optimization opportunities.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Optimization:</strong> We continuously monitor performance, adapt to algorithm changes, and refine strategies to maintain and improve rankings over time.
              </li>
              <li className={styles.principleItem}>
                <strong>Transparent Reporting:</strong> We provide detailed performance reports and clear communication about SEO progress, challenges, and opportunities for continued growth.
              </li>
              <li className={styles.principleItem}>
                <strong>ROI-Focused Results:</strong> Every SEO activity is designed to drive business outcomes including increased traffic, leads, conversions, and revenue growth for your company.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in SEO optimization Services process:</h3>
            <p className={styles.paragraph}>
              Our structured approach ensures successful execution of SEO Optimization Services with consistent improvements in rankings and traffic.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>SEO Audit & Competitive Analysis</h4>
                  <p className={styles.stepText}>We conduct comprehensive website audits, analyze competitor strategies, and identify optimization opportunities to develop targeted SEO strategies.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Keyword Research & Strategy</h4>
                  <p className={styles.stepText}>Our team performs in-depth keyword research, analyzes search intent, and develops strategic keyword targeting plans aligned with your business goals.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Technical & On-Page Optimization</h4>
                  <p className={styles.stepText}>We implement technical SEO improvements, optimize page elements, and ensure your website meets all search engine requirements for optimal crawling and indexing.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Content Optimization & Link Building</h4>
                  <p className={styles.stepText}>We create SEO-optimized content, develop strategic link building campaigns, and build domain authority through ethical off-page optimization techniques.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Monitoring & Performance Optimization</h4>
                  <p className={styles.stepText}>We continuously track rankings, analyze traffic data, and optimize strategies to improve performance and maintain competitive search visibility.</p>
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
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>SEO Optimization</span></h2>
            <p className={styles.sectionSubtitle}>From technical SEO to local search domination</p>
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

export default SEOOptimizationPage;