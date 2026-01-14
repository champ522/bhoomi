import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/OurProjects.module.css';

const OurProjects = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern responsive online shopping platform with advanced features and seamless user experience.",
      image: "/images/prod1.png",
      tech: ["React", "Node.js", "MongoDB"],
      link: "/ecommerce-platform"
    },
    {
      id: 2,
      title: "Healthcare App",
      description: "Digital health management system connecting patients with healthcare providers efficiently.",
      image: "/images/prod2.png",
      tech: ["React Native", "Firebase", "AI"],
      link: "/healthcare"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics and reporting dashboard with interactive data visualization.",
      image: "/images/prod3.png",
      tech: ["Vue.js", "D3.js", "Python"],
      link: "/fintech"
    },
    {
      id: 4,
      title: "Education Portal",
      description: "Comprehensive learning management system with interactive courses and progress tracking.",
      image: "/images/prod3.jpg",
      tech: ["Angular", "Spring", "MySQL"],
      link: "/edutech"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Next-generation social networking platform with AI-powered content recommendations.",
      image: "/images/prod4.jpg",
      tech: ["React", "GraphQL", "AWS"],
      link: "/social-media-marketing"
    },
    {
      id: 6,
      title: "Smart IoT System",
      description: "Intelligent home automation system with voice control and energy optimization features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["IoT", "Python", "ML"],
      link: "/mobile-app-development"
    },
    {
      id: 7,
      title: "Blockchain DApp",
      description: "Decentralized application with smart contracts for secure cryptocurrency transactions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["Solidity", "Web3", "React"],
      link: "/web-development"
    },
    {
      id: 8,
      title: "AI Chatbot Platform",
      description: "Advanced conversational AI system with natural language processing and machine learning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "NLP", "TensorFlow"],
      link: "/software-development"
    }
  ];

  // Auto-animation logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveCard(prev => (prev + 1) % projects.length);
      }, 1000); // 2 seconds for better visibility

      return () => clearInterval(interval);
    }
  }, [isPaused, projects.length]);

  const handleCardHover = (index) => {
    setActiveCard(index);
    setIsPaused(true);
  };

  const handleCardLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            {/* <div className={styles.welcomeLine}></div> */}
            <span className={styles.welcomeText}>Our Portfolio</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleHighlight}>Projects</span>
          </h2>
          <p className={styles.sectionDescription}>
            Discover our latest innovative solutions and successful project implementations 
            that showcase our expertise in modern technology development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${index === activeCard ? styles.active : ''}`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
              </div>
              
              {/* Diagonal Overlay */}
              <div className={`${styles.diagonalOverlay} ${index === activeCard ? styles.showOverlay : ''}`}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <Link to={project.link} className={styles.viewProject}>
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className={styles.progressIndicators}>
          {projects.map((_, index) => (
            <div 
              key={index}
              className={`${styles.indicator} ${index === activeCard ? styles.activeIndicator : ''}`}
              onClick={() => {
                setActiveCard(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;