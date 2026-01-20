import React, { useState } from 'react';
import styles from '../styles/ContactModal.module.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    phone: ''
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
      if (!formData.name || !formData.service || !formData.phone) {
        alert('Please fill all fields');
        setIsSubmitting(false);
        return;
      }

      // Create WhatsApp message
      const message = `New Contact Form Submission:
      
Name: ${formData.name}
Service: ${formData.service}
Phone: ${formData.phone}

Message sent from Bhoomi TechZone website`;

      // WhatsApp number (replace with your actual number)
      const whatsappNumber = '918130787194'; // Replace with your actual WhatsApp number
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Close modal and reset form
      onClose();
      setFormData({ name: '', service: '', phone: '' });
      
      // Show success message
      alert('Thank you! Redirecting to WhatsApp...');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Background Stars */}
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        
        <div className={styles.modalHeader}>
          <h2><span>Need a Plan ?</span></h2>
          <p>Let's Discuss Your Project Requirements</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          
          <div className={styles.formGroup}>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Website Design">Website Design</option>
              <option value="E-commerce Platform">E-commerce Platform</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="App Maintenance">App Maintenance</option>
              <option value="Web Maintenance">Web Maintenance</option>
              <option value="CRM Systems">CRM Systems</option>
              <option value="ERP Solutions">ERP Solutions</option>
              <option value="HRM Software">HRM Software</option>
              <option value="LMS Software">LMS Software</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send To
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  fill="#0bb349"
                  style={{ marginLeft: '8px' }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </>
            )}
          </button>
        </form>
        
        <div className={styles.modalFooter}>
          <p>We'll respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;