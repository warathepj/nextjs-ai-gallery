'use client';

import { useCallback } from 'react';

export default function ScrollToTopButton() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button onClick={scrollToTop}>
      Scroll to Top
    </button>
  );
}