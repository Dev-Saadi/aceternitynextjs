// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// const solutions = [
//   {
//     title: "Internet for Home",
//     description:
//       "Upgrade to blazing-fast speeds and reliable connections for your home. Experience seamless streaming and gaming.",
//     imageUrl: "/images/home17.jpg",
//     alt: "Home Internet",
//   },
//   {
//     title: "Secure Enterprise Internet",
//     description:
//       "Boost your enterprise with secure, high-speed internet and 24/7 support to ensure uninterrupted operations.",
//     imageUrl: "/images/img2.jpg",
//     alt: "Business Internet",
//   },
//   {
//     title: "Internet for Small Business",
//     description:
//       "Supercharge your small business with reliable internet. Stay connected and grow your vision without interruption.",
//     imageUrl: "/images/img3.jpg",
//     alt: "Small Business Internet",
//   },
// ];
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: i * 0.2,
//     },
//   }),
// };
// const GalleryCard: React.FC = () => {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
//       <div className="max-w-screen-xl mx-auto grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-8 items-start">
//         {/* Left Text Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="lg:col-span-1"
//         >
//           <h1 className="text-4xl sm:text-3xl font-bold text-black mb-4">
//             Our Solutions
//           </h1>
//           <p className="text-gray-600 text-base sm:text-sm">
//             Explore our powerful internet plans for home, businesses, and
//             enterprises.
//           </p>
//         </motion.div>
//         {/* Cards Section */}
//         <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">
//           {solutions.map((item, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               className="w-full"
//             >
//               {/* Card Content */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 180, damping: 20 }}
//                 className="bg-white hover:bg-gradient-to-br hover:from-green-300 hover:via-green-200 hover:to-gray-100 transition-all duration-300 ease-in-out rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col min-h-[400px] max-h-[460px]"
//               >
//                 <Link href="#">
//                   <Image
//                     src={item.imageUrl}
//                     alt={item.alt}
//                     width={400}
//                     height={240}
//                     className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </Link>
//                 <div className="p-4 flex flex-col justify-between flex-1">
//                   <div>
//                     <Link href="#">
//                       <h2 className="text-lg sm:text-base font-semibold text-black hover:text-green-700 transition">
//                         {item.title}
//                       </h2>
//                     </Link>
//                     <p className="text-sm text-gray-700 mt-2 sm:text-sm font-medium">
//                       {item.description}
//                     </p>
//                   </div>
//                   <Link
//                     href="#"
//                     className="text-sm text-blue-600 mt-4 hover:underline font-medium"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default GalleryCard;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Building2, Store } from "lucide-react"; // Lucide icons

const solutions = [
  {
    title: "Home Internet",
    description:
      "Upgrade your home with ultra-fast, reliable internet for seamless streaming, gaming, and everyday connectivity.",
    imageUrl: "/images/home17.jpg",
    alt: "home",
    isFeatured: false,
    link: "/with-sidebar/homeinternet",
    icon: <Home size={18} className="mr-2 text-green-600" />,
  },
  {
    title: "Small Business",
    description:
      "Empower your small business with fast, reliable internet. Stay connected, enhance productivity, and drive growth with uninterrupted service that supports your vision every step of the way.",
    imageUrl: "/images/img3.jpg",
    alt: "Velocity Business Growth Internet",
    isFeatured: true,
    link: "/with-sidebar/small-business",
    icon: <Store size={18} className="mr-2 text-red-600" />,
  },
  {
    title: "Enterprise Network",
    description:
      "Power your enterprise with high-speed, secure internet and 24/7 expert support—ensuring seamless operations, maximum uptime, and the dependable connectivity your business needs to innovate, scale, and stay ahead.",
    imageUrl: "/images/img2.jpg",
    alt: "Enterprise",
    isFeatured: false,
    link: "/with-sidebar/enterprise",
    icon: <Building2 size={18} className="mr-2 text-indigo-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const GalleryCard: React.FC = () => {
  const cardHeight = 320;
  const imageHeight = 140;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent font-bold tracking-tight sm:text-4xl">
            Our Solutions
          </h2>
          <p className="mt-3 text-lg bg-gradient-to-r from-lime-700 to-lime-400 bg-clip-text text-transparent font-medium">
            Experience the next evolution of internet connectivity with our
            cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((item, index) => {
            const isFeatured = item.isFeatured;
            const isLast = index === solutions.length - 1;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className={`rounded-lg overflow-hidden shadow-xl transition-all duration-500 bg-gray-100 ${
                  isFeatured
                    ? "lg:col-span-2"
                    : isLast
                    ? "lg:col-span-3"
                    : "col-span-1"
                }`}
                style={{ height: cardHeight }}
              >
                {/* Image section */}
                <div
                  className="relative w-full"
                  style={{ height: imageHeight }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-80 brightness-90"
                  />
                  <div className="absolute inset-0 bg-black opacity-10" />
                </div>

                {/* Content section */}
                <div
                  className="flex flex-col justify-between h-full p-4"
                  style={{ height: cardHeight - imageHeight }}
                >
                  {/* Title with icon */}
                  <h3 className="text-lg font-sans font-bold text-gray-900 flex items-center">
                    {item.icon}
                    {item.title}
                  </h3>
                  {/* Description */}
                  <div className="flex-grow my-2">
                    <p className="text-sm text-gray-900 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  {/* Link */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center hover:text-green-800 font-semibold text-gray-900 text-sm"
                  >
                    Discover More
                    <span className="ml-2 text-indigo-300 text-base">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryCard;
