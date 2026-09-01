import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';

// ✅ ADD THIS IMPORT
import usePageTracking from './hooks/usePageTracking';

// Lazy load pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage'));
const MobileAppDevelopmentPage = lazy(() => import('./pages/MobileAppDevelopmentPage'));
const SoftwareDevelopmentPage = lazy(() => import('./pages/SoftwareDevelopmentPage'));
const WebsiteDesignPage = lazy(() => import('./pages/WebsiteDesignPage'));
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage'));
const SocialMediaMarketingPage = lazy(() => import('./pages/SocialMediaMarketingPage'));
const ContentMarketingPage = lazy(() => import('./pages/ContentMarketingPage'));
const SEOOptimizationPage = lazy(() => import('./pages/SEOOptimizationPage'));
const ITConsultingPage = lazy(() => import('./pages/ITConsultingPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const AppMaintenancePage = lazy(() => import('./pages/AppMaintenancePage'));
const WebMaintenancePage = lazy(() => import('./pages/WebMaintenancePage'));
const CRMSystemsPage = lazy(() => import('./pages/CRMSystemsPage'));
const ERPSolutionsPage = lazy(() => import('./pages/ERPSolutionsPage'));
const EcommercePlatformPage = lazy(() => import('./pages/EcommercePlatformPage'));
const InventoryPage = lazy(() => import('./pages/InventoryPage'));
const HRMSoftwarePage = lazy(() => import('./pages/HRMSoftwarePage'));
const LMSSoftwarePage = lazy(() => import('./pages/LMSSoftwarePage'));
const BillingSoftwarePage = lazy(() => import('./pages/BillingSoftwarePage'));
const WebApplicationPage = lazy(() => import('./pages/WebApplicationPage'));
const FinTechPage = lazy(() => import('./pages/FinTechPage'));
const EduTechPage = lazy(() => import('./pages/EduTechPage'));
const HealthcarePage = lazy(() => import('./pages/HealthcarePage'));
const RealEstatePage = lazy(() => import('./pages/RealEstatePage'));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage'));
const LogisticsPage = lazy(() => import('./pages/LogisticsPage'));
const LegalServicePage = lazy(() => import('./pages/LegalServicePage'));
const ConsultingFirmsPage = lazy(() => import('./pages/ConsultingFirmsPage'));
const MarketingAgenciesPage = lazy(() => import('./pages/MarketingAgenciesPage'));
const NonProfitPage = lazy(() => import('./pages/NonProfitPage'));
const StartupPage = lazy(() => import('./pages/StartupPage'));
const RetailEcommercePage = lazy(() => import('./pages/RetailEcommercePage'));
const ScheduleMeetingPage = lazy(() => import('./pages/ScheduleMeetingPage'));
const OurClientsPage = lazy(() => import('./pages/OurClientsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailsPage = lazy(() => import('./pages/BlogDetailsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));

// LMS Pages
const LMSHome = lazy(() => import('./lms/pages/LMSHome'));
const CoursePage = lazy(() => import('./lms/pages/CoursePage'));
const LessonPage = lazy(() => import('./lms/pages/LessonPage'));

// Loading UI
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#28a745'
  }}>
    Loading...
  </div>
);

// Scroll fix and page tracking wrapper
function AppContent() {
  const { pathname } = useLocation();

  // Page tracking (moved inside Router context)
  usePageTracking(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <main id="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/website-design" element={<WebsiteDesignPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/content-marketing" element={<ContentMarketingPage />} />
            <Route path="/seo-optimization" element={<SEOOptimizationPage />} />
            <Route path="/it-consulting" element={<ITConsultingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/app-maintenance" element={<AppMaintenancePage />} />
            <Route path="/web-maintenance" element={<WebMaintenancePage />} />
            <Route path="/crm-systems" element={<CRMSystemsPage />} />
            <Route path="/erp-solutions" element={<ERPSolutionsPage />} />
            <Route path="/ecommerce-platform" element={<EcommercePlatformPage />} />
            <Route path="/inventory-management" element={<InventoryPage />} />
            <Route path="/hrm-software" element={<HRMSoftwarePage />} />
            <Route path="/lms-software" element={<LMSSoftwarePage />} />
            <Route path="/billing-software" element={<BillingSoftwarePage />} />
            <Route path="/web-application" element={<WebApplicationPage />} />
            <Route path="/fintech" element={<FinTechPage />} />
            <Route path="/edutech" element={<EduTechPage />} />
            <Route path="/healthcare" element={<HealthcarePage />} />
            <Route path="/realestate" element={<RealEstatePage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/legal-service" element={<LegalServicePage />} />
            <Route path="/consulting-firms" element={<ConsultingFirmsPage />} />
            <Route path="/marketing-agencies" element={<MarketingAgenciesPage />} />
            <Route path="/non-profit" element={<NonProfitPage />} />
            <Route path="/startups" element={<StartupPage />} />
            <Route path="/retail-ecommerce" element={<RetailEcommercePage />} />
            <Route path="/schedule-meeting" element={<ScheduleMeetingPage />} />
            <Route path="/our-clients" element={<OurClientsPage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />

            {/* LMS */}
            <Route path="/lms" element={<LMSHome />} />
            <Route path="/lms/course/:courseId" element={<CoursePage />} />
            <Route path="/lms/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/lms/course/:courseId/exercise" element={<LessonPage />} />

          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;