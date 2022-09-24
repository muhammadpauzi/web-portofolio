import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", href: "#home", current: false },
  { name: "About Me", href: "#about-me", current: false },
  { name: "My Skills", href: "#my-skills", current: false },
  { name: "My Works", href: "#my-works", current: false },
  { name: "Contact", href: "#contact-me", current: false },
];

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="py-8">
      <div className="mx-auto max-w-4xl flex items-center justify-between font-slab">
        <a
          href="#home"
          className="font-extrabold font-slab text-[#4630FF] text-2xl dark:text-white"
        >
          ZiiDev
        </a>

        <div className="block md:hidden">
          <div className="flex items-center justify-between gap-2">
            {showMobileNav ? (
              <button onClick={() => setShowMobileNav(false)}>
                <XMarkIcon
                  className="dark:text-white dark:text-opacity-70 dark:hover:text-opacity-100 transition-colors block h-7 w-7"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button onClick={() => setShowMobileNav(true)}>
                <Bars3Icon
                  className="dark:text-white dark:text-opacity-70 dark:hover:text-opacity-100 transition-colors block h-7 w-7"
                  aria-hidden="true"
                />
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-between gap-2">
            <ul className="flex items-center gap-x-6">
              {navigation.map((nav, i) => (
                <li key={i}>
                  <a
                    className="transition hover:text-[#4630FF] text-[.95em] hover:underline hover:underline-offset-4 dark:text-slate-300 dark:hover:text-slate-200"
                    href={nav.href}
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-8">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full block font-slab">
        <Transition
          as={Fragment}
          show={showMobileNav}
          enter="transform duration-200 transition ease-in-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="block md:hidden absolute top-0 left-0 w-full bg-white border border-slate-200 rounded-md p-7 mt-5 shadow-lg shadow-slate-200 text-center z-[9999] dark:bg-slate-700 dark:shadow-none dark:border-slate-800">
            <ul className="space-y-4">
              {navigation.map((nav, i) => (
                <li className="text-lg" key={i}>
                  <a
                    className="transition hover:text-[#4630FF] dark:text-slate-300 dark:hover:text-white hover:underline hover:underline-offset-4"
                    href={nav.href}
                    onClick={() => setShowMobileNav(false)}
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
