import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Nitin Rai",
      position: "Founder, Ev Smart",
      company: "Ev Smart - The Green Cab",
      image: "/images/clint1.png",
      rating: 5,
      testimonial: "Bhoomi Techzone developed an outstanding cab booking application for our green taxi service. The app includes real-time tracking, and user-friendly UI. It helped us launch our business successfully."
    },
    {
      id: 2,
      name: "Harsh Vishnoi",
      position: "Founder, Creative Studios",
      company: "Creative Studios",
      image: "/images/clint2.png",
      rating: 5,
      testimonial: "They provide a wide range of IT services: web development, mobile app development, digital marketing, CRM, HRM software, hospital management systems, school management systems, etc... . Highly recommended for quality development services."
    },
    {
      id: 3,
      name: "Sanjay Behra",
      position: "Founder, Rideal Mobility",
      company: "Rideal Mobility",
      image: "/images/rideal.webp",
      rating: 5,
      testimonial: "Working with Bhoomi Techzone on our ride booking platform was exceptional. The admin panel they created allows us to manage drivers, monitor rides, and track earnings efficiently. The real-time analytics dashboard is a game-changer for our operations."
    },
    {
      id: 4,
      name: "Garima Tuli",
      position: "CEO, Globengle",
      company: "Globengle - Tour & Travel",
      image: "/images/test3.jpeg",
      rating: 5,
      testimonial: "Bhoomi Techzone created our Tour and Travel website with all the features we needed. The payment integration and admin panel work flawlessly. Great team, great results! Highly recommended."
    },
    {
      id: 5,
      name: "Saurabh Singh",
      position: "Director, Sauvisha Global",
      company: "Sauvisha Global Fashion",
      image: "/images/test4.jpeg",
      rating: 5,
      testimonial: "Professional service from start to finish. The website they built for us has significantly improved our online presence and client engagement with beautiful design. Excellent value for money."
    },
    {
      id: 6,
      name: "Reja Khan",
      position: "Director, School Plus",
      company: "School Plus",
      image: "/images/schoolplus.jpeg",
      rating: 5,
      testimonial: "Bhoomi Techzone developed a school management system for us. The platform is user-friendly and has streamlined our administrative processes. Their support team is responsive and helpful."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.filled : styles.empty}`}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Testimonials</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            What Our <span className={styles.titleHighlight}>Clients</span> Say
          </h2>
          <p className={styles.sectionDescription}>
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className={styles.testimonialsContainer}>
          <div 
            className={styles.testimonialCard}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.quoteIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            <div className={styles.testimonialContent}>
              <div className={styles.clientInfo}>
                <div className={styles.clientImage}>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className={styles.clientPhoto}
                  />
                </div>
                <div className={styles.clientDetails}>
                  <h4 className={styles.clientName}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className={styles.clientPosition}>
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className={styles.clientCompany}>
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <div className={styles.rating}>
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className={styles.testimonialText}>
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
            </div>
          </div>

          <div className={styles.navigation}>
            <button 
              className={styles.navButton} 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className={styles.navButton} 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;