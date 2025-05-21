"use client";
import Image from "next/image";
import { AnimationControls } from "framer-motion";

type LogoProps = {
  logoControls: AnimationControls;
  logoTextControls: AnimationControls;
};

export default function Logo({ logoControls, logoTextControls }: LogoProps) {
  // If you're not using these controls yet, just leave them there for now.
  // You can later use them for animation if needed.

  return (
    <Image src="/images/logo.png" alt="main-logo" width={170} height={44} />
  );
}
