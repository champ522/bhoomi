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
      demoLink: 'https://delhiparcel.com/'
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
      demoLink: 'https://crm.bhoomi.cloud/authentication/login'
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
      demoLink: 'https://rupiyamaker.com/'
    },
    4: {
      title: 'Hospital Soft',
      category: 'Hospital Software',
      image: '/images/hospitalimg.png',
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
      demoLink: 'https://hospital.bdtask-demo.com/login'
    },
    5: {
      title: 'SDRC Print',
      category: 'Website',
      image: '/images/sdrcprint.png',
      description: 'SD RC Print is a professional document verification service platform specializing in authenticating Registration Certificates (RCs), Driving Licenses (DLs), and related vehicle documentation. The platform combines cutting-edge technology with professional manual checks to deliver highly accurate verification results aligned with official government databases and regulatory standards. Founded with the vision of making document verification faster, easier, and more accurate, SD RC Print serves a wide range of industries ensuring complete transparency, security, and trust.',
      working: 'The platform provides a multi-layer verification process to ensure document authenticity. Users submit RCs, DLs, or other vehicle documents through the online portal. The system cross-references submitted documents with official government databases using automated verification tools. Each document undergoes professional manual checks by trained verification specialists. The verification process checks for document genuineness, validity, ownership history, and legal status. Results are delivered quickly with detailed verification reports. The platform maintains strict data privacy and security standards, handling all client information with complete confidentiality in compliance with data protection laws.',
      modules: [
        'RC Verification System',
        'DL Verification Module',
        'Vehicle History Checks',
        'Document Authentication',
        'Government Database Integration',
        'Multi-layer Verification Process',
        'Custom Document Solutions',
        'Secure Data Management',
        'Report Generation',
        'Client Dashboard',
        'Background Check Services',
        'Fleet Management Support'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Government API Integration'],
      demoLink: 'https://www.sdrcprint.site/index.html'
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
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomi.app.bhoomi_app&hl=en_IN'
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
      demoLink: 'https://dexterousfacilityservices.in/'
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
      demoLink: 'https://play.google.com/store/apps/details?id=hash.code.spot2delivery&pcampaignid=web_share'
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
      demoLink: 'https://play.google.com/store/apps/details?id=com.app.jobsworld'
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
      demoLink: 'https://play.google.com/store/apps/details?id=hash.code.evsmart'
    },
    11: {
      title: 'Aevitas Recycling',
      category: 'Website',
      image: '/images/avitaslogo.png',
      description: 'Aevitas Recycling LLP, founded in 2024, is a comprehensive waste management platform designed to transform the way we manage e-Waste, Battery Waste, Plastic Waste, Tyre Waste, and Hazardous waste. The platform provides Extended Producer Responsibility (EPR) compliance management services, reverse logistics, and asset liquidation services. With a pan-India footprint and a network of certified recyclers, Aevitas ensures transparent and compliant waste recycling solutions.',
      working: 'The platform operates as a Producer Responsibility Organization (PRO) that facilitates the collection, channelization, and recycling of various waste streams. Producers register on the platform to fulfill their EPR obligations. Aevitas provides end-to-end waste management services including waste collection through reverse logistics, documentation, EPR certification, and channelization to authorized recyclers. The system maintains complete transparency with tracking mechanisms and compliance reports. Asset liquidation services help organizations dispose of redundant IT and Telecom equipment responsibly.',
      modules: [
        'EPR Compliance Management',
        'Producer Responsibility Organization (PRO)',
        'Reverse Logistics System',
        'Asset Liquidation Services',
        'E-Waste Management',
        'Battery Waste Recycling',
        'Plastic Waste Solutions',
        'Tyre Waste Management',
        'Hazardous Waste Handling',
        'Network of Recyclers',
        'Waste Collection Tracking',
        'Compliance Reporting'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Google Maps API'],
      demoLink: 'https://aevitasrecycling.in/'
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
      demoLink: 'https://play.google.com/store/apps/details?id=bhoomi.tech.voicetodaynews.webview_news&hl=en_IN'
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
      demoLink: 'https://apps.apple.com/us/app/grabto-a-booking-app/id6505039756'
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
      demoLink: 'https://play.google.com/store/apps/details?id=bhoomi.app.doctcare.doctcare_app'
    },
    55: {
      title: 'GharPlot - Buy Ghar & Plot',
      category: 'Mobile Application',
      image: '/images/ghrplot.webp',
      description: 'GharPlot is a comprehensive real estate mobile application that simplifies property buying, selling, and renting across India. The platform connects property seekers with verified listings of residential plots, commercial properties, agricultural land, and houses. With advanced search filters, virtual property tours, EMI calculators, and direct seller communication, GharPlot makes real estate transactions transparent, efficient, and hassle-free. The app features verified property listings with detailed documentation, legal status verification, and location mapping.',
      working: 'Users begin by creating profiles as buyers, sellers, or agents. Property seekers can search using advanced filters including location, price range, property type, area size, and amenities. Each listing includes high-quality photos, 360-degree virtual tours, property documents, legal verification status, and location on maps. Interested buyers can directly contact sellers or agents through in-app chat and calling features. The EMI calculator helps buyers plan their finances by calculating monthly installments based on loan amount, interest rate, and tenure. Sellers can post their properties with complete documentation and set their asking price. The platform verifies property documents and seller credentials to prevent fraud. Users receive instant notifications for new listings matching their preferences. The app maintains a history of viewed properties and enables users to create wishlists for future reference. Integrated maps show nearby schools, hospitals, markets, and transport facilities.',
      modules: [
        'Property Listing & Search',
        'Advanced Filter System',
        'Virtual Property Tours (360°)',
        'EMI Calculator',
        'Property Documentation Portal',
        'Legal Verification System',
        'In-app Chat & Calling',
        'Location Mapping & Navigation',
        'Seller Dashboard',
        'Buyer Dashboard',
        'Agent Management',
        'Wishlist & Favorites',
        'Push Notifications',
        'Property Comparison Tool',
        'Nearby Amenities Finder',
        'Property History & Analytics',
        'Document Upload & Management',
        'Price Trend Analysis'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Firebase'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.gharplot&hl=en_IN'
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
      demoLink: 'https://brolightproduction.in/'
    },
    16: {
      title: 'WCAC Services',
      category: 'E-commerce Website',
      image: '/images/wcac.webp',
      description: 'WCAC (Web Communication And Cyber) is a comprehensive e-commerce platform specializing in IT products, electronic components, and computer peripherals. The platform offers an exclusive range of monitors, keyboards, mice, RAM, SSDs, graphics cards, cabinets, SMPS, and various electronic chips and components. With a focus on high-quality products, competitive pricing, and excellent customer service, WCAC provides free shipping across India, easy returns, and warranty-backed products. The platform ensures customers get genuine products at guaranteed lowest market rates.',
      working: 'The e-commerce platform allows users to browse through categorized product listings including monitors, peripherals, storage devices, and electronic components. Customers can search products by category, brand, or specifications. Each product page displays detailed specifications, high-quality images, pricing, warranty information, and stock availability. Users add items to cart and proceed to checkout with multiple payment options. The platform provides order tracking from purchase to delivery. Customer accounts maintain order history and wishlists. The system integrates with inventory management for real-time stock updates. Return and replacement requests are handled through the customer portal with easy refund processes.',
      modules: [
        'Product Catalog Management',
        'Category-based Navigation',
        'Advanced Search & Filters',
        'Shopping Cart',
        'Secure Checkout',
        'Multiple Payment Gateway',
        'Order Tracking System',
        'Customer Account Portal',
        'Wishlist Management',
        'Inventory Management',
        'Return & Refund System',
        'Warranty Management',
        'Review & Ratings',
        'Free Shipping Module'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'AWS S3'],
      demoLink: 'https://wcac.in/'
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
      demoLink: 'https://easetoloan.com/'
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
      demoLink: 'https://escapequestrails.com/'
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
      demoLink: 'https://kdimmigrationservices.com/'
    },
    20: {
      title: 'SPAKS LUBE PVT. LTD.',
      category: 'Website',
      image: '/images/spaks.jpg',
      description: 'SPAKS LUBE Private Limited is a leading manufacturer of advanced waterproofing solutions and industrial coatings based in Alwar, Rajasthan. The company specializes in manufacturing products tailored for overhead and underground water tanks, high-pressure pipelines, and critical infrastructure. With patented waterproofing technology and state-of-the-art manufacturing facilities, SPAKS LUBE delivers innovative products that meet stringent quality standards. Their comprehensive product range includes primers, enamel paints, surface fillers, sealants, emulsion, distemper, floor coatings, anti-corrosive coatings, specialty coatings, waterproofing solutions, rust removers, and industrial cleaning agents.',
      working: 'The website showcases SPAKS LUBE\'s complete product portfolio organized by categories. Visitors can browse through detailed product information including technical specifications, applications, and usage guidelines. Each product page provides comprehensive details about features, benefits, and technical data sheets. The platform highlights their patented waterproofing technology and research innovations. Quality certifications and laboratory test reports demonstrate product reliability and safety standards. Professional onsite application services information is available for customers requiring installation support. The contact system enables customers to request quotes, technical assistance, and product samples. The website emphasizes their commitment to quality, customer-centric approach, sustainability, innovation, and integrity.',
      modules: [
        'Product Catalog System',
        'Category-wise Product Display',
        'Technical Data Sheets Repository',
        'Product Specifications Database',
        'Application Guidelines',
        'Quality Certifications Showcase',
        'Patent Information Portal',
        'Quote Request System',
        'Contact & Inquiry Management',
        'Professional Services Information',
        'Company Profile & Values',
        'Location & Contact Details'
      ],
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      demoLink: 'https://www.spakslube.com/'
    },
    21: {
      title: 'Mitera - The Event',
      category: 'Website',
      image: '/images/miteralogo.png',
      description: 'MITÉRA is a premium event management company that creates unforgettable experiences through a perfect blend of creativity, logistics, and technology. Specializing in end-to-end event solutions, MITÉRA delivers everything from corporate events and exhibitions to experiential marketing, brand activations, weddings, and curated experiences. With the tagline "CREATE. IMAGINE. CELEBRATE.", the company is known for crafting events that move people and brands. Their comprehensive services include event production, AV content, media buying, star-studded experiences, and curated gifts. MITÉRA has been featured in major publications including Times of India, The Hindu, Deccan Herald, and many more.',
      working: 'The website showcases MITÉRA\'s diverse portfolio across corporate and experiential events. Visitors can explore various service categories including Experiential Marketing & Brand Activations, Exhibitions & Trade Shows, Corporate & Public Events, Event Production & Tech, AV Content & Media Buying, Curated Gifts & Event Collaterals, and Star Studded Experiences. Each service page details their approach and past work. The portfolio section displays successful projects with visual galleries. Testimonials from satisfied clients including corporate managers, brand managers, and individuals highlight their excellence. The contact system allows potential clients to share event details and requirements. The platform emphasizes their commitment to detail, perfection, and creating lasting impressions regardless of event size.',
      modules: [
        'Service Portfolio Showcase',
        'Event Category Pages',
        'Project Gallery',
        'Client Testimonials',
        'Contact & Inquiry Form',
        'Event Planning Consultation',
        'Press & Media Coverage',
        'Company Story Section',
        'Newsletter Subscription',
        'Social Media Integration',
        'WhatsApp Contact Widget',
        'Responsive Design'
      ],
      technologies: ['PHP', 'Bootstrap', 'JavaScript', 'MySQL'],
      demoLink: 'https://miteraedge.com/'
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
      demoLink: 'https://gennextmediagroup.com/'
    },
    23: {
      title: 'Ax4 Group',
      category: 'Website',
      image: '/images/afourgroup.png',
      description: 'Ax4 Group (Jhankaar Chamak Detergent) is a professionally managed detergent manufacturing company established in 2012, operating facilities in Naraina Industrial Area, New Delhi, and Bahadurgarh, Haryana. The company is one of India\'s most trusted brands specializing in home care and personal care products, with a tagline "Joy of Clean." Ax4 Group has positioned itself as one of the largest exporters of cosmetics and toiletries from India. The company focuses on providing comprehensive detergent manufacturing solutions including contract manufacturing, private label manufacturing, custom formulations, bulk supply, and eco-friendly cleaning solutions with a commitment to quality, innovation, and customer satisfaction.',
      working: 'The website showcases Ax4 Group\'s comprehensive manufacturing and service capabilities. Visitors can explore various service offerings including Contract Manufacturing where companies outsource production, Private Label Manufacturing for custom branding and packaging, Custom Formulation Services for eco-friendly and specialized detergents, Bulk Detergent Supply for industrial and commercial needs, and Additional Services covering product testing, quality assurance, and regulatory compliance. The platform highlights their expertise in eco-friendly detergents, concentrated formulations, and smart detergents with enzyme-based technologies. Customer testimonials emphasize their excellent cleaning power, gentle formulations, and reliable business partnerships. The contact system allows potential clients to request estimates and detailed information about their manufacturing capabilities.',
      modules: [
        'Service Portfolio Display',
        'Contract Manufacturing Information',
        'Private Label Solutions',
        'Custom Formulation Services',
        'Bulk Supply Management',
        'Product Catalog',
        'About Company Section',
        'Third Party Manufacturing',
        'Quality Standards Showcase',
        'Customer Testimonials',
        'Estimate Request System',
        'Contact & Inquiry Form',
        'Company Statistics Display',
        'Responsive Design'
      ],
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      demoLink: 'https://ax4group.com/'
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
      demoLink: 'https://crm.bhoomi.cloud/admin/authentication'
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
      demoLink: 'https://www.bhoomitherealestate.com/'
    },
    26: {
      title: 'Kanika - Taxi Booking',
      category: 'Mobile Application',
      image: '/images/kanika.webp',
      description: 'Kanika is a comprehensive taxi booking mobile application designed to provide seamless urban transportation solutions. The app connects passengers with professional drivers, offering reliable, safe, and affordable ride-hailing services. With real-time tracking, multiple vehicle options, and secure payment integration, Kanika delivers an exceptional travel experience. The platform features intelligent driver-passenger matching algorithms, dynamic pricing, ride scheduling, and comprehensive safety measures including emergency assistance and ride sharing options.',
      working: 'Passengers download the app and create their profile with basic information. They enter their pickup location and destination to view estimated fares and available vehicle types including economy, premium, and shared rides. Once a ride is booked, the system automatically assigns the nearest available driver based on location, ratings, and vehicle type. Passengers can track the driver\'s arrival in real-time via GPS. During the ride, live tracking shows the route and estimated arrival time. Payment is processed automatically through saved payment methods including digital wallets, cards, or cash on delivery. After completion, both passengers and drivers rate each other, maintaining service quality. The app includes safety features like emergency SOS button, ride sharing with contacts, and trip details sharing. Drivers receive ride requests through their dedicated app, can accept or decline bookings, and navigate using integrated GPS.',
      modules: [
        'User Registration & Profile',
        'Real-time Location Tracking',
        'Ride Booking System',
        'Multiple Vehicle Options',
        'Fare Estimation Calculator',
        'Driver Matching Algorithm',
        'Live GPS Navigation',
        'In-app Messaging',
        'Multiple Payment Gateway',
        'Digital Wallet Integration',
        'Ride History & Receipts',
        'Rating & Review System',
        'Ride Scheduling',
        'Emergency SOS Button',
        'Ride Sharing Features',
        'Promo Code & Discounts',
        'Trip Sharing with Contacts',
        'Driver Dashboard',
        'Earnings & Reports',
        'Push Notifications'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.techravinder.kanikapartner&hl=en_IN'
    },
    27: {
      title: 'HobosWorld',
      category: 'Mobile Application',
      image: '/images/hobosworld.webp',
      description: 'Hobos World is a comprehensive travel companion and community platform designed to inspire, connect, and empower travelers worldwide. The app combines curated content discovery with social networking features, allowing users to explore trending destinations, watch intro videos, and discover travel categories tailored to their interests. Users can create and share their own travel videos and blogs, showcasing hidden gems, detailed itineraries, and unique experiences. With features like user stories, travel tips, destination highlights, and community engagement through likes, follows, and comments, Hobos World transforms how people plan, share, and experience travel adventures.',
      working: 'Users download the app and create their travel profile with preferences and interests. The home feed displays curated content organized into categories like "Popular Now," "Intro Videos," "Trending Destinations," and "Travel Blogs." Users can explore destination-specific content, watch video guides, and read travel stories from fellow travelers. The app allows users to create their own travel content by recording videos or writing blogs about their trips, hidden spots, and travel tips. Content can be enriched with location tags, categories, and descriptions. Other users engage with the content through likes, comments, and follows, building a vibrant travel community. Users can save their favorite destinations and posts to collections for future reference. The discover section helps find inspiration based on interests, while search functionality enables finding specific destinations or users. Push notifications keep users updated about trending content, new followers, and engagement on their posts. The app includes account management features, privacy controls, and data deletion options for complete transparency.',
      modules: [
        'User Profile & Registration',
        'Content Discovery Feed',
        'Trending Destinations',
        'Intro Videos Section',
        'Category-based Browsing',
        'User Stories & Blogs',
        'Video Creation & Upload',
        'Blog Writing Platform',
        'Location Tagging',
        'Save & Collections',
        'Social Engagement (Likes, Comments, Follows)',
        'Search & Explore',
        'Push Notifications',
        'Travel Tips Section',
        'Destination Highlights',
        'User Following System',
        'Content Categorization',
        'Privacy Policy Integration',
        'Account Management',
        'Data Deletion Controls'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS S3', 'Firebase'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.hobosworld&hl=en_IN'
    },
    28: {
      title: 'Welzon Ride',
      category: 'Mobile Application',
      image: '/images/welzon.webp',
      description: 'Welzon Ride is a smart navigation companion designed to provide seamless location tracking and route guidance for daily commutes and travel exploration. The app leverages real-time GPS technology to deliver accurate positioning, live location updates, and turn-by-turn navigation support. With an interactive map interface, users can easily search and explore locations while viewing detailed address information. The app features smart navigation capabilities including compass integration for direction guidance, route planning, and precise geocoding for address lookup. Privacy-focused with user-controlled permissions, Welzon Ride ensures location access only when needed with secure data handling. The clean, modern interface makes navigation intuitive and hassle-free, perfect for city navigation, finding addresses, location sharing, and travel planning.',
      working: 'Users download and install the app, granting necessary location permissions for core functionality. Upon launching, the app displays an interactive map with the user\'s current location marked using real-time GPS tracking. Users can search for destinations by entering addresses or place names, with the geocoding feature converting addresses into precise coordinates. The navigation system provides turn-by-turn directions with visual and audio guidance, while the integrated compass helps users maintain proper orientation. Live location updates ensure accuracy throughout the journey, adjusting routes dynamically based on current position. Users can explore nearby places, view detailed address information, and plan routes before starting their trip. The app operates efficiently with network connectivity for map data while maintaining privacy through secure data handling. Location tracking can be controlled by users through permission settings, with data only accessed when the app is actively in use. The clean interface displays relevant information clearly, including distance, estimated time, and route alternatives.',
      modules: [
        'Real-Time GPS Tracking',
        'Live Location Updates',
        'Turn-by-Turn Navigation',
        'Interactive Map Interface',
        'Location Search & Explore',
        'Address Information Display',
        'Compass Integration',
        'Route Planning',
        'Geocoding Services',
        'Precise Address Lookup',
        'Direction Guidance',
        'Location Sharing',
        'User Permission Controls',
        'Secure Data Handling',
        'Network Connectivity Management',
        'Map Data Loading',
        'Distance Calculation',
        'ETA Estimation',
        'Route Alternatives',
        'Privacy Settings'
      ],
      technologies: ['React Native', 'Google Maps API', 'Node.js', 'MongoDB', 'Firebase'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.welzonride&hl=en_IN'
    },
    29: {
      title: 'RiDeal Driver',
      category: 'Mobile Application',
      image: '/images/rideal.webp',
      description: 'RiDeal Driver is a comprehensive driver partner application designed for licensed drivers to receive nearby ride requests and maximize their earning potential with flexible working hours. The app provides detailed trip information, easy navigation, and transparent earnings tracking directly on the driver\'s phone. With a simple availability toggle, drivers can go online or offline with a single tap, controlling when they want to accept rides. The app displays pickup and drop locations on an interactive map with in-app navigation support to guide drivers along the best routes.',
      working: 'Licensed drivers download and register on the app, completing their profile with necessary documents and vehicle information. After verification, drivers can toggle their availability status to go online and start receiving ride requests from nearby passengers. When a ride request comes in, the app displays the pickup location, destination, estimated distance, and fare details. Drivers can choose to accept or decline the request based on their preference. Upon accepting, the app shows the complete route to the pickup location with turn-by-turn navigation support. Drivers follow the in-app navigation to reach the passenger, confirm pickup through the app, and then navigate to the drop-off destination. Throughout the trip, real-time tracking ensures security for both driver and passenger. After completing the trip, drivers can view trip earnings, distance covered, and duration. Passengers can rate the driver and provide feedback, helping maintain service quality. The earnings dashboard displays daily, weekly, and monthly income with detailed breakdowns. Drivers can access their complete trip history, view past rides, and analyze performance metrics to optimize their working hours and earnings potential.',
      modules: [
        'Driver Registration & Verification',
        'Profile & Document Management',
        'Availability Toggle (Online/Offline)',
        'Nearby Ride Request Notifications',
        'Trip Details Display',
        'Pickup & Drop Location Mapping',
        'Accept/Decline Ride Options',
        'In-App Navigation',
        'Turn-by-Turn Route Guidance',
        'Real-Time Trip Tracking',
        'Pickup Confirmation',
        'Trip Completion',
        'Earnings Dashboard',
        'Trip History',
        'Passenger Ratings & Feedback',
        'Performance Analytics',
        'Daily/Weekly/Monthly Earnings Reports',
        'Distance & Duration Tracking',
        'Secure Payment Processing',
        'Driver Support & Help'
      ],
      technologies: ['React Native', 'Google Maps API', 'Node.js', 'MongoDB', 'Socket.io', 'Firebase'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.ridealpartner&hl=en_IN'
    },
    30: {
      title: 'Fixs Vendor',
      category: 'Mobile Application',
      image: '/images/fixs.webp',
      description: 'Fixs Vendor (Nexitech Solutions Vendor App) is a comprehensive business management platform designed for home service professionals to efficiently manage bookings, customers, and daily operations in one centralized location. The app empowers service providers including home cleaning, plumbing, electrical services, carpentry, beauty, wellness, and appliance repair professionals with powerful tools to grow their business. Service providers can receive real-time booking requests from customers, update their availability, and track appointments through an intuitive interface.',
      working: 'Service professionals download and register on the app, creating their professional profile with service details, portfolio images, working hours, and service areas. After verification, vendors receive real-time notifications whenever customers submit booking requests through the platform. The integrated calendar displays all appointments and helps vendors organize their schedule efficiently. Vendors can accept or decline booking requests based on their availability and capacity. Upon accepting, they can view complete customer details, service requirements, and appointment information. Throughout the service lifecycle, vendors update the booking status to keep customers informed. The app tracks the progress from booking confirmation to service completion. After completing a service, vendors mark it as complete in the system, triggering payment processing. The earnings dashboard provides real-time tracking of payments, transaction history, and basic earning summaries with daily, weekly, and monthly breakdowns. Vendors can access reports about completed jobs, view customer reviews and ratings, and analyze their performance metrics. The portfolio management section allows vendors to showcase their work with images and relevant information, helping attract more customers. Service area settings enable vendors to define their operational zones, while availability settings let them control when they receive bookings.',
      modules: [
        'Vendor Registration & Profile Setup',
        'Service Listing Management',
        'Portfolio & Image Gallery',
        'Service Area Configuration',
        'Working Hours & Availability Settings',
        'Booking Request Notifications',
        'Integrated Calendar Scheduling',
        'Accept/Decline Booking Options',
        'Booking Dashboard',
        'Service Status Updates',
        'Customer Communication',
        'Appointment Tracking',
        'Job Completion Management',
        'Payment Tracking',
        'Transaction History',
        'Earnings Dashboard',
        'Daily/Weekly/Monthly Reports',
        'Customer Reviews & Ratings',
        'Performance Analytics',
        'Vendor Support & Help'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Push Notifications'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.fixsvendor&hl=en_IN'
    },
    31: {
      title: 'Skills Boost',
      category: 'LMS Software',
      image: '/images/skillsboost.png',
      description: 'Skills Boost is India\'s fastest-growing EdTech institute and comprehensive learning management platform dedicated to empowering youth with job-ready skills and transforming careers through practical, affordable, and accessible education. The platform offers industry-relevant certification programs across Digital Marketing, Data Science, Web Development, Python, Graphic Designing, Video Editing, and more. With 70,000+ total learners and partnerships with top companies like Deloitte, Samsung, Accenture, Jio, and Axis Bank, Skills Boost provides a complete ecosystem for skill development.',
      working: 'Students and professionals visit the Skills Boost website and browse through various certification programs including Digital Marketing, Data Analytics, Software Development, and specialized skill degrees. After selecting a course, users can book a free demo session to understand the curriculum and learning approach. Upon enrollment, learners gain access to a structured learning path with 3-6 months of online live training sessions conducted by experienced industry professionals. The platform provides comprehensive course materials accessible 24/7, allowing students to learn at their own pace and schedule. Each program includes hands-on projects and real-world case studies to ensure practical understanding of concepts. Students participate in live interactive sessions where expert faculty members explain concepts, conduct Q&A sessions, and provide personalized guidance. The platform offers hybrid training combining theoretical knowledge with practical applications. Learners work on industry-led projects and internship opportunities to gain real-world experience. Throughout the course, students receive mentorship from senior professionals like Data Analysts, Digital Marketers, and Data Scientists. Assessment tests and assignments help track progress and understanding. Upon completion, students earn globally recognized certifications that add credibility to their profiles. The career assistance team provides 100% job placement support with resume building, interview preparation, and connections to top hiring companies. Students can track their learning progress, access recorded sessions, download study materials, and interact with peers through the platform. The referral program rewards students for bringing in new learners, and special offers like free laptops incentivize enrollment.',
      modules: [
        'Course Catalog & Discovery',
        'Course Enrollment & Registration',
        'Student Dashboard',
        'Live Training Sessions',
        'Video Lectures & Recorded Content',
        '24/7 Study Material Access',
        'Interactive Learning Tools',
        'Hands-on Projects & Assignments',
        'Real-world Case Studies',
        'Industry-Led Internships',
        'Expert Mentorship Program',
        'Progress Tracking & Analytics',
        'Assessment & Testing Module',
        'Certification Management',
        'Career Assistance Portal',
        'Resume Building Tools',
        'Interview Preparation Resources',
        'Job Placement Support',
        'Student Reviews & Testimonials',
        'Referral & Rewards Program',
        'Payment & Pricing Management',
        'Student Support & Help Desk',
        'Faculty Management System',
        'Course Syllabus Management',
        'Student Community Forum'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC', 'Payment Gateway'],
      demoLink: 'https://www.skillsboost.in/'
    },
    32: {
      title: 'Globengle - Tours & Travels',
      category: 'Website',
      image: '/images/globengle.png',
      description: 'Globengle is a comprehensive travel and tourism platform that curates personalized journeys matching travelers\' dreams, personality, and pace. The platform goes beyond traditional trip planning by offering handcrafted itineraries, global partnerships with local expertise, and end-to-end travel care. Globengle features diverse travel services including Group Tours, Voyages, Business Travel, Destination Celebrations, Educational Travel (Eduwings for Study Abroad), and Private Charter services.',
      working: 'Visitors land on the Globengle website and browse through featured destinations and travel packages organized by categories including popular destinations, group tours, hassle-free escapes, and beyond leisure services. Users can explore detailed destination pages for countries like Turkey, Egypt, Europe, Dubai, Bali, and Asian explorers, viewing comprehensive itineraries with day-wise breakdowns, duration, cities covered, and per-person pricing. The platform showcases handcrafted group departures with departure dates, availability status, and all-inclusive pricing starting from INR 30,000 to INR 1,45,000 depending on the destination. Users interested in specific packages can contact the team via phone (+91 99104-05255) or email (info@globengel.com) to discuss customization options. For hassle-free travel, the platform highlights visa-free and e-Visa destinations for Indian travelers including Bhutan, Mauritius, Sri Lanka, and Malaysia with starting prices. The Beyond Holidays section caters to specialized travel needs including education travel (study abroad programs), corporate travel for business meetings and conferences, and destination celebrations for weddings and special events. Users can sign up for newsletters to stay inspired with travel tips, destination guides, and exclusive offers.',
      modules: [
        'Destination Discovery & Browsing',
        'Package Search & Filtering',
        'Detailed Itinerary Display',
        'Day-wise Tour Planning',
        'Group Tour Listings',
        'Pricing & Availability Management',
        'Visa-Free Destinations Section',
        'Hassle-Free Escapes Showcase',
        'Business Travel Solutions',
        'Corporate Event Planning',
        'Destination Celebration Services',
        'Wedding & Event Packages',
        'Education Travel (Study Abroad)',
        'Private Charter Bookings',
        'Voyage & Cruise Packages',
        'Customer Testimonials',
        'Newsletter Subscription',
        'Contact & Inquiry Management',
        'Quote Request System',
        'Pre-trip Consultation',
        'On-ground Concierge Support',
        'Travel Insurance Integration',
        'Documentation Assistance',
        'Partner Network Management',
        'Blog & Travel Guides'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'AWS S3', 'Email Integration'],
      demoLink: 'https://www.globengel.com/'
    },
    33: {
      title: 'School Plus',
      category: 'LMS Software',
      image: '/images/schoolplus.jpeg',
      description: 'School Plus is a comprehensive cloud-based school management ERP system designed to streamline and automate all administrative, academic, and communication activities within educational institutions. The platform provides a unified solution for managing student information, attendance tracking, fee collection, examination management, timetable scheduling, and parent-teacher communication. With role-based access for administrators, teachers, students, and parents, School Plus ensures secure and efficient management of school operations. The system includes modules for admissions, student records, staff management, library management, transport management, hostel management, and financial accounting.',
      working: 'School administrators access the system through the login portal with their credentials and role-based permissions. The dashboard provides an overview of key metrics including total students, staff, pending fees, upcoming events, and attendance statistics. Administrators manage the complete student lifecycle starting from online admission applications, enrollment, class allocation, and ID card generation. The student information system maintains comprehensive records including personal details, academic history, medical information, and parent contacts. Teachers log in to mark daily attendance, update lesson plans, assign homework, conduct online assessments, and enter examination marks. The examination module supports creating exam schedules, generating hall tickets, recording marks, calculating grades, and publishing results with automatic report card generation. The timetable management system creates conflict-free schedules for classes, teachers, and subjects with automatic substitution management. Fee management allows administrators to define fee structures, generate invoices, track payments, send reminders for pending dues, and generate financial reports. Parents receive login credentials to access their child\'s attendance, academic performance, fee status, homework assignments, and important announcements. The SMS and email notification system sends automated alerts for attendance, fee reminders, exam schedules, and emergency communications. The library module manages book cataloging, issue/return tracking, fine calculation, and digital library resources. Transport management tracks routes, vehicle details, driver information, and student transport allocation with GPS integration. The staff management module handles employee records, payroll processing, leave management, and performance evaluations. Reports and analytics provide insights into academic performance, financial health, attendance trends, and operational efficiency enabling data-driven decision making.',
      modules: [
        'Student Admission & Enrollment',
        'Student Information System',
        'Attendance Management',
        'Timetable Scheduling',
        'Class & Section Management',
        'Teacher Portal',
        'Lesson Planning',
        'Homework & Assignments',
        'Examination Management',
        'Marks Entry & Grading',
        'Report Card Generation',
        'Fee Management',
        'Payment Gateway Integration',
        'Fee Receipt Generation',
        'Parent Portal',
        'Student Portal',
        'SMS & Email Notifications',
        'Library Management',
        'Book Issue/Return Tracking',
        'Transport Management',
        'Vehicle & Route Tracking',
        'Hostel Management',
        'Staff Management',
        'Payroll Processing',
        'Leave Management',
        'Event Management',
        'Notice Board',
        'Certificate Generation',
        'ID Card Generation',
        'Reports & Analytics',
        'Data Backup & Security'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Cloud Hosting'],
      demoLink: 'https://prastutischool.cloud/login'
    },
    34: {
      title: 'Hortizi Solutions',
      category: 'Website',
      image: '/images/hortizi.png',
      description: 'Hortizi Solutions is a professional green solutions company offering a complete range of plant services for corporate offices, co-working spaces, malls, cafes, events, and residential spaces across Delhi NCR. The platform is a comprehensive digital solution that brings nature closer to people through beautiful, easy-to-maintain, and thoughtfully designed green spaces. From plant rentals to full-scale landscaping, the website showcases services including gardener on demand, vertical gardening, terrace garden development, horticulture services, and tree transplantation.',
      working: 'The website serves as a complete digital storefront and service management platform for Hortizi Solutions. Customers visit the homepage featuring an engaging hero section with call-to-action buttons and video content showcasing the beauty of green spaces. Users can browse through the comprehensive services section that details offerings like Gardener on Demand, Plants Rental Services, Indoor & Outdoor Plant Sale, Landscaping Service, Horticulture Service, Vertical Gardening, Terrace Garden Development, Garden & Lawn Care Maintenance, and Tree Transplantation. Each service includes detailed descriptions, images, and a "Get Details" button for more information. The online booking system allows customers to schedule gardening services by selecting service type, date, time, and providing property details. The plant collection section displays various indoor and outdoor plants available for purchase or rent with images, descriptions, and pricing. The project gallery showcases completed installations including rooftop gardens, balcony landscaping, commercial spaces, and residential projects with before-after comparisons. Customer testimonials and Google reviews build trust and credibility. The blog section provides valuable content on plant care tips, design guides, and seasonal gardening advice. Contact forms and WhatsApp integration enable instant communication with the team. The platform includes sections highlighting their prestigious clients including HLL Infra Tech, Engineers India Limited, National Cadet Corps, Army Welfare Housing Organisation, BHEL, Larsen & Toubro, and various real estate developers and educational institutions.',
      modules: [
        'Service Catalog & Management',
        'Online Booking System',
        'Gardener Scheduling Module',
        'Plant Collection Display',
        'E-commerce for Plant Sales',
        'Shopping Cart & Checkout',
        'Service Request Forms',
        'Quote Generation System',
        'Project Gallery & Portfolio',
        'Client Testimonials Section',
        'Google Reviews Integration',
        'Blog Management System',
        'Content Publishing Platform',
        'Location Mapping',
        'Service Area Coverage',
        'Email Notification System',
        'SMS Alerts',
        'Lead Capture Forms'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'WhatsApp API', 'Payment Gateway'],
      demoLink: 'https://hortizi.in/'
    },
    35: {
      title: 'CareerVeda',
      category: 'LMS Software',
      image: '/images/careerveda.png',
      description: 'CareerVeda is a comprehensive online learning platform designed to advance careers through expert-led upskilling programs in Data Science, Business Analytics, Generative AI, and various technology domains. The platform serves working professionals, college students, and graduates looking to transform their careers with industry-relevant skills. With over 13,000 happy students, 900+ hiring partners, 67% average salary hike, 300+ popular courses, and 200+ industry experts, CareerVeda offers a complete ecosystem for professional development.',
      working: 'The platform operates as a full-fledged learning management system with multiple integrated modules. Students begin by browsing through various learning paths and programs offered, each with detailed curriculum, duration (typically 6-12 months), and career outcomes. The enrollment process captures student information, educational background, career goals, and preferred learning schedule. Once enrolled, students access their personalized dashboard showing course progress, upcoming live classes, assignments, and upcoming deadlines. The interactive live classes module conducts real-time sessions with industry experts where students can ask questions, participate in discussions, and collaborate with peers. All live sessions are recorded and stored in the platform for later review, providing flexible learning options. The educational materials section provides comprehensive resources including e-books, PDFs, infographics, white papers, video tutorials, and reference materials organized by topics and modules. The assessment system includes practice tests, quizzes, mock exams, and coding challenges to evaluate understanding and track progress throughout the course. Students work on real-world projects and case studies that simulate actual industry scenarios, building practical portfolios to showcase to potential employers.',
      modules: [
        'Student Registration & Enrollment',
        'Interactive Live Classes',
        'E-books & PDF Resources',
        'Personalized Mentorship',
        'One-on-One Counseling',
        'Doubt Resolution System',
        'Resume Builder & Review',
        'Interview Preparation',
        'Mock Interview Platform',
        'Placement Tracking',
        'Certificate Generation',
        'Discussion Boards',
        'Peer Collaboration Tools',
        'Study Groups',
        'Email & SMS Notifications',
        'Student Support System',
        'Feedback Collection',
        'Course Rating & Reviews',
        'Referral Program'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Email Service', 'SMS Gateway'],
      demoLink: 'https://careerveda.in/'
    },
    36: {
      title: 'Rishee Ayurveda',
      category: 'Website',
      image: '/images/rishi.jpeg',
      description: 'Rishee Ayurveda is a specialized Ayurvedic wellness platform that brings ancient healing wisdom to modern wellness needs through natural, clinically tested, and government-approved herbal formulations. The platform serves as a comprehensive digital solution for authentic Ayurvedic products and wellness services with over 50,000+ satisfied customers, 4.9/5 average rating, 95% success rate, and 100% natural & safe products. Rishee Ayurveda focuses on holistic healing with specialized offerings in natural weight transformation, joint relief & mobility, stress management, immunity boosting, digestive health, and personalized dosha-based treatments.',
      working: 'The platform operates as a comprehensive Ayurvedic wellness ecosystem combining e-commerce, education, and personalized health services. Visitors land on an engaging homepage showcasing the brand story, hero banners with high-quality product imagery, featured collections, and wellness benefits. The specialized wellness section highlights key treatment areas including Natural Weight Transformation (gentle sustainable weight management), Joint Relief & Mobility (ancient remedies for joint comfort), and Holistic Healing (complete wellness solutions). The product catalog is organized by categories such as herbal remedies, weight management, joint health, immunity boost, and stress relief, with each product featuring detailed descriptions, ingredients list, usage instructions, pricing, customer reviews, and certification badges. The quality certifications section displays FSSAI (Food Safety & Standards Authority), Quality Certified (Authentic Ayurvedic Standards), ISO Certified (International Quality Standards), and Natural Certified (100% Natural & Organic) credentials with verification marks.',
      modules: [
        'E-commerce Platform',
        'Product Catalog Management',
        'Shopping Cart System',
        'Secure Checkout',
        'Payment Gateway Integration',
        'Order Management System',
        'Inventory Tracking',
        'Product Categorization',
        'Product Filtering & Search',
        'Product Reviews & Ratings',
        'Wishlist Functionality',
        'Blog Management System',
        'Content Publishing Platform',
        'Article Categories & Tags',
        'Author Profiles',
        'Newsletter Subscription',
        'Email Marketing Integration',
        'Contact Form',
        'Email Notification System',
        'SMS Alerts',
        'Coupon & Discount Management',
        'Promotional Campaigns',
        'Product Bundle Creation'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WhatsApp API','SEO Tools'],
      demoLink: 'https://risheeayurveda.co.in/'
    },
    37: {
      title: 'ASPB Services',
      category: 'Website',
      image: '/images/aspb.png',
      description: 'ASPB Services Pvt. Ltd. is a comprehensive multi-disciplinary solutions provider delivering excellence across Electronics Security Solutions, Construction Services, Manpower Solutions, Business Park Development, and IT Services & Workforce Solutions. The platform showcases their extensive portfolio including CCTV installations, access control, construction management, skilled staffing solutions, modern business park infrastructure, and cutting-edge IT solutions with professional expertise and commitment to quality.',
      working: 'The platform operates as a comprehensive business services website with an engaging homepage featuring rotating banners highlighting Security Solutions, Construction Services, Manpower Solutions, Business Parks, and IT Services. Each service section includes detailed descriptions, portfolio showcases, and dedicated pages with process workflows. The website features team profiles, client testimonials from major organizations like TIPL, NTPC, and L&T, industry insights blog, and contact modules with email, phone, and WhatsApp integration. Quality assurance, competitive pricing, and professional expertise are emphasized throughout the platform.',
      modules: [
        'Service Portfolio Showcase',
        'Security Solutions Display',
        'CCTV Installation Services',
        'Skilled Staffing Services',
        'Employee Deployment System',
        'Training & Compliance',
        'Business Park Showcase',
        'Premium Office Spaces',
        'IT Workforce Solutions',
        'Team Member Profiles',
        'Leadership Display',
        'Professional Team Showcase',
        'Client Testimonials Section',
        'Success Stories Display',
        'Review Management',
        'Inquiry Form System',
        'Quote Request Form',
        'Service Booking',
        'Email Integration',
        'Analytics Integration'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'SEO Tools'],
      demoLink: 'https://aspbservices.com/'
    },
    38: {
      title: 'ShubhKaryaJodi',
      category: 'Website',
      image: '/images/jodi.png',
      description: 'ShubhKaryaJodi is a comprehensive matrimonial platform designed to help individuals find their perfect life partner. The platform provides a simple, fast, and secure way to connect with verified profiles, offering relevant matches based on user preferences, religion, caste, profession, and lifestyle. With 100% verified mobile numbers, affordable pricing plans, and complete privacy protection, ShubhKaryaJodi serves as a trusted matchmaking solution for those seeking meaningful relationships and marriage.',
      working: 'The platform operates as a complete matrimonial service with user registration, profile creation with detailed information including photos, educational background, profession, family details, and partner preferences. Users can browse through verified profiles, filter matches based on various criteria, and connect with potential partners. The system includes success stories showcasing couples who found their match through the platform, privacy controls ensuring user data security, and subscription plans offering different levels of access. Contact options include direct messaging, phone verification, and express interest features to facilitate meaningful connections.',
      modules: [
        'User Registration System',
        'Profile Creation & Management',
        'Photo Upload & Gallery',
        'Partner Preference Settings',
        'Advanced Search & Filters',
        'Match Recommendations',
        'Profile Verification System',
        'Mobile Number Verification',
        'Messaging System',
        'Express Interest Feature',
        'Contact Exchange',
        'Privacy Controls',
        'Subscription Plans',
        'Payment Gateway',
        'Success Stories Section',
        'User Dashboard',
        'Profile Views Tracking',
        'Shortlist & Favorites',
        'Horoscope Matching',
        'Community Features',
        'Customer Support',
        'Admin Panel',
        'User Analytics',
        'Notification System'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'Payment Gateway', 'SMS API', 'Email Service'],
      demoLink: 'https://shubhkaryajodi.com/'
    },
    39: {
      title: 'LBSATI Education',
      category: 'LMS Software',
      image: '/images/lbsati.png',
      description: 'LBS Advanced Training Institute (LBSATI) is a comprehensive educational platform providing quality computer education and digital certification programs. As an ISO 9001:2015 and ISO 29993:2017 certified institute registered with the Government of India, LBSATI serves over 30,000+ enrolled students across 500+ training centers throughout India. The platform offers 50+ industry-focused courses ranging from Certificate in Hindi/English Typing, Microsoft Office, Tally Prime Gold, Advance Excel, Computer Teacher Training, to Diploma programs in Computer Applications, Financial Accounts, and Information Technology.',
      working: 'The platform functions as a complete learning management system with student registration, course enrollment, online learning modules, and digital certificate verification. Students can browse 50+ courses with detailed information including duration, fees, ratings, and curriculum. The registration system captures student details and enables course enrollment with secure payment processing. The student dashboard provides access to enrolled courses, study materials, progress tracking, and downloadable resources. Training centers across India are connected through the platform, allowing students to find nearby centers and enroll in offline programs. The certificate verification system enables employers and institutions to verify student credentials using unique certificate numbers. The platform features course categories including typing courses, MS Office training, Tally courses, web development, programming, and advanced diploma programs. Each course includes structured curriculum, expert instructors, practical training, and official certification upon completion. The student zone offers login access, result checking, downloads, and registration management. Study centers can be searched by location to find nearest training facilities. The gallery showcases modern training facilities and learning environments. Testimonials from successful students highlight the quality education and career transformation achieved through LBSATI programs.',
      modules: [
        'Student Registration System',
        'Course Management',
        'Online Course Catalog',
        'Student Dashboard',
        'Enrollment System',
        'Certificate Generation',
        'Student Login Portal',
        'Results Management',
        'Downloads Section',
        'Course Rating & Reviews',
        'Gallery Management',
        'Testimonials Section',
        'Instructor Profiles',
        'Curriculum Display',
        'Fee Management',
        'Student Analytics',
        'Admin Panel',
        'Franchise Management',
        'Notification System',
        'SMS Alerts',
        'Contact Management',
        'Blog/News Section'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript','jQuery','Email Service', 'PDF Generation'],
      demoLink: 'https://lbsati.in/'
    },
    40: {
      title: 'Satkartar Travels',
      category: 'Website',
      image: '/images/satkartar.png',
      description: 'Satkartar Travel House is a trusted taxi service provider established in 1999 in Vaishali, serving the Delhi NCR region with over two decades of experience. The platform showcases their comprehensive transportation solutions including corporate travel, wedding transportation, event management support, film and photoshoot logistics, outstation trips, and airport/railway station pick-up and drop-off services. With a well-maintained fleet featuring vehicles like Swift Dzire, Toyota Innova Crysta, Innova HyCross, Kia Carens, Toyota Fortuner, Maruti Ertiga, Hyundai Aura, Brezza, Force Urbania, and Buses, they provide 24/7 reliable, comfortable, and safe transportation across Vaishali, Vasundhara, and Ghaziabad sectors.',
      working: 'The website operates as a vehicle showcase and booking platform with detailed vehicle categories including Mini Cars (Swift Dzire, Hyundai Aura), Prime MUVs (Innova Crysta, Innova HyCross, Kia Carens, Ertiga), Prime SUVs (Fortuner, Brezza), and larger vehicles (Force Urbania, Buses). Each vehicle page displays specifications, features, seating capacity, and booking options. The platform highlights their service areas in Delhi NCR, particularly Vaishali, Vasundhara, and Ghaziabad sectors 62, 59, 63, and 61. Contact options include WhatsApp integration, direct calling, and enquiry forms for instant booking. The website emphasizes their 24/7 availability, experienced drivers, well-maintained fleet, and commitment to reliable, stress-free journeys for both local and outstation travel.',
      modules: [
        'Vehicle Details Pages',
        'Image Gallery',
        'Booking Enquiry System',
        'WhatsApp Integration',
        'Call Integration',
        'Contact Forms',
        'Service Area Display',
        'Fleet Management Showcase',
        'About Company Section',
        'Service Categories',
        'Corporate Travel Services',
        'Railway Station Pickup',
        'Mobile Responsive Design',
        'SEO Optimization'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'WhatsApp API', 'SEO Tools'],
      demoLink: 'https://satkartartravelhouse.com/'
    },
    41: {
      title: 'Doon E-Paper',
      category: 'Website',
      image: '/images/doon.png',
      description: 'Doon Weekly Market E-Paper is a unique digital classified e-paper platform designed specifically for Dehradun\'s information and advertisements. As a unit of Deeven Doon Devbhoomi Realtors, Promoters and Consultant Private Limited, the platform serves as a comprehensive digital marketing solution reaching over 55,000+ people in Dehradun District and nearby surroundings. The platform provides businesses and individuals with the opportunity to showcase their brand visibility, advertise products and services, and access the latest local information through a modern digital classified e-paper format, eliminating the limitations of traditional print media.',
      working: 'The platform operates as a digital classified e-paper publishing system where users can access weekly e-paper editions featuring categorized advertisements and local information. The website includes user registration and login functionality for advertisers to submit and manage their advertisements. The e-paper section displays digital publications in an easy-to-read format with categories including Politics, Business, Real Estate, Jobs, Services, and more. Advertisers can book online advertising slots, view tariff cards for pricing plans, and access WhatsApp booking for instant communication. The platform features a client showcase section, testimonials from satisfied advertisers, and a visitor hit counter tracking platform engagement. Contact options include phone (+91-708-899-7171), email (bookings@doonweeklymarketepaper.com), and social media integration across Facebook, Instagram, Telegram, and Twitter. The platform includes FAQ, Terms & Conditions, and Refund Policy pages ensuring transparency in service delivery.',
      modules: [
        'Digital E-Paper Publishing',
        'User Registration & Login',
        'Advertisement Booking System',
        'Online Advertisement Management',
        'Tariff Card Display',
        'Category Management',
        'E-Paper Archive',
        'News Categories Display',
        'Advertisement Categories',
        'Client Showcase',
        'Social Media Integration',
        'Newsletter Subscription',
        'Admin Panel',
        'Content Management System',
        'Image Gallery',
        'Mobile Responsive Design'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery','Email Service'],
      demoLink: 'https://doonweeklymarketepaper.in/'
    },
    42: {
      title: 'Smart Farm Fresh',
      category: 'Website',
      image: '/images/farm.png',
      description: 'Smart Farm Fresh is a premium agro-based e-commerce platform offering fresh, organic produce cultivated using innovative agricultural techniques. The company holds prestigious certifications including ISO, FSSAI Registration, MSME-UDYAM, APEDA License, and Jaivik Bharat, demonstrating their commitment to quality and sustainability. As a Gold Pendant Award winner at the AAHAAR Exhibition in New Delhi, Smart Farm Fresh delivers farm-fresh, high-quality produce free from harmful pesticides, artificial additives, and GMOs, sourced ethically from local communities through sustainable agricultural practices.',
      working: 'The platform operates as a comprehensive agro-products e-commerce website with detailed product showcases, certification displays, and educational blog content. The homepage features engaging banners highlighting organic products, certifications, and commitment to health and wellness. The product section showcases various organic items including organic ghee, fresh vegetables, fruits, and agro-based superfoods with detailed nutritional information. The certification showcase builds trust by displaying ISO, FSSAI, MSME-UDYAM, APEDA, and Jaivik Bharat credentials. The blog section provides valuable content on topics like "Nutritional and Health Benefits of Organic Food," "Top 5 Health Benefits of Organic Ghee," "Organic vs. Conventional Foods," and "Superfoods from the Farm." Contact options include phone (+91 8955077076), email (info@smartfarmfresh.com), and WhatsApp chat integration for instant customer support.',
      modules: [
        'Product Catalog',
        'E-commerce Platform',
        'Shopping Cart',
        'Checkout System',
        'Payment Gateway',
        'Certification Display',
        'About Company Section',
        'Product Details Pages',
        'Image Gallery',
        'Contact Forms',
        'WhatsApp Integration',
        'Email Integration',
        'Customer Testimonials',
        'Mobile Responsive Design',
        'SEO Optimization'
      ],
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript', 'Payment Gateway', 'SEO Tools'],
      demoLink: 'https://smartfarmfresh.com/'
    },
    43: {
      title: 'Jesus Biotech',
      category: 'Hospital Software',
      image: '/images/jesus.png',
      description: 'Jesus Biotech is a comprehensive pharmaceutical manufacturing and marketing platform offering end-to-end solutions in drug development, clinical trials, and regulatory affairs. Formerly Panna Laboratories Pvt. Ltd (merged in 2014), the company specializes in research & development, GMP manufacturing, supply chain management, and pharmacovigilance. With 30 years of industry experience, Jesus Biotech provides high-quality pharmaceutical products, custom formulation development, cold chain management, and global distribution services while ensuring compliance with international regulatory standards.',
      working: 'The platform features a complete pharmaceutical product showcase system with detailed product information for various medicines including Fytofix-O, G-ROC-DSR, Monovent-LC, Ultravit-M, and many others. It includes product catalog management with medicine names, compositions, and descriptions. The website showcases core services like R&D, manufacturing & marketing, warehousing & logistics, and custom solutions for clients. Patient testimonials and company information highlight their expertise in pharmacology, biotechnology, formulation development, quality control, and regulatory affairs for bringing pharmaceutical products to market.',
      modules: [
        'Product Catalog Management',
        'Medicine Information System',
        'Product Image Gallery',
        'Service Showcase Section',
        'R&D Information Module',
        'Company History & Timeline',
        'Patient Testimonials',
        'Contact Information System',
        'Mobile Responsive Design',
        'SEO Optimization',
        'Product Search & Filter',
        'Product Categories',
        'Image Slider/Carousel',
        'Contact Forms'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'Bootstrap', 'WhatsApp API', 'SEO Tools'],
      demoLink: 'https://jesusbiotech.org/'
    },
    44: {
      title: 'Tribus Security',
      category: 'Website',
      image: '/images/tsgg.png',
      description: 'Tribus Security Solutions Group (TSSG) is a professional security and housekeeping service provider platform based in Delhi NCR. The company offers comprehensive solutions for businesses, residences, and events with trained staff providing armed and unarmed guard services, surveillance, access control, and professional housekeeping. TSSG serves prestigious clients including Mash Audio Visuals, Patiala House Court, J.P. Chandra Hospital, Galaxy Constructions, White Bus Transit, IBS Business School, Public Work Department, Delhi Development Authority, and Centre For Railway Information Systems.',
      working: 'The platform showcases four core service categories: Event Security (crowd control, VIP protection, emergency response), Corporate Security (office premises, warehouses, industrial facilities), Corporate Housekeeping Services (professional workspace cleaning), and Residential Security (24/7 monitoring, access control). The website features a comprehensive enquiry form system, client portfolio showcase, service details with images, contact management, and integration with email and phone services for immediate client response and booking.',
      modules: [
        'Service Showcase System',
        'Event Security Management',
        'Corporate Security Solutions',
        'Housekeeping Services Module',
        'Residential Security Section',
        'Client Portfolio Display',
        'Enquiry Form System',
        'Service Booking Module',
        'Statutory Compliance Section',
        'Blog Management',
        'Service Image Gallery',
        'Quick Links Navigation',
        'Mobile Responsive Design'
      ],
      technologies: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SEO Tools'],
      demoLink: 'https://tssg.in/'
    },
    45: {
      title: 'Steward Techno',
      category: 'Website',
      image: '/images/steward.png',
      description: 'Steward Techno Solutions is a market leader in radio communication equipment with over 5 years of experience, formerly known for its flagship brand operating for three decades. The company serves diverse industries including Hospitality, Aviation, Mining, and Construction with over 3,500 operational radios across India. They offer comprehensive walkie-talkie solutions featuring products from brands like Motorola, Kenwood, Hytera, Tokimo, Aspera, and HOLLYLAND, providing both sales and rental services for radio communication devices, POC radios, intercom systems, and accessories with advanced features like IP67 protection, MIL Standard durability, and long-range coverage.',
      working: 'E-commerce platform offering complete radio communication product catalog with detailed specifications, pricing, and WhatsApp ordering integration. The website showcases trending products, best deals, and best sellers across categories (Motorola & POC Radio, License Free Radios, Accessories). Features include product variants with multiple options, direct WhatsApp order placement, newsletter subscription, and industry-specific solutions. The platform highlights key product features like 110 MIL Standard durability, widest coverage, 10-meter fall resistance, long-lasting battery, torch light, and IP67 immersion protection.',
      modules: [
        'E-commerce Product',
        'Product Catalog System',
        'Product Image Gallery',
        'Product Detail Pages',
        'Shopping Cart',
        'Trending Products Section',
        'Best Deals Section',
        'Best Sellers Section',
        'Location/Address Management',
        'Social Media Integration',
        'Product Specifications Display',
        'Mobile Responsive Design',
        'SEO Optimization',
        'Admin Panel'
      ],
      technologies: [ 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'WhatsApp API', 'SEO Tools'],
      demoLink: 'https://stewardtechnosolution.com/'
    },
    46: {
      title: 'BABYLON ENGINEERING',
      category: 'Website',
      image: '/images/bes.png',
      description: 'Babylon Engineering Solutions is a specialized engineering services firm offering high-precision structural steel detailing services for the construction and engineering industries. The company serves projects of all scales from small builds to large industrial facilities with a strong commitment to quality, accuracy, and client satisfaction. They are leaders in the engineering services market, providing comprehensive solutions including shop drawings, erection drawings, and 3D modelling services with industry-standard software and experienced professionals ensuring timely project delivery and quality assurance.',
      working: 'The platform showcases core engineering services with detailed information about shop drawings for fabrication and assembly, erection drawings for on-site construction, and 3D modelling for accurate visual project representations. Features include online quote request system with pop-up forms, WhatsApp integration for instant client communication, featured projects gallery showcasing completed works (School, Hall, Warehouse), client testimonials from industry professionals, and comprehensive service portfolio. The website emphasizes accuracy and quality assurance, experienced team capabilities, industry standard software usage, and timely project delivery commitments.',
      modules: [
        'Service Showcase System',
        'Shop Drawings Services',
        'Erection Drawings Services',
        '3D Modelling Services',
        'Quote Request System',
        'Quote Form Pop-up',
        'Project Portfolio Gallery',
        'Featured Projects Section',
        'WhatsApp Integration',
        'Email Integration',
        'Phone Integration',
        'Service Details Pages',
        'Mobile Responsive Design',
        'SEO Optimization'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'WhatsApp API', 'Email Services', 'SEO Tools'],
      demoLink: 'https://www.babylonegineeringsolutions.com/'
    },
    47: {
      title: 'Money Wind Solutions',
      category: 'Website',
      image: '/images/moneywind.png',
      description: 'MoneyWind Solutions is a global communication bridge specializing in customer support and call center solutions, serving 1281+ businesses with 15+ years of experience and 29.5K+ total customers served. The company provides comprehensive customer engagement solutions including experienced multilingual agents, 24/7 customer support across multiple time zones, and advanced communication technology. They deliver exceptional customer service to help businesses enhance customer satisfaction, drive growth, and maintain seamless global connections. Located in Noida, India, MoneyWind Solutions offers trusted services to industry leaders with quick & efficient solutions and tailored communication strategies.',
      working: 'The platform showcases six core service offerings: Call Center (efficient, scalable, customized customer support), Debt Collection (secure and ethical debt recovery), Inbound Requests (answering customer questions), Outbound Campaigns (proactive outreach for sales and retention), Chat and Email Support (multichannel 24/7 customer care), and Market Research and Analytics (data-driven strategies). Features include team profiles for key experts (QA Manager, System Administrator, Operation Manager), career opportunities section, blog management with financial insights and industry trends, employee testimonials, newsletter subscription system, and comprehensive contact information with email and phone integration.',
      modules: [
        'Service Showcase System',
        'Call Center Services',
        'Debt Collection Services',
        'Inbound Request Management',
        'Outbound Campaign Management',
        'Chat Support Integration',
        'Email Support System',
        'Market Research Module',
        'Analytics Dashboard',
        'Team Profile Management',
        'Expert Team Section',
        'Career Management System',
        'Job Application Portal',
        'Mobile Responsive Design',
        'SEO Optimization'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'SEO Tools'],
      demoLink: 'https://moneywind.in/'
    },
    48: {
      title: 'Damaru EXIM',
      category: 'Website',
      image: '/images/damaru.png',
      description: 'Damaru Exim Pvt Ltd is a premium carpet manufacturer and e-commerce platform specializing in custom-designed event carpets, wedding carpets, and non-woven carpets for grand celebrations, exhibitions, and outdoor gatherings. The company offers an extensive collection of over 108 carpet products across multiple categories including Fancy Carpets, JCPL 1000, JCPL 1200, JCPL 1400, JCPL 1600 series, Trending Carpets, and Bedsheet Sets. With luxurious designs, eco-friendly sustainable materials, and durable high-quality craftsmanship, Damaru Exim provides custom patterns, colors, and themes designed to add elegance and sophistication to any event space.',
      working: 'E-commerce platform with comprehensive product catalog management featuring 108+ carpet designs with multiple size variants (5 feet, 6 feet, 7 feet, 8 feet, 9 feet, 10 feet). The website showcases trending carpet designs, featured products, fancy carpets, and best seller collections with detailed product pages. Features include product variant selection system, product categories filtering, customer testimonials from satisfied buyers (Lala Lajpat Rai, Anuj Sharma, Nidhi Gaur), enquiry form system, newsletter subscription, secure payment processing with all cards accepted, shipping services, 24/7 online technical support, and social media integration (Facebook, Instagram). Contact: +91 9825423707, contact@damaruexim.com.',
      modules: [
        'E-commerce Product Management',
        'Product Variants Management',
        'Size Selection System (5-10 feet)',
        'Product Image Gallery',
        'Product Details Pages',
        'Secure Payment System',
        'Order Management',
        'Email Integration',
        'Phone Integration',
        'Social Media Integration',
        'Mobile Responsive Design',
        'SEO Optimization'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Payment Gateway', 'SEO Tools'],
      demoLink: 'https://damaruexim.com/'
    },
    49: {
      title: 'CareerInfra Education',
      category: 'LMS Software',
      image: '/images/careerinfra.png',
      description: 'CareerInfra is a contemporary educational platform using artificial intelligence and machine learning algorithms for better end user experience and efficacy, specializing in study abroad consultancy services. The platform provides comprehensive study abroad solutions covering 1,000+ universities, 2,000+ courses across 40+ countries including USA, UK, Canada, Australia, Germany, France, Italy, Spain, Singapore, Sweden, Norway, Finland, Austria, Ireland, New Zealand, and MBBS programs in Nepal, Italy, Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan, and Russia.',
      working: 'Educational consulting platform offering complete study abroad journey management from university shortlisting to visa approval. Core services include Universities Shortlisting (matching universities to academic, financial, and personal preferences), Application Submissions, Test Preparation (IELTS, SAT, GMAT), Career Pathway Guidance, Visa Support, Education Loan Assistance, and Immigration & Work Permits. Features include country-specific program information for Engineering & Management and MBBS abroad programs, FAQ section answering common queries, WhatsApp integration for instant communication (+91 8982002077), contact forms for enquiries, gallery section, and social media integration (Facebook, Instagram, LinkedIn, YouTube). Contact: info@careerinfraedu.in.',
      modules: [
        'University Shortlisting System',
        'Application Management',
        'Student Profile Management',
        'Course Search & Filter',
        'Country-wise Programs',
        'Course Database (2000+ courses)',
        'Email Integration',
        'Phone Integration',
        'Mobile Responsive Design',
        'SEO Optimization',
        'AI/ML Algorithms Integration'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Email Services', 'SEO Tools'],
      demoLink: 'https://careerinfraedu.in/'
    },
    50: {
      title: 'DLS Export & Import',
      category: 'Website',
      image: '/images/dls.png',
      description: 'DLS Import Export is a comprehensive e-commerce platform offering premium quality export products from India with worldwide delivery. The company specializes in multiple sectors including Complete Packaging Solutions (Plastic/Flexible Packaging/VCI Films, Paper/Foil/Laminates/Cartons), Civil/MEP/EPC/Interior/Turnkey Solutions (Construction Services, Infrastructure, Roads & Highways, Bridges & Flyovers, Industrial Construction). DLS offers free shipping on orders over 25.5cr with 100% secure payment.',
      working: 'E-commerce platform with extensive product catalog management across diverse categories. Features include category-wise product organization (Packaging & Containers, Civil/MEP/EPC, AI/Software/Technology, Interior Design, Healthy Snacks), product listings with HSN/SAC codes, competitive pricing for bulk orders, product search and filtering by categories (Best Products, Popular, New Arrivals, Top Rated), shopping cart system, secure payment processing, WhatsApp integration for instant customer support (+91 8055385288, +91 7219047920), customer support 24/7, bulk packaging options for international shipments, and promotional offers (20% off on shopping, instant cashback). Contact: sales@dlsimportexport.in, ceo@dlsimportexport.in.',
      modules: [
        'E-commerce Product Management',
        'Product Catalog System',
        'Category Management',
        'Multi-Sector Product Database',
        'HSN/SAC Code Management',
        'Product Search & Filter',
        'Shopping Cart System',
        'Secure Payment Gateway',
        'Bulk Order Management',
        'International Shipping Module',
        'Free Shipping Calculator',
        'Pricing Management',
        'WhatsApp Integration',
        'Email Integration'
      ],
      technologies: ['Node.js', 'React.js', 'MongoDB', 'JavaScript','Payment Gateway', 'SEO Tools'],
      demoLink: 'https://dlsimportexport.in/'
    },
    51: {
      title: 'Caloriz Tracker',
      category: 'Mobile Application',
      image: '/images/caloriz.png',
      description: 'Caloriz Tracker is a comprehensive health and fitness mobile application designed to help users track their daily calorie intake, monitor nutrition, and achieve their fitness goals. The app features an extensive food database, barcode scanning for easy food logging, personalized meal planning, and detailed nutritional analysis. With its user-friendly interface and smart tracking capabilities, Caloriz makes healthy eating and weight management simple and effective.',
      working: 'Users start by setting up their profile with personal information, fitness goals, and dietary preferences. The app calculates daily calorie targets based on their goals (weight loss, gain, or maintenance). Users log their meals by searching the extensive food database, scanning barcodes, or using the quick-add feature for common foods. The app automatically calculates nutritional values including calories, proteins, carbs, fats, vitamins, and minerals. Progress is tracked through visual charts and reports. The app sends smart reminders for meal logging and water intake. Users can create custom recipes and meal plans. The app also integrates with fitness trackers to monitor calories burned during exercise.',
      modules: [
        'Food Database & Search',
        'Barcode Scanner',
        'Nutrition Tracking',
        'Calorie Calculator',
        'Meal Planning',
        'Progress Analytics',
        'Custom Recipe Creator',
        'Water Intake Tracker',
        'Exercise Integration',
        'Goal Setting & Monitoring',
        'Daily/Weekly Reports',
        'Smart Reminders'
      ],
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Food API', 'Barcode Scanner API'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.caloriz&hl=en_IN'
    },
    52: {
      title: 'Voice of Roads',
      category: 'Mobile Application',
      image: '/images/sadakasur.png',
      description: 'Voice of Roads (Sadak Asur) is an innovative mobile application designed to address road infrastructure issues and traffic problems through citizen participation. The app empowers users to report road damages, traffic violations, accidents, and other road-related issues directly to the concerned authorities. With features like real-time reporting, GPS location tracking, photo/video evidence capture, and direct communication with municipal authorities, Voice of Roads serves as a bridge between citizens and government for better road management and traffic safety.',
      working: 'Users can quickly report road issues by taking photos or videos of the problem area. The app automatically captures GPS coordinates and timestamp for accurate location tracking. Users categorize the issue type (potholes, traffic signals, accidents, violations, etc.) and add detailed descriptions. The app routes reports to the appropriate local authorities based on location. Users receive updates on the status of their reports and can track resolution progress. The app includes a community feature where users can upvote similar issues in their area. Authorities can respond directly through the app and mark issues as resolved. The app also provides traffic alerts and road condition updates to the community.',
      modules: [
        'Issue Reporting System',
        'GPS Location Tracking',
        'Photo/Video Capture',
        'Category Management',
        'Authority Routing',
        'Status Tracking',
        'Community Voting',
        'Traffic Alerts',
        'Authority Dashboard',
        'Real-time Notifications',
        'Issue Analytics',
        'User Verification'
      ],
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Cloud Storage', 'Push Notifications'],
      demoLink: 'https://play.google.com/store/apps/details?id=com.bhoomitechzone.sadakasur&hl=en_IN'
    },
    53: {
      title: 'Vision Help',
      category: 'Custom Software',
      image: '/images/visionhelp.png',
      description: 'Vision Help is a comprehensive welfare and NGO management platform designed to streamline operations for non-profit organizations and social welfare agencies. The platform facilitates efficient management of beneficiaries, donations, volunteers, programs, and events while ensuring transparency and accountability. With features like donor management, beneficiary tracking, volunteer coordination, and detailed reporting, Vision Help empowers organizations to maximize their social impact and reach more people in need.',
      working: 'Organizations register and create their profiles with mission, vision, and program details. The platform allows them to create and manage various welfare programs and track beneficiary enrollment. Donors can browse verified organizations, view program details, and make secure donations online. The system tracks donation utilization and provides transparency reports to donors. Volunteer management features help coordinate community service activities. Beneficiaries can apply for programs, track their status, and receive updates. The platform generates comprehensive reports for compliance and impact assessment. Integration with payment gateways ensures secure financial transactions. The system also includes event management for fundraising activities and awareness campaigns.',
      modules: [
        'Organization Profile Management',
        'Program Creation & Management',
        'Beneficiary Registration & Tracking',
        'Donor Management System',
        'Online Donation Processing',
        'Volunteer Coordination',
        'Financial Tracking & Reporting',
        'Document Management',
        'Event Management',
        'Impact Analytics',
        'Compliance Reporting',
        'Communication Tools'
      ],
      technologies: ['React.js', 'Python', 'MongoDB', 'Payment Gateway', 'AWS Cloud', 'Email Services'],
      demoLink: 'https://visionhelpwelfare.in/'
    },
    54: {
      title: 'IT-WINGS Webtech',
      category: 'CRM Software',
      image: '/images/itwings.png',
      description: 'IT-WINGS Webtech is a comprehensive Customer Relationship Management (CRM) system designed specifically for IT service companies and web development agencies. The platform streamlines client management, project tracking, service delivery, and business operations. With features like lead management, project lifecycle tracking, resource allocation, billing management, and client communication tools, IT-WINGS empowers IT companies to deliver exceptional service while maximizing operational efficiency and client satisfaction.',
      working: 'The system starts with lead capture and qualification through various channels. Prospects are automatically assigned to sales teams based on criteria. The CRM tracks the entire sales pipeline from initial contact to deal closure. Once a client is onboarded, projects are created with detailed scope, timelines, and resource requirements. Team members are assigned based on skills and availability. The system tracks project progress, milestones, and deliverables in real-time. Client communication is centralized with automated notifications and updates. Billing is automated based on project completion or time tracking. Comprehensive reporting provides insights into sales performance, project profitability, and client satisfaction metrics.',
      modules: [
        'Lead Management & Qualification',
        'Sales Pipeline Tracking',
        'Client Onboarding System',
        'Project Management & Tracking',
        'Resource Allocation',
        'Time Tracking & Billing',
        'Client Communication Portal',
        'Document Management',
        'Automated Invoicing',
        'Performance Analytics',
        'Service Delivery Tracking',
        'Client Feedback System'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX', 'Payment Integration'],
      demoLink: 'https://crm.aivspa.org/admin/'
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
                <svg className={styles.linkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Demo Link</span>
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
