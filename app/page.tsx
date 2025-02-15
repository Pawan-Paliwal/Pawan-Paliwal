"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Divider from "@/components/divider";
import Dexterity from "@/components/dexterity";
import Projects from "@/components/projects";
import Connection from "@/components/connection";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import PreLoader from "@/components/pre-loader";
import SecondaryNav from "@/components/secondary-nav";
import SmoothScroll from "@/components/smooth-scroll-provider";
import Preloader from "@/context/preloader";

export default function Home() {
  return (
    <>
      <Preloader>
        <SmoothScroll>
          <main>
            <PreLoader />
            <SecondaryNav />
            <Navbar />
            <Hero />
            <Divider className="lg:mt-16" />
            <About />
            <Dexterity />
            <Projects />
            <Connection />
            <Footer />
            <ScrollToTopButton />
          </main>
        </SmoothScroll>
      </Preloader>
    </>
  );
}
