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
        <Route path="/contact" element={<ContactPage key="contact-page" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
