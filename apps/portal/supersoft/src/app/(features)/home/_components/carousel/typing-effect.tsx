"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Text } from "@mantine/core";
import { motion } from "framer-motion";

interface TypingEffectProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, [strings, typeSpeed, backSpeed, loop]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Text
        size="2xl"
        fw={900}
        className="text-primary-600 text-4xl md:text-3xl font-bold"
      >
        <span ref={typedRef} />
      </Text>
    </motion.div>
  );
};

export default TypingEffect;
