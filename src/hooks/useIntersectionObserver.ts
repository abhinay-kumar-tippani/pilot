import { useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement | null>(null);

  const observe = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      ref.current = node;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            node.classList.remove('visible');
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(node);
    },
    [threshold, rootMargin, triggerOnce]
  );

  return observe;
}
