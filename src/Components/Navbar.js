"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { PiCaretDoubleUpBold } from "react-icons/pi";
function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="w-[100%] h-20  flex justify-center items-center bg-[#474b8f] z-50 fixed top-0">
        <div className="flex justify-between items-center gap-40 text-[#00ff2a]">
          <Link href="/">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-[25px] font-extrabold">Thrill Seekers</h1>
              <h2 className="text-[10px] font-bold">
                explore all creations with us
              </h2>
            </div>
          </Link>
          <button
            className="md:hidden flex text-[30px] hover:text-[gold]"
            onClick={() => {
              setActive(!active);
            }}
          >
            <VscThreeBars />
          </button>
          <div className="hidden md:flex justify-between items-center gap-10 font-extrabold">
            <Link href="/">Countries</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Pick a tour</Link>
            <Link href="/">Reviews</Link>
            <Link href="/">Offers</Link>
          </div>
        </div>
        {/* Mobile nav*/}
        <AnimatePresence onExitComplete={() => setActive(false)}>
          {active && (
            <motion.div
              className="md:hidden fixed top-0 flex  flex-col justify-start items-center bg-black/90 w-[100%] h-screen text-[#fffffe] text-[20px] font-bold gap-10 p-4 z-40 "
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                staggerChildren: 0.4,
                ease: "easeInOut",
              }}
              exit={{ y: "-100vh" }}
            >
              <motion.div
                className="flex  flex-col justify-start items-center font-bold gap-[50px] p-4 mt-20 border-b-2 w-[300px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  staggerChildren: 0.4,
                  ease: "easeInOut",
                }}
              >
                <Link href="/" className="hover:text-[gold] duration-300">
                  Countries
                </Link>
                <Link href="/" className="hover:text-[gold] duration-300">
                  Blog
                </Link>
                <Link href="/" className="hover:text-[gold] duration-300">
                  Pick a tour
                </Link>
                <Link href="/" className="hover:text-[gold] duration-300">
                  Reviews
                </Link>
                <Link href="/" className="hover:text-[gold] duration-300 mb-8">
                  Offers
                </Link>
              </motion.div>

              <div className="flex justify-center items-end py-4 ">
                <button
                  className="text-[35px] text-[#27fcfc] hover:text-[red]"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <PiCaretDoubleUpBold />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;
