import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/EduTechPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const EduTechPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const studentsCount = useCounter(50, 2000, isStatsVisible);
  const coursesCount = useCounter(1000, 2000, isStatsVisible);
  const satisfactionCount = useCounter(95, 1500, isStatsVisible);

  const edutechSolutions = [
    {
      title: "Learning Management Systems",
      description: "Comprehensive LMS platforms with course management, assessments, and progress tracking",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Virtual Classrooms",
      description: "Interactive online learning environments with live video, chat, and collaboration tools",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M8 21H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 10L14 12L10 14V10Z" fill="#0e8d38"/>
      </svg>
    },
    {
      title: "Student Information Systems",
      description: "Complete student data management, enrollment, attendance, and academic records",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "E-Learning Platforms",
      description: "Custom e-learning portals with multimedia content, quizzes, and certification systems",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Assessment & Analytics",
      description: "Smart assessment tools with automated grading and detailed performance analytics",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10H21V15" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Mobile Learning Apps",
      description: "Cross-platform mobile apps for learning on-the-go with offline access capabilities",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 18H12.01" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];

  const useCases = [
    {
      title: "K-12 Education Platforms",
      description: "Complete digital learning solutions for schools with curriculum management and parent portals.",
      content: "We develop comprehensive K-12 education platforms that digitize the entire learning experience. Our solutions include interactive lesson plans, multimedia content delivery, homework management, automated grading systems, and parent-teacher communication portals. Features include attendance tracking, report card generation, virtual classrooms, and learning analytics to monitor student progress and identify areas needing attention.",
      features: ["Virtual Classrooms", "Homework Management", "Parent Portal", "Progress Tracking"],
      image: "/images/edutechbnr1.png"
    },
    {
      title: "Higher Education LMS",
      description: "Advanced learning management systems for universities with research collaboration tools.",
      content: "Our higher education LMS solutions cater to colleges and universities with advanced features like course catalog management, online enrollment, degree audit systems, research collaboration tools, and thesis management. We integrate video conferencing, discussion forums, assignment submissions, peer reviews, and plagiarism detection. The system supports multiple user roles including students, faculty, administrators, and alumni.",
      features: ["Course Management", "Research Tools", "Online Enrollment", "Collaboration"],
      image: "/images/edutech01.png"
    },
    {
      title: "Corporate Training Portals",
      description: "Employee training and development platforms with compliance tracking and certification.",
      content: "We build corporate learning platforms that streamline employee training and professional development. Our solutions include onboarding modules, compliance training, skill development courses, and certification programs. Features include learning paths customization, competency tracking, performance assessments, and integration with HR systems. Detailed analytics help organizations measure training effectiveness and ROI.",
      features: ["Onboarding Modules", "Compliance Training", "Skill Development", "HR Integration"],
      image: "/images/edutech03.png"
    },
    {
      title: "Online Course Marketplaces",
      description: "Multi-vendor e-learning platforms with payment processing and content management.",
      content: "Our online course marketplace solutions enable entrepreneurs to build platforms like Udemy or Coursera. Features include instructor onboarding, course creation tools, video hosting, student enrollment, payment gateway integration, revenue sharing, rating and review systems, and recommendation engines. We implement advanced search, category filtering, and personalized learning recommendations to enhance user experience.",
      features: ["Multi-Vendor Support", "Payment Processing", "Course Builder", "Analytics"],
      image: "/images/edutech02.png"
    }
  ];

  return (
    <>
      {/* EduTech Hero Banner */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Solutions</span>
              <span>/</span>
              <span>EduTech</span>
            </div>
            <h1 className={styles.heroTitle}>
              Transform Education with
              <span className={styles.heroHighlight}> Digital Innovation</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Build engaging, scalable, and interactive educational technology solutions that 
              revolutionize learning experiences for students, teachers, and institutions.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/edutechbnr1.png" alt="EduTech Solutions" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{studentsCount}K+</h3>
              <p className={styles.statLabel}>Active Students</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{coursesCount}+</h3>
              <p className={styles.statLabel}>Courses Available</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{satisfactionCount}%</h3>
              <p className={styles.statLabel}>User Satisfaction</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Learning Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* About EduTech Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Leading <span className={styles.highlight}>EduTech Dev</span> Company
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in developing innovative educational technology solutions 
                that transform traditional learning into engaging digital experiences. Our expertise spans 
                learning management systems, virtual classrooms, e-learning platforms, and educational apps.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of the education sector including accessibility, 
                engagement, content delivery, and assessment. Our edutech solutions are built with 
                user-friendly interfaces, scalable architectures, and powerful features that enhance 
                learning outcomes for students, educators, and institutions.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Interactive Learning Tools</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Real-Time Collaboration</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Advanced Analytics</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Mobile-First Design</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <lottie-player
                src="https://lottie.host/6f8d195e-08dc-4508-9121-188147f845d7/HcN1AKW3We.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={styles.solutionsSection} id="solutions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionLabel} ${styles.sectionsol}`}>Our Solutions</span>
            <h2 className={styles.sectionTitle}>
              Comprehensive <span className={styles.highlight}>EduTech Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From LMS platforms to virtual classrooms, we deliver innovative educational technology solutions
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {edutechSolutions.map((solution, index) => (
              <div key={index} className={styles.solutionCard}>
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <h3 className={styles.solutionTitle}>{solution.title}</h3>
                <p className={styles.solutionDescription}>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionLabel} ${styles.sectionsol}`}>Use Cases</span>
            <h2 className={styles.sectionTitle}>
              Real-World <span className={styles.highlight}>EduTech Applications</span>
            </h2>
          </div>
          
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`${styles.useCaseRow} ${index % 2 === 1 ? styles.reverse : ''}`}
            >
              <div className={styles.useCaseContent}>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDescription}>{useCase.description}</p>
                <p className={styles.useCaseDetails}>{useCase.content}</p>
                <div className={styles.useCaseFeatures}>
                  {useCase.features.map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className={styles.useCaseBtn}>
                  Get Started
                </Link>
              </div>
              <div className={styles.useCaseImage}>
                <img src={useCase.image} alt={useCase.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Benefits */}
      <section className={styles.securitySection}>
        <div className={styles.container}>
          <div className={styles.securityGrid}>
            <div className={styles.securityContent}>
              <span className={styles.sectionLabel}>Key Features</span>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Powerful Features</span> for Modern Learning
              </h2>
              <p className={styles.paragraph}>
                Our educational technology solutions come packed with features designed to enhance learning 
                experiences, streamline administrative tasks, and provide valuable insights into student performance.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Interactive Content</h4>
                  <p>Engaging multimedia content with videos, quizzes, and gamification</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Progress Tracking</h4>
                  <p>Real-time monitoring of student progress and performance analytics</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Virtual Classrooms</h4>
                  <p>Live video sessions with screen sharing and collaborative tools</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Mobile Learning</h4>
                  <p>Seamless learning experience across all devices and platforms</p>
                </div>
              </div>
            </div>
            <div className={styles.securityImage}>
              <lottie-player
                src="https://lottie.host/bb79e6b9-1991-4f80-8bd1-7616172ce743/oRxkZ67mfU.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      <TechnologyStack />
      <WorkProcess />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Education?</h2>
            <p className={styles.ctaDescription}>
              Let's build innovative edutech solutions that enhance learning experiences and drive success
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* Include other components */}
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default EduTechPage;
