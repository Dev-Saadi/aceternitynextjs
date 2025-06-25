"use client";

import {
  Check,
  Wifi,
  Router,
  Phone,
  ShieldCheck,
  Server,
  Tv2,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

const homePlans = [
  {
    type: "TV + INTERNET",
    title: "Easy Surfing",
    description: "Perfect for casual users who enjoy streaming and browsing.",
    icons: [
      <Wifi key="wifi" className="w-6 h-6 text-teal-500" />,
      <Tv2 key="tv" className="w-6 h-6 text-purple-500" />,
    ],
    features: [
      "100Mbps High-Speed Internet",
      "Supports Multiple Users",
      "WiFi Router & Security Tools",
      "Unlimited Connected Devices",
    ],
    price: 55,
    bg: "bg-gradient-to-r from-lime-200 to-slate-50",
    textColor:
      "bg-gradient-to-l from-gray-400 to-gray-700 bg-clip-text text-transparent",
  },
  {
    type: "INTERNET + PHONE",
    title: "Home Basic",
    description:
      "Ideal for families needing both internet and reliable phone service.",
    icons: [
      <Globe2 key="internet" className="w-6 h-6 text-teal-500" />,
      <Phone key="phone" className="w-6 h-6 text-purple-500" />,
    ],
    features: [
      "100Mbps Internet Connection",
      "HD Voice Calling Included",
      "WiFi Router & Firewall",
      "Unlimited Users & Devices",
    ],
    price: 75,
    bg: "bg-gradient-to-r from-lime-200 to-slate-50",
    textColor:
      "bg-gradient-to-l from-gray-400 to-gray-700 bg-clip-text text-transparent",
  },
  {
    type: "TV + INTERNET + PHONE",
    title: "Premium Fast",
    description:
      "All-in-one package for seamless entertainment, calls, and speed.",
    icons: [
      <Router key="router" className="w-6 h-6 text-teal-500" />,
      <Phone key="phone" className="w-6 h-6 text-purple-500" />,
      <Tv2 key="tv" className="w-6 h-6 text-pink-400" />,
    ],
    features: [
      "100Mbps Premium Internet",
      "Phone & TV Access",
      "Advanced Router with Protection",
      "Unlimited Devices and Support",
    ],
    price: 95,
    bg: "bg-gradient-to-r from-lime-200 to-slate-50",
    textColor:
      "bg-gradient-to-l from-gray-400 to-gray-700 bg-clip-text text-transparent",
  },
];

export default function PricingSection() {
  const [tab, setTab] = useState<"home" | "business">("home");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-b from-gray-900 to-gray-600 text-transparent bg-clip-text mb-10">
        Choose Your Plan
      </h2>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {["home", "business"].map((type) => (
          <button
            key={type}
            onClick={() => setTab(type as "home" | "business")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow ${
              tab === type
                ? "bg-gradient-to-r from-orange-300 to-rose-300 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {type === "home" ? "Home Pricing" : "Business Info"}
          </button>
        ))}
      </div>

      {tab === "home" && (
        <div className="grid gap-8">
          {homePlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-lg hover:shadow-2xl transition-all"
            >
              <div
                className={`${plan.bg} p-6 flex items-center justify-center md:w-1/3`}
              >
                <div className="text-left">
                  <p className="uppercase text-xs font-bold tracking-wider bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent">
                    {plan.type}
                  </p>
                  <h2 className={`text-2xl font-bold ${plan.textColor}`}>
                    {plan.title}
                  </h2>
                  <p className={`mt-2 text-sm opacity-90 ${plan.textColor}`}>
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col sm:flex-row sm:items-start gap-4 bg-white md:w-1/2">
                <div className="flex gap-4 flex-wrap">
                  {plan.icons.map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="rounded-full bg-gradient-to-tr from-white to-gray-50 p-3 shadow-lg border border-gray-200"
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </div>
                <ul className="text-sm space-y-2 sm:mt-0 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 flex flex-col items-center justify-center bg-white md:w-1/6">
                <p className="text-3xl font-bold text-teal-600">
                  ${plan.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mb-4">Per Month</p>
                <button className="px-4 py-2 text-sm md:text-xs lg:text-sm font-medium rounded-lg bg-gradient-to-br from-slate-500 to-slate-700 hover:from-rose-300 hover:to-yellow-300 text-white transition-all duration-300 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {tab === "business" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 p-6 sm:p-8 rounded-xl border border-gray-200 shadow-md backdrop-blur"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-4">
            What Businesses Use for Reliable Internet
          </h3>
          <p className="text-gray-700 max-w-3xl mb-6">
            Modern businesses rely on fiber optic infrastructure,
            enterprise-grade routers, secure VPNs, static IP configurations, and
            dedicated bandwidth to ensure seamless operations and secure
            communication.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold text-teal-600">Security Systems</p>
                <p className="text-sm text-gray-700">
                  VPNs, firewalls, and DDoS protection to secure data and
                  operations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Server className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold text-teal-600">
                  Enterprise Hardware
                </p>
                <p className="text-sm text-gray-700">
                  Robust routers and switches to handle heavy usage and ensure
                  uptime.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/business-info"
            className="inline-block mt-4 text-teal-600 underline hover:text-teal-800"
          >
            Read more about business infrastructure
          </Link>
          <div className="mt-8 text-gray-700">
            <p className="font-semibold">
              Need help choosing the right solution?
            </p>
            <p>
              Email: <span className="underline">support@example.com</span>
            </p>
            <p>
              Phone: <span className="underline">+1 (800) 123-4567</span>
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
