import { motion } from "framer-motion";

export default function TrendCard({ icon, name, short, value, percent, id }) {
  const getOptimizedUrl = (url) => {
    // Insert Cloudinary transformations after `/upload/`
    return url.replace("/large/", `/small/`);
  };
  return (
    <motion.div
      className="p-5 relative text-white w-[250px] my-5 bg-[#000618] z-[5]"
      initial={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
        borderWidth: "2px",
        borderImageSlice: 1,
        borderRadius: "12px",
        scale: 1,
        zIndex: 5,
      }}
      whileHover={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, #A5E7F380 50%, #0194FE80 100%)",
        borderWidth: "2px",
        boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",
        scale: 1.01,
        transition: { duration: 0.6, ease: "easeOut" },
        zIndex: 5,
      }}
      style={{
        borderStyle: "solid",
        zIndex: 5,
      }}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <img
            src={getOptimizedUrl(icon)}
            alt="Bitcoin Mining in Dubai"
            loading="lazy"
            decoding="async"
            className="w-10"
          />
          <p className="text-sm">{short}</p>
          <p className="text-[10px] bg-[#B6B6B6] p-1 rounded-md text-black">
            {name}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center my-3">
        <div className="flex flex-col gap-3">
          <p>
            <span className="text-[#1ecbaf]">Value</span> : $ {value}
          </p>
          <p className="text-sm">
            <span className="text-[#1ecbaf]">24hr</span> : {percent.toFixed(2)}{" "}
            %
          </p>
        </div>
      </div>
    </motion.div>
  );
}
