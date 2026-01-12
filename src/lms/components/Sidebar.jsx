import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getQuestionsByCourseId } from '../data/interviews';
import styles from '../styles/lms.module.css';

/**
 * Sidebar Component
 * Navigation sidebar with course lessons list
 * Responsive design with mobile toggle functionality
 */
const Sidebar = ({ course, currentLessonId, isOpen, onLessonClick }) => {
  const { courseId } = useParams();
  const exerciseData = getQuestionsByCourseId(courseId);
  
  // Debug log
  console.log('Sidebar Debug:', {
    courseId,
    hasExerciseData: !!exerciseData,
    questionsCount: exerciseData?.questions?.length
  });

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          <Link to="/lms" className={styles.homeLink}>
            ← Home
          </Link>
        </div>

        {/* Lessons Navigation */}
        <nav className={styles.sidebarNav}>
          <h3 className={styles.navTitle}>Course Content</h3>
          <ul className={styles.lessonList}>
            {course.lessons.map((lesson, index) => (
              <li key={lesson.id} className={styles.lessonListItem}>
                <Link
                  to={`/lms/course/${courseId}/lesson/${lesson.id}`}
                  className={`${styles.lessonLink} ${
                    currentLessonId === lesson.id ? styles.activeLessonLink : ''
                  }`}
                  onClick={onLessonClick}
                >
                  <div className={styles.lessonDetails}>
                    <span className={styles.lessonTitle}>{lesson.title}</span>
                  </div>
                  {currentLessonId === lesson.id && (
                    <div className={styles.activeIndicator}>
                      <div className={styles.activeCircle}></div>
                    </div>
                  )}
                </Link>
              </li>
            ))}
            
            {/* Exercise Tab */}
            {exerciseData && (
              <li className={styles.lessonListItem}>
                <Link
                  to={`/lms/course/${courseId}/exercise`}
                  className={`${styles.lessonLink} ${styles.exerciseLink} ${
                    currentLessonId === 'exercise' ? styles.activeLessonLink : ''
                  }`}
                  onClick={onLessonClick}
                >
                  <div className={styles.lessonDetails}>
                    <span className={styles.lessonTitle}>📝 Exercise</span>
                  </div>
                  {currentLessonId === 'exercise' && (
                    <div className={styles.activeIndicator}>
                      <div className={styles.activeCircle}></div>
                    </div>
                  )}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <h4>Progress</h4>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ 
                width: `${((course.lessons.findIndex(l => l.id === currentLessonId) + 1) / course.lessons.length) * 100}%` 
              }}
            />
          </div>
          <span className={styles.progressText}>
            {course.lessons.findIndex(l => l.id === currentLessonId) + 1} of {course.lessons.length} lessons
          </span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;