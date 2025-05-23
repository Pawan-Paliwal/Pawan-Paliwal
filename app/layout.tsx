import localFont from "next/font/local";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "../styles/global.css";
import "../styles/sooner.css";

// Main heading font
const fontMain = localFont({
  src: "../assets/AbrilFatface-Regular.ttf",
  display: "swap",
  variable: "--font-main",
});

// Secondary font
const inter = localFont({
  src: "../assets/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "pawan.dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontMain.variable} ${inter.variable} scrollbar-none`}
    >
      <body className="">
        <Toaster
          position="bottom-right"
          theme="dark"
          duration={1000}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: "bg-secondary-500 w-auto p-3 rounded-lg right-0",
              title: "text-white font-inter font-normal text-[16px]",
              description: "text-red-400",
              actionButton: "bg-zinc-400",
              cancelButton: "bg-orange-400",
              closeButton: "bg-lime-400",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
