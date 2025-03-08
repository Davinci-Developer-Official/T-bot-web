"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-row w-full">
        <label
          className="h-[50px] bg-white w-[10%] pt-[10px] pl-1 font-bold text-black"
          htmlFor="T-bot"
        >
          T-bot
        </label>
        <nav className="h-[50px] w-[90%] bg-white justify-center flex flex-row p-1">
          <Link className="w-fit p-2 bg-gray-10 text-black ml-1 rounded-md hover:text-blue-400 cursor-pointer" href="/">
            Home
          </Link>
          <Link className="w-fit p-2 bg-gray-10 text-black ml-1 rounded-md hover:text-blue-400 cursor-pointer" href="/subscriptions">
            subscription
          </Link>
          <Link className="w-fit p-2 bg-gray-10 text-black ml-1 rounded-md hover:text-blue-400 cursor-pointer" href="/AboutUs">
            About Us
          </Link>
          <Link className="w-fit p-2 bg-gray-10 text-black ml-1 rounded-md hover:text-blue-400 cursor-pointer" href="">
            Download
          </Link>
          <Link className="w-fit p-2 bg-gray-10 text-black ml-1 rounded-md hover:text-blue-400 cursor-pointer" href="">
            Documentation
          </Link>
          <Link className="w-fit p-2 bg-gray-10 text-black ml-1 rounded-md hover:text-blue-400 cursor-pointer" href="">
            Calculator
          </Link>
        </nav>
      </div>

      {/* Page Transition Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
