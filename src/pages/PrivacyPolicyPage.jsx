import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/PrivacyPolicyPage.module.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Privacy Policy Banner */}
      <section className={styles.privacyBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>
              Your privacy is important to us
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className={styles.privacySection}>
        <div className={styles.privacyContainer}>
          <div className={styles.lastUpdated}>
            <strong>Last Updated:</strong> December 31, 2025
          </div>

          <div className={styles.policyContent}>
            <div className={styles.introduction}>
              <p className={styles.paragraph}>
                At Bhoomi Techzone Pvt. Ltd., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Information We Collect</h2>
              <h3 className={styles.subsectionTitle}>Personal Information</h3>
              <p className={styles.paragraph}>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className={styles.list}>
                <li>Fill out contact forms or request a quote</li>
                <li>Register for our services or newsletter</li>
                <li>Schedule meetings or consultations</li>
                <li>Engage with our customer support</li>
                <li>Apply for career opportunities</li>
              </ul>
              <p className={styles.paragraph}>
                This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>

              <h3 className={styles.subsectionTitle}>Automatically Collected Information</h3>
              <p className={styles.paragraph}>
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className={styles.list}>
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Click patterns and navigation paths</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
              <p className={styles.paragraph}>
                We use the information we collect to:
              </p>
              <ul className={styles.list}>
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing purposes</li>
                <li>Process your transactions and manage your orders</li>
                <li>Send you newsletters and promotional materials (with your consent)</li>
                <li>Find and prevent fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Information Sharing and Disclosure</h2>
              <p className={styles.paragraph}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className={styles.list}>
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, email delivery, and customer support.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Data Security</h2>
              <p className={styles.paragraph}>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className={styles.list}>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
              <p className={styles.paragraph}>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Cookies and Tracking Technologies</h2>
              <p className={styles.paragraph}>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Your Data Protection Rights</h2>
              <p className={styles.paragraph}>
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className={styles.list}>
                <li><strong>Access:</strong> You can request copies of your personal information</li>
                <li><strong>Rectification:</strong> You can request correction of inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> You can request deletion of your personal information</li>
                <li><strong>Restriction:</strong> You can request restriction of processing your information</li>
                <li><strong>Objection:</strong> You can object to our processing of your information</li>
                <li><strong>Data Portability:</strong> You can request transfer of your information to another organization</li>
              </ul>
              <p className={styles.paragraph}>
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Third-Party Links</h2>
              <p className={styles.paragraph}>
                Our website may contain links to third-party websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Data Retention</h2>
              <p className={styles.paragraph}>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
              <p className={styles.paragraph}>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact Us</h2>
              <p className={styles.paragraph}>
                If you have any questions about this Privacy Policy, please contact us:
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
                By using our website or services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
