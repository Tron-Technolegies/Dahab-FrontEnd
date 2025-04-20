import { motion } from "framer-motion";
import React from "react";
import { handleChatClick } from "../../../utils/whatsapp";

export default function ServicesCard({ img, title, content, list }) {
  return (
    <motion.div
      className="p-3 py-5 bg-[#000618] text-white rounded-lg flex flex-col gap-5 justify-between items-center max-w-[280px]"
      initial={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
        borderWidth: "2px",
        borderImageSlice: 1,
        borderRadius: "12px",
        scale: 1,
      }}
      whileHover={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, #A5E7F380 50%, #0194FE80 100%)",
        borderWidth: "2px",
        boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",

        transition: { duration: 0.6, ease: "easeOut" },
      }}
      style={{
        borderStyle: "solid",
      }}
    >
      <div className="flex flex-col gap-5 items-center">
        <img src={img} className="w-10" />
        <p className="text-[#0194FE] text-center">{title.toUpperCase()}</p>
      </div>
      <div>
        <p className="text-sm leading-6">{content}</p>
        {list && (
          <ul className="ms-5">
            {list.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        )}
      </div>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.95, backgroundColor: "#7decda" }} // Change color on hover
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
        className="text-base font-semibold text-white btn-bg px-5 py-2 w-fit rounded-lg"
        onClick={handleChatClick}
      >
        Know More
      </motion.button>
    </motion.div>
  );
}
