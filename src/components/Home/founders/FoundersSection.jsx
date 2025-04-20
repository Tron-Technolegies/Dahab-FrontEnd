import { motion } from "framer-motion";
import React from "react";

export default function FoundersSection() {
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <h4 className="gradient-heading md:text-4xl text-3xl font-semibold pb-5">
        Meet our Founders
      </h4>
      <p className="text-sm">
        The visionaries behind Dahab Miners driving innovation and Excellence in
        the Crypto mining industry
      </p>
      <div></div>
    </motion.section>
  );
}
