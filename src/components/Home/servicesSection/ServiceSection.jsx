import React from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    img: "/home/service-1.png",
    title: "Mining Hardware Sales",
    content:
      "We offer a curated selection of high-performance Bitcoin mining machines, including top-tier models like the Bitmain Antminer AL1 Pro, IceRiver AL3, DragonBall Miner A11, and A40. Each unit is sourced for optimal efficiency and profitability, ensuring our clients have access to the best tools in the industry.",
  },
  {
    id: 2,
    img: "/home/service-2.png",
    title: "Hosting & Services",
    content:
      "At Dahab Miners, we specialize in quick and efficient repairs to minimize downtime and keep your mining rigs running smoothly. From diagnostics and chip-level fixes to full component replacements, our expert technicians use quality parts and tools to restore peak performance. We also offer preventive ......",
  },
  {
    id: 3,
    img: "/home/service-3.png",
    title: "Consultation & Support",
    content:
      "Navigating the crypto mining landscape can be complex. Our team of experts offers personalized consultations to guide you through",
    list: [
      "Selecting the right mining hardware tailored to your needs.",
      "Setting up and optimizing your mining operations...",
    ],
  },
];
const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <p className="text-[#1ECBAF] text-xs tracking-[5px]">OUR SERVICES</p>
      <h4 className="gradient-heading md:text-4xl text-3xl font-semibold pb-5">
        Unlock Our Mining Solutions
      </h4>
      <div className="grid md:grid-cols-3 gap-7">
        {data.map((item) => (
          <ServicesCard
            key={item.id}
            img={item.img}
            title={item.title}
            content={item.content}
            list={item.list}
          />
        ))}
      </div>
    </motion.section>
  );
}
