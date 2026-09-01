import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ContactPage.module.css';
import CallToAction from '../components/CallToAction';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        alert('Please fill all fields');
        setIsSubmitting(false);
        return;
      }

      // Create WhatsApp message
      const message = `New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}

Message receive from Bhoomi TechZone Website`;

      // WhatsApp number
      const whatsappNumber = '918130787194';
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        message: '' 
      });
      
      // Show success message
      alert('Thank you! Redirecting to WhatsApp...');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Get in Touch - Bhoomi Techzone, Noida"
        description="Contact Bhoomi Techzone today for web development, mobile app, digital marketing, software solutions. Located in Sector 63, Noida. Call +91 8130787194 or email us."
        keywords="contact Bhoomi Techzone, IT company contact Noida, web development inquiry, software company contact"
        canonical="https://bhoomitechzone.in/contact"
      />
      {/* Contact Banner */}
      <section className={styles.contactBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Let’s turn your ideas into reality. Get in touch with Bhoomi Techzone and let our experts help you build powerful digital solutions for your business.
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            {/* Contact Form */}
            <div className={styles.formContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Get In Touch</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.contactTitle}>
                <span className={styles.highlight}>Ready to Get </span> Started ?
              </h2>
              <p className={styles.description}>
                We'd love to hear about your project. Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={styles.formTextarea}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={styles.infoContent}>
              <div className={styles.infoCard}>
                <h2 className={styles.cardMainTitle}>Quick Connect</h2>
                
                <div className={styles.contactGrid}>
                  <div className={styles.infoRow}>
                    <div className={styles.iconWrapper}>
                      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.infoDetails}>
                      <h3 className={styles.infoTitle}>Call Us</h3>
                      <p className={styles.infoText}>+91 8130787194</p>
                      <p className={styles.infoText}>0120-4145519</p>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.iconWrapper}>
                      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.infoDetails}>
                      <h3 className={styles.infoTitle}>Email Us</h3>
                      <p className={styles.infoText}>info@bhoomitechzone.in</p>
                    </div>
                  </div>
                </div>

                <div className={styles.officeSection}>
                  <h3 className={styles.officeSectionTitle}>Office Address</h3>
                  
                  <div className={styles.infoRow}>
                    <div className={styles.iconWrapper}>
                      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.infoDetails}>
                      <h4 className={styles.infoTitle}>India Office</h4>
                      <p className={styles.infoText}>A-43, A Block, Sector 63</p>
                      <p className={styles.infoText}>Noida, Uttar Pradesh 201301</p>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.iconWrapper}>
                      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.infoDetails}>
                      <h4 className={styles.infoTitle}>USA Office</h4>
                      <p className={styles.infoText}>15442 Ventura Blvd. Ste 201-1736</p>
                      <p className={styles.infoText}>Sherman Oaks, CA 91403</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Image Section */}
          <div className={styles.contactImageSection}>
            <img 
              src="/images/aboutimg.jpg" width="382" height="273" 
              alt="Contact Us" 
              className={styles.contactImage}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapSectionContainer}>
          <h3 className={styles.mapTitle}>Find Us on Map</h3>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0299567250735!2d77.37898731508236!3d28.627412982422897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1639737182965!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className={styles.map}
              title="Bhoomi Techzone Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ContactPage;
