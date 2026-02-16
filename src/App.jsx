import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'

// Lazy load all pages for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage'))
const MobileAppDevelopmentPage = lazy(() => import('./pages/MobileAppDevelopmentPage'))
const SoftwareDevelopmentPage = lazy(() => import('./pages/SoftwareDevelopmentPage'))
const WebsiteDesignPage = lazy(() => import('./pages/WebsiteDesignPage'))
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage'))
const SocialMediaMarketingPage = lazy(() => import('./pages/SocialMediaMarketingPage'))
const ContentMarketingPage = lazy(() => import('./pages/ContentMarketingPage'))
const SEOOptimizationPage = lazy(() => import('./pages/SEOOptimizationPage'))
const ITConsultingPage = lazy(() => import('./pages/ITConsultingPage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))
const AppMaintenancePage = lazy(() => import('./pages/AppMaintenancePage'))
const WebMaintenancePage = lazy(() => import('./pages/WebMaintenancePage'))
const CRMSystemsPage = lazy(() => import('./pages/CRMSystemsPage'))
const ERPSolutionsPage = lazy(() => import('./pages/ERPSolutionsPage'))
const EcommercePlatformPage = lazy(() => import('./pages/EcommercePlatformPage'))
const InventoryPage = lazy(() => import('./pages/InventoryPage'))
const HRMSoftwarePage = lazy(() => import('./pages/HRMSoftwarePage'))
const LMSSoftwarePage = lazy(() => import('./pages/LMSSoftwarePage'))
const BillingSoftwarePage = lazy(() => import('./pages/BillingSoftwarePage'))
const WebApplicationPage = lazy(() => import('./pages/WebApplicationPage'))
const FinTechPage = lazy(() => import('./pages/FinTechPage'))
const EduTechPage = lazy(() => import('./pages/EduTechPage'))
const HealthcarePage = lazy(() => import('./pages/HealthcarePage'))
const RealEstatePage = lazy(() => import('./pages/RealEstatePage'))
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage'))
const LogisticsPage = lazy(() => import('./pages/LogisticsPage'))
const LegalServicePage = lazy(() => import('./pages/LegalServicePage'))
const ConsultingFirmsPage = lazy(() => import('./pages/ConsultingFirmsPage'))
const MarketingAgenciesPage = lazy(() => import('./pages/MarketingAgenciesPage'))
const NonProfitPage = lazy(() => import('./pages/NonProfitPage'))
const StartupPage = lazy(() => import('./pages/StartupPage'))
const RetailEcommercePage = lazy(() => import('./pages/RetailEcommercePage'))
const ScheduleMeetingPage = lazy(() => import('./pages/ScheduleMeetingPage'))
const OurClientsPage = lazy(() => import('./pages/OurClientsPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'))
const CareerPage = lazy(() => import('./pages/CareerPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'))
// LMS Components
const LMSHome = lazy(() => import('./lms/pages/LMSHome'))
const CoursePage = lazy(() => import('./lms/pages/CoursePage'))
const LessonPage = lazy(() => import('./lms/pages/LessonPage'))

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#28a745'
  }}>
    <div>Loading...</div>
  </div>
)

// ScrollToTop component to handle route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple scroll attempts to ensure it works
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Force scroll after a small delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 10);

    // Additional delay for heavy content
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 200);

    // Final ensure scroll
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 300);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home key="home-page" />} />
          <Route path="/about" element={<AboutPage key="about-page" />} />
          <Route path="/services" element={<ServicesPage key="services-page" />} />
          <Route path="/web-development" element={<WebDevelopmentPage key="webdev-page" />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage key="appdev-page" />} />
          <Route path="/software-development" element={<SoftwareDevelopmentPage key="softwaredev-page" />} />
          <Route path="/website-design" element={<WebsiteDesignPage key="websitedesign-page" />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage key="digitalmarketing-page" />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketingPage key="socialmedia-page" />} />
          <Route path="/content-marketing" element={<ContentMarketingPage key="contentmarketing-page" />} />
          <Route path="/seo-optimization" element={<SEOOptimizationPage key="seooptimization-page" />} />
          <Route path="/it-consulting" element={<ITConsultingPage key="itconsulting-page" />} />
          <Route path="/support" element={<SupportPage key="support-page" />} />
          <Route path="/app-maintenance" element={<AppMaintenancePage key="appmaintenance-page" />} />
          <Route path="/web-maintenance" element={<WebMaintenancePage key="webmaintenance-page" />} />
          <Route path="/crm-systems" element={<CRMSystemsPage key="crmsystems-page" />} />
          <Route path="/erp-solutions" element={<ERPSolutionsPage key="erpsolutions-page" />} />
          <Route path="/ecommerce-platform" element={<EcommercePlatformPage key="ecommerce-page" />} />
          <Route path="/inventory-management" element={<InventoryPage key="inventory-page" />} />
          <Route path="/hrm-software" element={<HRMSoftwarePage key="hrm-page" />} />
          <Route path="/lms-software" element={<LMSSoftwarePage key="lms-page" />} />
          <Route path="/billing-software" element={<BillingSoftwarePage key="billing-page" />} />
          <Route path="/web-application" element={<WebApplicationPage key="webapp-page" />} />
          <Route path="/fintech" element={<FinTechPage key="fintech-page" />} />
          <Route path="/edutech" element={<EduTechPage key="edutech-page" />} />
          <Route path="/healthcare" element={<HealthcarePage key="healthcare-page" />} />
          <Route path="/realestate" element={<RealEstatePage key="realestate-page" />} />
          <Route path="/manufacturing" element={<ManufacturingPage key="manufacturing-page" />} />
          <Route path="/logistics" element={<LogisticsPage key="logistics-page" />} />
          <Route path="/legal-service" element={<LegalServicePage key="legal-page" />} />
          <Route path="/consulting-firms" element={<ConsultingFirmsPage key="consulting-page" />} />
          <Route path="/marketing-agencies" element={<MarketingAgenciesPage key="marketing-agencies-page" />} />
          <Route path="/non-profit" element={<NonProfitPage key="nonprofit-page" />} />
          <Route path="/startups" element={<StartupPage key="startups-page" />} />
          <Route path="/retail-ecommerce" element={<RetailEcommercePage key="retail-page" />} />
          <Route path="/schedule-meeting" element={<ScheduleMeetingPage key="schedule-page" />} />
          <Route path="/our-clients" element={<OurClientsPage key="clients-page" />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage key="project-detail-page" />} />
          <Route path="/technology" element={<TechnologyPage key="technology-page" />} />
          <Route path="/career" element={<CareerPage key="career-page" />} />
          <Route path="/blog" element={<BlogPage key="blog-page" />} />
          <Route path="/gallery" element={<GalleryPage key="gallery-page" />} />
          <Route path="/contact" element={<ContactPage key="contact-page" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage key="privacy-page" />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage key="terms-page" />} />
          {/* LMS Routes */}
          <Route path="/lms" element={<LMSHome key="lms-home" />} />
          <Route path="/lms/course/:courseId" element={<CoursePage key="course-page" />} />
          <Route path="/lms/course/:courseId/lesson/:lessonId" element={<LessonPage key="lesson-page" />} />
          <Route path="/lms/course/:courseId/exercise" element={<LessonPage key="exercise-page" />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
