import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToHash() {
  const location = useLocation();
  const scrollTimeout = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const attemptScroll = () => {
        const section = document.getElementById(targetId);
        if (section) {
          const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
          const yOffset = -navbarHeight;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // Retry after a short delay if section not found
          scrollTimeout.current = setTimeout(attemptScroll, 100);
        }
      };
      attemptScroll();
    }
    return () => clearTimeout(scrollTimeout.current);
  }, [location]);
}