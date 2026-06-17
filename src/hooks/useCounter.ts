import { useState, useEffect } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  startOnMount?: boolean;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  startOnMount = true,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount && !isStarted) return;
    if (end === 0) return;

    const startTime = performance.now();
    const difference = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + difference * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration, startOnMount, isStarted]);

  const startCount = () => setIsStarted(true);

  return { count, startCount };
}

export function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, isInView };
}
