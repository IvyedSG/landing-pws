import { useEffect, useRef, useState } from "react";
import { useInView, motion, animate } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
};

export const AnimatedCounter = ({ value, duration = 2 }: AnimatedCounterProps) => {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(nodeRef, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest)); // Actualiza el valor mostrado
        },
      });

      return () => controls.stop(); // Limpia la animación al desmontar
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.2 }}
    >
      {displayValue}
    </motion.span>
  );
};
