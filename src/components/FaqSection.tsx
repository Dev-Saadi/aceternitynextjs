"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What internet speeds do you offer?",
    answer:
      "We offer a variety of plans, ranging from 50 Mbps to 1 Gbps, to suit different needs and budgets.",
  },
  {
    question: "Is there a data cap on your internet service?",
    answer:
      "Most of our plans come with unlimited data. However, some lower-tier plans may have a soft cap, which means your speed might be reduced after exceeding a certain amount.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes between 1 to 3 business days, depending on your location and the complexity of the setup.",
  },
  {
    question: "Do you offer a modem and router?",
    answer:
      "We provide a modem with all our plans. You can use your own router or rent one from us.",
  },
  {
    question: "What is your uptime guarantee?",
    answer:
      "We offer a 99.9% uptime guarantee, ensuring reliable and consistent internet service.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" bg-gradient-to-r from-gray-100 to-gray-300 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16">
          {/* Left: Header Section */}
          <div className="w-full md:w-5/12 mb-12 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-300 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-semibold text-lg max-w-md">
              Find answers to common questions about our internet services. If
              you have other questions, please contact our support team.
            </p>
          </div>

          {/* Right: FAQ Section */}
          <div className="w-full md:w-7/12 space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                layout
                className={cn(
                  " rounded-xl shadow-lg transition-all duration-300",
                  " bg-white/5 backdrop-blur-md",
                  "hover:shadow-xl hover:border-purple-500/20"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-between p-4 md:p-6 cursor-pointer",
                    "transition-colors duration-300",
                    "hover:bg-black/10",
                    openIndex === index
                      ? "bg-black/10 rounded-t-xl"
                      : "rounded-xl"
                  )}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-4">
                    <MessageCircleQuestion className="w-6 h-6 text-green-800" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-green-900" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 ">
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
