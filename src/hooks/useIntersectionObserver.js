import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenSeen) {
        setIsIntersecting(true);
        setHasBeenSeen(true);
      }
    }, {
      threshold: 0.3,
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasBeenSeen, options]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;