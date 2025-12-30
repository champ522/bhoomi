import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import Testimonials from '../components/Testimonials';
import styles from '../styles/ProjectDetailPage.module.css';

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  const projectsData = {
    1: {
      title: 'Delhi Parcel',
      category: 'Custom Software',
      image: '/images/delhiparcel.png',
      description: 'Delhi Parcel is a comprehensive logistics and courier management system designed to streamline delivery operations across Delhi NCR. The platform enables businesses to manage their entire delivery workflow from order placement to final delivery with real-time tracking and automated notifications. Built with scalability in mind, it handles thousands of deliveries daily while maintaining optimal performance.',
      working: 'The system operates through a multi-tier architecture where customers place orders via web or mobile app. Orders are automatically assigned to delivery agents based on location and availability using intelligent routing algorithms. Real-time GPS tracking allows customers to monitor their parcels throughout the delivery journey. The platform includes automated SMS and email notifications at each delivery milestone, ensuring transparency and customer satisfaction.',
      modules: [
        'Order Management System',
        'Real-time GPS Tracking',
        'Automated Dispatch System',
        'Customer Portal',
        'Delivery Agent Mobile App',
        'Analytics Dashboard',
        'Payment Integration',
        'SMS & Email Notifications'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
      demoLink: ''
    },
    2: {
      title: 'Bhoomi Cloud',
      category: 'Custom Software',
      image: '/images/bhoomicloud.png',
      description: 'Bhoomi Cloud is an enterprise-grade cloud storage and file management solution that provides secure, scalable, and efficient data storage capabilities. Designed for businesses of all sizes, it offers seamless file sharing, collaboration tools, and advanced security features. The platform ensures data integrity with automated backups and version control while providing lightning-fast access to files from anywhere in the world.',
      working: 'Users can upload, organize, and share files through an intuitive web interface or mobile application. Files are automatically encrypted and stored across multiple data centers for redundancy. The platform uses intelligent compression and deduplication algorithms to optimize storage usage. Team collaboration features allow multiple users to work on documents simultaneously with real-time sync. Advanced permission controls ensure that sensitive data remains secure while enabling efficient teamwork.',
      modules: [
        'File Upload & Management',
        'Folder Organization System',
        'File Sharing & Permissions',
        'Real-time Collaboration',
        'Version Control',
        'Automated Backup System',
        'Search & Filter',
        'Activity Monitoring'
      ],
      technologies: ['React', 'AWS S3', 'Node.js', 'PostgreSQL'],
      demoLink: ''
    },
    3: {
      title: 'Rupiya Maker',
      category: 'CRM Software',
      image: '/images/rupiyamaker.png',
      description: 'Rupiya Maker is a powerful financial CRM platform designed for financial advisors, loan agents, and investment consultants. It streamlines client relationship management with integrated lead tracking, loan processing, commission management, and comprehensive reporting tools. The platform helps financial professionals manage their entire business operations from a single dashboard while improving client engagement and increasing conversion rates.',
      working: 'The system captures leads from multiple sources including website forms, social media, and manual entry. Each lead is tracked through customizable sales pipelines with automated follow-up reminders. The loan processing module handles documentation, verification, and approval workflows. Commission calculations are automated based on configurable rules. Clients receive timely updates via SMS and email. The analytics engine provides insights into sales performance, conversion rates, and revenue forecasts.',
      modules: [
        'Lead Management',
        'Sales Pipeline',
        'Loan Processing Module',
        'Document Management',
        'Commission Calculator',
        'Client Portal',
        'SMS & Email Automation',
        'Reports & Analytics'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Twilio API'],
      demoLink: ''
    },
    4: {
      title: 'Hospital Soft',
      category: 'Hospital Software',
      image: '/images/hospitalsoft.png',
      description: 'Hospital Soft is a comprehensive hospital management system designed to digitize and streamline all aspects of healthcare operations. From patient registration to discharge, the platform manages appointments, medical records, billing, pharmacy inventory, and staff scheduling. Built with healthcare professionals in mind, it ensures HIPAA compliance while providing intuitive interfaces for doctors, nurses, and administrative staff.',
      working: 'Patients register at the front desk or online, creating their medical records in the system. Doctors access patient history, add diagnoses, and prescribe medications through the EMR module. The pharmacy receives prescriptions electronically and manages inventory automatically. The billing module generates invoices based on treatments and services rendered. Lab technicians upload test results directly to patient files. The system maintains complete audit trails and ensures data privacy through role-based access controls.',
      modules: [
        'Patient Registration',
        'Appointment Scheduling',
        'Electronic Medical Records (EMR)',
        'Pharmacy Management',
        'Laboratory Information System',
        'Billing & Insurance',
        'Inventory Management',
        'Staff Management'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'HL7 Integration'],
      demoLink: ''
    },
    5: {
      title: 'SDRC Print',
      category: 'Custom Software',
      image: '/images/sdrcprint.png',
      description: 'SDRC Print is a specialized printing and design management system tailored for print shops and design studios. The platform handles order management, design file processing, production scheduling, and customer relationship management. With integrated pricing calculators and job tracking, it helps printing businesses operate more efficiently while delivering exceptional customer service.',
      working: 'Customers submit print orders through the web portal with specifications and design files. The system automatically calculates pricing based on quantity, materials, and finishing options. Design files are reviewed and approved through the platform. Production schedules are generated automatically, optimizing machine utilization. Order status updates are sent to customers throughout the production process. The inventory module tracks paper stock, ink, and other supplies, triggering reorder alerts when needed.',
      modules: [
        'Order Management',
        'Design File Upload & Review',
        'Pricing Calculator',
        'Production Scheduling',
        'Inventory Tracking',
        'Customer Portal',
        'Invoice & Billing',
        'Delivery Management'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'AWS S3'],
      demoLink: ''
    },
    6: {
      title: 'Bhoomi The Real Estate',
      category: 'Mobile Application',
      image: '/images/bhoomirealestate.png',
      description: 'Bhoomi The Real Estate is a comprehensive real estate mobile application that connects property buyers, sellers, and agents on a single platform. With advanced search filters, virtual property tours, and integrated communication tools, it simplifies the property search and transaction process. The app provides detailed property listings with high-quality images, videos, and 360-degree virtual tours.',
      working: 'Users create profiles as buyers, sellers, or agents. Sellers list properties with detailed information, photos, and virtual tours. Buyers search using filters like location, price range, property type, and amenities. The app uses geolocation to show nearby properties and provides map views. Users can save favorites, schedule property visits, and communicate directly with agents through in-app messaging. The mortgage calculator helps buyers estimate monthly payments. Push notifications keep users updated on new listings matching their criteria.',
      modules: [
        'Property Listings',
        'Advanced Search & Filters',
        'Virtual Property Tours',
        'In-app Messaging',
        'Mortgage Calculator',
        'Favorites & Saved Searches',
        'Agent Profiles',
        'Push Notifications'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      demoLink: ''
    },
    7: {
      title: 'Dexterous Services',
      category: 'Mobile Application',
      image: '/images/dex.png',
      description: 'Dexterous Services is an on-demand home services marketplace that connects customers with verified service professionals. Whether it\'s plumbing, electrical work, cleaning, or repairs, the app provides instant access to skilled professionals. With real-time booking, secure payments, and service tracking, it makes hiring home service providers effortless and reliable.',
      working: 'Customers select the required service category and describe their needs. The app shows available service providers with ratings, reviews, and pricing. Users can book services instantly or schedule for later. Service providers receive notifications and can accept or decline bookings. Customers track the provider\'s arrival in real-time via GPS. After service completion, customers make payments through integrated payment gateways and rate the service. The platform handles all communication, scheduling, and payment processing.',
      modules: [
        'Service Categories',
        'Provider Search & Booking',
        'Real-time Tracking',
        'In-app Chat',
        'Payment Gateway Integration',
        'Ratings & Reviews',
        'Service History',
        'Provider Dashboard'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
      demoLink: ''
    },
    8: {
      title: 'SPOT2 - Food Delivery',
      category: 'Mobile Application',
      image: '/images/spotdelivery.png',
      description: 'SPOT2 is a comprehensive food delivery platform that connects hungry customers with their favorite restaurants. With an intuitive interface, real-time order tracking, and multiple payment options, it provides a seamless food ordering experience. The platform supports restaurants of all sizes while ensuring fast and reliable delivery service.',
      working: 'Customers browse restaurant menus, add items to cart, and place orders. Restaurants receive orders instantly and can accept or modify them. Once accepted, the system assigns a delivery partner based on location and availability. Customers track their order in real-time from preparation to delivery. The app sends notifications at each stage. Payment is processed through integrated gateways. Customers can rate restaurants and delivery partners. The platform handles promotions, discounts, and loyalty programs automatically.',
      modules: [
        'Restaurant Listings',
        'Menu Management',
        'Cart & Checkout',
        'Order Management',
        'Real-time Delivery Tracking',
        'Payment Gateway Integration',
        'Ratings & Reviews',
        'Promo Code System'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      demoLink: ''
    },
    9: {
      title: 'Jobsworld',
      category: 'Mobile Application',
      image: '/images/jobsworld.jpg',
      description: 'Jobsworld is a comprehensive job search and recruitment platform that bridges the gap between job seekers and employers. The app provides personalized job recommendations, easy application tracking, and direct communication with recruiters. With advanced filters and AI-powered matching, it helps users find their perfect career opportunity.',
      working: 'Job seekers create detailed profiles with resumes, skills, and preferences. The AI algorithm matches profiles with relevant job postings. Users can apply to jobs with a single tap and track application status in real-time. Employers post job openings and review candidate profiles. The platform facilitates direct messaging between candidates and recruiters. Interview scheduling is integrated into the app. Users receive notifications for job matches and application updates.',
      modules: [
        'Profile Management',
        'Job Search & Filters',
        'AI-based Job Matching',
        'One-tap Applications',
        'Application Tracking',
        'In-app Messaging',
        'Resume Builder',
        'Interview Scheduler'
      ],
      technologies: ['React Native', 'Python', 'Django', 'PostgreSQL'],
      demoLink: ''
    },
    10: {
      title: 'EV Smart',
      category: 'Mobile Application',
      image: '/images/evsmart.jpg',
      description: 'EV Smart is an electric vehicle charging station finder and management application. It helps EV owners locate nearby charging stations, check availability, reserve charging slots, and make payments seamlessly. The app provides real-time information about charging station status, pricing, and connector types.',
      working: 'Users open the app to view nearby charging stations on a map with real-time availability. They can filter by connector type, charging speed, and pricing. Users reserve charging slots in advance or start charging immediately using QR code scanning. The app monitors charging progress and sends notifications when charging is complete. Payment is processed automatically through saved payment methods. Users can view charging history and expenses. Station owners manage their charging points through a dedicated dashboard.',
      modules: [
        'Station Locator Map',
        'Real-time Availability',
        'Slot Reservation',
        'QR Code Scanning',
        'Charging Monitoring',
        'Payment Processing',
        'Charging History',
        'Station Management Dashboard'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      demoLink: ''
    },
    11: {
      title: 'Rasan Online',
      category: 'Mobile Application',
      image: '/images/rasan.jpg',
      description: 'Rasan Online is a grocery delivery application that brings fresh groceries and daily essentials to customers\' doorsteps. With a vast product catalog, scheduled delivery options, and quality assurance, it makes grocery shopping convenient and time-saving. The app supports both individual customers and bulk orders for businesses.',
      working: 'Customers browse through categorized product listings with detailed descriptions and images. They add items to cart and select delivery time slots. The system processes orders and assigns them to nearby stores or warehouses. Delivery executives pick, pack, and deliver orders. Customers track their delivery in real-time. The app supports multiple payment options including cash on delivery. Users can create shopping lists, reorder previous purchases, and set up subscription-based deliveries for regular items.',
      modules: [
        'Product Catalog',
        'Category Browsing',
        'Cart Management',
        'Time Slot Booking',
        'Order Tracking',
        'Multiple Payment Options',
        'Shopping Lists',
        'Subscription Orders'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
      demoLink: ''
    },
    12: {
      title: 'Voice Today News',
      category: 'Mobile Application',
      image: '/images/voicenews.png',
      description: 'Voice Today News is a modern news application that delivers breaking news, in-depth articles, and multimedia content across various categories. With personalized news feeds, offline reading, and push notifications for breaking news, it keeps users informed about local and global events. The app supports multiple languages and provides audio news features.',
      working: 'Users select their preferred news categories and sources during onboarding. The app curates personalized news feeds based on reading habits and preferences. Articles are updated in real-time from various news sources. Users can bookmark articles for later reading and access them offline. Breaking news triggers push notifications. The audio news feature reads articles aloud for hands-free consumption. Users can share articles on social media and comment on stories.',
      modules: [
        'Personalized News Feed',
        'Category Selection',
        'Breaking News Alerts',
        'Offline Reading',
        'Audio News',
        'Bookmarks',
        'Social Sharing',
        'Multi-language Support'
      ],
      technologies: ['React Native', 'Node.js', 'Redis', 'News API'],
      demoLink: ''
    },
    13: {
      title: 'GrabTO',
      category: 'Mobile Application',
      image: '/images/grabto.jpg',
      description: 'GrabTO is an all-in-one super app that provides taxi booking, food delivery, and package delivery services within a single platform. Designed for urban mobility and convenience, it offers seamless switching between services with a unified wallet and loyalty rewards program. The app ensures safety, reliability, and affordability.',
      working: 'Users access all services from a single home screen. For taxi booking, they set pickup and drop locations, view estimated fares, and book rides. For food delivery, they browse restaurants and place orders. For package delivery, they enter sender and receiver details. The app automatically assigns the nearest driver or delivery partner. Real-time tracking is available for all services. A unified wallet enables quick payments across all services. Users earn reward points on every transaction redeemable for discounts.',
      modules: [
        'Taxi Booking',
        'Food Delivery',
        'Package Delivery',
        'Unified Wallet',
        'Real-time Tracking',
        'Fare Calculator',
        'Loyalty Rewards',
        'Multi-service Dashboard'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
      demoLink: ''
    },
    14: {
      title: 'Doctcare Services',
      category: 'Hospital Software',
      image: '/images/doctcare.jpg',
      description: 'Doctcare Services is a telemedicine and healthcare management platform that connects patients with doctors for online consultations. The app provides video consultations, prescription management, appointment scheduling, and health record maintenance. It makes quality healthcare accessible from the comfort of home.',
      working: 'Patients create health profiles with medical history and current medications. They search for doctors by specialization, location, and availability. Appointments are booked through the app with options for video or in-person consultations. During video consultations, doctors can view patient history and prescribe medications digitally. Prescriptions are stored in the app and can be shared with pharmacies. The platform sends medication reminders and follow-up appointment notifications. Lab test results can be uploaded to patient profiles.',
      modules: [
        'Doctor Search & Booking',
        'Video Consultation',
        'Digital Prescriptions',
        'Health Records',
        'Appointment Scheduling',
        'Medication Reminders',
        'Lab Reports Upload',
        'Payment Integration'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
      demoLink: ''
    },
    15: {
      title: 'Brolight Production',
      category: 'Website',
      image: '/images/brolight.jpg',
      description: 'Brolight Production is a professional website for a video production and media company. The website showcases their portfolio of work including commercials, corporate videos, and creative content. With stunning visuals, smooth animations, and an intuitive interface, it effectively presents the company\'s creative capabilities and services.',
      working: 'The website features a dynamic homepage with video backgrounds showcasing recent work. Portfolio section displays projects in categorized galleries with filter options. Each project has a dedicated page with behind-the-scenes content and client testimonials. The services section details different production offerings with pricing information. A contact form allows potential clients to request quotes. The blog section shares industry insights and company updates. The site is fully responsive and optimized for all devices.',
      modules: [
        'Video Portfolio Gallery',
        'Project Showcase Pages',
        'Services Catalog',
        'Client Testimonials',
        'Quote Request Form',
        'Blog Section',
        'Behind-the-scenes Content',
        'Responsive Design'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vimeo API'],
      demoLink: ''
    },
    16: {
      title: 'Banke Bihari Astrology',
      category: 'Website',
      image: '/images/bankeastro.png',
      description: 'Banke Bihari Astrology is a comprehensive astrology consultation website offering personalized horoscope readings, birth chart analysis, and astrological guidance. The platform connects users with experienced astrologers for online consultations and provides daily horoscope updates, gemstone recommendations, and remedial solutions.',
      working: 'Users enter their birth details to generate personalized horoscope charts. The website displays daily, weekly, and monthly horoscopes for all zodiac signs. Visitors can book consultations with astrologers through the online scheduling system. Astrologers provide detailed readings via video calls or chat. The platform offers e-commerce functionality for purchasing gemstones and religious items. Blog section publishes astrological articles and planetary transit updates. Payment gateway integration enables secure transactions.',
      modules: [
        'Horoscope Generator',
        'Birth Chart Analysis',
        'Astrologer Booking System',
        'Video/Chat Consultations',
        'E-commerce for Gemstones',
        'Daily Horoscope Updates',
        'Blog & Articles',
        'Payment Gateway'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
      demoLink: ''
    },
    17: {
      title: 'EaseToLoan',
      category: 'Website',
      image: '/images/easetoloan.png',
      description: 'EaseToLoan is a financial services website that simplifies the loan application process for personal loans, home loans, and business loans. The platform compares loan offers from multiple lenders, helps users understand eligibility criteria, and facilitates online application submission. With EMI calculators and expert guidance, it makes loan procurement hassle-free.',
      working: 'Users select their loan type and enter basic details. The EMI calculator provides instant payment estimates. The platform shows loan offers from partner banks with interest rates and terms. Users can compare options side by side. The eligibility checker predicts approval chances based on income and credit history. Online application forms are pre-filled and submitted directly to selected lenders. Loan agents track application progress and provide support. Document upload is managed through secure portals.',
      modules: [
        'Loan Comparison Tool',
        'EMI Calculator',
        'Eligibility Checker',
        'Online Application Form',
        'Document Upload Portal',
        'Application Tracking',
        'Lender Integration',
        'Agent Dashboard'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      demoLink: ''
    },
    18: {
      title: 'EscapeQuest',
      category: 'Website',
      image: '/images/escapequest.jpeg',
      description: 'EscapeQuest is an engaging website for an escape room adventure company. The site showcases different themed rooms, allows online booking, and manages team reservations. With immersive visuals, countdown timers, and leaderboards, it creates excitement around the escape room experience.',
      working: 'The homepage features dramatic visuals of each escape room theme. Users browse room descriptions with difficulty levels and duration. The booking system shows available time slots in a calendar view. Groups can reserve entire rooms or join existing teams. Payment is processed online with confirmation emails sent automatically. A leaderboard displays fastest escape times for competitive players. Gift vouchers can be purchased and redeemed through the site. Corporate team-building packages are available with special pricing.',
      modules: [
        'Room Showcase',
        'Online Booking System',
        'Calendar Availability',
        'Team Management',
        'Payment Processing',
        'Leaderboard System',
        'Gift Vouchers',
        'Corporate Packages'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: ''
    },
    19: {
      title: 'KD Immigration',
      category: 'Website',
      image: '/images/kdservices.jpg',
      description: 'KD Immigration is a professional immigration consultancy website offering visa services, immigration guidance, and document processing assistance. The platform provides detailed information about different visa categories, eligibility requirements, and application procedures for various countries. With expert consultation booking and document checklist tools, it simplifies the immigration journey.',
      working: 'Users explore visa options by selecting destination countries and visa types. Detailed guides explain eligibility criteria and application processes. The eligibility assessment tool asks questions to determine visa approval chances. Users can schedule consultations with immigration experts through the booking system. The document checklist helps applicants gather required paperwork. Case tracking allows clients to monitor their application status. Success stories and testimonials build trust. The blog provides updates on immigration policies and news.',
      modules: [
        'Visa Information Portal',
        'Eligibility Assessment',
        'Consultation Booking',
        'Document Checklist',
        'Case Tracking System',
        'Success Stories',
        'Blog & News',
        'Multi-country Support'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Calendly API'],
      demoLink: ''
    },
    20: {
      title: 'SkyMover',
      category: 'Website',
      image: '/images/skymover.png',
      description: 'SkyMover is a comprehensive moving and relocation services website that connects customers with professional movers. The platform offers instant quote generation, service booking, and move management tools. From packing to transportation to unpacking, it provides end-to-end relocation solutions for residential and commercial moves.',
      working: 'Customers enter move details including source, destination, and inventory through an interactive form. The system generates instant cost estimates based on distance and volume. Users can customize services by adding packing, storage, or insurance. The booking calendar shows available moving dates. Once booked, customers receive a move coordinator who manages the entire process. Real-time tracking shows the location of belongings during transit. Payment milestones are set up with partial payment options. Post-move surveys collect feedback.',
      modules: [
        'Instant Quote Generator',
        'Inventory Calculator',
        'Service Customization',
        'Booking Calendar',
        'Move Coordination Dashboard',
        'Real-time Shipment Tracking',
        'Payment Milestones',
        'Customer Feedback System'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      demoLink: ''
    },
    21: {
      title: 'Red Pepper Films',
      category: 'Website',
      image: '/images/redpepper.png',
      description: 'Red Pepper Films is a creative agency website showcasing film production, advertising, and digital content creation services. The site features an impressive portfolio of work, client testimonials, and behind-the-scenes content. With cinematic design and smooth transitions, it reflects the creative excellence of the production house.',
      working: 'The website opens with a striking video reel highlighting best work. Portfolio section categorizes projects by type - commercials, documentaries, music videos, etc. Each project page includes the full video, client brief, creative approach, and results achieved. The team section profiles directors, cinematographers, and creative staff. A project planner tool helps clients outline their requirements. The blog shares industry insights and production updates. Contact forms enable quote requests with file upload for creative briefs.',
      modules: [
        'Video Portfolio',
        'Project Case Studies',
        'Team Profiles',
        'Project Planner Tool',
        'Client Testimonials',
        'Blog & Insights',
        'Quote Request Form',
        'Creative Brief Upload'
      ],
      technologies: ['React', 'Next.js', 'Sanity CMS', 'Cloudflare Stream'],
      demoLink: ''
    },
    22: {
      title: 'GenNextMedia',
      category: 'Website',
      image: '/images/genmedia.jpg',
      description: 'GenNextMedia is a digital marketing agency website offering SEO, social media marketing, content creation, and brand strategy services. The platform showcases successful campaigns, provides marketing resources, and offers free consultations. With modern design and interactive elements, it demonstrates digital marketing expertise.',
      working: 'The homepage features case studies with measurable results achieved for clients. Service pages detail different marketing offerings with pricing tiers. A free SEO audit tool analyzes visitor websites and generates reports. The resource center offers downloadable guides, templates, and whitepapers. Visitors can schedule free strategy sessions through the calendar integration. The blog publishes marketing tips and industry trends. A portfolio showcases social media campaigns, websites, and content created for clients.',
      modules: [
        'Service Showcase',
        'Case Studies',
        'Free SEO Audit Tool',
        'Resource Center',
        'Consultation Booking',
        'Portfolio Gallery',
        'Blog & Resources',
        'Lead Capture Forms'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Analytics API'],
      demoLink: ''
    },
    23: {
      title: 'Ax4 Group',
      category: 'Website',
      image: '/images/afourgroup.png',
      description: 'Ax4 Group is a corporate website for a business conglomerate with interests in real estate, hospitality, and technology. The site presents the group\'s diverse portfolio, leadership team, corporate values, and career opportunities. With professional design and comprehensive information architecture, it serves as the digital face of the organization.',
      working: 'The website structure includes dedicated sections for each business vertical. The real estate division showcases ongoing and completed projects with virtual tours. Hospitality section features hotel properties with booking integration. Technology division highlights software products and services. The about section profiles the leadership team and company history. Investor relations area provides financial reports and shareholder information. Career portal lists job openings with online application facility. News section publishes press releases and company updates.',
      modules: [
        'Multi-division Portfolio',
        'Virtual Property Tours',
        'Hotel Booking Integration',
        'Leadership Profiles',
        'Investor Relations Portal',
        'Career Portal',
        'News & Press Releases',
        'Contact Management'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Strapi CMS'],
      demoLink: ''
    },
    24: {
      title: 'Bhoomi TechZone',
      category: 'CRM Software',
      image: '/images/bhoomiproject.png',
      description: 'Bhoomi TechZone CRM is an all-in-one customer relationship management platform designed for IT services and software development companies. It manages leads, projects, client communications, and business operations from a unified dashboard. With project tracking, invoicing, and team collaboration features, it streamlines the entire business workflow.',
      working: 'The system captures leads from website inquiries, social media, and referrals. Sales pipeline tracks each lead through stages from contact to conversion. Won deals automatically create projects with task assignments. Project managers allocate resources, set milestones, and track progress. Time tracking logs billable hours for accurate invoicing. Client portal provides project visibility and communication channels. Automated invoicing generates bills based on project completion or time logged. Analytics dashboard shows revenue, project status, and team productivity.',
      modules: [
        'Lead Management',
        'Sales Pipeline',
        'Project Management',
        'Time Tracking',
        'Client Portal',
        'Invoicing & Billing',
        'Team Collaboration',
        'Analytics Dashboard'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      demoLink: ''
    },
    25: {
      title: 'Bhoomi Real Estate CRM',
      category: 'CRM Software',
      image: '/images/bhoomirealestate.png',
      description: 'Bhoomi Real Estate CRM is a specialized customer relationship management system for real estate developers, brokers, and agencies. It manages property listings, lead tracking, site visits, sales pipeline, and documentation. With automated follow-ups, commission management, and deal closing workflows, it maximizes sales efficiency and client satisfaction.',
      working: 'Property listings are created with detailed information, images, and virtual tours. Leads are captured from portals, advertisements, and walk-ins. The system assigns leads to sales agents based on territory and availability. Agents schedule site visits through the calendar with automatic reminders. Lead scoring prioritizes hot prospects for immediate follow-up. The sales pipeline visualizes deals at various stages. Documentation module manages booking forms, agreements, and registry papers. Commission calculations are automated based on configurable rules. Analytics provide insights into sales performance and inventory status.',
      modules: [
        'Property Management',
        'Lead Capture & Distribution',
        'Site Visit Scheduler',
        'Sales Pipeline',
        'Documentation Manager',
        'Commission Calculator',
        'Payment Tracking',
        'Sales Analytics'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      demoLink: ''
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project Not Found</h2>
        <Link to="/our-clients" className={styles.backButton}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.separator}>/</span>
            <Link to="/our-clients" className={styles.breadcrumbLink}>Our Clients</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.breadcrumbCurrent}>{project.title}</span>
          </div>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectCategory}>{project.category}</p>
        </div>
      </section>

      {/* Project Overview */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.projectImageWrapper}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <a href={project.demoLink || '#'} target="_blank" rel="noopener noreferrer" className={styles.launchDemoButton}>
                <span>Launch Demo</span>
              </a>
            </div>
            <div className={styles.projectInfo}>
              <h2 className={styles.sectionTitle}>About This Project</h2>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.description}>This solution was crafted with a focus on user experience, scalability, and performance. Our team worked closely with stakeholders to understand their unique requirements and deliver a product that not only meets but exceeds expectations. The platform has been instrumental in driving digital transformation and improving operational efficiency.</p>
              {project.technologies && (
                <div className={styles.technologies}>
                  <h3>Technologies Used:</h3>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* How It Works */}
          <div className={styles.workingWrapper}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.workingContent}>
              <p>{project.working}</p>
            </div>
          </div>

          {/* Modules */}
          <div className={styles.modulesWrapper}>
            <h2 className={styles.sectionTitle}>Key Modules & Features</h2>
            <div className={styles.modulesGrid}>
              {project.modules.map((module, index) => (
                <div key={index} className={styles.moduleCard}>
                  <h3>{module}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Interested in Similar Solution?</h2>
          <p className={styles.ctaText}>Let's build something amazing together</p>
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
