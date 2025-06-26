"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MenuIcon,
  XIcon,
  ChevronDown,
  CircleFadingPlus,
  User,
} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setCompanyDropdownOpen(false); // Close dropdown when toggling menu
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCompanyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "with-sidebar/contact" },
    { title: "About", link: "with-sidebar/about" },
  ];

  const companyLinks = [
    { title: "Our Team", link: "with-sidebar/teams" },
    { title: "Careers", link: "/careers" },
    { title: "Partners", link: "/partners" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="mx-auto flex max-w-7xl bg-white shadow rounded-md items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>

          {/* Logo */}
          <Image
            src="/images/logo.png"
            width={64}
            height={64}
            className="w-8 rounded-md"
            alt="logo"
          />
          <Link href="/" className="text-xl font-bold text-stone-900">
            Always<span className="font-medium">OnNetwork</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ title, link }, idx) => (
            <Link
              key={idx}
              href={link}
              className="text-slate-600 font-semibold hover:text-black transition"
            >
              {title}
            </Link>
          ))}

          {/* Company Dropdown - Desktop */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleCompanyDropdown}
              className="flex items-center font-semibold text-slate-600 hover:text-black transition"
            >
              Company <ChevronDown className="ml-1 mt-1 h-4 w-4" />
            </button>

            <div
              className={`absolute top-full mt-2 w-44 rounded-md border bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden ${
                companyDropdownOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              {companyLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <div className="flex gap-2">
            <Link href="/Loginpage">
              <button className="flex items-center gap-2 rounded-lg shadow bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:text-black  hover:bg-gray-300 transition">
                <User size={18} />
                Login
              </button>
            </Link>
            <Link href="#">
              <button className="flex items-center gap-2 rounded-lg shadow bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:text-black  hover:bg-gray-300 transition">
                <CircleFadingPlus size={18} />
                BTCL
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-40 md:hidden bg-white px-4 pb-4 shadow overflow-y-auto max-h-[calc(100vh-64px)]">
          <Link href="#" className="block py-2 text-slate-600 hover:text-black">
            Home
          </Link>

          {/* Company Dropdown - Mobile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleCompanyDropdown}
              className="flex w-full items-center justify-between py-2 text-slate-600 hover:text-black"
            >
              Company
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  companyDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`mt-1 pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
                companyDropdownOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              {companyLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="block py-1 text-sm text-gray-700 hover:text-black"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="with-sidebar/contact"
            className="block py-2 text-slate-600 hover:text-black"
          >
            Contact
          </Link>
          <Link
            href="with-sidebar/about"
            className="block py-2 text-slate-600 hover:text-black"
          >
            About
          </Link>

          <div className="mt-4">
            <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-300 hover:text-black transition">
              <CircleFadingPlus size={18} />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { MenuIcon, XIcon, ChevronDown, CircleFadingPlus } from "lucide-react";
// import Image from "next/image";
// import clsx from "clsx";

// const Navbar = () => {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//     setCompanyDropdownOpen(false);
//   };

//   const toggleCompanyDropdown = () => {
//     setCompanyDropdownOpen((prev) => !prev);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//     setCompanyDropdownOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setCompanyDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setSidebarOpen(false);
//   }, [pathname]);

//   const navLinks = [
//     { title: "Home", link: "/" },
//     { title: "Contact", link: "/contact" },
//     { title: "About", link: "/about" },
//   ];

//   const companyLinks = [
//     { title: "Our Team", link: "/team" },
//     { title: "Careers", link: "/careers" },
//     { title: "Partners", link: "/partners" },
//   ];

//   // 🌐 Homepage Top Navbar (with mobile toggle)
//   if (isHomePage) {
//     return (
//       <nav className="fixed top-0 left-0 w-full z-50 ">
//         <div className="mx-auto flex max-w-7xl items-center rounded-md bg-white shadow justify-between px-4 py-3 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={toggleMobileMenu}
//               className="md:hidden"
//               aria-label="Toggle Menu"
//             >
//               {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
//             </button>
//             <Image
//               src="/images/logo.png"
//               width={40}
//               height={40}
//               className="w-8 rounded-md"
//               alt="logo"
//             />
//             <Link href="/" className="text-xl font-bold text-stone-900">
//               Always<span className="font-medium">OnNetwork</span>
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-6">
//             {navLinks.map(({ title, link }, idx) => (
//               <Link
//                 key={idx}
//                 href={link}
//                 className="text-slate-600 font-semibold hover:text-black transition"
//               >
//                 {title}
//               </Link>
//             ))}

//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={toggleCompanyDropdown}
//                 className="flex items-center font-semibold text-slate-600 hover:text-black transition"
//               >
//                 Company <ChevronDown className="ml-1 mt-1 h-4 w-4" />
//               </button>

//               <div
//                 className={`absolute top-full mt-2 w-44 rounded-md border bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden ${
//                   companyDropdownOpen
//                     ? "max-h-[500px] opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 {companyLinks.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.link}
//                     className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
//                   >
//                     {item.title}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <button className="flex items-center gap-2 rounded-lg shadow bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:text-black hover:bg-gray-300 transition">
//               <CircleFadingPlus size={18} />
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="fixed inset-x-0 top-[64px] z-40 md:hidden bg-white px-4 pb-4 shadow overflow-y-auto max-h-[calc(100vh-64px)]">
//             <Link
//               href="/"
//               className="block py-2 text-slate-600 hover:text-black"
//             >
//               Home
//             </Link>

//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={toggleCompanyDropdown}
//                 className="flex w-full items-center justify-between py-2 text-slate-600 hover:text-black"
//               >
//                 Company
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform ${
//                     companyDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <div
//                 className={`mt-1 pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
//                   companyDropdownOpen
//                     ? "max-h-[500px] opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 {companyLinks.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.link}
//                     className="block py-1 text-sm text-gray-700 hover:text-black"
//                   >
//                     {item.title}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <Link
//               href="/contact"
//               className="block py-2 text-slate-600 hover:text-black"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/about"
//               className="block py-2 text-slate-600 hover:text-black"
//             >
//               About
//             </Link>

//             <div className="mt-4">
//               <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-300 hover:text-black transition">
//                 <CircleFadingPlus size={18} />
//                 Login
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     );
//   }

//   // 📦 Sidebar for all other pages
//   return (
//     <>
//       {/* Sidebar Toggle Button */}
//       <div className="fixed top-4 left-4 z-50 md:hidden">
//         <button
//           onClick={toggleSidebar}
//           className="bg-white p-2 rounded-md shadow"
//         >
//           <MenuIcon />
//         </button>
//       </div>

//       {/* Overlay for small screens */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0  z-40 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={clsx(
//           "fixed top-0 left-0 z-50 h-full w-64 bg-white px-4 py-6 shadow-lg transition-transform duration-300 ease-in-out",
//           "md:translate-x-0",
//           sidebarOpen ? "translate-x-0" : "-translate-x-full md:block"
//         )}
//       >
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-2">
//             <Image
//               src="/images/logo.png"
//               width={40}
//               height={40}
//               alt="logo"
//               className="w-8 rounded-md"
//             />
//             <Link href="/" className="text-xl font-bold text-stone-900">
//               Always<span className="font-medium">OnNetwork</span>
//             </Link>
//           </div>
//           <button
//             onClick={toggleSidebar}
//             className="text-gray-600 md:hidden"
//             aria-label="Close Sidebar"
//           >
//             <XIcon />
//           </button>
//         </div>

//         <div className="flex flex-col gap-2">
//           {navLinks.map(({ title, link }) => (
//             <Link
//               key={link}
//               href={link}
//               className="py-2 text-slate-600 hover:text-black font-medium"
//             >
//               {title}
//             </Link>
//           ))}
//         </div>

//         <div className="mt-4">
//           <button
//             onClick={toggleCompanyDropdown}
//             className="flex items-center justify-between w-full py-2 text-slate-600 hover:text-black font-medium"
//           >
//             Company
//             <ChevronDown
//               className={`h-4 w-4 transition-transform ${
//                 companyDropdownOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>
//           <div
//             className={`ml-2 overflow-hidden transition-all duration-300 ${
//               companyDropdownOpen
//                 ? "max-h-[500px] opacity-100"
//                 : "max-h-0 opacity-0"
//             }`}
//           >
//             {companyLinks.map(({ title, link }) => (
//               <Link
//                 key={link}
//                 href={link}
//                 className="block py-1 text-sm text-gray-700 hover:text-black"
//               >
//                 {title}
//               </Link>
//             ))}
//           </div>
//         </div>

//         <button className="mt-6 flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-300 hover:text-black transition">
//           <CircleFadingPlus size={18} />
//           Login
//         </button>
//       </aside>
//     </>
//   );
// };

// export default Navbar;
