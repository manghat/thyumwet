"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import ThemeToggle from "./theme-toggle";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import MenuElements from "../../lib/menu-elements";

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // console.log("searchParams", params, searchParams);
  return (
    <header className={`inset-x-0 top-0 z-50 backdrop-blur-md `}>
      <nav
        className="flex items-center justify-between p-2.5 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="m-2.5 p-2">
            <p className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
              Thy Umwelt
            </p>
            <span className="sr-only">Thy Umwelt</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 p-2">
          <MenuElements className="text-sm font-semibold leading-6 box-shadow-lg" />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ModeToggle />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 backdrop-blur-2xl transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
                Thy Umwelt
              </p>
              <span className="sr-only">Thy Umwelt</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <MenuElements className="-mx-3 flex flex-col rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:outline-1" />
              </div>
              <div className="py-6">
                {/* <ThemeToggle /> */}
                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

// :TODO: Click does not close the menu need to fix this.
