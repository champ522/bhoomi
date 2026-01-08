import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styles from '../styles/OurClientsPage.module.css';

const OurClientsPage = () => {
  const [activeTab, setActiveTab] = useState('All Clients');
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.3 });

  const projectsCount = useCounter(900, 2000, isStatsVisible);
  const clientsCount = useCounter(700, 2000, isStatsVisible);
  const countriesCount = useCounter(50, 2000, isStatsVisible);
  const satisfactionCount = useCounter(98, 2000, isStatsVisible);

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

  const projects = [
    {
      id: 1,
      title: 'Delhi Parcel',
      category: 'Custom Softwares',
      image: '/images/delhiparcel.png'
    },
    {
      id: 2,
      title: 'Bhoomi Cloud',
      category: 'Custom Softwares',
      image: '/images/bhoomicloud.png'
    },
    {
      id: 3,
      title: 'Rupiya Maker',
      category: 'CRM Softwares',
      image: '/images/rupiyamaker.png'
    },
    {
      id: 4,
      title: 'Hospital Soft',
      category: 'Hospital Softwares',
      image: '/images/hospitalimg.png'
    },
    {
      id: 5,
      title: 'SDRC Print',
      category: 'Custom Softwares',
      image: '/images/sdrcprint.png'
    },
    {
      id: 6,
      title: 'Bhoomi The Real Estate',
      category: 'Mobile Applications',
      image: '/images/bhoomirealestate.png'
    },
    {
      id: 7,
      title: 'Dexterous Services',
      category: 'Mobile Applications',
      image: '/images/dex.png'
    },
    {
      id: 8,
      title: 'SPOT2-Food Delivery',
      category: 'Mobile Applications',
      image: '/images/spotdelivery.png'
    },
    {
        id: 9,
        title: 'Jobsworld',
        category: 'Mobile Applications',
        image: '/images/jobsworld.jpg'
    },
    {
        id: 10,
        title: 'EV Smart',
        category: 'Mobile Applications',
        image: '/images/evsmart.jpg'
    },
    {
        id: 11,
        title: 'Aevitas Recycling',
        category: 'Websites',
        image: '/images/avitaslogo.png'
    },
    {
        id: 12,
        title: 'Voice Today News',
        category: 'Mobile Applications',
        image: '/images/voicenews.png'
    },
    {
        id: 13,
        title: 'GrabTO',
        category: 'Mobile Applications',
        image: '/images/grabto.jpg'
    },
    {
        id: 14,
        title: 'Doctcare Services',
        category: 'Hospital Softwares',
        image: '/images/doctcare.jpg'
    },
    {
        id: 15,
        title: 'Brolight Production',
        category: 'Websites',
        image: '/images/brolight.jpg'
    },
    {
        id: 16,
        title: 'WCAC Services',
        category: 'Websites',
        image: '/images/wcac.webp'
    },
    {
        id: 17,
        title: 'EaseToLoan',
        category: 'Websites',
        image: '/images/easetoloan.png'
    },
    {
        id: 18,
        title: 'EscapeQuest',
        category: 'Websites',
        image: '/images/escapequest.jpeg'
    },
    {
        id: 19,
        title: 'KD Immigration',
        category: 'Websites',
        image: '/images/kdservices.jpg'
    },
    {
        id: 20,
        title: 'SPAKS LUBE PVT. LTD.',
        category: 'Websites',
        image: '/images/spaks.jpg'
    },
    {
        id: 21,
        title: 'Mitera - The Event',
        category: 'Websites',
        image: '/images/miteralogo.png'
    },
    {
        id: 22,
        title: 'GenNextMedia',
        category: 'Websites',
        image: '/images/genmedia.jpg'
    },
    {
        id: 23,
        title: 'Ax4 Group',
        category: 'Websites',
        image: '/images/afourgroup.png'
    },
    {
        id: 24,
        title: 'Bhoomi TechZone',
        category: 'CRM Softwares',
        image: '/images/bhoomiproject.png'
    },
    {
        id: 25,
        title: 'Bhoomi Real Estate CRM',
        category: 'CRM Softwares',
        image: '/images/bhoomirealestate.png'
    },
    {
        id: 26,
        title: 'Kanika - Taxi Booking',
        category: 'Mobile Applications',
        image: '/images/kanika.webp'
    },
    {
        id: 27,
        title: 'HobosWorld',
        category: 'Mobile Applications',
        image: '/images/hobosworld.webp'
    },
    {
        id: 28,
        title: 'Welzon Ride',
        category: 'Mobile Applications',
        image: '/images/welzon.webp'
    },
    {
        id: 29,
        title: 'RiDeal Driver',
        category: 'Mobile Applications',
        image: '/images/rideal.webp'
    },
    {
        id: 30,
        title: 'Fixs Vendor',
        category: 'Mobile Applications',
        image: '/images/fixs.webp'
    },
    {
        id: 31,
        title: 'Skills Boost',
        category: 'LMS Softwares',
        image: '/images/skillsboost.png'
    },
    {
        id: 32,
        title: 'Globengle - Tours & Travels',
        category: 'Websites',
        image: '/images/globengle.png'
    },
    {
        id: 33,
        title: 'School Plus',
        category: 'LMS Softwares',
        image: '/images/schoolplus.jpeg'
    }
  ];

  const filteredProjects = activeTab === 'All Clients' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

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

          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.cardInner}>
                  {/* Front Side */}
                  <div className={styles.cardFront}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  {/* Back Side */}
                  <div className={styles.cardBack}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <Link to={`/project/${project.id}`} className={styles.exploreBtn}>Explore</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientsPage;
