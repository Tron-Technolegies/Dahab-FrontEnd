import { motion } from "framer-motion";
import React from "react";
import FooterLinks from "../../FooterLinks";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FounderCard() {
  return (
    <motion.div
      className="p-3 py-5 bg-[#000618] text-white rounded-lg flex flex-col gap-5 justify-between items-center max-w-[260px]"
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
      <div>
        <img />
        <div>
          <p></p>
          <p></p>
        </div>
        <p></p>
        <div className="flex gap-5 text-base font-normal text-white">
          <FooterLinks
            link={"https://www.instagram.com/dahabminersuae/"}
            icon={<FaInstagram />}
          />
          <FooterLinks
            link={"https://www.facebook.com/dahabminers"}
            icon={<FaFacebookF />}
          />
          <FooterLinks
            link={"https://www.linkedin.com/company/thedahab-miners"}
            icon={<FaLinkedinIn />}
          />
        </div>
      </div>
    </motion.div>
  );
}
