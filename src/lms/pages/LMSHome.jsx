import React from 'react';
import SEOHead from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import ParticleBanner from '../../components/ParticleBanner';
import { courses } from '../data/courses';
import styles from '../styles/lms.module.css';

/**
 * LMS Home Page Component
 * Displays all available courses in a grid layout
 */
const LMSHome = () => {
  return (
    <>
      <SEOHead
        title="BhoomiTech Learning Hub | Free IT Courses Online"
        description="Learn web development, mobile apps, digital marketing and more with BhoomiTech's free online courses. Structured lessons, code examples and practice exercises."
        keywords="free IT courses online, web development course, programming tutorials, BhoomiTech learning hub"
        canonical="https://bhoomitechzone.in/lms"
      />
      {/* LMS Banner */}
      <section className={styles.lmsBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>BhoomiTech Learning Hub</h1>
            <p className={styles.subtitle}>
              Choose from our comprehensive courses and start learning today
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Learning Hub</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.lmsContainer}>
       <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>
            Explore Our <span className={styles.titleHighlight}>Online IT Courses</span> For your Career
          </h2>
          <p className={styles.sectionSubtitle}>
            Discover industry-focused online IT courses designed to help you build real-world skills in web development, programming, software development, databases, React, Node.js, Python, Flutter, and modern technologies to grow your career.
          </p>
        </div>
      <div className={styles.courseGrid}>
        {courses.map(course => (
          <div key={course.id} className={styles.courseCard}>
            <div className={styles.courseContent}>
              <div className={styles.courseHeader}>
                <h2 className={styles.courseTitle}>{course.title}</h2>
              </div>
              <p className={styles.courseDescription}>{course.description}</p>
              <Link 
                to={`/lms/course/${course.id}/lesson/${course.lessons[0].id}`}
                className={styles.startCourseBtn}
              >
                Learn {course.title}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.features}>
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Why Choose Us</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Why Choose Our <span className={styles.titleHighlight}>LMS?</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Our Learning Management System (LMS) offers a comprehensive and engaging learning experience with structured lessons, real-world examples, and practical exercises. Whether you're a beginner or looking to upskill, our LMS provides the tools and resources you need to succeed in the IT industry.
          </p>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Real Content</h3>
            <p className={styles.featureDescription}>Well-structured lessons with examples and videos</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Smart Learn</h3>
            <p className={styles.featureDescription}>Code examples and practical exercises</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Mobile Friendly</h3>
            <p className={styles.featureDescription}>Learn anywhere, anytime on any device</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Self-Paced</h3>
            <p className={styles.featureDescription}>Learn at your own speed and convenience</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LMSHome;