import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '../utilities/scrollToElement';

export default function useScrollToHash() {
  const location = useLocation();
  const scrollTimeout = useRef(null);
  const prevHash = useRef('');

  useEffect(() => {
    if (location.hash && location.hash !== prevHash.current) {
      const targetId = location.hash.replace('#', '');
      const attemptScroll = (attempts = 10) => {
        const section = document.getElementById(targetId);
        if (section) {
          scrollToElement(targetId);
          clearTimeout(scrollTimeout.current);
        } else if (attempts > 0) {
          scrollTimeout.current = setTimeout(() => attemptScroll(attempts - 1), 100);
        }
      };
      attemptScroll();
      prevHash.current = location.hash;
    }
    return () => clearTimeout(scrollTimeout.current);
  }, [location.pathname, location.hash]);
}