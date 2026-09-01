import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/CareerPage.module.css';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const handleApplyClick = (jobTitle) => {
    const message = `Hi, I'm interested in applying for the ${jobTitle} position at Bhoomi Techzone. Please let me know if there is any vacancy available!.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918130787194?text=${encodedMessage}`, '_blank');
  };

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Onsite',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Onsite',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our design team to create beautiful and intuitive user interfaces. You will work closely with developers and product managers to deliver exceptional user experiences.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing']
    },
    {
      id: 3,
      title: 'Mobile App Developer (Flutter)',
      department: 'Engineering',
      location: 'Onsite',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain cross-platform mobile applications using Flutter. Work with our team to deliver high-quality mobile experiences for our clients.',
      skills: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase']
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Onsite',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive digital marketing campaigns across various channels. Expertise in SEO, SEM, social media marketing, and content marketing is essential.',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Marketing']
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Onsite',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Identify and develop new business opportunities. Build and maintain relationships with clients and drive revenue growth for the company.',
      skills: ['Lead Generation', 'Client Relations', 'Negotiation', 'CRM', 'Sales Strategy']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Onsite',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage and optimize our cloud infrastructure. Implement CI/CD pipelines and ensure high availability and security of our systems.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Linux']
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Marketing', 'Sales'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className={styles.careerPage}>
      <SEOHead
        title="IT Company Careers in Noida | Software Jobs in Noida"
        description="Explore IT company careers in Noida and apply for jobs in software development company in Noida. Grow your career with Bhoomi Techzone today."
        keywords="jobs in software development company in Noida, IT company careers in Noida"
        canonical="https://bhoomitechzone.in/career"
      />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Join Our Team | IT Company Careers in Noida</h1>
          <p className={styles.heroSubtitle}>
            Discover exciting <strong style={{ color: 'black' }}>IT company careers in Noida</strong> and explore top <strong style={{ color: 'black' }}>jobs in software development company in Noida</strong>. Join a team where innovation meets growth and build a successful future in tech.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className={styles.whyJoinSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Build Your Career With Bhoomi Techzone</h2>
          <p className={styles.sectionSubtitle}>
            We are always looking for passionate and talented individuals who want to grow in the tech industry. Our <strong style={{ color: 'black' }}>IT company careers in Noida</strong> offer the perfect environment to learn, innovate, and work on real-world projects.
          </p>
          <p className={styles.sectionSubtitle}>At Bhoomi Techzone, you will get the opportunity to work on cutting-edge <Link to="/technology">technologies</Link>, collaborate with experienced professionals, and build solutions that create real impact. Whether you're a fresher or an experienced candidate, our <strong style={{ color: 'black' }}>jobs in software development company in Noida</strong> are designed to support your long-term career growth.</p>
          <h2 className={styles.sectionTitle} style={{marginTop: '20px'}}>Why Join Us</h2>
          <p className={styles.sectionSubtitle} style={{textAlign: 'center'}} >
            We believe in creating an environment where talented individuals can thrive and grow.
          </p>
          <div className={styles.benefitsGrid}>
            {/* Benefit 1: Competitive Salary */}
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Competitive Salary</h3>
              <p className={styles.benefitDescription}>We offer industry-standard compensation packages under our <strong style={{ color: 'black' }}>IT company careers in Noida</strong>, ensuring your skills and contributions are valued.</p>
            </div>

            {/* Benefit 2: Team Events */}
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Team Events</h3>
              <p className={styles.benefitDescription}>Regular team outings, activities, and engagement programs create a positive and collaborative work culture.</p>
            </div>

            {/* Benefit 3: Growth Opportunities */}
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Growth Opportunities</h3>
              <p className={styles.benefitDescription}>Our <strong style={{ color: 'black' }}>jobs in software development company in Noida</strong> focus on continuous learning, skill development, and career advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className={styles.jobsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Current Openings</h2>
          <p className={styles.sectionSubtitle} style={{ textAlign: 'center' }}>
            Find your perfect role and start your journey with us. We are hiring for multiple positions under <strong style={{ color: 'black' }}>jobs in software development company in Noida</strong>, including:
          </p>

          {/* Department Filter */}
          <div className={styles.filterSection}>
            {departments.map((dept) => (
              <button
                key={dept}
                className={`${styles.filterButton} ${selectedDepartment === dept ? styles.active : ''}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className={styles.jobsGrid}>
            {filteredJobs.map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <span className={styles.jobDepartment}>{job.department}</span>
                </div>
                <div className={styles.jobMeta}>
                  <span className={styles.metaItem}>
                    <svg viewBox="0 0 24 24" className={styles.metaIcon}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {job.location}
                  </span>
                  <span className={styles.metaItem}>
                    <svg viewBox="0 0 24 24" className={styles.metaIcon}>
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                    {job.type}
                  </span>
                  <span className={styles.metaItem}>
                    <svg viewBox="0 0 24 24" className={styles.metaIcon}>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    {job.experience}
                  </span>
                </div>
                <p className={styles.jobDescription}>{job.description}</p>
                <div className={styles.skillsSection}>
                  <h4 className={styles.skillsTitle}>Required Skills:</h4>
                  <div className={styles.skillsTags}>
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
                <button className={styles.applyButton} onClick={() => handleApplyClick(job.title)}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Don't See Your Role?</h2>
          <p className={styles.ctaText}>
            We're always looking for talented individuals.
          </p>
          <button className={styles.ctaButton}>Send Your Resume</button>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default CareerPage;
