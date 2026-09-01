import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState('left');

  const testimonials = [
    {
      id: 1,
      name: "Nitin Rai",
      position: "Founder, Ev Smart",
      company: "Ev Smart - The Green Cab",
      image: "/images/clint1",
      rating: 5,
      testimonial: "Bhoomi Techzone developed an outstanding cab booking application for our green taxi service. The app includes real-time tracking, and user-friendly UI. It helped us launch our business successfully."
    },
    {
      id: 2,
      name: "Harsh Vishnoi",
      position: "Founder, Creative Studios",
      company: "Creative Studios",
      image: "/images/clint2",
      rating: 5,
      testimonial: "They provide a wide range of IT services: web development, mobile app development, digital marketing, CRM, HRM software, hospital management systems, school management systems, etc... . Highly recommended for quality development services."
    },
    {
      id: 3,
      name: "Sanjay Behra",
      position: "Founder, Rideal Mobility",
      company: "Rideal Mobility",
      image: "/images/rideal",
      rating: 5,
      testimonial: "Working with Bhoomi Techzone on our ride booking platform was exceptional. The admin panel they created allows us to manage drivers, monitor rides, and track earnings efficiently. The real-time analytics dashboard is a game-changer for our operations."
    },
    {
      id: 4,
      name: "Garima Tuli",
      position: "CEO, Globengle",
      company: "Globengle - Tour & Travel",
      image: "/images/test3",
      rating: 5,
      testimonial: "Bhoomi Techzone created our Tour and Travel website with all the features we needed. The payment integration and admin panel work flawlessly. Great team, great results! Highly recommended."
    },
    {
      id: 5,
      name: "Saurabh Singh",
      position: "Director, Sauvisha Global",
      company: "Sauvisha Global Fashion",
      image: "/images/test4",
      rating: 5,
      testimonial: "Professional service from start to finish. The website they built for us has significantly improved our online presence and client engagement with beautiful design. Excellent value for money."
    },
    {
      id: 6,
      name: "Reja Khan",
      position: "Director, School Plus",
      company: "School Plus",
      image: "/images/schoolplus",
      rating: 5,
      testimonial: "Bhoomi Techzone developed a school management system for us. The platform is user-friendly and has streamlined our administrative processes. Their support team is responsive and helpful."
    },
    {
      id: 7,
      name: "Gautam Shukla",
      position: "Owner, DLS Exports",
      company: "DLS Exports & Imports",
      image: "/images/dls",
      rating: 5,
      testimonial: "We needed a custom Dynamic website for our export business and Bhoomi Techzone delivered exactly what we wanted. The system includes inventory management, order tracking, and financial reporting. It's made managing our operations so much easier."
    },
    {
      id: 8,
      name: "Rajesh Kumar",
      position: "Founder, Spot2Delivery",
      company: "Spot2Delivery",
      image: "/images/spotdelivery",
      rating: 5,
      testimonial: "The food delivery app they developed is simply fantastic! Real-time order tracking, payment integration, everything works perfectly. Our orders have increased by 60% since launch. Thank you team!"
    },
    {
      id: 9,
      name: "Anita Desai",
      position: "Director, DoctCare Services",
      company: "DoctCare Services",
      image: "/images/doctcare",
      rating: 5,
      testimonial: "We needed a hospital management system App and Bhoomi Techzone delivered beyond expectations. Patient records, appointment scheduling, billing - everything is now so organized. Highly professional team!"
    },
    {
      id: 10,
      name: "Vikram Singh",
      position: "CEO, Welzon Ride",
      company: "Welzon Ride",
      image: "/images/welzon",
      rating: 5,
      testimonial: "Their team developed our ride booking application with real-time tracking and seamless driver-passenger management. It has made handling bookings and operations incredibly efficient."
    },
    {
      id: 11,
      name: "Shubham Negi",
      position: "Member, CareerVeda",
      company: "CareerVeda",
      image: "/images/careerveda",
      rating: 5,
      testimonial: "Our institutional website looks professional and runs seamlessly! The user experience is smooth, information is well-organized, and the admin panel makes content management incredibly easy"
    },
    {
      id: 12,
      name: "Arjun Malhotra",
      position: "Director, GharPlot",
      company: "GhrPlot Pvt. Ltd.",
      image: "/images/ghrplot",
      rating: 5,
      testimonial: "Our real estate mobile application looks modern and performs flawlessly! Property browsing is smooth, listings are well-organized, and features like search filters and instant inquiries have made it incredibly user-friendly"
    },
    {
      id: 13,
      name: "Kanika Sharma",
      position: "Director, Kanika",
      company: "kanika Tour & Taxi Services",
      image: "/images/kanika",
      rating: 5,
      testimonial: "The tour and taxi booking platform they built for us is excellent. From easy ride bookings to tour package management and real-time tracking—everything works perfectly. Our customers are very happy with the smooth and reliable service!"
    },
    {
      id: 14,
      name: "Krishna Singh",
      position: "Founder, BlackSquare",
      company: "BlackSquare Estate",
      image: "/images/realestatebnr",
      rating: 5,
      testimonial: "Fantastic job on our real estate website! Property listings look great, the search filters work perfectly, and we're getting more inquiries now. The team understood our needs and delivered exactly what we wanted."
    },
    {
      id: 15,
      name: "Rahul Singh",
      position: "Owner, Fixs",
      company: "Fixs",
      image: "/images/fixs",
      rating: 5,
      testimonial: "They created a beautiful website and booking app for my salon. Clients can see services, check prices and book appointments online. It's professional, easy to use and has brought in so many new customers!"
    },
    {
      id: 16,
      name: "Amit Joshi",
      position: "CEO, TechVentures",
      company: "TechVentures Pvt Ltd",
      image: "/images/itwings",
      rating: 5,
      testimonial: "Working with Bhoomi Techzone has been a great experience. They developed our company website and CRM system. The quality of work is top-notch and they delivered everything on time. Highly recommend them!"
    }
  ];

  const nextTestimonial = () => {
    setSlideDirection('right');
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSlideDirection('left');
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSlideDirection('right');
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
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
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ));
  };

  // Function to get visible dots (only 6 at a time)
  const getVisibleDots = () => {
    const maxDots = 6;
    const total = testimonials.length;
    
    if (total <= maxDots) {
      return testimonials.map((_, index) => index);
    }
    
    let start = Math.max(0, currentTestimonial - Math.floor(maxDots / 2));
    let end = start + maxDots;
    
    if (end > total) {
      end = total;
      start = Math.max(0, end - maxDots);
    }
    
    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>

        {/* HEADER */}
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

        {/* CARD */}
        <div className={styles.testimonialsContainer}>
        <div
          className={`${styles.testimonialCard} ${styles[`slide${slideDirection.charAt(0).toUpperCase() + slideDirection.slice(1)}`]}`}
          key={currentTestimonial}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* CLIENT INFO */}
          <div className={styles.clientInfo}>
            <picture>
              <source
                srcSet={`${testimonials[currentTestimonial].image}.webp`}
                type="image/webp"
              />
              <img
                src={`${testimonials[currentTestimonial].image}.png`}
                alt={testimonials[currentTestimonial].name}
                width="80"
                height="80"
                className={styles.clientPhoto}
                loading="lazy"
              />
            </picture>

            <div className={styles.clientDetails}>
              {/* FIXED: NO heading skip */}
              <p className={styles.clientName}>
                {testimonials[currentTestimonial].name}
              </p>

              <p className={styles.clientPosition}>
                {testimonials[currentTestimonial].position}
              </p>

              <p className={styles.clientCompany}>
                {testimonials[currentTestimonial].company}
              </p>
            </div>
          </div>

          {/* RATING */}
          <div className={styles.rating}>
            {renderStars(testimonials[currentTestimonial].rating)}
          </div>

          {/* TEXT */}
          <blockquote className={styles.testimonialText}>
            "{testimonials[currentTestimonial].testimonial}"
          </blockquote>
        </div>
        </div>
        
        {/* NAVIGATION */}
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          <div className={styles.dots}>
            {getVisibleDots().map((index) => (
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
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;