"use client";

import Image from "next/image";
import Button from "./button";
import Reveal from "./reveal";
import { toast } from "sonner";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { emailAddress } from "@/constants";

export default function Connection() {
  return (
    <div id="contact" className="relative w-full pt-52 sm:pt-20">
      <img
        src="/images/dexterity-wave.svg"
        className="absolute left-0 top-0 w-full sm:hidden"
      />
      <div className="flex justify-center">
        <div className="relative">
          <h1 className="text-center font-main text-7xl leading-[90px] text-secondary-700 lg:text-[65px] lg:leading-tight sm:text-5xl sm:leading-[1.2]">
            <Reveal direction="down">
              <span className="block">Thanks for stopping by!</span>
            </Reveal>
            <Reveal direction="down">
              <span className="block">Stay connected</span>
            </Reveal>
          </h1>

          <Image
            src="/images/smiley.svg"
            alt="thankyou"
            width={50}
            height={50}
            className="absolute -top-[15%] right-0 animate-float"
          />

          <Reveal direction="down" className="mt-8 text-center">
            <div className="flex justify-center gap-4 flex-wrap">
              <CopyToClipboard
                text={emailAddress}
                onCopy={() => toast("Email copied")}
              >
                <Button>Get in Touch</Button>
              </CopyToClipboard>
              <Button variant="ghost">
                <a
                  className="resume-button"
                  href="/tejas_sharma_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download résumé
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
