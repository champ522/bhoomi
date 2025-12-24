import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ContentMarketingPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContentMarketingPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const contentPiecesCount = useCounter(1200, 2000, isStatsVisible);
  const engagementCount = useCounter(450, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Blog Writing & SEO",
      description: "Strategic blog content that drives organic traffic and engagement",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Video Content Creation", 
      description: "Engaging video content for YouTube, social media, and websites",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Infographic Design",
      description: "Visual storytelling through compelling infographics and data visualization",
      image: "/images/dmarketing.png"
    },
    {
      title: "Email Newsletters",
      description: "Content-rich newsletters that nurture leads and build relationships",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Ebook & Whitepapers",
      description: "Authoritative long-form content that establishes thought leadership",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Social Media Content",
      description: "Platform-specific content that drives engagement and shares",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Content Strategy & Planning",
      description: "Comprehensive content calendars and strategic planning services",
      image: "/images/dmarketing.png"
    }
  ];

  return (
    <>
      {/* Content Marketing Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Content Marketing</h1>
            <p className={styles.subtitle}>
              Strategic content that educates, engages, and converts your audience
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Content Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Marketing Content Section */}
      <section className={styles.webDevSection}>
        <div className={styles.webDevContainer}>
          <div className={styles.webDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Creative</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.webDevTitle}>
                <span className={styles.highlight}>Content </span> Marketing
              </h2>
              <p className={styles.description}>
                We create compelling, valuable content that resonates with your target audience and drives meaningful business results. Our strategic content marketing approach combines storytelling, SEO optimization, and data-driven insights to build brand authority, attract qualified leads, and nurture customer relationships throughout the entire buyer's journey.
              </p>
              <p className={styles.description}>
                From blog posts and video content to infographics and comprehensive guides, we develop content that not only educates and entertains but also positions your brand as a trusted industry leader. Our content marketing strategies are designed to increase organic visibility, boost engagement rates, and convert readers into loyal customers across all digital touchpoints.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{contentPiecesCount}+</h3>
                  <p>Content Pieces</p>
                </div>
                <div className={styles.stat}>
                  <h3>{engagementCount}%</h3>
                  <p>Engagement Rate</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Content Support</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/f6a677c7-d5e2-438d-8e7c-193af9d684f6/AO3NsYqWX9.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Content Excellence</h4>
                  <p>Storytelling that converts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is content marketing essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              In today's information-driven marketplace, consumers are bombarded with over 5,000 advertisements daily, yet 70% of people prefer learning about companies through articles rather than ads. Content marketing has become the cornerstone of successful digital strategies, with businesses that prioritize content marketing experiencing 3x more leads than those relying solely on traditional advertising, while spending 62% less on marketing costs.
            </p>
            <p className={styles.paragraph}>
              Quality content marketing builds trust, establishes authority, and creates lasting relationships with your audience. Unlike interruptive advertising, content marketing provides genuine value to your prospects, addressing their pain points and guiding them naturally through the buying process. This approach generates 54% more leads than traditional marketing and produces conversion rates that are 6x higher than other digital marketing methods.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 benefits of strategic content marketing:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Brand Authority</h4>
                <p className={styles.reasonText}>Establish your business as a thought leader in your industry through valuable, expert content that demonstrates knowledge and builds trust with your audience.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Improved SEO Rankings</h4>
                <p className={styles.reasonText}>Quality content naturally attracts backlinks and improves search engine rankings, driving consistent organic traffic to your website over time.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Lead Generation & Nurturing</h4>
                <p className={styles.reasonText}>Content marketing generates 3x more leads than traditional advertising while providing valuable touchpoints to nurture prospects through the sales funnel.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Cost-Effective Marketing</h4>
                <p className={styles.reasonText}>Content marketing costs 62% less than traditional marketing while delivering higher ROI and longer-lasting results that compound over time.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Customer Loyalty & Retention</h4>
                <p className={styles.reasonText}>Valuable content builds stronger customer relationships, increases brand loyalty, and encourages repeat business through ongoing value delivery.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR CONTENT MARKETING SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive content marketing services that cover every aspect of content strategy, creation, and distribution. Our expert content team specializes in developing engaging, SEO-optimized content that attracts, educates, and converts your target audience across all digital channels and formats.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Content Strategy & Planning</div>
              <div className={styles.serviceItem}>• Blog Writing & SEO Content</div>
              <div className={styles.serviceItem}>• Video Content Production</div>
              <div className={styles.serviceItem}>• Infographic & Visual Content Design</div>
              <div className={styles.serviceItem}>• Email Newsletter Creation</div>
              <div className={styles.serviceItem}>• Social Media Content Development</div>
              <div className={styles.serviceItem}>• Ebooks & Whitepaper Creation</div>
              <div className={styles.serviceItem}>• Content Performance Analytics</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF CONTENT marketing:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe that exceptional content marketing is built on authenticity, value creation, and strategic storytelling. Our content marketing philosophy is grounded in principles that ensure every piece of content serves a purpose, provides genuine value, and contributes to your overall business objectives:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Audience-First Approach:</strong> We create content that addresses your audience's specific needs, challenges, and interests, ensuring every piece provides genuine value and relevance to their journey.
              </li>
              <li className={styles.principleItem}>
                <strong>Quality Over Quantity:</strong> We focus on creating high-quality, well-researched content that establishes authority and trust rather than producing volume-based content that lacks depth or value.
              </li>
              <li className={styles.principleItem}>
                <strong>SEO-Driven Strategy:</strong> We integrate keyword research and SEO best practices into our content creation process to ensure maximum organic visibility and search engine performance.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Format Content Mix:</strong> We develop diverse content formats including blog posts, videos, infographics, and interactive content to cater to different learning preferences and consumption habits.
              </li>
              <li className={styles.principleItem}>
                <strong>Data-Driven Optimization:</strong> We continuously analyze content performance metrics to understand what resonates with your audience and optimize future content strategies accordingly.
              </li>
              <li className={styles.principleItem}>
                <strong>Consistent Brand Voice:</strong> We maintain a cohesive brand voice and messaging across all content pieces while adapting tone and style to suit different platforms and audience segments.
              </li>
              <li className={styles.principleItem}>
                <strong>Strategic Distribution:</strong> We develop comprehensive content distribution strategies that maximize reach and engagement across owned, earned, and paid media channels.
              </li>
              <li className={styles.principleItem}>
                <strong>Conversion-Focused Content:</strong> Every piece of content is strategically designed to guide readers through the buyer's journey and contribute to your overall conversion and revenue goals.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in content marketing process:</h3>
            <p className={styles.paragraph}>
              Our proven content marketing methodology ensures successful content campaigns through strategic planning, creative execution, and continuous optimization. We follow a comprehensive approach that maximizes content ROI while building brand authority and driving sustainable business growth through valuable, engaging content experiences.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Content Audit & Strategy Development</h4>
                  <p className={styles.stepText}>We analyze your existing content, research your audience, and develop comprehensive content strategies aligned with your business goals and customer journey.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Content Planning & Calendar Creation</h4>
                  <p className={styles.stepText}>Our team creates detailed content calendars with strategic topics, formats, and publishing schedules that align with your marketing objectives and audience preferences.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Content Creation & Production</h4>
                  <p className={styles.stepText}>We produce high-quality, engaging content including blog posts, videos, infographics, and multimedia content that resonates with your target audience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Content Distribution & Promotion</h4>
                  <p className={styles.stepText}>We implement multi-channel distribution strategies to maximize content reach and engagement across social media, email, and other relevant platforms.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Performance Analysis & Optimization</h4>
                  <p className={styles.stepText}>We continuously monitor content performance metrics, analyze engagement data, and optimize strategies to improve results and achieve your content marketing goals.</p>
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
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Content Marketing</span></h2>
            <p className={styles.sectionSubtitle}>From blog posts to video content and beyond</p>
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

export default ContentMarketingPage;