import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProductCategoryCard({ img, title, content }) {
  return (
    <motion.div
      className="p-3 py-5 bg-[#000618] text-white rounded-lg flex flex-col gap-5 items-center max-w-[250px] h-[390px]"
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
      <img src={img} className="w-32" />
      <p>{title}</p>
      <p className="text-xs text-center font-light">{content}</p>
      <Link
        to={"/buy-bitcoin-miners-uae"}
        className="w-10 h-10 rounded-full bg-[#2c689d1a] flex justify-center items-center text-[#3DB2E8]"
      >
        <FaArrowRight />
      </Link>
    </motion.div>
  );
}
