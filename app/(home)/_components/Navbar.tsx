"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SCROLL_THRESHOLD = 24;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const savedScrollY = useRef(0);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const y = savedScrollY.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, y);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      className={`sticky top-0 left-0 right-0 z-50 flex justify-center items-center transition-all duration-300 ease-out ${
        isScrolled
          ? "py-3 bg-white/95 shadow-[0_2px_16px_rgba(37,50,75,0.08)] backdrop-blur-sm"
          : "py-[21px] bg-transparent"
      }`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-[1192px] w-[95%] mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center gap-14 ">
          <Link href="/" className="flex items-center gap-3 cursor-pointer ">
            <Image
              src="/footer-image/footer-logo.svg"
              alt="Footer Logo"
              width={32}
              height={32}
            />
            <span className="text-[#25324B] font-RedHat text-[24px] font-semibold leading-[150%] tracking-[-0.01em]">
              QuickHire
            </span>
          </Link>

         {/* Nav Links (Hidden on small mobile, visible on tablet/desktop) */}
          <div className="hidden md:flex justify-center items-center gap-6 mt-1">
            <Link href="/jobs" className="text-[#515B6F] text-[16px] font-medium font-Epilogue hover:text-[#4640DE] transition-colors leading-[160%]">
              Find Jobs
            </Link>
            <Link href="/admin" className="text-[#515B6F] text-[16px] font-medium font-Epilogue hover:text-[#4640DE] transition-colors leading-[160%]">
              Admin
            </Link>
          </div>
        </div>

        {/* Right Section: Auth Buttons & Mobile Menu */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-5 md:gap-6">
            <Link href="#" className="text-[#4640DE] text-[16px] font-medium font-Epilogue hover:text-[#3b36be] transition-colors">
              Login
            </Link>
            
            {/* Vertical Divider */}
            <div className="hidden sm:block w-px h-[48px] bg-[#D6DDEB]"></div>
            
            <button className="bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-[#FFFFFF] text-[16px] font-medium font-Epilogue py-2.5 px-6 rounded-none">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu (Visible only on mobile) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden w-[46px] h-[46px] rounded-full border border-[#D6DDEB] flex items-center justify-center bg-transparent hover:bg-gray-50 transition-colors z-60"
          >
            {isOpen ? (
              <X className="text-[#25324B]" size={24} />
            ) : (
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H16" stroke="#25324B" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M2 7H18" stroke="#25324B" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M2 12H10" stroke="#25324B" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>

        </div>

      </div>

      {/* Mobile menu: rendered in portal so it's not affected by sticky/scroll */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  role="button"
                  tabIndex={0}
                  aria-label="Close menu"
                  className="fixed inset-0 bg-black/40 z-9998 md:hidden touch-none"
                  style={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
                />
                <motion.div
                  className="fixed top-0 right-0 h-full w-[min(280px,85vw)] bg-white shadow-xl z-9999 md:hidden flex flex-col pt-20 px-6 overscroll-contain"
                  style={{ maxHeight: "100vh" }}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-[#D6DDEB] text-[#25324B] hover:bg-[#F8F8FD]"
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </button>
                  <nav className="flex flex-col gap-6">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/jobs"
                      className="text-[#515B6F] text-[16px] font-medium font-Epilogue hover:text-[#4640DE] transition-colors"
                    >
                      Find Jobs
                    </Link>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/admin"
                      className="text-[#515B6F] text-[16px] font-medium font-Epilogue hover:text-[#4640DE] transition-colors"
                    >
                      Admin
                    </Link>
                    <div className="h-px bg-[#D6DDEB] my-1" />
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="#"
                      className="text-[#4640DE] text-[16px] font-semibold font-Epilogue hover:text-[#3b36be] transition-colors"
                    >
                      Login
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-[#4640DE] hover:bg-[#3b36be] transition-colors text-white text-[16px] font-medium font-Epilogue py-3 px-6 rounded-md"
                    >
                      Sign Up
                    </button>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.nav>
  );
};

export default Navbar;
