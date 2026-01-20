import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/StatsCounter.module.css';

const StatsCounter = () => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    customers: 0,
    awards: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const statsData = [
    {
      id: 'years',
      endValue: 4,
      label: 'Years Experience',
      suffix: '+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
        </svg>
      )
    },
    {
      id: 'projects',
      endValue: 900,
      label: 'Project Complete',
      suffix: '+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="M12 7v6l2 2"/>
        </svg>
      )
    },
    {
      id: 'customers',
      endValue: 700,
      label: 'Happy Customers',
      suffix: '+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 10v4l2 2"/>
        </svg>
      )
    },
    {
      id: 'awards',
      endValue: 10,
      label: 'Winning Awards',
      suffix: '',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          <path d="M12 3v4"/>
          <path d="M8 21l4-7 4 7"/>
          <path d="M8 21h8"/>
        </svg>
      )
    }
  ];

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      statsData.forEach((stat) => {
        let start = 0;
        const end = stat.endValue;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.id]: Math.floor(start)
          }));
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.patternBg}>
        <svg
          preserveAspectRatio="xMidYMid slice"
          height="100%"
          width="100%"
          className={styles.cubeSvg}
          viewBox="0 0 120 104"
        >
          <defs>
            <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="cube-dark">
              <stop stopColor="#232526" offset="0%"></stop>
              <stop stopColor="#414345" offset="100%"></stop>
            </linearGradient>
            <linearGradient y2="0%" x2="100%" y1="100%" x1="0%" id="cube-mid">
              <stop stopColor="#4b6cb7" offset="0%"></stop>
              <stop stopColor="#182848" offset="100%"></stop>
            </linearGradient>
            <linearGradient y2="100%" x2="0%" y1="0%" x1="100%" id="cube-light">
              <stop stopColor="#a8edea" offset="0%"></stop>
              <stop stopColor="#fed6e3" offset="100%"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className={styles.statCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>
                  {counters[stat.id]}{stat.suffix}
                </div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;