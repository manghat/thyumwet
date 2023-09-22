"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AnimationWrapper = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0, ease: "easeInOut", staggerChildren: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
