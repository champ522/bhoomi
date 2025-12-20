import { useState, useEffect, useRef } from 'react';

const useCounter = (endValue, duration = 5000, startAnimation = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    const startTime = performance.now();
    const startValue = 0;
    const change = endValue - startValue;

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      countRef.current = Math.floor(startValue + change * easeOutQuart);
      setCount(countRef.current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    rafRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [endValue, duration, startAnimation]);

  return count;
};

export default useCounter;