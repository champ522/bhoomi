import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/TermsOfServicePage.module.css';

const TermsOfServicePage = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Bhoomi Techzone"
        description="Review Bhoomi Techzone's terms of service. Understand the conditions, responsibilities and agreements when using our IT services and digital solutions."
        keywords="Bhoomi Techzone terms of service, terms and conditions, service agreement"
        canonical="https://bhoomitechzone.in/terms-of-service" 
      />
      {/* Terms of Service Banner */}
      <section className={styles.termsBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.subtitle}>
              Please read these terms carefully before using our services
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Terms of Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content Section */}
      <section className={styles.termsSection}>
        <div className={styles.termsContainer}>
          <div className={styles.lastUpdated}>
            <strong>Last Updated:</strong> December 31, 2025
          </div>

          <div className={styles.policyContent}>
            <div className={styles.introduction}>
              <p className={styles.paragraph}>
                Welcome to Bhoomi Techzone Pvt. Ltd. These Terms of Service ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use our services.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
              <p className={styles.paragraph}>
                By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Services Description</h2>
              <p className={styles.paragraph}>
                Bhoomi Techzone Pvt. Ltd. provides technology solutions including but not limited to:
              </p>
              <ul className={styles.list}>
                <li>Web Development and Design Services</li>
                <li>Mobile Application Development</li>
                <li>Software Development and Custom Solutions</li>
                <li>Digital Marketing Services</li>
                <li>IT Consulting and Support</li>
                <li>Enterprise Solutions (CRM, ERP, etc.)</li>
              </ul>
              <p className={styles.paragraph}>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>User Responsibilities</h2>
              <p className={styles.paragraph}>
                When using our services, you agree to:
              </p>
              <ul className={styles.list}>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Use our services in compliance with all applicable laws and regulations</li>
                <li>Not engage in any activity that interferes with or disrupts our services</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Respect intellectual property rights of Bhoomi Techzone and third parties</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Intellectual Property Rights</h2>
              <p className={styles.paragraph}>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, software, and design, are the exclusive property of Bhoomi Techzone Pvt. Ltd. or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className={styles.paragraph}>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without prior written consent, except for personal, non-commercial use.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project Deliverables and Timelines</h2>
              <p className={styles.paragraph}>
                For custom development projects:
              </p>
              <ul className={styles.list}>
                <li>Project timelines are estimates and may vary based on project complexity and client requirements</li>
                <li>Timely delivery is subject to receiving all necessary information and approvals from the client</li>
                <li>Changes to project scope may affect delivery timelines and costs</li>
                <li>We will communicate any significant delays or changes promptly</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Payment Terms</h2>
              <p className={styles.paragraph}>
                Payment terms for our services are as follows:
              </p>
              <ul className={styles.list}>
                <li>Payment schedules will be outlined in individual project proposals or contracts</li>
                <li>Invoices must be paid within the specified payment period</li>
                <li>Late payments may incur additional charges as specified in the agreement</li>
                <li>We reserve the right to suspend services for accounts with overdue payments</li>
                <li>Refunds are subject to the terms specified in individual agreements</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Warranties and Disclaimers</h2>
              <p className={styles.paragraph}>
                We strive to provide high-quality services, however:
              </p>
              <ul className={styles.list}>
                <li>Our services are provided "as is" without warranties of any kind</li>
                <li>We do not guarantee uninterrupted or error-free service operation</li>
                <li>We are not responsible for issues arising from third-party services or platforms</li>
                <li>Client-provided content and information are the client's responsibility</li>
                <li>We make no warranties regarding the results or outcomes of using our services</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
              <p className={styles.paragraph}>
                To the maximum extent permitted by law, Bhoomi Techzone Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from:
              </p>
              <ul className={styles.list}>
                <li>Your access to or use of (or inability to access or use) our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Unauthorized access, use, or alteration of your content</li>
                <li>Any other matter relating to our services</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Confidentiality</h2>
              <p className={styles.paragraph}>
                We respect the confidentiality of information shared by our clients. We will not disclose confidential information to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Termination</h2>
              <p className={styles.paragraph}>
                We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including but not limited to:
              </p>
              <ul className={styles.list}>
                <li>Breach of these Terms of Service</li>
                <li>Non-payment of fees or charges</li>
                <li>Conduct that we believe is harmful to other users or our business</li>
                <li>Upon your request for account termination</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Governing Law</h2>
              <p className={styles.paragraph}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Changes to Terms</h2>
              <p className={styles.paragraph}>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.paragraph}>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Bhoomi Techzone Pvt. Ltd.</strong></p>
                <p>Email: <a href="mailto:info@bhoomitechzone.in">info@bhoomitechzone.in</a></p>
                <p>Phone: +91-8130787194</p>
                <p>Address: A-43, A Block, Sector 63, Noida, Uttar Pradesh 201301</p>
              </div>
            </div>

            <div className={styles.acknowledgment}>
              <p className={styles.paragraph}>
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
