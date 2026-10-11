import { useEffect, useRef, useState } from "react";


/**
 * This file is use for animation html object when user scroll and html element show up.
 * @param {*} param0 
 * @returns 
 */
const RevealOnScroll = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
        else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const initialTransform = {
    fadeUp: "translateY(40px)",
  }[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;