"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  mobileMenuOpen?: Boolean;
  setMobileMenuOpen?: any;
};

export default function MenuElements({
  className,
  mobileMenuOpen,
  setMobileMenuOpen,
}: Props) {
  const pathname = usePathname();

  const navigation = [
    { name: "Photo-Series", href: "/photo-series" },
    { name: "Photography", href: "/photography" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];
  return (
    <ul className={`${className} flex justify-center`}>
      {navigation.map((item) => (
        // <Button
        //   asChild
        //   key={item.name}
        //   variant="link"
        //   className="hover:scale-125 hover:font-bold"
        // >
        <li key={item.name}>
          <Link
            onClick={() => (mobileMenuOpen ? setMobileMenuOpen(false) : "")}
            href={item.href}
            // className="relative px-4"
            // key={item.name}
            className={` ${
              pathname === item.href ? "underline font-bold" : ""
            } leading-8 px-2 md:px-4 py-2 items-center underline-offset-8 break-normal inline-block hover:underline break-keep ${className}`}
          >
            {pathname === item.href && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 top-full block z-90 h-[1px] w-full bg-black dark:bg-white "
              ></motion.span>
            )}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
