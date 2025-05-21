"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js

type MainLogoSvgProps = {
  hidePreloader: () => void;
};

const MainLogoSvg = ({ hidePreloader }: MainLogoSvgProps) => {
  // Define the animation variants
  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Moves the logo upwards initially
    },
    visible: {
      opacity: 1,
      y: 0, // Moves the logo to its original position
      transition: {
        duration: 1, // Animation duration
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 50, // Moves the logo downwards when exiting
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={logoVariants} // Attach animation variants
      initial="hidden" // Initial animation state
      animate="visible" // Animation on mount
      exit="exit" // Animation on unmount
      onAnimationComplete={hidePreloader} // Call hidePreloader once animation is complete
    >
      <Image src="/images/logo.png" alt="main-logo" width={170} height={44} />
    </motion.div>
  );
};

export default MainLogoSvg;