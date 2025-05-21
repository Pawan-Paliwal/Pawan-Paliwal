import Image from "next/image";
import Logo from "./logo";
import Divider from "./divider";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="container pt-16 md:px-4 sm:px-2">
      <div className="flex items-center justify-between sm:flex-col">
        <div className="sm:mb-8">
          <Image src="/images/logo.png" alt="logo" width={176} height={45} />
        </div>
        <SocialIcons />
      </div>
      <div className="py-10">
        <Divider />
      </div>
      <p className="pb-8 text-center font-inter text-sm text-secondary-400">
        Code and Design – Me
      </p>
    </footer>
  );
}

type SocialIconsTypes = {
  className?: string;
};

export function SocialIcons({ className }: SocialIconsTypes) {
  return (
    <div className={cn("flex space-x-4", className)}>
      <a href="https://github.com/Pawan-Paliwal" target="_blank" className="hover:translate-x-1 transition-all">
        <Image src="/images/github.svg" alt="GitHub" width={20} height={20} />
      </a>
    </div>
  );
}
