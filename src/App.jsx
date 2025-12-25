import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage'
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage'
import WebsiteDesignPage from './pages/WebsiteDesignPage'
import DigitalMarketingPage from './pages/DigitalMarketingPage'
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage'
import ContentMarketingPage from './pages/ContentMarketingPage'
import SEOOptimizationPage from './pages/SEOOptimizationPage'
import ITConsultingPage from './pages/ITConsultingPage'
import SupportPage from './pages/SupportPage'
import AppMaintenancePage from './pages/AppMaintenancePage'
import WebMaintenancePage from './pages/WebMaintenancePage'
import CRMSystemsPage from './pages/CRMSystemsPage'
import ERPSolutionsPage from './pages/ERPSolutionsPage'
import EcommercePlatformPage from './pages/EcommercePlatformPage'
import InventoryPage from './pages/InventoryPage'
import HRMSoftwarePage from './pages/HRMSoftwarePage'
import LMSSoftwarePage from './pages/LMSSoftwarePage'
import BillingSoftwarePage from './pages/BillingSoftwarePage'
import WebApplicationPage from './pages/WebApplicationPage'
import FinTechPage from './pages/FinTechPage'
import EduTechPage from './pages/EduTechPage'
import HealthcarePage from './pages/HealthcarePage'
import RealEstatePage from './pages/RealEstatePage'
import './index.css'

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
        <Route path="/web-applications" element={<WebApplicationPage key="webapp-page" />} />
        <Route path="/fintech" element={<FinTechPage key="fintech-page" />} />
        <Route path="/edutech" element={<EduTechPage key="edutech-page" />} />
        <Route path="/healthcare" element={<HealthcarePage key="healthcare-page" />} />
        <Route path="/realestate" element={<RealEstatePage key="realestate-page" />} />
        <Route path="/contact" element={<ContactPage key="contact-page" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
