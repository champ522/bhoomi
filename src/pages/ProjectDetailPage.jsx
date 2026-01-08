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
