import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/BillingSoftwarePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const BillingSoftwarePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const invoicesCount = useCounter(5, 2000, isStatsVisible);
  const accuracyCount = useCounter(99, 2000, isStatsVisible);
  const timeCount = useCounter(60, 1500, isStatsVisible);

  const billingFeatures = [
    {
      title: "Invoice Management",
      description: "Create, customize, and manage professional invoices with automated numbering and templates",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Payment Processing", 
      description: "Integrate multiple payment gateways for seamless online and offline payment collection",
      image: "/images/sliderimg2.png"
    },
    {
      title: "GST & Tax Compliance",
      description: "Automated GST calculation, tax filing, and compliance with local tax regulations",
      image: "/images/appdev.png"
    },
    {
      title: "Expense Tracking",
      description: "Track business expenses, manage bills, and maintain detailed expense records",
      image: "/images/dmarketing.png"
    },
    {
      title: "Recurring Billing",
      description: "Automate subscription billing, recurring invoices, and payment reminders",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Financial Reports",
      description: "Comprehensive reports on revenue, expenses, profit/loss, and cash flow analysis",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle international transactions with multi-currency billing and exchange rate management",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* Billing Banner */}
      <section className={styles.billingBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Billing & Invoicing</h1>
            <p className={styles.subtitle}>
              Streamline financial operations with intelligent billing solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Billing Software</span>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Content Section */}
      <section className={styles.billingSection}>
        <div className={styles.billingContainer}>
          <div className={styles.billingContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/672fdf82-a140-4ac7-b453-95eff945fdef/TdexAnmKM1.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Efficient</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.billingTitle}>
                <span className={styles.highlight}>Billing & Invoicing </span> Software
              </h2>
              <p className={styles.description}>
                We develop comprehensive Billing and Invoicing Software that automates financial operations from 
                quotation to payment collection. Our solutions help businesses create professional invoices, process 
                payments, track expenses, ensure tax compliance, and generate detailed financial reports efficiently.
              </p>
              <p className={styles.description}>
                From freelancers and small businesses to large enterprises, our billing systems adapt to your invoicing 
                needs and accounting workflows. Transform your financial management with automated billing, payment 
                reminders, recurring subscriptions, and real-time financial insights that improve cash flow and reduce errors.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{invoicesCount}K+</h3>
                  <p>Invoices Processed</p>
                </div>
                <div className={styles.stat}>
                  <h3>{accuracyCount}%</h3>
                  <p>Billing Accuracy</p>
                </div>
                <div className={styles.stat}>
                  <h3>{timeCount}%</h3>
                  <p>Time Saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is billing software essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              Efficient billing and invoicing are critical for maintaining healthy cash flow and financial accuracy. 
              Billing software automates invoice generation, payment tracking, tax calculations, and financial reporting, 
              eliminating manual errors and reducing administrative time. It ensures professional invoicing, faster payment 
              collection, accurate tax compliance, and provides real-time visibility into business finances for better 
              decision making.
            </p>
            <p className={styles.paragraph}>
              Without proper billing software, businesses struggle with manual invoice creation, payment tracking issues, 
              tax calculation errors, delayed payments, lack of financial visibility, and compliance risks. Our custom 
              billing solutions address these challenges by providing automated invoicing, integrated payment processing, 
              GST/tax compliance, payment reminders, expense tracking, and comprehensive financial reports that streamline 
              your entire billing workflow.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing billing software:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Automated Invoicing</h4>
                <p className={styles.reasonText}>Generate professional invoices instantly with customizable templates, automated numbering, and bulk invoice creation.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Faster Payments</h4>
                <p className={styles.reasonText}>Integrated payment gateways, online payment options, and automated reminders accelerate payment collection.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Tax Compliance</h4>
                <p className={styles.reasonText}>Automated GST calculation, tax reports, and compliance with local tax regulations eliminate manual tax errors.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Financial Visibility</h4>
                <p className={styles.reasonText}>Real-time dashboards and reports provide insights into revenue, expenses, outstanding payments, and cash flow.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Time & Cost Savings</h4>
                <p className={styles.reasonText}>Automate repetitive tasks, reduce manual errors, and free up staff time for strategic financial activities.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR BILLING FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops feature-rich billing software with all essential tools to manage invoicing, 
              payments, and financial operations effectively. Our solutions are fully customizable to your business 
              model and accounting requirements.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Invoice & Quotation Management</div>
              <div className={styles.serviceItem}>• Payment Gateway Integration</div>
              <div className={styles.serviceItem}>• GST & Tax Compliance</div>
              <div className={styles.serviceItem}>• Expense Tracking & Management</div>
              <div className={styles.serviceItem}>• Recurring Billing & Subscriptions</div>
              <div className={styles.serviceItem}>• Financial Reports & Analytics</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF BILLING SOFTWARE DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we build billing systems that truly simplify financial operations and improve cash flow. 
              Our development approach focuses on creating accurate, compliant, and user-friendly solutions that adapt to 
              your business needs:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Professional Invoicing:</strong> Our billing systems generate professional, customizable invoices 
                with your branding, logo, terms, and payment instructions for a polished business image.
              </li>
              <li className={styles.principleItem}>
                <strong>Automated Workflows:</strong> Automate invoice generation, payment reminders, recurring billing, 
                late payment notifications, and follow-ups to reduce manual effort and improve efficiency.
              </li>
              <li className={styles.principleItem}>
                <strong>Payment Integration:</strong> Seamless integration with popular payment gateways enables online 
                payments directly from invoices, accelerating payment collection and improving cash flow.
              </li>
              <li className={styles.principleItem}>
                <strong>Tax Compliance Built-In:</strong> Automated GST calculation, tax-compliant invoice formats, 
                GSTR reports, and compliance with local tax regulations ensure accuracy and legal compliance.
              </li>
              <li className={styles.principleItem}>
                <strong>Expense Management:</strong> Track business expenses, manage vendor bills, categorize costs, and 
                maintain detailed expense records for complete financial visibility.
              </li>
              <li className={styles.principleItem}>
                <strong>Financial Analytics:</strong> Comprehensive dashboards and reports on revenue, expenses, outstanding 
                payments, profit/loss, and cash flow provide actionable insights for financial decisions.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Business Support:</strong> Manage billing for multiple business entities, branches, or 
                clients from a single platform with separate financial records and reporting.
              </li>
              <li className={styles.principleItem}>
                <strong>Cloud & Mobile Access:</strong> Access billing data from anywhere with cloud-based solutions 
                and mobile apps for invoice creation and payment tracking on-the-go.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in billing software development:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to billing software development ensures we deliver solutions that perfectly align 
              with your invoicing workflow and financial processes. We follow a proven methodology that combines business 
              process analysis, system design, and compliance requirements.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Process Analysis</h4>
                  <p className={styles.stepText}>We analyze your billing workflow, pricing models, tax requirements, and accounting processes to design the perfect solution.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Configuration</h4>
                  <p className={styles.stepText}>Our team creates detailed system architecture, invoice templates, workflow automation, and integration specifications.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Integration</h4>
                  <p className={styles.stepText}>We develop the billing system with payment gateway integration, tax compliance features, and custom functionalities.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Compliance Validation</h4>
                  <p className={styles.stepText}>Rigorous testing ensures accurate calculations, tax compliance, payment processing, and data security before deployment.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Go-Live Support</h4>
                  <p className={styles.stepText}>Comprehensive training for your team and ongoing support during deployment ensure smooth adoption and operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Features Section */}
      <section className={styles.billingFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>Billing Features</span></h2>
            <p className={styles.sectionSubtitle}>Powerful features to streamline your invoicing and financial operations</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className={styles.billingSwiper}
          >
            {billingFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.billingCard}>
                  <div className={styles.billingImage}>
                    <img src={feature.image} alt={feature.title} />
                    <div className={styles.billingOverlay}>
                      <Link to="/contact" className={styles.billingButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.billingCardContent}>
                    <h3 className={styles.billingCardTitle}>{feature.title}</h3>
                    <p className={styles.billingDescription}>{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default BillingSoftwarePage;
