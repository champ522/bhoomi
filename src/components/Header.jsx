import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const isMobileView = () => window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
    };

    const handleResize = () => {
      // Close dropdowns when switching between mobile and desktop
      setActiveDropdown(null);
    };

    const handleClickOutside = (event) => {
      // Close dropdown when clicking outside on mobile
      if (isMobileView() && activeDropdown) {
        const navElement = document.querySelector('.navigation');
        if (navElement && !navElement.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a regular nav link is clicked (not dropdown)
  const handleNavLinkClick = (e) => {
    const target = e.target;
    const isDropdownLink = target.closest('.hasDropdown .navLink');
    const isDropdownChild = target.closest('.dropdown');
    
    // If clicking a dropdown toggle or dropdown content on mobile, don't close menu
    if (isMobileView() && (isDropdownLink || isDropdownChild)) {
      return;
    }
    
    // Close mobile menu for regular navigation links
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
    // Only handle hover on desktop
    if (!isMobileView()) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleDropdownLeave = () => {
    // Only handle hover leave on desktop
    if (!isMobileView()) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (dropdownName, e) => {
    // Always prevent default on mobile, and when clicking dropdown toggle
    if (isMobileView()) {
      e.preventDefault();
      if (activeDropdown === dropdownName) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(dropdownName);
      }
    }
  };

  const handleServicesClick = (e) => {
    // On mobile/small screens, handle dropdown behavior
    if (isMobileView()) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === 'services' ? null : 'services');
    }
    // On desktop, allow normal navigation
  };

  const handleSolutionsClick = (e) => {
    // On mobile/small screens, handle dropdown behavior  
    if (isMobileView()) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions');
    }
    // On desktop, allow normal navigation
  };

  const handleIndustriesClick = (e) => {
    // On mobile/small screens, handle dropdown behavior
    if (isMobileView()) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === 'industries' ? null : 'industries');
    }
    // On desktop, allow normal navigation
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
              <Link 
                to="/solutions" 
                className={styles.navLink}
                onClick={handleSolutionsClick}
              >
                Solutions
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <div className={`${styles.dropdown} ${activeDropdown === 'solutions' ? styles.dropdownActive : ''}`}>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Business Solutions</h4>
                    <Link to="/crm-systems" className={styles.dropdownLink}>CRM Systems</Link>
                    <Link to="/erp-solutions" className={styles.dropdownLink}>ERP Solutions</Link>
                    <Link to="/ecommerce-platform" className={styles.dropdownLink}>E-commerce Platforms</Link>
                    <Link to="/inventory-management" className={styles.dropdownLink}>Inventory Management</Link>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Custom Softwares</h4>
                    <Link to="/hrm-software" className={styles.dropdownLink}>HRM Software</Link>
                    <Link to="/lms-software" className={styles.dropdownLink}>LMS Software</Link>
                    <Link to="/billing-software" className={styles.dropdownLink}>Billing Software</Link>
                    <Link to="/web-applications" className={styles.dropdownLink}>Web Applications</Link>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Traditional Sectors</h4>
                    <Link to="/fintech" className={styles.dropdownLink}>Fintech</Link>
                    <a href="#hosting" className={styles.dropdownLink}>Education Tech</a>
                    <a href="#backup" className={styles.dropdownLink}>Healthcare Tech</a>
                    <a href="#security" className={styles.dropdownLink}>Real Estate</a>
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
                onClick={handleServicesClick}
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
                    <Link to="/mobile-app-development" className={styles.dropdownLink}>Mobile App Development</Link>
                    <Link to="/software-development" className={styles.dropdownLink}>Software Development</Link>
                    <Link to="/website-design" className={styles.dropdownLink}>Website Design</Link>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Digital Marketing</h4>
                    <Link to="/digital-marketing" className={styles.dropdownLink}>SEO & Digital Marketing</Link>
                    <Link to="/social-media-marketing" className={styles.dropdownLink}>Social Media Marketing</Link>
                    <Link to="/content-marketing" className={styles.dropdownLink}>Content Marketing</Link>
                    <Link to="/seo-optimization" className={styles.dropdownLink}>SEO Optimization</Link>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h4 className={styles.dropdownTitle}>Support & Consulting</h4>
                    <Link to="/it-consulting" className={styles.dropdownLink}>IT Consulting</Link>
                    <Link to="/support" className={styles.dropdownLink}>24/7 Support</Link>
                    <Link to="/app-maintenance" className={styles.dropdownLink}>App Maintenance</Link>
                    <Link to="/web-maintenance" className={styles.dropdownLink}>Web Maintenance</Link>
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
              <Link 
                to="/industries" 
                className={styles.navLink}
                onClick={handleIndustriesClick}
              >
                Industries
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
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
          <Link to="/contact" className={styles.getStartedBtn}>
            Get Started
          </Link>
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