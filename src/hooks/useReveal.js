import { useEffect, useRef } from 'react';

function useReveal(delayClass = '') {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayClass) {
            element.classList.add('visible', delayClass);
          } else {
            element.classList.add('visible');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delayClass]);

  return ref;
}

export default useReveal;