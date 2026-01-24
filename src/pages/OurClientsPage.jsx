import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styles from '../styles/OurClientsPage.module.css';
import CallToAction from '../components/CallToAction';

const OurClientsPage = () => {
  const [activeTab, setActiveTab] = useState('All Clients');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.3 });

  const projectsCount = useCounter(900, 2000, isStatsVisible);
  const clientsCount = useCounter(700, 2000, isStatsVisible);
  const countriesCount = useCounter(50, 2000, isStatsVisible);
  const satisfactionCount = useCounter(98, 2000, isStatsVisible);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        // API returns { message, count, projects } so we need data.projects
        setProjects(data.projects || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const tabs = [
    'All Clients',
    'Websites',
    'Mobile Applications',
    'Custom Softwares',
    'CRM Softwares',
    'HRMS Softwares',
    'LMS Softwares',
    'Hospital Softwares'
  ];

  const filteredProjects = Array.isArray(projects) 
    ? (activeTab === 'All Clients' 
        ? projects 
        : projects.filter(project => project.category === activeTab))
    : [];

  return (
    <div className={styles.clientsPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Our Projects & Clients</h1>
            <p className={styles.subtitle}>
              Trusted by businesses worldwide to deliver exceptional digital solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Our Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <h3>{projectsCount}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>{clientsCount}+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statItem}>
              <h3>{countriesCount}+</h3>
              <p>Countries Served</p>
            </div>
            <div className={styles.statItem}>
              <h3>{satisfactionCount}%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.projectsHeader}>
            <h2 className={styles.sectionTitle}>Our Projects Portfolio</h2>
            <p className={styles.sectionSubtitle}>Explore our diverse range of successful projects across different categories</p>
          </div>
          
          {/* Filter Tabs */}
          <div className={styles.filterSection}>
            <h3 className={styles.filterHeading}>Search by Category</h3>
            <div className={styles.filterTabs}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className={styles.shadow}></span>
                  <span className={styles.edge}></span>
                  <span className={styles.front}>{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className={styles.loadingContainer}>
              <p>Loading projects...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className={styles.errorContainer}>
              <p>Error loading projects: {error}</p>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && filteredProjects.length > 0 && (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <div key={project._id} className={styles.projectCard}>
                  <div className={styles.cardInner}>
                    {/* Front Side */}
                    <div className={styles.cardFront}>
                      <img 
                        src={`http://localhost:5000${project.image}`} 
                        alt={project.title}
                        onError={(e) => {
                          e.target.src = '/images/placeholder.png'; // Fallback image
                        }}
                      />
                    </div>
                    {/* Back Side */}
                    <div className={styles.cardBack}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <Link to={`/project/${project._id}`} className={styles.exploreBtn}>Explore</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Projects Message */}
          {!loading && !error && filteredProjects.length === 0 && (
            <div className={styles.noProjects}>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

    <CallToAction />
    </div>
  );
};

export default OurClientsPage;
