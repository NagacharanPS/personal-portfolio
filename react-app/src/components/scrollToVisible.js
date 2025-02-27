import { useEffect } from "react";

function ScrollToVisible({ sectionRef, section, onVisibilityChange }) {
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(section, entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [sectionRef.current, section, onVisibilityChange]);

  return null;
}

export default ScrollToVisible;
