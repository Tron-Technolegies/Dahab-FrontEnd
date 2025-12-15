import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { IoHardwareChipOutline, IoServerOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const data = [
  {
    id: 1,
    img: <IoHardwareChipOutline />,
    title: "Mining Hardware Sales",
    content:
      "At Dahab Miners, we offer a comprehensive range of Bitcoin mining machines from the industry’s most trusted and emerging brands. Whether you’re scaling a large mining operation or just starting out, our inventory includes top-tier models like the Bitmain Antminer S21, WhatsMiner M60 series, and ofcourse the L9’s, alongside specialized units such as the IceRiver KS7, DragonBall Miner A11 etc.",
    content2:
      "From single units to bulk orders of thousands, we tailor every sale to meet your needs — with full support for pre-orders, large-scale procurement, and global logistics to ensure your operation runs without interruption.",
    content3:
      "Scalable solutions for every miner — from boutique setups to enterprise-scale deployments.",
  },
  {
    id: 2,
    img: <IoServerOutline />,
    title: "Hosting Solutions",
    content:
      "At Dahab Miners, we offer versatile and scalable hosting solutions designed to meet the needs of miners of every scale — whether operating on air-cooled, immersion, or hydro setups. Our advanced hosting sites in the UAE and Ethiopia are engineered for efficiency and reliability, ensuring your miners operate at peak performance with:",
    list: [
      "Professional installation and setup",
      "24/7 monitoring and performance management",
      "Preventive maintenance and rapid response support",
      "Uptime guarantees backed by strong SLAs",
    ],
    content2:
      "Whether you’re deploying a hydro container, running immersion tanks, or managing traditional air-cooled units, our infrastructure and team are ready to handle it all seamlessly",

    content3:
      "Hydro, Immersion, or Air — hosted to perfection, powered by Dahab.",
  },
  {
    id: 3,
    img: <BsTools />,
    title: "Repair and Maintenance",
    content:
      "Keeping miners running efficiently requires expert care — and that’s where Dahab Miners delivers. Our skilled technicians offer chip-level repairs and full component replacements, using high-quality parts and precision diagnostics. Whether you’re hosting with us or need independent repair support, we welcome all miners for: ",
    list: [
      "Board and chip-level diagnostics",
      "Component replacements and performance tuning",
      "Preventive and corrective maintenance",
    ],
    content2:
      "Your trusted partner for reliable and efficient miner repairs — anytime you need.",
  },
  {
    id: 4,
    img: <BiSupport />,
    title: "Consultation & Support",
    content:
      "Navigating the fast-moving world of Bitcoin mining can be complex. At Dahab Miners, we make it simple. Our expert team offers personalized consulting for miners, investors, and newcomers alike, covering every stage of the mining journey:",
    list: [
      "Mining hardware selection and sourcing",
      "Mining farm design and site acquisition",
      "Operational optimization and scaling strategies",
      "Technical support and troubleshooting",
    ],
    content2:
      "Whether you’re building your first mining rig or planning a multi-megawatt facility, we’re here to guide you every step of the way.",
    content3: "From concept to hash — your mining success, powered by Dahab.",
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
      viewport={{ once: false, amount: 0.08 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <p className="text-[#1ECBAF] text-xs tracking-[5px]">OUR SERVICES</p>
      <h4 className="gradient-heading md:text-4xl text-3xl font-semibold pb-5">
        Unlock Our Mining Solutions
      </h4>
      <div className="grid grid-cols-1 gap-7">
        {data.map((item) => (
          <ServicesCard
            key={item.id}
            icon={item.img}
            title={item.title}
            content={item.content}
            list={item.list}
            content2={item.content2}
            content3={item.content3}
          />
        ))}
      </div>
    </motion.section>
  );
}
