import { useScroll, useTransform } from "framer-motion";

export function useScrollParallax(offset: number = 50) {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, offset]);
}
