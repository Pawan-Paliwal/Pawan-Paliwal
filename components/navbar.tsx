"use client";

import Button from "./button";
import Logo from "./logo";
import { Link } from "react-scroll";
import { toast } from "sonner";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { emailAddress } from "@/constants";
import { Variants, motion, useAnimationControls } from "framer-motion";
import { PreloaderContext, PreloaderContextProps } from "@/context/preloader";
import { useContext, useEffect } from "react";
import { cn } from "@/lib/utils";
import useDeviceDetection from "@/hooks/useDeviceDetection";

const navbarBarLinks = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Dexterity",
    href: "dexterity",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Socials",
    href: "contact",
  },
];

const navLinksVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0.3,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Navbar() {
  const { isLaptop, isMobile } = useDeviceDetection();
  const { isLoaded, navAnimComplete, toggleMenu, showMenu } = useContext(
    PreloaderContext,
  ) as PreloaderContextProps;

  const controls = useAnimationControls();
  const btnControls = useAnimationControls();
  const logoControls = useAnimationControls();
  const logoTextControls = useAnimationControls();

  useEffect(() => {
    const sequenceAnimation = async () => {
      if (!isMobile) {
        await logoControls.start("show");
      }
      await logoTextControls.start({
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      });
      if (!isLaptop) {
        await controls.start("visible");
      }
      await btnControls.start({ opacity: 1, y: 0 });
      navAnimComplete();
    };

    if (isLoaded) {
      sequenceAnimation();
    }
  }, [isLoaded]);

  return (
    <div className="absolute w-full">
      <nav className="container mt-4 flex items-center justify-between font-inter text-[16px] sm:p-4">
        {/* links */}
        <div
          className="relative z-[60] hidden w-1/3 cursor-pointer transition-colors lg:block"
          onClick={toggleMenu}
        >
          <button className="group relative">
            <motion.span
              initial={{}}
              animate={showMenu ? { opacity: 0, translateY: "-100%" } : ""}
              className={cn("relative inline-block")}
            >
              Menu
            </motion.span>
            <motion.span
              initial={{ opacity: 0, translateY: "100%" }}
              animate={showMenu ? { opacity: 1, translateY: 0 } : ""}
              className={cn(
                "opacity-1 absolute left-0 top-0 transition-colors",
                {
                  "text-primary-500": showMenu,
                },
              )}
            >
              Close
            </motion.span>
          </button>
        </div>
        <motion.ul
          variants={navLinksVariants}
          initial="hidden"
          animate={controls}
          className="flex w-1/3 gap-x-8 lg:hidden sm:w-1/2"
        >
          {navbarBarLinks.map((link, idx) => {
            return (
              <motion.li
                variants={navLinksVariants}
                key={idx}
                className="relative cursor-pointer rounded-lg text-secondary-700 before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-full before:translate-y-2 before:bg-secondary-700 before:opacity-0 before:transition-all before:duration-200 hover:before:translate-y-1 hover:before:opacity-100"
              >
                <Link to={link.href} smooth={true} duration={800}>
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* logo */}
        <div className="flex w-1/3 justify-center sm:hidden">
          <div className="w-44">
            <Logo
              logoControls={logoControls}
              logoTextControls={logoTextControls}
            />
          </div>
        </div>

        {/* contact button */}
        <div className="w-1/3 text-right sm:w-1/2">
          <motion.div 
            className="gap-4 flex justify-end"
            initial={{ opacity: 0, y: -10 }} animate={btnControls}>
            <CopyToClipboard
              text={emailAddress}
              onCopy={() => toast("Email copied")}
            >
              <Button variant="secondary">Get in touch</Button>
            </CopyToClipboard>

            <Button className="lg:hidden">
              <a
                className="resume-button"
                href="/tejas_sharma_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé
              </a>
            </Button>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}
