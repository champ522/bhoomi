import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/WebsiteDesignPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebsiteDesignPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const designsCount = useCounter(300, 2000, isStatsVisible);
  const approvalCount = useCounter(95, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Corporate Websites",
      description: "Professional corporate website designs that reflect your brand identity",
      image: "/images/sliderimg1.png"
    },
    {
      title: "E-commerce Design", 
      description: "User-friendly e-commerce designs that boost conversions and sales",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Landing Pages",
      description: "High-converting landing page designs optimized for marketing campaigns",
      image: "/images/dmarketing.png"
    },
    {
      title: "Portfolio Websites",
      description: "Creative portfolio designs to showcase your work and achievements",
      image: "/images/appdev.png"
    },
    {
      title: "Blog & Magazine",
      description: "Engaging blog and magazine designs with excellent readability",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Restaurant Websites",
      description: "Appetizing restaurant website designs with online ordering systems",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Educational Websites",
      description: "Interactive educational website designs for schools and universities",
      image: "/images/softdev.png"
    }
  ];

  return (
    <>
      {/* Website Design Banner */}
      <section className={styles.websiteDesignBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Website Design</h1>
            <p className={styles.subtitle}>
              Creative and user-focused designs that captivate your audience
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Website Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Website Design Content Section */}
      <section className={styles.websiteDesignSection}>
        <div className={styles.websiteDesignContainer}>
          <div className={styles.websiteDesignContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Creative</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.websiteDesignTitle}>
                <span className={styles.highlight}>Website </span> Design
              </h2>
              <p className={styles.description}>
                We specialize in creating visually stunning and user-centric website designs that not only look 
                amazing but also deliver exceptional user experiences. Our design team combines creativity with 
                strategic thinking to create websites that engage visitors, communicate your brand message effectively, 
                and drive conversions through thoughtful design principles.
              </p>
              <p className={styles.description}>
                From modern minimalist designs to bold and vibrant layouts, we craft websites that perfectly 
                represent your brand identity while ensuring optimal user experience across all devices. Our 
                design approach focuses on visual hierarchy, intuitive navigation, and compelling calls-to-action.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{designsCount}+</h3>
                  <p>Designs Created</p>
                </div>
                <div className={styles.stat}>
                  <h3>{approvalCount}%</h3>
                  <p>Client Approval Rate</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Design Support</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/a0e96b7f-ae97-44d9-9326-b5be58bd2c64/mTzhsLf5xz.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Award-Winning Designs</h4>
                  <p>Creative solutions that stand out</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is professional website design crucial for your business?</h3>
            <p className={styles.paragraph}>
              In today's digital landscape, your website is often the first impression potential customers have of your business. Professional website design goes far beyond aesthetics—it's about creating an experience that builds trust, communicates your value proposition clearly, and guides visitors toward taking desired actions. A well-designed website serves as your most powerful marketing tool, working 24/7 to attract, engage, and convert visitors into customers.
            </p>
            <p className={styles.paragraph}>
              Professional website design directly impacts user behavior, search engine rankings, and business credibility. Studies show that users form opinions about websites within 0.05 seconds, and 94% of first impressions are design-related. A professionally designed website not only captures attention but also reduces bounce rates, increases time on site, and significantly improves conversion rates through strategic design elements and user experience optimization.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 advantages of professional website design:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Brand Credibility</h4>
                <p className={styles.reasonText}>Professional design establishes trust and credibility, making visitors more likely to engage with your business and make purchasing decisions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Improved User Experience</h4>
                <p className={styles.reasonText}>Intuitive navigation, clear layouts, and responsive design ensure visitors can easily find information and complete desired actions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Better Search Engine Rankings</h4>
                <p className={styles.reasonText}>Well-designed websites with clean code, fast loading times, and mobile optimization rank higher in search engine results.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Higher Conversion Rates</h4>
                <p className={styles.reasonText}>Strategic design elements, compelling calls-to-action, and optimized user flows significantly increase conversion rates and sales.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Competitive Market Advantage</h4>
                <p className={styles.reasonText}>A professionally designed website differentiates your business from competitors and positions you as an industry leader.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR WEBSITE DESIGN SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive website design services that blend creativity with functionality. Our design team specializes in creating custom designs that reflect your brand identity while delivering exceptional user experiences that drive business results and customer engagement.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Custom Website Design & Branding</div>
              <div className={styles.serviceItem}>• Responsive & Mobile-First Design</div>
              <div className={styles.serviceItem}>• UI/UX Design & User Research</div>
              <div className={styles.serviceItem}>• E-commerce Design & Optimization</div>
              <div className={styles.serviceItem}>• Landing Page Design & A/B Testing</div>
              <div className={styles.serviceItem}>• Website Redesign & Modernization</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF WEBSITE design:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe that great website design is the perfect marriage of form and function. Our design philosophy is built on principles that ensure every website we create not only looks stunning but also performs exceptionally:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User-Centered Design:</strong> We design with your users in mind, conducting research to understand their needs, behaviors, and preferences to create intuitive and engaging experiences.
              </li>
              <li className={styles.principleItem}>
                <strong>Visual Hierarchy & Clarity:</strong> We use design elements like typography, color, and spacing strategically to guide users' attention and make important information easily discoverable.
              </li>
              <li className={styles.principleItem}>
                <strong>Brand Consistency:</strong> Every design element reinforces your brand identity, from color schemes and typography to imagery and tone, creating a cohesive brand experience.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-First Approach:</strong> We design for mobile devices first, then enhance for larger screens, ensuring optimal performance and user experience across all devices and screen sizes.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> Beautiful designs mean nothing if they don't load fast. We optimize images, code, and design elements to ensure lightning-fast loading times.
              </li>
              <li className={styles.principleItem}>
                <strong>Accessibility Standards:</strong> We design inclusive websites that work for everyone, following accessibility guidelines to ensure your site is usable by people with diverse abilities.
              </li>
              <li className={styles.principleItem}>
                <strong>Conversion-Focused Design:</strong> Every design decision is made with conversion in mind, strategically placing calls-to-action and optimizing user flows to achieve your business goals.
              </li>
              <li className={styles.principleItem}>
                <strong>Future-Proof Design:</strong> We create designs that remain relevant and effective over time, using timeless design principles while incorporating modern trends appropriately.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in website design process:</h3>
            <p className={styles.paragraph}>
              Our comprehensive design process ensures that every website we create is strategically planned, beautifully executed, and optimized for success. We follow a structured approach that combines creative expertise with user research and data-driven insights.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Discovery & Research</h4>
                  <p className={styles.stepText}>We research your industry, competitors, and target audience to understand design preferences and create strategic design briefs.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Wireframing & Planning</h4>
                  <p className={styles.stepText}>We create detailed wireframes and site maps to plan the user journey and establish the foundation for exceptional user experience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Visual Design Creation</h4>
                  <p className={styles.stepText}>Our designers create stunning visual designs that align with your brand while incorporating modern design trends and best practices.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Prototyping & Testing</h4>
                  <p className={styles.stepText}>We create interactive prototypes and conduct usability testing to ensure the design works effectively for your target audience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Finalization & Handoff</h4>
                  <p className={styles.stepText}>We finalize designs with your feedback and provide comprehensive design specifications for seamless development implementation.</p>
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
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Website Designs</span></h2>
            <p className={styles.sectionSubtitle}>From corporate websites to creative portfolios</p>
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
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
    </>
  );
};

export default WebsiteDesignPage;