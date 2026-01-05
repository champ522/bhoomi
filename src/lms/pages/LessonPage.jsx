import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById, getLessonById, getNextLesson, getPreviousLesson } from '../data/courses';
import ParticleBanner from '../../components/ParticleBanner';
import Sidebar from '../components/Sidebar';
import LessonContent from '../components/LessonContent';
import styles from '../styles/lms.module.css';

/**
 * Lesson Page Component
 * Main LMS interface with sidebar navigation and lesson content
 */
const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const course = getCourseById(courseId);
  const lesson = getLessonById(courseId, lessonId);
  const nextLesson = getNextLesson(courseId, lessonId);
  const previousLesson = getPreviousLesson(courseId, lessonId);

  // Close sidebar on mobile when lesson changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [lessonId]);

  // Handle window resize to manage sidebar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Reset mobile sidebar state on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If course or lesson not found, show error
  if (!course || !lesson) {
    return (
      <div className={styles.lmsContainer}>
        <div className={styles.errorMessage}>
          <h2>Content Not Found</h2>
          <p>The lesson you're looking for doesn't exist.</p>
          <Link to="/lms" className={styles.backButton}>
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Learning Interface Banner */}
      <section className={styles.lmsBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{course.title}</h1>
            <p className={styles.subtitle}>
              {lesson.title}
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/lms" className={styles.breadcrumbLink}>Learning Hub</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>{course.title}</span>
            </div>
          </div>
        </div>
      </section>

    <div className={styles.lessonPageContainer}>
      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <Link to="/lms" className={styles.mobileHomeLink}>
          ← Home
        </Link>
        <h1 className={styles.mobileTitle}>{course.title}</h1>
        <button 
          className={styles.sidebarToggle}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </header>

      <div className={styles.lessonLayout}>
        {/* Sidebar */}
        <Sidebar 
          course={course}
          currentLessonId={lessonId}
          isOpen={isSidebarOpen}
          onLessonClick={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Lesson Content */}
          <LessonContent lesson={lesson} />

          {/* Navigation Buttons */}
          <div className={styles.lessonNavigation}>
            <div className={styles.navLeft}>
              {previousLesson && (
                <Link 
                  to={`/lms/course/${courseId}/lesson/${previousLesson.id}`}
                  className={styles.navButton}
                >
                  <div className={styles.navText}>
                    <small>Previous</small>
                    <span>{previousLesson.title}</span>
                  </div>
                </Link>
              )}
            </div>
            <div className={styles.navRight}>
              {nextLesson && (
                <Link 
                  to={`/lms/course/${courseId}/lesson/${nextLesson.id}`}
                  className={styles.navButton}
                >
                  <div className={styles.navText}>
                    <small>Next</small>
                    <span>{nextLesson.title}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Course Completion */}
          {!nextLesson && (
            <div className={styles.courseComplete}>
              <h3>Course Complete!</h3>
              <p>Congratulations on completing this course!</p>
              <Link to="/lms" className={styles.backToCoursesBtn}>
                Browse More Courses
              </Link>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className={styles.sidebarOverlay}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
    </>
  );
};

export default LessonPage;