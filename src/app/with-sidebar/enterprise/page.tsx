// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bell,
//   Calendar,
//   ChevronRight,
//   Globe,
//   Server,
//   Shield,
//   Wifi,
//   LucideIcon,
// } from "lucide-react";
// import detailsById from "@/components/detailsContent"; // adjust path as needed

// const colorClasses: Record<string, string> = {
//   indigo:
//     "bg-indigo-100 text-indigo-600 border-indigo-500 hover:border-indigo-300",
//   green: "bg-green-100 text-green-600 border-green-500 hover:border-green-300",
//   yellow:
//     "bg-yellow-100 text-yellow-600 border-yellow-500 hover:border-yellow-300",
//   red: "bg-red-100 text-red-600 border-red-500 hover:border-red-300",
//   purple:
//     "bg-purple-100 text-purple-600 border-purple-500 hover:border-purple-300",
// };

// const buttonColorMap: Record<string, string> = {
//   indigo: "bg-indigo-500 hover:bg-indigo-700",
//   green: "bg-green-500 hover:bg-green-700",
//   yellow: "bg-yellow-500 hover:bg-yellow-600",
//   red: "bg-red-500 hover:bg-red-700",
//   purple: "bg-purple-500 hover:bg-purple-700",
// };

// interface CardItem {
//   id: number;
//   title: string;
//   icon: LucideIcon;
//   color: keyof typeof colorClasses;
// }

// const cardData: CardItem[] = [
//   { id: 1, title: "Fiber to the Business", icon: Globe, color: "indigo" },
//   { id: 2, title: "Wireless Broadband", icon: Wifi, color: "green" },
//   { id: 3, title: "Customized Backhauls", icon: Bell, color: "yellow" },
//   { id: 4, title: "HotSpot solution", icon: Shield, color: "red" },
//   { id: 5, title: "Wi-Fi Mesh Solution", icon: Server, color: "purple" },
// ];

// const IndexPage = () => {
//   const [openCardId, setOpenCardId] = useState<number>(1);

//   const handleCardClick = (id: number) => {
//     setOpenCardId(id);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 p-8 flex flex-col lg:flex-row gap-10">
//       <div className="lg:w-1/3 w-full space-y-6">
//         <motion.h1
//           className="text-4xl font-extrabold text-gray-900"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Corporate Data & Internet
//         </motion.h1>
//         <motion.p
//           className="text-md text-gray-600"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//         >
//           Explore our enterprise-grade services tailored to your connectivity
//           needs.
//         </motion.p>

//         {cardData.map((card, index) => {
//           const isOpen = openCardId === card.id;
//           const Icon = card.icon;
//           const colorClass = colorClasses[card.color];

//           return (
//             <motion.div
//               key={card.id}
//               layout
//               onClick={() => handleCardClick(card.id)}
//               className={`cursor-pointer border-l-4 rounded-xl shadow-sm overflow-hidden transition-all duration-500 ${
//                 isOpen
//                   ? `border-${card.color}-500 shadow-lg`
//                   : `border-gray-200 hover:shadow-md`
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <div className="p-5 flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className={`p-2 rounded-md ${colorClass}`}>
//                     <Icon className="w-5 h-5" />
//                   </div>
//                   <h3 className="font-semibold text-gray-800">{card.title}</h3>
//                 </div>
//                 <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
//                   <ChevronRight className="w-5 h-5 text-gray-400" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       <motion.div
//         className="lg:w-2/3 w-full bg-white rounded-2xl max-h-dvh overflow-y-auto shadow-xl p-8 border border-gray-100"
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <AnimatePresence mode="wait">
//           {openCardId && (
//             <motion.div
//               key={openCardId}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                 {cardData.find((card) => card.id === openCardId)?.title}
//               </h2>
//               <div className="text-gray-700 text-base leading-relaxed mb-6">
//                 {detailsById[openCardId]}
//               </div>

//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                   Ready to scale your connectivity?
//                 </h4>
//                 <p className="text-gray-600 mb-4">
//                   Talk to our experts or get a custom plan tailored for your
//                   business.
//                 </p>
//                 <div className="flex gap-4">
//                   <button
//                     className={`$${
//                       buttonColorMap[
//                         cardData.find((c) => c.id === openCardId)?.color ||
//                           "indigo"
//                       ]
//                     } text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300`}
//                   >
//                     View Plans
//                   </button>
//                   <button className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-md shadow-sm border border-gray-300 transition-colors duration-300">
//                     Contact Sales
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default IndexPage;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  ChevronRight,
  Globe,
  Server,
  Shield,
  Wifi,
  LucideIcon,
} from "lucide-react";
import detailsById from "@/components/detailsContent";

const colorClasses: Record<string, string> = {
  indigo:
    "bg-indigo-100 text-indigo-600 border-indigo-500 hover:border-indigo-300",
  green: "bg-green-100 text-green-600 border-green-500 hover:border-green-300",
  yellow:
    "bg-yellow-100 text-yellow-600 border-yellow-500 hover:border-yellow-300",
  red: "bg-red-100 text-red-600 border-red-500 hover:border-red-300",
  purple:
    "bg-purple-100 text-purple-600 border-purple-500 hover:border-purple-300",
};

const buttonColorMap: Record<string, string> = {
  indigo: "bg-indigo-500 hover:bg-indigo-700",
  green: "bg-green-500 hover:bg-green-700",
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  red: "bg-red-500 hover:bg-red-700",
  purple: "bg-purple-500 hover:bg-purple-700",
};

interface CardItem {
  id: number;
  title: string;
  icon: LucideIcon;
  color: keyof typeof colorClasses;
}

const cardData: CardItem[] = [
  { id: 1, title: "Fiber to the Business", icon: Globe, color: "indigo" },
  { id: 2, title: "Wireless Broadband", icon: Wifi, color: "green" },
  { id: 3, title: "Customized Backhauls", icon: Bell, color: "yellow" },
  { id: 4, title: "HotSpot solution", icon: Shield, color: "red" },
  { id: 5, title: "Wi-Fi Mesh Solution", icon: Server, color: "purple" },
];

const IndexPage = () => {
  const [openCardId, setOpenCardId] = useState<number>(1);

  const handleCardClick = (id: number) => {
    setOpenCardId(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-4 py-8 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Corporate Data & Internet
        </motion.h1>
        <motion.p
          className="text-base text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Explore our enterprise-grade services tailored to your connectivity
          needs.
        </motion.p>

        {cardData.map((card, index) => {
          const isOpen = openCardId === card.id;
          const Icon = card.icon;
          const colorClass = colorClasses[card.color];

          return (
            <motion.div
              key={card.id}
              layout
              onClick={() => handleCardClick(card.id)}
              className={`cursor-pointer border-l-4 rounded-xl shadow-sm transition-all duration-500 overflow-hidden ${
                isOpen
                  ? `border-${card.color}-500 shadow-lg`
                  : `border-gray-200 hover:shadow-md`
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-md ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium text-gray-800">{card.title}</h3>
                </div>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Details Panel */}
      <motion.div
        className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 overflow-y-auto max-h-dvh"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {openCardId && (
            <motion.div
              key={openCardId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {cardData.find((card) => card.id === openCardId)?.title}
              </h2>
              <div className="text-gray-700 text-base leading-relaxed mb-6">
                {detailsById[openCardId]}
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Ready to scale your connectivity?
                </h4>
                <p className="text-gray-600 mb-4">
                  Talk to our experts or get a custom plan tailored for your
                  business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className={`${
                      buttonColorMap[
                        cardData.find((c) => c.id === openCardId)?.color ||
                          "indigo"
                      ]
                    } text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300`}
                  >
                    View Plans
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-md shadow-sm border border-gray-300 transition-colors duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default IndexPage;
