// src/hooks/usePreserveScroll.js
import { useEffect, useRef } from 'react';

export default function usePreserveScroll() {
  const scrollRatio = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRatio.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const handleResize = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const adjustedPosition = Math.min(scrollRatio.current * maxScroll, maxScroll);
      window.scrollTo({ top: adjustedPosition, behavior: 'auto' });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initialize scroll ratio on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}