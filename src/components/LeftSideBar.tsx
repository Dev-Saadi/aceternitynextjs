"use client";

import {
  Home,
  Server,
  Wifi,
  Rocket,
  Cloud,
  Menu,
  X,
  ContactRound,
  NotebookTabs,
  UsersRound,
  CircleFadingPlus,
  User,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

const LeftSideBar: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar for large screens */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gray-200 w-64 flex-shrink-0 p-6 hidden lg:flex flex-col h-screen"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <Menu className="h-8 w-8" />
        </button>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed top-0 left-0 h-full bg-gray-200 w-64 p-6 flex flex-col z-40"
            >
              <div className="mb-8 flex justify-end">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-950 hover:text-white focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <SidebarContent />
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {children}
      </motion.main>
    </div>
  );
};

const SidebarContent = () => (
  <>
    <div className="flex flex-col justify-between flex-1 h-full">
      {/* Logo */}
      <div>
        <div className="flex gap-1 mb-6">
          <Image
            src="/images/logo.png"
            className="w-8 rounded-md"
            width={40}
            height={40}
            alt="logo"
          />
          <Link href="/" className="text-lg font-bold text-stone-900">
            Always<span className="font-medium">OnNetwork</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
              >
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/with-sidebar/contact"
                className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
              >
                <ContactRound className="mr-2 h-5 w-5" />
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/with-sidebar/about"
                className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
              >
                <NotebookTabs className="mr-2 h-5 w-5" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/with-sidebar/teams"
                className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
              >
                <UsersRound className="mr-2 h-5 w-5" />
                Our Team
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-2 pt-6">
        <Link href="/Loginpage">
          <button className="flex items-center gap-2 rounded-lg shadow bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:text-black hover:bg-gray-300 transition">
            <User size={18} />
            Login
          </button>
        </Link>
        <Link href="#">
          <button className="flex items-center gap-2 rounded-lg shadow bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:text-black hover:bg-gray-300 transition">
            <CircleFadingPlus size={18} />
            BTCL
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default LeftSideBar;
