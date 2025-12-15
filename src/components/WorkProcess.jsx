import React from 'react';
import styles from '../styles/WorkProcess.module.css';

const WorkProcess = () => {
  const processes = [
    {
      id: 1,
      step: "Step 1",
      title: "Initial Consultation",
      description: "Understanding client needs, project objectives, and business goals through detailed discussions and requirement analysis sessions.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#079538" strokeWidth="2"/>
          <path d="M8 9h8M8 13h6" stroke="#079538" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 2,
      step: "Step 2",
      title: "Planning & Analysis",
      description: "Comprehensive requirements gathering, project roadmap creation, and technical feasibility analysis with detailed documentation.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#079538" strokeWidth="2"/>
          <path d="M9 12h6M9 16h6" stroke="#079538" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 3,
      step: "Step 3", 
      title: "Design & Architecture",
      description: "Creating wireframes, UI/UX designs, system architecture blueprints, and database design with user experience focus.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#079538" strokeWidth="2"/>
          <path d="M9 9h6v6H9z" stroke="#079538" strokeWidth="2" fill="#079538" fillOpacity="0.2"/>
          <path d="M9 3v6M15 3v6" stroke="#079538" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 4,
      step: "Step 4",
      title: "Development",
      description: "Clean, scalable coding with industry best practices, version control, and agile development methodology implementation.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#079538" strokeWidth="2"/>
          <path d="M12 2v20" stroke="#079538" strokeWidth="2" opacity="0.5"/>
        </svg>
      )
    },
    {
      id: 5,
      step: "Step 5",
      title: "Testing & QA",
      description: "Comprehensive testing including unit testing, integration testing, performance testing, and security assessments.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M7 13l3 3 7-7" stroke="#079538" strokeWidth="2"/>
          <circle cx="12" cy="12" r="9" stroke="#079538" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#079538" strokeWidth="2" opacity="0.5"/>
        </svg>
      )
    },
    {
      id: 6,
      step: "Step 6",
      title: "Deployment",
      description: "Production deployment with CI/CD pipelines, server configuration, domain setup, and performance optimization.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#079538" strokeWidth="2" fill="#079538" fillOpacity="0.2"/>
        </svg>
      )
    },
    {
      id: 7,
      step: "Step 7",
      title: "Documentation & Training",
      description: "Complete technical documentation, user manuals, and comprehensive training sessions for seamless knowledge transfer.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#079538" strokeWidth="2"/>
          <polyline points="14,2 14,8 20,8" stroke="#079538" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="#079538" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="#079538" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 8,
      step: "Step 8", 
      title: "Maintenance & Support",
      description: "24/7 ongoing support, regular updates, bug fixes, performance monitoring, and feature enhancements as needed.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="#079538" strokeWidth="2"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#079538" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.workProcessSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            {/* <div className={styles.welcomeLine}></div> */}
            <span className={styles.welcomeText}>Work Process</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleHighlight}> Development </span> Process
          </h2>
          <p className={styles.sectionDescription}>
            Our team follows a comprehensive 8-step development methodology to ensure quality, 
            efficiency, and client satisfaction throughout the entire software development lifecycle.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className={styles.processGrid}>
          {processes.map((process) => (
            <div key={process.id} className={styles.processCard}>
              <div className={styles.iconContainer}>
                {process.icon}
              </div>
              
              <div className={styles.stepLabel}>{process.step}</div>
              
              <h3 className={styles.processTitle}>{process.title}</h3>
              <p className={styles.processDescription}>{process.description}</p>

              {/* Hover overlay content */}
              <div className={styles.hoverContent}>
                <div className={styles.hoverIcon}>
                  {React.cloneElement(process.icon, {
                    stroke: 'white',
                    strokeWidth: '2.5',
                    fill: 'none',
                    style: { stroke: 'white', strokeWidth: '2.5', fill: 'none' }
                  })}
                </div>
                <h3 className={styles.hoverTitle}>{process.title}</h3>
                <p className={styles.hoverDescription}>{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;