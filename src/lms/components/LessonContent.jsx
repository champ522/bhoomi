import React from 'react';
import styles from '../styles/lms.module.css';

/**
 * Lesson Content Component
 * Displays the main lesson content including text, video, and code examples
 */
const LessonContent = ({ lesson }) => {
  return (
    <div className={styles.lessonContent}>
      {/* Lesson Title */}
      <header className={styles.lessonHeader}>
        <h1 className={styles.lessonTitle}>{lesson.title}</h1>
      </header>

      {/* Video Content (if available) */}
      {lesson.videoUrl && (
        <div className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <iframe
              src={lesson.videoUrl}
              title={`${lesson.title} - Video Tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            />
          </div>
        </div>
      )}

      {/* Text Content */}
      <div className={styles.textContent}>
        <div 
          className={styles.lessonText}
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      </div>

      {/* Additional Resources */}
      <div className={styles.resourcesSection}>
        <h3 className={styles.resourcesTitle}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.resourcesIcon}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          Key Takeaways
        </h3>
        <div className={styles.takeaways}>
          <p>Make sure you understand the concepts covered in this lesson before moving on to the next one.</p>
          <ul>
            <li>Practice the concepts in your own projects</li>
            <li>Try implementing similar features</li>
            <li>Take notes of important concepts</li>
            {lesson.videoUrl && <li>Rewatch the video if needed</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;