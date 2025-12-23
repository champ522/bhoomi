import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/LMSSoftwarePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
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
      {/* LMS Banner */}
      <section className={styles.lmsBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>LMS System Solutions</h1>
            <p className={styles.subtitle}>
              Transform education with intelligent online learning solutions
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
                <span className={styles.highlight}>Learning Management </span> System
              </h2>
              <p className={styles.description}>
                We develop comprehensive Learning Management Systems that revolutionize how educational institutions, 
                corporations, and training organizations deliver knowledge. Our LMS solutions provide seamless course 
                creation, content delivery, student engagement, and performance tracking on a unified platform.
              </p>
              <p className={styles.description}>
                From schools and universities to corporate training and online academies, our LMS platforms adapt to 
                your teaching methodology and learning objectives. Empower educators with powerful course authoring 
                tools, engage learners with interactive content, and track progress with detailed analytics and reporting.
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
            <h3 className={styles.sectionHeading}>Why is a Learning Management System essential for modern education?</h3>
            <p className={styles.paragraph}>
              A Learning Management System transforms traditional education by making learning accessible anytime, anywhere. 
              It enables educational institutions to deliver courses online, track student progress, automate assessments, 
              and provide personalized learning experiences. For corporate training, an LMS ensures consistent skill 
              development, compliance training, and employee onboarding at scale. The system centralizes all learning 
              resources, simplifies administration, and provides data-driven insights to improve educational outcomes.
            </p>
            <p className={styles.paragraph}>
              Without an LMS, organizations face challenges like scattered learning materials, manual grade tracking, 
              inconsistent training delivery, lack of engagement metrics, difficulty in scaling education programs, and 
              inefficient communication between instructors and learners. Our custom LMS solutions eliminate these problems 
              by providing centralized content management, automated assessments, interactive learning tools, comprehensive 
              analytics, and seamless communication features that enhance the entire learning experience.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing a Learning Management System:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Centralized Learning Hub</h4>
                <p className={styles.reasonText}>All courses, materials, assessments, and resources in one accessible platform for easy management and access.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Flexible Learning</h4>
                <p className={styles.reasonText}>Enable self-paced learning, mobile access, and 24/7 availability so learners can study anytime, anywhere.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Engagement</h4>
                <p className={styles.reasonText}>Interactive content, gamification, discussion forums, and social learning features boost student engagement.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Automated Administration</h4>
                <p className={styles.reasonText}>Automate enrollment, grading, progress tracking, certificate generation, and reporting to save time.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Data-Driven Insights</h4>
                <p className={styles.reasonText}>Comprehensive analytics on learner performance, course effectiveness, and engagement patterns for continuous improvement.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR LMS FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops feature-rich Learning Management Systems with all essential tools to create, 
              deliver, and manage online courses effectively. Our solutions are customizable to your educational goals 
              and institutional requirements.
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
              At Bhoomi Techzone, we build Learning Management Systems that truly enhance the educational experience 
              for both instructors and learners. Our development approach focuses on creating intuitive, engaging, and 
              scalable platforms that adapt to diverse learning needs:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Learner-Centric Design:</strong> Our LMS platforms prioritize user experience with intuitive 
                navigation, clean interfaces, and accessible design that makes learning enjoyable and effective.
              </li>
              <li className={styles.principleItem}>
                <strong>Multimedia Content Support:</strong> Support for videos, audio, PDFs, presentations, SCORM packages, 
                interactive simulations, and diverse content formats to enrich the learning experience.
              </li>
              <li className={styles.principleItem}>
                <strong>Interactive Learning Tools:</strong> Discussion forums, live chat, collaborative projects, peer 
                reviews, and social learning features foster engagement and knowledge sharing.
              </li>
              <li className={styles.principleItem}>
                <strong>Flexible Assessment Options:</strong> Multiple choice, essays, assignments, practical exams, timed 
                tests, auto-grading, and manual evaluation options for comprehensive assessment.
              </li>
              <li className={styles.principleItem}>
                <strong>Gamification Elements:</strong> Points, badges, leaderboards, achievements, and progress bars 
                motivate learners and make education more engaging and rewarding.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Track completion rates, time spent, quiz scores, engagement levels, 
                learning paths, and generate detailed reports for instructors and administrators.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-First Approach:</strong> Responsive design and native mobile apps ensure seamless learning 
                experience across all devices, enabling learning on-the-go.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Capabilities:</strong> Seamless integration with video conferencing tools, payment 
                gateways, SSO systems, third-party content libraries, and existing institutional systems.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in LMS development:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to LMS development ensures we deliver platforms that perfectly align with your 
              educational objectives and institutional needs. We follow a proven methodology that combines pedagogical 
              best practices with cutting-edge technology.
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
                    <img src={feature.image} alt={feature.title} />
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
    </>
  );
};

export default LMSSoftwarePage;
