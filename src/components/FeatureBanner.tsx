"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Lock, Speech, Banknote, WifiOff } from "lucide-react";

const WifiPulse = () => {
  return (
    <motion.div
      className="absolute top-4 left-4 bg-white rounded-md shadow-md p-2 z-10"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <Wifi className="w-6 h-6 text-green-600" />
    </motion.div>
  );
};

const WifiOffAnimation = () => (
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
  >
    <WifiOff className="w-6 h-6 text-gray-400" />
  </motion.div>
);

const InternetServiceSection: React.FC = () => {
  return (
    <motion.div
      className="relative bg-white py-16 md:py-24 lg:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left Side */}
        <div className="relative w-full">
          <WifiPulse />
          <div className="absolute top-4 right-4 bg-white rounded-md shadow-md p-2 z-10">
            <WifiOffAnimation />
          </div>

          <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/home1.jpg"
              alt="Network Tower"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md p-5">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/home6.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Jimmy Doda
                  </h4>
                  <p className="text-xs text-gray-500">Brooklyn Simmons</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.928c-.383-1.196-2.204-1.196-2.587 0l-2.697 8.214A1 1 0 0 0 6 12h8a1 1 0 0 0 .951-.77l-2.697-8.214zM10 15.612L16.247 19l-2.163-7.036L10 14.17l-4.084 3.794L3.753 19 10 15.612z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 bg-white rounded-full shadow-md p-3 z-10">
            <Wifi className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-green-800 mb-1">
              About Our Internet
            </h5>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              We Provide <span className="text-green-500">Unlimited</span>{" "}
              Network For You.
            </h2>
          </div>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Experience blazing-fast, secure, and unlimited internet with 24/7
            support—your reliable ISP partner for home and business connectivity
            needs.
          </p>
          <div className="grid align-middle grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              icon={<Lock className="w-6 h-6 text-red-500" />}
              bgColor="bg-red-100"
              title="Secure Internet"
              description="Lorem ipsum, or lipsum as it is sometimes known, is dummy"
            />
            <Feature
              icon={
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 15h9v2l9-12h-9z"
                  />
                </svg>
              }
              bgColor="bg-blue-100"
              title="30+ Mbps"
              description="Lorem ipsum, or lipsum as it is sometimes known, is dummy"
            />

            <Feature
              title="Digital Payment"
              icon={<Banknote className="w-6 h-6 text-green-500" />}
              bgColor="bg-green-100"
              description="Lorem ipsum generators on the tend, quick brown fox jump over the lazy dog"
            />
            <Feature
              icon={
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
                  />
                </svg>
              }
              bgColor="bg-purple-100"
              title="Video & Streaming"
              description="4K & 8K streaming, quick brown fox jumped over the lazy dog"
            />

            <Feature
              icon={<Speech className="w-6 h-6 text-yellow-500" />}
              bgColor="bg-yellow-100"
              title="Customer Support"
              description="If you are going to use a passage. Lorem ipsum dolorer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

type FeatureProps = {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({
  icon,
  bgColor,
  title,
  description,
}) => (
  <div className="flex items-start space-x-3">
    <div className={`p-2 ${bgColor} rounded-md`}>{icon}</div>
    <div>
      <h6 className="font-semibold text-gray-800">{title}</h6>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

// type SimpleFeatureProps = {
//   icon: React.ReactNode;
//   bgColor: string;
//   text: string;
// };

// const SimpleFeature: React.FC<SimpleFeatureProps> = ({
//   icon,
//   bgColor,
//   text,
// }) => (
//   <div className="flex items-start space-x-3">
//     <div className={`p-2 ${bgColor} rounded-md`}>{icon}</div>
//     <p className="text-sm text-gray-600">{text}</p>
//   </div>
// );

export default InternetServiceSection;
