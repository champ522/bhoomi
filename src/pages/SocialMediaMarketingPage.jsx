import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/SocialMediaMarketingPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SocialMediaMarketingPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const campaignsCount = useCounter(800, 2000, isStatsVisible);
  const engagementCount = useCounter(350, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Facebook Marketing",
      description: "Strategic Facebook campaigns that build communities and drive conversions",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Instagram Marketing", 
      description: "Visual storytelling and influencer campaigns on Instagram platform",
      image: "/images/sliderimg1.png"
    },
    {
      title: "LinkedIn Marketing",
      description: "B2B lead generation and professional networking campaigns",
      image: "/images/dmarketing.png"
    },
    {
      title: "Twitter Marketing",
      description: "Real-time engagement and brand awareness campaigns on Twitter",
      image: "/images/sliderimg2.png"
    },
    {
      title: "YouTube Marketing",
      description: "Video content marketing and channel growth strategies",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Pinterest Marketing",
      description: "Visual discovery marketing and e-commerce integration",
      image: "/images/dmarketing.png"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive performance tracking and social media insights",
      image: "/images/sliderimg2.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Social Media Marketing Services to Boost Online Presence"
        description="Grow your brand with expert Social Media Marketing Services by Bhoomi Techzone. We drive real engagement, boost visibility & turn followers into customers."
        keywords="Social Media Marketing Services, social media advertising"
        canonical="https://bhoomitechzone.in/social-media-marketing"
      />
      {/* Social Media Marketing Banner */}
      <section className={styles.webDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Social Media Marketing Services</h1>
            <p className={styles.subtitle}>
              Result-driven Social Media Marketing Services to grow your brand online Boost engagement and conversions with expert social media advertising strategies
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Social Media Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Content Section */}
      <section className={styles.webDevSection}>
        <div className={styles.webDevContainer}>
          <div className={styles.webDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Creative</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.webDevTitle}>
                <span className={styles.highlight}>Social Media </span> Marketing
              </h2>
              <p className={styles.description}>
                We specialize in delivering result-driven Social Media Marketing <Link to="/services">Services</Link> that create engaging strategies to build authentic communities and drive meaningful conversations around your brand. Our comprehensive approach combines creative content creation, strategic planning, and data-driven optimization to maximize your social media presence and convert followers into loyal customers across all major platforms.
              </p>
              <p className={styles.description}>
                From organic content strategies to social media advertising, we deliver integrated Social Media Marketing agencies that amplify your brand voice, increase engagement rates, and generate qualified leads. Our approach focuses on community building, brand storytelling, and performance optimization to ensure sustainable growth and meaningful connections with your target audience.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{campaignsCount}+</h3>
                  <p>Social Campaigns</p>
                </div>
                <div className={styles.stat}>
                  <h3>{engagementCount}%</h3>
                  <p>Engagement Rate</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Social Support</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_2cwDXD.json"
                background="transparent"
                speed="0.5"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Social Engagement</h4>
                  <p>Connecting brands with communities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is social media marketing crucial for business growth?</h3>
            <p className={styles.paragraph}>
              In today's interconnected digital landscape, social media platforms have become the primary spaces where consumers discover, research, and engage with brands. With over 4.7 billion users worldwide spending significant time daily, businesses without strong Social Media Marketing Services are missing out on major opportunities for brand awareness, customer acquisition, and relationship building.
            </p>
            <p className={styles.paragraph}>
              Social Media Marketing Services offer unmatched opportunities for direct customer communication, real-time feedback, and community building. Combined with effective social media advertising, businesses can create two-way conversations that foster trust, loyalty, and authentic brand connections, leading to higher conversions and long-term growth.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 benefits of professional social media marketing:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Brand Awareness</h4>
                <p className={styles.reasonText}>With expert Social Media Marketing Services, your brand gains massive reach through organic strategies and targeted social media advertising campaigns.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Direct Customer Engagement</h4>
                <p className={styles.reasonText}>Build strong relationships with your audience through consistent interaction powered by effective Social Media Marketing Services.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Cost-Effective Marketing</h4>
                <p className={styles.reasonText}>Compared to traditional methods, Social Media Marketing Services offer better ROI with lower costs and higher engagement potential.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Real-Time Market Insights</h4>
                <p className={styles.reasonText}>Gain valuable insights into customer preferences, trends, and behaviors through social listening and analytics to inform business decisions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Viral Content Potential</h4>
                <p className={styles.reasonText}>Create content that can reach exponentially larger audiences through shares, likes, and social engagement, maximizing your marketing impact.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SOCIAL MEDIA MARKETING SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive Social Media Marketing Services that cover all aspects of social presence and community engagement. Our expert team specializes in creating platform-specific strategies along with social media advertising campaigns that drive engagement, build communities, and convert followers into customers.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Social Media Strategy Development</div>
              <div className={styles.serviceItem}>• Content Creation & Curation</div>
              <div className={styles.serviceItem}>• Social Media Advertising (Paid Campaigns)</div>
              <div className={styles.serviceItem}>• Community Management & Engagement</div>
              <div className={styles.serviceItem}>• Influencer Marketing Campaigns</div>
              <div className={styles.serviceItem}>• Social Media Analytics & Reporting</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF SOCIAL MEDIA marketing:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, our Social Media Marketing Services are built on authentic engagement, creative storytelling, and strategic community building to ensure long-term success :
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Authentic Brand Storytelling:</strong> We create genuine, compelling narratives that resonate with your audience and reflect your brand's values, mission, and personality across all social platforms.
              </li>
              <li className={styles.principleItem}>
                <strong>Community-First Approach:</strong> We focus on building engaged communities rather than just follower counts, fostering meaningful interactions that lead to brand loyalty and advocacy.
              </li>
              <li className={styles.principleItem}>
                <strong>Platform-Specific Strategy:</strong> We tailor content and strategies to each platform's unique audience, features, and best practices to maximize engagement and reach on every channel.
              </li>
              <li className={styles.principleItem}>
                <strong>Data-Driven Optimization:</strong> We continuously analyze performance metrics, engagement rates, and audience insights to optimize content strategy and improve campaign effectiveness.
              </li>
              <li className={styles.principleItem}>
                <strong>Consistent Brand Voice:</strong> We maintain a cohesive brand voice and visual identity across all platforms while adapting tone and content style to suit each platform's culture.
              </li>
              <li className={styles.principleItem}>
                <strong>Real-Time Engagement:</strong> We prioritize timely responses to comments, messages, and mentions to build trust and maintain active community relationships.
              </li>
              <li className={styles.principleItem}>
                <strong>Creative Content Innovation:</strong> We stay ahead of social media trends and continuously experiment with new content formats, features, and creative approaches to keep your brand fresh and engaging.
              </li>
              <li className={styles.principleItem}>
                <strong>ROI-Focused Campaigns:</strong> Every social media activity is designed to contribute to business objectives, whether it's brand awareness, lead generation, sales conversion, or customer retention.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in social media marketing process:</h3>
            <p className={styles.paragraph}>
              Our proven social media marketing methodology ensures successful campaign execution through strategic planning, creative content development, and continuous community engagement. We follow a comprehensive approach that maximizes social media ROI while building authentic brand communities and driving sustainable business growth.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Social Media Audit & Strategy</h4>
                  <p className={styles.stepText}>We conduct comprehensive social media audits, analyze competitor presence, and develop platform-specific strategies aligned with your business goals and target audience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Content Planning & Creation</h4>
                  <p className={styles.stepText}>Our creative team develops engaging content calendars, creates platform-optimized visuals, and produces compelling copy that resonates with your audience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Community Building & Engagement</h4>
                  <p className={styles.stepText}>We actively manage your social communities, engage with followers, respond to comments, and build meaningful relationships that foster brand loyalty.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Paid Campaign Management</h4>
                  <p className={styles.stepText}>We create and optimize targeted social media advertising campaigns that drive qualified traffic, generate leads, and maximize return on ad spend.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Analytics & Performance Optimization</h4>
                  <p className={styles.stepText}>We continuously monitor performance metrics, analyze engagement data, and optimize strategies to improve results and achieve your social media objectives.</p>
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
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Social Media Marketing</span></h2>
            <p className={styles.sectionSubtitle}>From Facebook campaigns to influencer partnerships</p>
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

export default SocialMediaMarketingPage;