import React from "react";
import { handleChatClick } from "../utils/whatsapp";
import { motion } from "framer-motion";

const WhatsApp = () => {
  return (
    <div className="fixed right-3 bottom-3 group flex items-center gap-3 z-50">
      {/* Text bubble: visible on hover on all devices */}
      <div className="px-4 py-3 rounded-s-full rounded-e-full bg-[#CCF2FF] text-black text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Questions? We’re here—connect anytime!
      </div>

      {/* WhatsApp icon */}
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-14 h-14 bg-[#25D366] rounded-xl overflow-hidden cursor-pointer flex items-center justify-center"
        onClick={handleChatClick}
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/whatsapp_logo.webp"
          alt="Bitcoin Mining in Dubai"
          className="w-8 h-8"
        />
      </motion.button>
    </div>
  );
};

export default WhatsApp;
