import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styles from '../styles/OurClientsPage.module.css';
import CallToAction from '../components/CallToAction';

const OurClientsPage = () => {
  const [activeTab, setActiveTab] = useState('All Clients');
  const [websiteSubFilter, setWebsiteSubFilter] = useState('All');
  const [mobileSubFilter, setMobileSubFilter] = useState('All');
  const [vendorSubFilter, setVendorSubFilter] = useState('All');
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
        const response = await fetch('https://backend.bhoomitechzone.in/api/projects');
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
    'Hospital Softwares',
    'Digital Marketing',
    'Social Media Marketing'
  ];

  const websiteSubTabs = [
    { label: 'All',              value: 'All' },
    { label: 'Static',           value: 'Static Website' },
    { label: 'Dynamic',          value: 'Dynamic Website' },
    { label: 'Travel Website',   value: 'Travel Website' },
    { label: 'Real Estate',      value: 'Real Estate Website' },
    { label: 'E-commerce',       value: 'E-commerce Website' },
  ];

  const mobileSubTabs = [
    { label: 'All',               value: 'All' },
    { label: 'Food Delivery App', value: 'Food Delivery App' },
    { label: 'E-Commerce App',    value: 'E-Commerce App' },
    { label: 'Real Estate App',   value: 'Real Estate App' },
    { label: 'Ride Booking App',  value: 'Ride Booking App' },
  ];

  const vendorSubTabs = [
    { label: 'All',           value: 'All' },
    { label: 'Single Vendor', value: 'Single Vendor' },
    { label: 'Multi Vendor',  value: 'Multi Vendor' },
  ];

  const isEcommerceActive =
    websiteSubFilter === 'E-commerce Website' ||
    mobileSubFilter === 'E-Commerce App';

  const filteredProjects = Array.isArray(projects)
    ? projects.filter(project => {
        if (activeTab !== 'All Clients' && project.category !== activeTab) return false;
        if (activeTab === 'Websites' && websiteSubFilter !== 'All') {
          if (project.projectType !== websiteSubFilter) return false;
        }
        if (activeTab === 'Mobile Applications' && mobileSubFilter !== 'All') {
          if (project.projectType !== mobileSubFilter) return false;
        }
        if (isEcommerceActive && vendorSubFilter !== 'All') {
          return project.vendorType === vendorSubFilter;
        }
        return true;
      })
    : [];

  return (
    <div className={styles.clientsPage}>
      <SEOHead
        title="Clients and Portfolio of IT Company in Noida"
        description="Explore our clients and portfolio showcasing website development, app solutions, and digital marketing projects delivered to businesses across industries."
        keywords="Clients and Portfolio"
        canonical="https://bhoomitechzone.in/our-clients"
      />
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
            <h2 className={styles.sectionTitle}>Client Portfolio Showcase</h2>
            <p className={styles.sectionSubtitle}>At Bhoomi Techzone, our clients are at the core of everything we do. We have successfully collaborated with startups, small businesses, and established enterprises, delivering high-quality digital solutions that drive real business results. Our portfolio reflects our commitment to innovation, performance, and client satisfaction across diverse industries. We have served clients in a variety of industries throughout the years, including manufacturing, legal services, healthcare, education, retail, and consulting. Every project in our portfolio demonstrates our capacity to comprehend particular company requirements and translate them into scalable and efficient digital solutions. Our work speaks for itself, from cutting-edge website design to potent online applications and successful digital marketing strategies.</p>
            <p className={styles.sectionSubtitle}>Our portfolio includes a wide range of successful projects such as responsive websites, e-commerce platforms, mobile applications, and customized software solutions. We focus on creating user-friendly, secure, and high-performing platforms that not only look great but also deliver measurable results. Every project is designed with a strong emphasis on user experience, performance optimization, and business growth.
               By offering clear communication, prompt delivery, and continuous assistance, we hope to establish enduring relationships with our clients. Our staff ensures a smooth and cooperative experience by working directly with clients at every stage of the process, from idea validation and design to development and maintenance.
            </p>
            <p className={styles.sectionSubtitle}>Because we always provide solutions that meet and beyond their objectives, our clients have faith in us. Our expanding portfolio and strong client retention rate are testaments to this trust. To keep our clients ahead in the cutthroat digital world, we constantly improve our technologies and expertise. 
               At Bhoomi Techzone, we don’t just complete projects—we create impactful digital experiences. Our Clients & Portfolio page represents our journey, showcasing the success stories and innovative solutions we have delivered to businesses looking to grow and succeed online.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className={styles.filterSection}>
            <h3 className={styles.filterHeading}>Search by Category</h3>
            <div className={styles.filterTabs}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                  onClick={() => { setActiveTab(tab); setWebsiteSubFilter('All'); setMobileSubFilter('All'); setVendorSubFilter('All'); }}
                >
                  <span className={styles.shadow}></span>
                  <span className={styles.edge}></span>
                  <span className={styles.front}>{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Website Sub-filter */}
          {activeTab === 'Websites' && (
            <div className={styles.subFilterSection}>
              <h4 className={styles.subFilterHeading}>Filter by Website Type</h4>
              <div className={styles.subFilterTabs}>
                {websiteSubTabs.map((sub) => (
                  <button
                    key={sub.value}
                    className={`${styles.tabButton} ${websiteSubFilter === sub.value ? styles.activeTab : ''}`}
                    onClick={() => { setWebsiteSubFilter(sub.value); setVendorSubFilter('All'); }}
                  >
                    <span className={styles.shadow}></span>
                    <span className={styles.edge}></span>
                    <span className={styles.front}>{sub.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Sub-filter */}
          {activeTab === 'Mobile Applications' && (
            <div className={styles.subFilterSection}>
              <h4 className={styles.subFilterHeading}>Filter by App Type</h4>
              <div className={styles.subFilterTabs}>
                {mobileSubTabs.map((sub) => (
                  <button
                    key={sub.value}
                    className={`${styles.tabButton} ${mobileSubFilter === sub.value ? styles.activeTab : ''}`}
                    onClick={() => { setMobileSubFilter(sub.value); setVendorSubFilter('All'); }}
                  >
                    <span className={styles.shadow}></span>
                    <span className={styles.edge}></span>
                    <span className={styles.front}>{sub.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Vendor Sub-filter (shown when E-commerce is selected) */}
          {isEcommerceActive && (
            <div className={styles.subFilterSection}>
              <h4 className={styles.subFilterHeading}>Filter by Vendor Type</h4>
              <div className={styles.subFilterTabs}>
                {vendorSubTabs.map((sub) => (
                  <button
                    key={sub.value}
                    className={`${styles.tabButton} ${vendorSubFilter === sub.value ? styles.activeTab : ''}`}
                    onClick={() => setVendorSubFilter(sub.value)}
                  >
                    <span className={styles.shadow}></span>
                    <span className={styles.edge}></span>
                    <span className={styles.front}>{sub.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

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
                      <picture>
                        <source 
                          srcSet={`https://backend.bhoomitechzone.in${project.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`} 
                          type="image/webp" 
                        />
                        <img 
                          src={`https://backend.bhoomitechzone.in${project.image}`} 
                          alt={project.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/images/placeholder.png'; // Fallback image
                          }}
                        />
                      </picture>
                    </div>
                    {/* Back Side */}
                    <div className={styles.cardBack}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <Link to={`/project/${project.slug}`} className={styles.exploreBtn}>Explore</Link>
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
