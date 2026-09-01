import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/WebsiteDesignPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Why Choose Professional Website Design Services for Busines"
        description="Get custom website design services that grab attention and drive sales. Our web design pros build responsive sites fast. Start your project today with us!"
        keywords="Website Design Services, Web Design Services"
        canonical="https://bhoomitechzone.in/website-design"
      />
      {/* Website Design Banner */}
      <section className={styles.websiteDesignBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Website Design Services</h1>
            <p className={styles.subtitle}>
              Creative and user-focused websites designed to grow your business
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
                We provide professional Website Design <Link to="/services">Services</Link> that help businesses establish a strong digital presence with visually appealing and high-performing websites. Our team focuses on creating modern, responsive, and user-friendly designs that reflect your brand identity while ensuring seamless functionality across all devices.
              </p>
              <p className={styles.description}>
                As a trusted provider of Website Design Services, we combine creativity with technical expertise to deliver websites that not only look impressive but also drive engagement and conversions. Our approach to Web Design Services ensures that every design element is purposeful, optimized, and aligned with your business goals.
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
                src="https://assets9.lottiefiles.com/packages/lf20_jtbfg2nb.json"
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
            <h3 className={styles.sectionHeading}>Why are website design services important for your business?</h3>
            <p className={styles.paragraph}>
              In today’s digital-first world, your website is often the first impression customers have of your business. Professional Website Design Services ensure that your website communicates credibility, builds trust, and engages users effectively from the very first interaction.
            </p>
            <p className={styles.paragraph}>
              With expert Web Design Services, businesses can create intuitive user experiences that guide visitors through the website, increasing the chances of conversions and customer retention. A well-designed website not only enhances your brand image but also improves search engine visibility and overall digital performance.
            </p>

            <h3 className={styles.sectionHeading}>Top benefits of professional website design services:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Strong First Impression</h4>
                <p className={styles.reasonText}>High-quality Website Design Services ensure your website captures attention instantly with visually appealing layouts and engaging design elements that leave a lasting impression on visitors.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Better User Experience</h4>
                <p className={styles.reasonText}>Professional Web Design Services focus on intuitive navigation, fast loading speed, and mobile responsiveness, ensuring a smooth and enjoyable experience for users across all devices.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Improved SEO Performance</h4>
                <p className={styles.reasonText}>Well-structured Website Design Services help improve your website’s visibility on search engines by implementing <Link to="/seo-optimization">SEO-friendly</Link> design practices and optimized page structures.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Brand Consistency</h4>
                <p className={styles.reasonText}>Consistent branding across your website is essential, and our Web Design Services ensure that colors, fonts, and messaging align perfectly with your business identity.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Higher Conversion Rates</h4>
                <p className={styles.reasonText}>Effective Website Design Services are focused on guiding users toward action, whether it’s making a purchase, filling out a form, or contacting your business.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR WEBSITE DESIGN SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers complete Website Design Services tailored to meet diverse business needs. Our team delivers innovative and customized Web Design Services that cover everything from UI/UX design to responsive layouts and performance optimization, ensuring your website stands out in a competitive digital landscape.
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
              At Bhoomi Techzone, we believe that effective Website Design Services go beyond aesthetics and focus on delivering real business value. Our design philosophy is built on principles that ensure every website is functional, scalable, and user-centric :
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User-Centered Design:</strong> Our Web Design Services focus on understanding user behavior and creating intuitive interfaces that enhance usability and engagement.
              </li>
              <li className={styles.principleItem}>
                <strong>Responsive Design Approach:</strong> We ensure that all Website Design Services deliver fully responsive websites that perform seamlessly across desktops, tablets, and mobile devices.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> Speed and performance are critical, and our Web Design Services are optimized to ensure fast loading times and smooth functionality.
              </li>
              <li className={styles.principleItem}>
                <strong>SEO-Friendly Structure:</strong> Our Website Design Services include clean coding practices and structured layouts that support better search engine rankings.
              </li>
              <li className={styles.principleItem}>
                <strong>Visual Consistency:</strong> We maintain brand consistency through every aspect of our Web Design Services, ensuring a professional and cohesive look.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Design:</strong> Our Website Design Services are built with future growth in mind, allowing easy updates and feature expansions.
              </li>
              <li className={styles.principleItem}>
                <strong>Security Focus:</strong> We implement best practices in all Web Design Services to ensure your website remains secure and protected.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Improvement:</strong> We provide ongoing enhancements as part of our Website Design Services, adapting your website to evolving business needs.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in website design process:</h3>
            <p className={styles.paragraph}>
              Our structured approach to Website Design Services ensures efficient project execution with clear communication and measurable outcomes. Our Web Design Services follow a systematic process that guarantees quality and consistency.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Requirement Analysis</h4>
                  <p className={styles.stepText}>We begin by understanding your business goals, target audience, and design preferences to create a strong foundation for our Website Design Services.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Wireframing & Design Planning</h4>
                  <p className={styles.stepText}>Our team develops wireframes and design concepts as part of our Web Design Services, ensuring clarity in layout and user flow before development begins.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Design & Development</h4>
                  <p className={styles.stepText}>We create visually appealing and functional websites using modern technologies as part of our professional Website Design Services, ensuring a seamless user experience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Optimization</h4>
                  <p className={styles.stepText}>Our Web Design Services include thorough testing for performance, responsiveness, and usability to ensure your website meets all quality standards.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Launch & Support</h4>
                  <p className={styles.stepText}>We handle deployment and provide ongoing support as part of our Website Design Services, ensuring your website continues to perform effectively after launch.</p>
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
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default WebsiteDesignPage;