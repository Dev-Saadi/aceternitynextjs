"use client";

import { useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  const handleClickOutside = (event: any) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Open Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Bubble */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClickCapture={handleClickOutside}
            className="fixed inset-0 z-40"
          >
            <motion.div
              ref={chatRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-[90px] right-6 w-80 bg-white rounded-3xl shadow-xl p-4 flex flex-col z-50 border border-gray-200 overflow-visible"
            >
              {/* Chat Tail */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-l border-b border-gray-200 z-40"></div>

              {/* Chat Header */}
              <div className="flex justify-between items-center border-b pb-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  Chat with Agent
                </h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto mt-3 space-y-2 text-sm text-gray-600">
                <p className="bg-gray-100 p-2 rounded-md w-fit">
                  Hello! Need help with our service?
                </p>
              </div>

              {/* Chat Input */}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
