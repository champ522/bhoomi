import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getCourseById, getLessonById, getNextLesson, getPreviousLesson } from '../data/courses';
import { getQuestionsByCourseId } from '../data/interviews';
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
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const course = getCourseById(courseId);
  const isExercise = location.pathname.includes('/exercise');
  const lesson = isExercise ? null : getLessonById(courseId, lessonId);
  const nextLesson = isExercise ? null : getNextLesson(courseId, lessonId);
  const previousLesson = isExercise ? null : getPreviousLesson(courseId, lessonId);
  const interviewData = getQuestionsByCourseId(courseId);

  // Debug log
  console.log('LessonPage Debug:', {
    courseId,
    lessonId,
    pathname: location.pathname,
    isExercise,
    hasInterviewData: !!interviewData,
    questionsCount: interviewData?.questions?.length
  });

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

  // If course not found or (lesson not found and not exercise), show error
  // Also show error if exercise route but no interview data
  if (!course || (!lesson && !isExercise) || (isExercise && !interviewData)) {
    return (
      <div className={styles.lmsContainer}>
        <div className={styles.errorMessage}>
          <h2>Content Not Found</h2>
          <p>{isExercise ? 'No interview questions available for this course.' : 'The lesson you\'re looking for doesn\'t exist.'}</p>
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
              {isExercise ? '📝 Exercise - Interview Questions' : lesson.title}
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
          currentLessonId={isExercise ? 'exercise' : lessonId}
          isOpen={isSidebarOpen}
          onLessonClick={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Lesson Content or Exercise */}
          {!isExercise && <LessonContent lesson={lesson} />}

          {/* Navigation Buttons - Only for lessons */}
          {!isExercise && (
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
                {nextLesson ? (
                  <Link 
                    to={`/lms/course/${courseId}/lesson/${nextLesson.id}`}
                    className={styles.navButton}
                  >
                    <div className={styles.navText}>
                      <small>Next</small>
                      <span>{nextLesson.title}</span>
                    </div>
                  </Link>
                ) : interviewData && (
                  <Link 
                    to={`/lms/course/${courseId}/exercise`}
                    className={styles.navButton}
                  >
                    <div className={styles.navText}>
                      <small>Next</small>
                      <span>📝 Exercise</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Course Completion */}
          {!nextLesson && !isExercise && (
            <div className={styles.courseComplete}>
              <h3>🎉 Course Complete!</h3>
              <p>Congratulations on completing this course!</p>
              {interviewData ? (
                <Link to={`/lms/course/${courseId}/exercise`} className={styles.backToCoursesBtn}>
                  Practice Exercise →
                </Link>
              ) : (
                <Link to="/lms" className={styles.backToCoursesBtn}>
                  Browse More Courses
                </Link>
              )}
            </div>
          )}

          {/* Interview Questions Section - Only on exercise route */}
          {isExercise && interviewData && (
            <div className={styles.interviewSection}>
              <div className={styles.interviewHeader}>
                <h2>📝 Interview Questions</h2>
                <p>Test your knowledge with {interviewData.questions.length} interview questions</p>
              </div>

              {!showResults ? (
                <div className={styles.questionsContainer}>
                  {interviewData.questions.map((question, index) => (
                    <div key={question.id} className={styles.questionCard}>
                      <div className={styles.questionHeader}>
                        <span className={styles.questionNumber}>Question {index + 1}</span>
                      </div>
                      <h3 className={styles.questionText}>{question.question}</h3>
                      <div className={styles.optionsContainer}>
                        {question.options.map((option, optionIndex) => (
                          <label 
                            key={optionIndex} 
                            className={`${styles.optionLabel} ${
                              selectedAnswers[question.id] === optionIndex ? styles.selected : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={optionIndex}
                              checked={selectedAnswers[question.id] === optionIndex}
                              onChange={() => setSelectedAnswers({
                                ...selectedAnswers,
                                [question.id]: optionIndex
                              })}
                              className={styles.optionInput}
                            />
                            <span className={styles.optionText}>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    className={styles.submitBtn}
                    onClick={() => {
                      console.log('Submit clicked!', {
                        selectedCount: Object.keys(selectedAnswers).length,
                        totalQuestions: interviewData.questions.length,
                        selectedAnswers
                      });
                      setShowResults(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={Object.keys(selectedAnswers).length !== interviewData.questions.length}
                  >
                    Submit Answers ({Object.keys(selectedAnswers).length}/{interviewData.questions.length})
                  </button>
                </div>
              ) : (
                <div className={styles.resultsContainer}>
                  <div className={styles.scoreCard}>
                    <h3>Your Score</h3>
                    <div className={styles.scoreCircle}>
                      <span className={styles.scoreNumber}>
                        {Object.keys(selectedAnswers).filter(qId => 
                          selectedAnswers[qId] === interviewData.questions.find(q => q.id === parseInt(qId)).correctAnswer
                        ).length}
                      </span>
                      <span className={styles.scoreTotal}>/ {interviewData.questions.length}</span>
                    </div>
                    <p className={styles.scorePercentage}>
                      {Math.round((Object.keys(selectedAnswers).filter(qId => 
                        selectedAnswers[qId] === interviewData.questions.find(q => q.id === parseInt(qId)).correctAnswer
                      ).length / interviewData.questions.length) * 100)}%
                    </p>
                  </div>

                  <div className={styles.answersReview}>
                    {interviewData.questions.map((question, index) => {
                      const userAnswer = selectedAnswers[question.id];
                      const isCorrect = userAnswer === question.correctAnswer;
                      
                      return (
                        <div key={question.id} className={`${styles.reviewCard} ${isCorrect ? styles.correct : styles.incorrect}`}>
                          <div className={styles.reviewHeader}>
                            <span className={styles.reviewNumber}>Question {index + 1}</span>
                            <span className={`${styles.reviewStatus} ${isCorrect ? styles.statusCorrect : styles.statusIncorrect}`}>
                              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                            </span>
                          </div>
                          <h4 className={styles.reviewQuestion}>{question.question}</h4>
                          <div className={styles.reviewAnswers}>
                            <p className={styles.reviewLabel}>Your answer:</p>
                            <p className={`${styles.reviewAnswer} ${!isCorrect ? styles.wrongAnswer : ''}`}>
                              {question.options[userAnswer]}
                            </p>
                            {!isCorrect && (
                              <>
                                <p className={styles.reviewLabel}>Correct answer:</p>
                                <p className={`${styles.reviewAnswer} ${styles.correctAnswer}`}>
                                  {question.options[question.correctAnswer]}
                                </p>
                              </>
                            )}
                            <div className={styles.explanation}>
                              <p className={styles.explanationLabel}>Explanation:</p>
                              <p className={styles.explanationText}>{question.explanation}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button 
                    className={styles.retryBtn}
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}
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