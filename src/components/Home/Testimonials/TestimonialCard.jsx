import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

export default function TestimonialCard({ name, content, image }) {
  return (
    <motion.div
      className="w-full p-6 bg-[#000618] text-white rounded-lg flex flex-col gap-4 min-h-[250px]"
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
        textAlign: "left", //  Enforces left alignment directly via inline style
      }}
    >
      <h4 className="flex items-center gap-2 text-lg font-semibold">
        {name}
        <span className="text-btnGreen bg-[#1ECBAF33] rounded-full p-1">
          <TiTick />
        </span>
      </h4>

      {/* <img
        src={image}
        className="w-[50px] h-[50px] rounded-full object-cover"
        alt={`${name}'s profile`}
      /> */}

      <p className="text-base font-normal leading-relaxed">"{content}"</p>
    </motion.div>
  );
}
