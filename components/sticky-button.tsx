"use client";

import Button from "./button";
import { useScroll, useAnimationControls, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";

export const buttonUpSticky = {
  hide: {
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
    y: 100,
    x: "-50%",
  },
  show: {
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
    y: -30,
    x: "-50%",
  },
};

export default function StickyButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.03) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  }, []);

  const MotionButtom = motion(Button);
  return (
    <motion.div
      initial="hide"
      animate={controls}
      variants={buttonUpSticky}
      className="fixed -bottom-0 left-1/2 z-[200] "
    >
      <MotionButtom>
        <a
          className="resume-button"
          href="/tejas_sharma_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download résumé
        </a>
      </MotionButtom>
    </motion.div>
  );
}
