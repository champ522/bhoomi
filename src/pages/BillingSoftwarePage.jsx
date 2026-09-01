import React from 'react';
import SEOHead from '../components/SEOHead';
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
    < >
      <SEOHead
        title="Bhoomi Techzone - Best Billing Software Development In Noida "
        description="Discover Best Billing Software Development In Noida to streamline invoicing, automate payments, ensure GST compliance, and improve financial efficiency with smart solutions."
        keywords="Billing Software Development, Best Billing Software Development In Noida"
        canonical="https://bhoomitechzone.in/billing-software"
      />
      {/* Billing Banner */}
      <section className={styles.billingBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Efficient Billing & Invoicing Software</h1>
            <p className={styles.subtitle}>
              Our Best Billing Software Development In Noida ensures faster transactions, real-time financial insights, and efficient workflows through advanced Billing Software Development solutions tailored to your business needs.
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
                Best <span className={styles.highlight}>Billing Software Development </span> In Noida for Smart Businesses
              </h2>
              <p className={styles.description}>
                We offer the <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong>, designed to simplify and automate your complete financial operations. Our advanced solutions cover everything from quotation creation to invoice generation and payment collection, ensuring a smooth and error-free billing process.
              </p>
              <p className={styles.description}>
                Our <strong style={{ color: 'black' }}>Billing Software Development</strong> <Link to="/services">services</Link> help businesses create professional invoices, process secure payments, track expenses, maintain tax compliance, and generate detailed financial reports with ease. Whether you are a freelancer, startup, or large enterprise, our billing systems are tailored to fit your business model and accounting workflows. With automation, real-time tracking, and cloud accessibility, our billing solutions enhance productivity, improve cash flow, and eliminate manual errors. Transform your financial management with smart invoicing systems that save time and boost operational efficiency.
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
              In today’s fast-paced business environment, efficient billing systems are crucial for maintaining accurate financial records and ensuring consistent cash flow. With the <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong>, businesses can automate invoicing, payment tracking, tax calculations, and reporting processes.
            </p>
            <p className={styles.paragraph}>
              Our <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong> solutions eliminate common challenges such as manual invoice errors, delayed payments, and complex tax compliance. By implementing a smart billing system, businesses gain better financial visibility, faster payment cycles, and improved decision-making capabilities. Without a proper billing system, companies often struggle with inefficient workflows, lack of financial insights, and compliance risks. Our solutions address these issues with automation, integrated payment gateways, real-time dashboards, and GST-ready systems.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing billing software:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Automated Invoicing</h4>
                <p className={styles.reasonText}>Generate accurate and professional invoices instantly with customizable templates, auto-numbering, and bulk processing features.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Faster Payment Collection</h4>
                <p className={styles.reasonText}>Enable quick payments with integrated gateways, multiple payment options, and automated reminders for pending invoices.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Tax Compliance Made Easy</h4>
                <p className={styles.reasonText}>Ensure accurate GST calculations, tax reports, and compliance with local regulations through automated processes.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Real-Time Financial Insights</h4>
                <p className={styles.reasonText}>Access dashboards and reports to track revenue, expenses, outstanding payments, and overall business performance.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Time & Cost Efficiency</h4>
                <p className={styles.reasonText}>Reduce manual work, minimize errors, and improve operational efficiency with automated billing workflows.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>Our Billing Software Features:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops feature-rich billing software with all essential tools to manage invoicing, payments, and financial operations effectively. Our solutions are fully customizable to your business model and accounting requirements.
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
              We follow a strategic approach to deliver reliable and scalable <strong style={{ color: 'black' }}>Billing Software Development</strong> solutions that meet modern business needs. As a trusted provider of the <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong>, we focus on building intelligent, user-friendly systems that simplify financial operations, improve accuracy, and enhance overall business efficiency:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Professional Invoicing:</strong> Our <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong> enables businesses to create branded, customizable invoices with complete details, including logos, terms, and payment instructions. This ensures a professional image while maintaining consistency across all financial documents.
              </li>
              <li className={styles.principleItem}>
                <strong>Automated Workflows:</strong> Streamline your operations by automating invoice generation, payment reminders, recurring billing, and follow-ups. Our <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong> solutions reduce manual effort, minimize errors, and significantly improve productivity.
              </li>
              <li className={styles.principleItem}>
                <strong>Payment Integration:</strong> We integrate secure and reliable payment gateways into your billing system, allowing customers to make instant payments directly from invoices. This speeds up payment collection and improves cash flow.
              </li>
              <li className={styles.principleItem}>
                <strong>Tax Compliance Built-In:</strong> Stay compliant with automated GST calculations, tax-ready invoice formats, and accurate reporting. Our <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong> ensures your business meets all legal and regulatory requirements without hassle.
              </li>
              <li className={styles.principleItem}>
                <strong>Expense Management:</strong> Easily track, categorize, and manage all your business expenses in one place. Our system provides detailed insights into spending patterns, helping you maintain better financial control.
              </li>
              <li className={styles.principleItem}>
                <strong>Financial Analytics & Reporting:</strong> Gain real-time insights into revenue, profit/loss, outstanding payments, and cash flow. Our advanced reporting tools empower you to make data-driven decisions for business growth.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Business Management:</strong> Manage multiple businesses, branches, or clients from a single platform. Our <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong> allows separate financial tracking and reporting for each entity.
              </li>
              <li className={styles.principleItem}>
                <strong>Cloud & Mobile Access:</strong> Access your billing system anytime, anywhere with secure cloud-based solutions and mobile compatibility. Stay connected to your finances on the go with seamless performance across devices.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in billing software development:</h3>
            <p className={styles.paragraph}>
              Our structured development process ensures high-quality delivery of the <strong style={{ color: 'black' }}>Best Billing Software Development In Noida</strong>:
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Process Analysis</h4>
                  <p className={styles.stepText}>We study your billing workflow, pricing models, and compliance needs to design the right solution.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Configuration</h4>
                  <p className={styles.stepText}>We create system architecture, invoice formats, and workflow automation tailored to your business.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Integration</h4>
                  <p className={styles.stepText}>We develop the system with payment gateways, tax modules, and custom functionalities.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Compliance Validation</h4>
                  <p className={styles.stepText}>Thorough testing ensures accurate billing, secure transactions, and regulatory compliance.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Deployment Support</h4>
                  <p className={styles.stepText}>We provide complete training and ongoing support to ensure smooth implementation and usage.</p>
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
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
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
