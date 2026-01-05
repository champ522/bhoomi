import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import styles from '../styles/lms.module.css';

/**
 * Course Page Component
 * Displays course overview and list of lessons
 */
const CoursePage = () => {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  // If course not found, show error message
  if (!course) {
    return (
      <div className={styles.lmsContainer}>
        <div className={styles.errorMessage}>
          <h2>Course Not Found</h2>
          <p>The course you're looking for doesn't exist.</p>
          <Link to="/lms" className={styles.backButton}>
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.lmsContainer}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link to="/lms">Home</Link>
        <span className={styles.separator}>&gt;</span>
        <span>{course.title}</span>
      </nav>

      {/* Course Header */}
      <div className={styles.coursePageHeader}>
        <div 
          className={styles.courseIcon}
          style={{ backgroundColor: course.color }}
        >
          {course.title.charAt(0)}
        </div>
        <div className={styles.courseInfo}>
          <h1 className={styles.coursePageTitle}>{course.title}</h1>
          <p className={styles.coursePageDescription}>{course.description}</p>
          <div className={styles.courseStats}>
            <span>{course.lessons.length} lessons</span>
            <span>•</span>
            <span>Self-paced learning</span>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className={styles.lessonsSection}>
        <h2>Course Lessons</h2>
        <div className={styles.lessonsList}>
          {course.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              to={`/lms/course/${courseId}/lesson/${lesson.id}`}
              className={styles.lessonItem}
            >
              <div className={styles.lessonNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.lessonInfo}>
                <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                <div className={styles.lessonMeta}>
                  {lesson.videoUrl && (
                    <span className={styles.lessonType}>📹 Video</span>
                  )}
                  {lesson.codeExample && (
                    <span className={styles.lessonType}>💻 Code</span>
                  )}
                  <span className={styles.lessonType}>📖 Text</span>
                </div>
              </div>
              <div className={styles.lessonArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Start Learning Button */}
      <div className={styles.startLearningSection}>
        <Link 
          to={`/lms/course/${courseId}/lesson/${course.lessons[0].id}`}
          className={styles.startLearningBtn}
        >
          Start with First Lesson
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;