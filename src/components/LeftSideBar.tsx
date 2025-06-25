// "use client";
// import {
//   Home,
//   Server,
//   Wifi,
//   Rocket,
//   Cloud,
//   Menu,
//   X,
//   ContactRound,
//   NotebookTabs,
//   UsersRound,
// } from "lucide-react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState } from "react";
// import Image from "next/image";

// const ModernISPLayout: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex">
//       {/* Sidebar */}
//       <motion.aside
//         initial={{ x: -300 }}
//         animate={{ x: 0 }}
//         exit={{ x: -300 }}
//         transition={{ type: "spring", stiffness: 100 }}
//         className="bg-gray-200 w-64 flex-shrink-0 p-6 hidden lg:flex flex-col"
//       >
//         <div className="flex gap-1 mb-4">
//           <Image
//             src="/images/logo.png"
//             width={64}
//             height={64}
//             className="w-8 rounded-md"
//             alt="logo"
//           />
//           <Link href="/" className="text-xl font-bold text-stone-900">
//             Always<span className="font-medium">OnNetwork</span>
//           </Link>
//         </div>
//         <nav className="flex-1">
//           <ul className="space-y-3">
//             <li>
//               <Link
//                 href="/"
//                 className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//               >
//                 <Home className="mr-2 h-5 w-5" />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//               >
//                 <ContactRound className="mr-2 h-5 w-5" />
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//               >
//                 <NotebookTabs className="mr-2 h-5 w-5" />
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//               >
//                 <Server className="mr-2 h-5 w-5" />
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/team"
//                 className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//               >
//                 <UsersRound className="mr-2 h-5 w-5" />
//                 Our Team
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </motion.aside>

//       {/* Mobile Sidebar Toggle */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="text-gray-300 hover:text-white focus:outline-none"
//         >
//           <Menu className="h-8 w-8" />
//         </button>
//         <AnimatePresence>
//           {isSidebarOpen && (
//             <motion.aside
//               initial={{ x: -300 }}
//               animate={{ x: 0 }}
//               exit={{ x: -300 }}
//               transition={{ type: "spring", stiffness: 100 }}
//               className="fixed top-0 left-0 h-full bg-gray-200 w-64 p-6 flex flex-col z-40"
//             >
//               <div className="mb-8 flex justify-end">
//                 <button
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-gray-950 hover:text-white focus:outline-none"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>
//               <div className="flex gap-2 mb-4">
//                 <Image
//                   src="/images/logo.png"
//                   width={64}
//                   height={64}
//                   className="w-8 rounded-md"
//                   alt="logo"
//                 />
//                 <Link href="/" className="text-xl font-bold text-stone-900">
//                   Always<span className="font-medium">OnNetwork</span>
//                 </Link>
//               </div>
//               <nav className="flex-1">
//                 <ul className="space-y-3">
//                   <li>
//                     <Link
//                       href="/"
//                       className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//                     >
//                       <Home className="mr-2 h-5 w-5" />
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/contact"
//                       className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//                     >
//                       <ContactRound className="mr-2 h-5 w-5" />
//                       Contact
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/about"
//                       className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//                     >
//                       <NotebookTabs className="mr-2 h-5 w-5" />
//                       About
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="#"
//                       className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//                     >
//                       <Server className="mr-2 h-5 w-5" />
//                       Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/team"
//                       className="flex items-center text-gray-900 hover:text-white hover:bg-gray-700 rounded-md p-2 transition duration-300"
//                     >
//                       <UsersRound className="mr-2 h-5 w-5" />
//                       Our Team
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </motion.aside>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Main Content */}

//       <motion.main
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex-1 p-8 flex flex-col items-center justify-center"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Connect Faster, <span className="text-indigo-500">Live Better</span>
//         </motion.h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
//           <PlanCard
//             title="Basic"
//             icon={<Wifi className="h-8 w-8 text-indigo-500" />}
//             description="Perfect for light browsing and email."
//           />
//           <PlanCard
//             title="Premium"
//             icon={<Rocket className="h-8 w-8 text-indigo-500" />}
//             description="Faster speeds for streaming and gaming."
//           />
//           <PlanCard
//             title="Ultra"
//             icon={<Cloud className="h-8 w-8 text-indigo-500" />}
//             description="Ultimate performance for multiple devices and heavy usage."
//           />
//         </div>
//       </motion.main>
//     </div>
//   );
// };

// interface PlanCardProps {
//   title: string;
//   icon: React.ReactNode;
//   description: string;
// }

// const PlanCard: React.FC<PlanCardProps> = ({ title, icon, description }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4, delay: 0.3 }}
//       className="bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         border: isHovered ? "2px solid #6366f1" : "2px solid transparent",
//       }}
//     >
//       <motion.div
//         animate={{ scale: isHovered ? 1.1 : 1 }}
//         transition={{ type: "spring", stiffness: 200, damping: 10 }}
//       >
//         <div className="flex items-center justify-center mb-4">{icon}</div>
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       </motion.div>
//       <p className="text-gray-400">{description}</p>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md mt-4 transition duration-300"
//       >
//         Learn More
//       </motion.button>
//     </motion.div>
//   );
// };

// export default ModernISPLayout;

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
        className="bg-gray-200 w-64 flex-shrink-0 p-6 hidden lg:flex flex-col"
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
        className="flex-1 "
      >
        {children}
      </motion.main>
    </div>
  );
};

const SidebarContent = () => (
  <>
    <div className="flex gap-1 mb-4">
      <Image
        src="/images/logo.png"
        className="w-8 rounded-md"
        width={40}
        height={40}
        alt="logo"
      />
      <Link href="/" className="text-lg font-bold text-stone-900">
        Always
        <span className="font-medium">OnNetwork</span>
      </Link>
    </div>
    <nav className="flex-1">
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
  </>
);

export default LeftSideBar;
