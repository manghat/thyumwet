import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode, FC } from "react";
import Menu from "@/components/ui/menu";
import { Particles } from "@/components/particles";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thy Umwelt",
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
        </Providers>
      </body>
      {modal}
    </html>
  );
};

export default RootLayout;
