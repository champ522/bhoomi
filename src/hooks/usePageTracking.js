import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
      console.log("Pixel fired for:", location.pathname);
    }
  }, [location]);
};

export default usePageTracking;