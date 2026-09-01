import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { useParams, Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import Testimonials from '../components/Testimonials';
import styles from '../styles/ProjectDetailPage.module.css';

const ProjectDetailPage = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project details from API
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://backend.bhoomitechzone.in/api/projects/${slug}`
        );

        if (!response.ok) {
          throw new Error('Project not found');
        }

        const data = await response.json();

        // API returns { message, project } so we need data.project
        setProject(data.project || data);

        setError(null);

      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchProject();

  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <h2>Loading project details...</h2>
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className={styles.notFound}>
        <h2>Project Not Found</h2>

        <p>
          {error || 'The project you are looking for does not exist.'}
        </p>

        <Link to="/our-clients" className={styles.backButton}>
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetailPage}>
      <SEOHead
        title={`${project.title} | Project - Bhoomi Techzone`}
        description={`${project.description ? project.description.substring(0, 155) + '...' : 'Explore this project by Bhoomi Techzone - innovative IT solutions delivering real results for businesses.'}`}
        keywords={`${project.title}, ${project.category}, Bhoomi Techzone projects, IT solutions portfolio`}
        canonical={`https://bhoomitechzone.in/project/${slug}`}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />

        <div className={styles.overlay}></div>

        <div className={styles.heroContainer}>
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>

            <span className={styles.separator}>/</span>

            <Link to="/our-clients" className={styles.breadcrumbLink}>
              Our Clients
            </Link>

            <span className={styles.separator}>/</span>

            <span className={styles.breadcrumbCurrent}>
              {project.title}
            </span>
          </div>

          <h1 className={styles.projectTitle}>
            {project.title}
          </h1>

          <p className={styles.projectCategory}>
            {project.category}
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>

            <div className={styles.projectImageWrapper}>
              <picture>
                <source
                  srcSet={`https://backend.bhoomitechzone.in${project.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`}
                  type="image/webp"
                />

                <img
                  src={`https://backend.bhoomitechzone.in${project.image}`}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.png';
                  }}
                />
              </picture>

              <a
                href={project.demoLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.launchDemoButton}
              >
                <svg
                  className={styles.linkIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>

                <span>Demo Link</span>
              </a>
            </div>

            <div className={styles.projectInfo}>
              <h2 className={styles.sectionTitle}>
                About This Project
              </h2>

              <p className={styles.description}>
                {project.description}
              </p>

              {project.working && (
                <p className={styles.description}>
                  {project.working}
                </p>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div className={styles.technologies}>
                  <h3>Technologies Used:</h3>

                  <div className={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* How It Works */}
          {project.working && (
            <div className={styles.workingWrapper}>
              <h2 className={styles.sectionTitle}>
                How It Works
              </h2>

              <div className={styles.workingContent}>
                <p>{project.working}</p>
              </div>
            </div>
          )}

          {/* Modules */}
          {project.modules && project.modules.length > 0 && (
            <div className={styles.modulesWrapper}>
              <h2 className={styles.sectionTitle}>
                Key Modules & Features
              </h2>

              <div className={styles.modulesGrid}>
                {project.modules.map((module, index) => (
                  <div key={index} className={styles.moduleCard}>
                    <h3>{module}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Interested in Similar Solution?
          </h2>

          <p className={styles.ctaText}>
            Let's build something amazing together
          </p>

          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              <span>Start Your Project</span>
            </Link>

            <Link to="/our-clients" className={styles.secondaryButton}>
              <span>View More Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;