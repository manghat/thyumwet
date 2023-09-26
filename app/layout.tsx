import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode, FC } from "react";
import Menu from "@/components/ui/menu";
import { Particles } from "@/components/particles";
import { Providers } from "@/lib/providers";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Thy Umwelt | %s ",
    default: "Thy Umwelt",
  },
  description: "A website by Ashwin Manghat",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}
const RootLayout: FC<RootLayoutProps> = ({ children, modal }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Menu />
          <Particles className="absolute inset-0 -z-10" />
          {children}
          <h2 className="text-center bottom-3 text-xs md:text-normal left-0 opacity-60 right-0 m-auto w-5/6 md:w-1/2  scroll-m-20 p-5 pt-10 text-md  tracking-tight transition-colors first:mt-0">
            by Ashwin Manghat
          </h2>
        </Providers>
        <GoogleAnalytics />
      </body>
      {modal}
    </html>
  );
};

export default RootLayout;
