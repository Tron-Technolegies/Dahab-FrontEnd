import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProductCategoryCard({ img, title, content }) {
  return (
    <motion.div
      className="w-full max-w-[320px] sm:max-w-[380px] mx-auto p-3 py-5 bg-[#000618] text-white rounded-lg flex flex-col gap-3 items-center justify-between h-[600px] md:h-[500px]"
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
      <div className="flex flex-col gap-2 items-center min-h-[150px] justify-start">
        <img
          src={img}
          className="w-32 h-24 object-contain"
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <p className="text-center text-lg font-semibold">{title}</p>
      </div>

      <p className="text-sm tracking-wider leading-5 text-left font-light flex-1 px-2 overflow-visible ">
        {content}
      </p>

      <Link
        to={"/buy-bitcoin-miners-uae"}
        className="w-10 h-10 rounded-full bg-[#2c689d1a] flex justify-center items-center text-[#3DB2E8] hover:bg-[#2c689d2a] hover:scale-105 transition-all duration-300"
      >
        <FaArrowRight />
      </Link>
    </motion.div>
  );
}
