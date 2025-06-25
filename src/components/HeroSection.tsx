"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface Square {
  id: number;
  src: string;
}

const squareData: Square[] = [
  { id: 1, src: "/images/home1.jpg" },
  { id: 2, src: "/images/home2.jpg" },
  { id: 3, src: "/images/home3.jpg" },
  { id: 4, src: "/images/home4.jpg" },
  { id: 5, src: "/images/home5.jpg" },
  { id: 6, src: "/images/home6.jpg" },
  { id: 7, src: "/images/home7.jpg" },
  { id: 8, src: "/images/home8.jpg" },
  { id: 9, src: "/images/home9.jpg" },
  { id: 10, src: "/images/home10.jpg" },
  { id: 11, src: "/images/home11.jpg" },
  { id: 12, src: "/images/home12.jpg" },
  { id: 13, src: "/images/home13.jpg" },
  { id: 14, src: "/images/home14.jpg" },
  { id: 15, src: "/images/home15.jpg" },
  { id: 16, src: "/images/home16.jpg" },
];

const shuffle = (array: Square[]): Square[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const ShuffleGrid: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>([]); // Initialize with an empty array

  const shuffleSquares = useCallback(() => {
    setSquares((prevSquares) => shuffle([...prevSquares]));
  }, [setSquares]);

  useEffect(() => {
    setSquares(shuffle(squareData)); // Perform initial shuffle on the client
    const intervalId = setInterval(shuffleSquares, 3000);
    return () => clearInterval(intervalId);
  }, [shuffleSquares]); // Dependency on shuffleSquares

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 relative overflow-hidden">
      {/* {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full rounded-md relative"
        >
          <Image
            src={sq.src}
            alt={`Image ${sq.id}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </motion.div>
      ))} */}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-8 mt-10 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <p className="block mb-4 text-sm text-gray-950 font-medium">
          Speed, Reliability, AlwaysOn.
        </p>
        <h3 className="text-4xl md:text-5xl font-semibold bg-gradient-to-tr from-lime-500 to-slate-300 bg-clip-text text-transparent">
          PowerFull Wireless Internet Worldwide.
        </h3>
        <p className="text-base md:text-lg font-medium text-slate-700 my-4 md:my-6">
          Enjoy top-tier home internet from the country’s largest and leading
          fiber broadband provider. Whether you're streaming, gaming, working
          remotely, or on video calls, AlwaysOn offers unmatched speed and
          dependable performance.
        </p>
        <button className="bg-green-700 shadow-xl text-white font-medium py-2 px-4 rounded transition-all hover:bg-green-500 active:scale-95">
          Read more
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

export default HeroSection;
