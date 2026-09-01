import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/LMSSoftwarePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const LMSSoftwarePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const usersCount = useCounter(1900, 2000, isStatsVisible);
  const completionCount = useCounter(85, 2000, isStatsVisible);
  const engagementCount = useCounter(92, 1500, isStatsVisible);

  const lmsFeatures = [
    {
      title: "Course Management",
      description: "Create, organize, and manage courses with multimedia content, assessments, and learning paths",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Student Portal", 
      description: "Intuitive student dashboard for course enrollment, progress tracking, and assignments",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Assessments & Quizzes",
      description: "Create diverse assessments with auto-grading, question banks, and detailed analytics",
      image: "/images/appdev.png"
    },
    {
      title: "Live Classes & Webinars",
      description: "Integrated video conferencing, live streaming, and interactive virtual classroom features",
      image: "/images/dmarketing.png"
    },
    {
      title: "Certifications & Badges",
      description: "Automated certificate generation, digital badges, and skill verification systems",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Analytics & Reports",
      description: "Comprehensive learning analytics, progress reports, and performance insights",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Mobile Learning",
      description: "Mobile-responsive design and native apps for learning on-the-go anytime, anywhere",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Best LMS Software Development in Noida for eLearning"
        description="Looking for exceptional LMS software development in Noida? Our expert team delivers innovative, scalable solutions with interactive features, seamless integrations, and analytics to enhance learning outcomes and engagement."
        keywords="LMS Software Development, best LMS Software Development in noida"
        canonical="https://bhoomitechzone.in/lms-software"
      />
      {/* LMS Banner */}
      <section className={styles.lmsBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Best LMS Software Development in Noida</h1>
            <p className={styles.subtitle}>
              Intelligent online learning systems that are suited to contemporary demands can revolutionise education. Scalable platforms for smooth course administration and student interaction are provided by our Best LMS Software Development in Noida.
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>LMS Software</span>
            </div>
          </div>
        </div>
      </section>

      {/* LMS Content Section */}
      <section className={styles.lmsSection}>
        <div className={styles.lmsContainer}>
          <div className={styles.lmsContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/44733489-9398-4ea1-99a9-e7f12b6aca2f/LQ9nDm2YqV.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Innovative</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.lmsTitle}>
                Innovative <span className={styles.highlight}>LMS Software </span> Development Solutions
              </h2>
              <p className={styles.description}>
                To assist corporations and educational institutions in providing efficient online learning, we provide cutting-edge LMS software development services. We create platforms that facilitate course building, content delivery, learner engagement, and performance tracking as a reputable supplier of the <strong style={{ color: 'black' }}>best LMS software development in Noida</strong>.
              </p>
              <p className={styles.description}>
                Our LMS solutions are made to adjust to your learning goals, whether you're using them for corporate training programs or educational institutions. Better engagement, smooth learning, and effective course management are all guaranteed by our <strong style={{ color: 'black' }}>LMS software development</strong>.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{usersCount}+</h3>
                  <p>Active Learners</p>
                </div>
                <div className={styles.stat}>
                  <h3>{completionCount}%</h3>
                  <p>Course Completion</p>
                </div>
                <div className={styles.stat}>
                  <h3>{engagementCount}%</h3>
                  <p>User Engagement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is LMS Software Development essential for modern education?</h3>
            <p className={styles.paragraph}>
              In today's digital world, a cutting-edge <strong style={{ color: 'black' }}>LMS software development</strong> solution is essential to changing the way training and education are provided. It makes education more adaptable and accessible by enabling businesses, organisations, and institutions to offer learning opportunities at any time and from any location. An LMS helps enhance learning outcomes while lowering human labour with features including course management, progress monitoring, automated assessments, and interactive content. Additionally, it facilitates individualised learning pathways, which let students advance at their own speed and raise engagement levels. 
            </p>
            <p className={styles.paragraph}>
              Organisations frequently struggle with dispersed learning resources, manual record-keeping, uneven training delivery, and restricted visibility into learner performance when they lack an appropriate LMS. These difficulties may result in ineffectiveness and subpar educational opportunities. By providing centralised content management, automation, real-time analytics, and seamless communication tools, our <strong style={{ color: 'black' }}>best LMS software development in Noida</strong> tackles these problems and guarantees a more effective, captivating, and scalable learning ecosystem.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing a Learning Management System:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Centralized Learning Hub</h4>
                <p className={styles.reasonText}>Manage all courses, materials, and assessments in one platform for easy access and control.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Flexible Learning</h4>
                <p className={styles.reasonText}>Enable learners to access content anytime with self-paced and mobile-friendly learning options.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Engagement</h4>
                <p className={styles.reasonText}>Interactive tools like quizzes, forums, and gamification improve learner participation.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Automated Administration</h4>
                <p className={styles.reasonText}>Automate enrollment, grading, and reporting to save time and reduce manual work.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Data-Driven Insights</h4>
                <p className={styles.reasonText}>Track learner performance and course effectiveness with detailed analytics.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR LMS FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops feature-rich Learning Management Systems with all essential tools to create, deliver, and manage online courses effectively. Our solutions are customizable to your educational goals and institutional requirements.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Course Creation & Management</div>
              <div className={styles.serviceItem}>• Student Enrollment & Portal</div>
              <div className={styles.serviceItem}>• Assessments & Quizzes</div>
              <div className={styles.serviceItem}>• Live Classes & Video Conferencing</div>
              <div className={styles.serviceItem}>• Certificates & Badges</div>
              <div className={styles.serviceItem}>• Learning Analytics & Reports</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF LMS DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              Our strategy is centred on providing the best LMS software development in Noida with scalable architecture, high performance, and captivating design. Our LMS software development solutions are designed to increase overall training outcomes, streamline management, and improve learning experiences:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Learner-Centric Design:</strong> Our <strong style={{ color: 'black' }}>LMS software development</strong> focuses on creating intuitive and easy-to-use platforms. We design clean interfaces with smooth navigation so both learners and instructors can access content effortlessly and enjoy a seamless learning experience.
              </li>
              <li className={styles.principleItem}>
                <strong>Multimedia Content Support:</strong> We support multiple content formats including videos, PDFs, presentations, and interactive modules. This ensures better knowledge delivery and makes learning more engaging and effective.
              </li>
              <li className={styles.principleItem}>
                <strong>Interactive Learning Tools:</strong> Our LMS platforms include features like discussion forums, live chat, quizzes, and collaboration tools. These features improve engagement and encourage active participation among learners.
              </li>
              <li className={styles.principleItem}>
                <strong>Flexible Assessment Options:</strong> We provide various assessment methods such as quizzes, assignments, and exams with both auto and manual grading options. This ensures accurate evaluation and better tracking of learner performance.
              </li>
              <li className={styles.principleItem}>
                <strong>Gamification Elements:</strong> Our <strong style={{ color: 'black' }}>best LMS software development in Noida</strong> includes gamification features like badges, points, leaderboards, and achievements. These elements motivate learners and increase course completion rates.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Our <strong style={{ color: 'black' }}>LMS software development</strong> offers detailed analytics and reporting tools to track learner progress, engagement levels, and performance trends, helping organizations make data-driven decisions.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-First Approach:</strong> We build fully responsive LMS platforms that work seamlessly across mobile, tablet, and desktop devices. This allows learners to access courses anytime and anywhere.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Capabilities:</strong> Our LMS solutions easily integrate with video conferencing tools, payment gateways, <Link to="/erp-solutions">ERP systems</Link>, and third-party applications, ensuring smooth and connected operations.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in LMS development:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to LMS development ensures we deliver platforms that perfectly align with your 
              educational objectives and institutional needs. We follow a proven methodology that combines pedagogical 
              best practices with cutting-edge <Link to="/technology">technology</Link>.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Educational Needs Analysis</h4>
                  <p className={styles.stepText}>We analyze your teaching methodology, course structure, learner demographics, and specific requirements to design the perfect LMS.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Platform Architecture & UX Design</h4>
                  <p className={styles.stepText}>Our team creates intuitive user interface designs, information architecture, and technical specifications optimized for learning.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Content Integration</h4>
                  <p className={styles.stepText}>We develop the LMS with custom features, integrations, course authoring tools, and migrate existing educational content.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Quality Assurance</h4>
                  <p className={styles.stepText}>Comprehensive testing ensures platform stability, content delivery accuracy, and seamless user experience across devices.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Launch Support</h4>
                  <p className={styles.stepText}>We provide detailed training for instructors and administrators, along with launch support to ensure successful platform adoption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LMS Features Section */}
      <section className={styles.lmsFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>LMS Features</span></h2>
            <p className={styles.sectionSubtitle}>Comprehensive tools to deliver exceptional learning experiences</p>
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
            className={styles.lmsSwiper}
          >
            {lmsFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.lmsCard}>
                  <div className={styles.lmsImage}>
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
                    <div className={styles.lmsOverlay}>
                      <Link to="/contact" className={styles.lmsButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.lmsCardContent}>
                    <h3 className={styles.lmsCardTitle}>{feature.title}</h3>
                    <p className={styles.lmsDescription}>{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default LMSSoftwarePage;
