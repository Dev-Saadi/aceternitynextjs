"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Clock,
  BookOpenText,
} from "lucide-react";

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const features = [
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    desc: "Uninterrupted internet with advanced wireless and fiber networks.",
    color: "from-cyan-400 to-blue-600",
    iconColor: "text-cyan-300",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.7)]",
  },
  {
    icon: Users,
    title: "Community Focused",
    desc: "Empowering local communities with digital infrastructure.",
    color: "from-green-400 to-emerald-600",
    iconColor: "text-green-200",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.7)]",
  },
  {
    icon: Clock,
    title: "Reliable Support",
    desc: "24/7 support to keep you connected and informed.",
    color: "from-amber-400 to-orange-600",
    iconColor: "text-amber-200",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.7)]",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    desc: "Constantly evolving with cutting-edge technologies.",
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-200",
    glow: "shadow-[0_0_30px_rgba(253,224,71,0.7)]",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trustworthy",
    desc: "Top-tier data protection and privacy standards.",
    color: "from-teal-400 to-cyan-600",
    iconColor: "text-teal-200",
    glow: "shadow-[0_0_30px_rgba(20,184,166,0.7)]",
  },
  {
    icon: Target,
    title: "Our Vision",
    desc: "Connecting every corner of Bangladesh to the future.",
    color: "from-pink-400 to-fuchsia-600",
    iconColor: "text-pink-200",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.7)]",
  },
];

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-24"
        variants={fadeInUp}
      >
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-6 leading-tight">
            Connecting Bangladesh,
            <br /> Empowering You
          </h1>
          <p className="text-lg text-slate-300">
            AlwaysOn Network envisions a digitally inclusive future for all.
            With robust infrastructure and passionate service, we bridge people
            and opportunities. Join us on a journey to a smarter, faster,
            connected tomorrow.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.color} w-64 p-6 rounded-3xl ${feature.glow} hover:scale-[1.05] transition duration-300`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 rounded-full p-4 bg-white bg-opacity-10 backdrop-blur-md flex items-center justify-center">
                  <Icon className={`w-10 h-10 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Our Story */}
      <motion.div
        className="max-w-6xl mx-auto mt-32 rounded-3xl p-14 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 shadow-xl border border-slate-700 flex flex-col md:flex-row items-center gap-10"
        variants={fadeInUp}
        transition={{ delay: 0.7 }}
      >
        <div className="md:w-1/3 text-indigo-300">
          <div className="bg-indigo-600 bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
            <BookOpenText className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight leading-snug">
            Our Story
          </h2>
        </div>
        <div className="md:w-2/3 text-slate-300 text-lg leading-relaxed">
          <p>
            AlwaysOn Network Bangladesh Ltd. (AlwaysOn) began as a visionary
            joint venture to revolutionize connectivity. With relentless
            innovation, we've grown into a beacon of digital transformation,
            lighting the path toward a future where access to technology is a
            right, not a privilege. Our journey is about people, progress, and a
            promise to keep Bangladesh always connected — now and into the
            future.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
