import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu and any open dropdown when a nav link is clicked
  const handleNavLinkClick = (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    // If a link inside the navigation was clicked, close the mobile menu
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close mobile menu when route/location changes (handles <Link> navigations)
  const location = useLocation();
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  const handleDropdownHover = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownClick = (dropdownName, e) => {
    e.preventDefault();
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        {/* Logo Section - Left */}
        <div className={styles.logoSection}>
          <Link to="/" className={styles.logo}>
            <img 
              src="/images/bhoomilogo.png" 
              alt="BhoomiTech Logo" 
              className={styles.logoImage}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          </Link>
        </div>

        {/* Navigation Section - Center */}
        <nav
          className={`${styles.navigation} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
          onClick={handleNavLinkClick}
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>About</Link>
            </li>
            
            {/* Solutions Dropdown */}
            <li 
              className={`${styles.navItem} ${styles.hasDropdown}`}
              onMouseEnter={() => handleDropdownHover('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <a 
                href="#solutions" 
                className={styles.navLink}
                onClick={(e) => handleDropdownClick('solutions', e)}
              >
                Solutions
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={`${styles.dropdown} ${activeDropdown === 'solutions' ? styles.dropdownActive : ''}`}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Business Solutions</h4>
                    <a href="#crm" className={styles.dropdownLink}>CRM Systems</a>
                    <a href="#erp" className={styles.dropdownLink}>ERP Solutions</a>
                    <a href="#ecommerce" className={styles.dropdownLink}>E-commerce Platforms</a>
                    <a href="#inventory" className={styles.dropdownLink}>Inventory Management</a>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Custom Software</h4>
                    <a href="#webapp" className={styles.dropdownLink}>Web Applications</a>
                    <a href="#desktop" className={styles.dropdownLink}>Desktop Software</a>
                    <a href="#database" className={styles.dropdownLink}>Database Solutions</a>
                    <a href="#api" className={styles.dropdownLink}>API Development</a>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Cloud Solutions</h4>
                    <a href="#cloud" className={styles.dropdownLink}>Cloud Migration</a>
                    <a href="#hosting" className={styles.dropdownLink}>Cloud Hosting</a>
                    <a href="#backup" className={styles.dropdownLink}>Data Backup</a>
                    <a href="#security" className={styles.dropdownLink}>Cloud Security</a>
                  </div>
                </div>
              </div>
            </li>

            {/* Services Dropdown */}
            <li 
              className={`${styles.navItem} ${styles.hasDropdown}`}
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link 
                to="/services" 
                className={styles.navLink}
              >
                Services
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <div className={`${styles.dropdown} ${activeDropdown === 'services' ? styles.dropdownActive : ''}`}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Development</h4>
                    <Link to="/web-development" className={styles.dropdownLink}>Web Development</Link>
                    <Link to="/services" className={styles.dropdownLink}>Mobile App Development</Link>
                    <Link to="/services" className={styles.dropdownLink}>Software Development</Link>
                    <Link to="/services" className={styles.dropdownLink}>Website Design</Link>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Digital Marketing</h4>
                    <Link to="/services" className={styles.dropdownLink}>SEO & Digital Marketing</Link>
                    <Link to="/services" className={styles.dropdownLink}>Social Media Marketing</Link>
                    <Link to="/services" className={styles.dropdownLink}>Content Marketing</Link>
                    <Link to="/services" className={styles.dropdownLink}>SEO Optimization</Link>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Support & Consulting</h4>
                    <Link to="/contact" className={styles.dropdownLink}>IT Consulting</Link>
                    <Link to="/contact" className={styles.dropdownLink}>24/7 Support</Link>
                    <Link to="/contact" className={styles.dropdownLink}>System Maintenance</Link>
                    <Link to="/services" className={styles.dropdownLink}>Web Maintenance</Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li 
              className={`${styles.navItem} ${styles.hasDropdown}`}
              onMouseEnter={() => handleDropdownHover('industries')}
              onMouseLeave={handleDropdownLeave}
            >
              <a 
                href="#industries" 
                className={styles.navLink}
                onClick={(e) => handleDropdownClick('industries', e)}
              >
                Industries
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={`${styles.dropdown} ${activeDropdown === 'industries' ? styles.dropdownActive : ''}`}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Technology</h4>
                    <a href="#fintech" className={styles.dropdownLink}>Fintech</a>
                    <a href="#edtech" className={styles.dropdownLink}>Education Technology</a>
                    <a href="#healthtech" className={styles.dropdownLink}>Healthcare Tech</a>
                    <a href="#startup" className={styles.dropdownLink}>Startups</a>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Traditional Sectors</h4>
                    <a href="#retail" className={styles.dropdownLink}>Retail & E-commerce</a>
                    <a href="#manufacturing" className={styles.dropdownLink}>Manufacturing</a>
                    <a href="#real-estate" className={styles.dropdownLink}>Real Estate</a>
                    <a href="#logistics" className={styles.dropdownLink}>Logistics</a>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Professional Services</h4>
                    <a href="#legal" className={styles.dropdownLink}>Legal Services</a>
                    <a href="#consulting" className={styles.dropdownLink}>Consulting Firms</a>
                    <a href="#agency" className={styles.dropdownLink}>Marketing Agencies</a>
                    <a href="#nonprofit" className={styles.dropdownLink}>Non-Profit</a>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <a href="#clients" className={styles.navLink}>Our Clients</a>
            </li>
            <li className={styles.navItem}>
              <a href="#career" className={styles.navLink}>Career</a>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Get Started Button - Right */}
        <div className={styles.actionSection}>
          <button className={styles.getStartedBtn}>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;