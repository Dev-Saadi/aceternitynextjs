"use client";

import { motion } from "framer-motion";
import React from "react";

const SquishyCard: React.FC = () => {
  return (
    <div className="mx-auto w-fit">
      <Card />
    </div>
  );
};

const Card: React.FC = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gradient-to-tr from-lime-500 to-slate-300 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-black">
          Home
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-xl font-black leading-[1.2]"
        >
          <p className="font-semibold text-gray-100">
            Upto 100 Mbps Unlimited Internet Package
          </p>
          <p className="font-semibold text-gray-100 mt-5 mb-5">
            4K YouTube, Facebook Streaming
          </p>
          <p className="font-semibold text-gray-100">
            Lag Free, Low Latency Network
          </p>
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        More Details
      </button>
      <Background />
    </motion.div>
  );
};

const Background: React.FC = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    ></motion.svg>
  );
};

export default SquishyCard;
