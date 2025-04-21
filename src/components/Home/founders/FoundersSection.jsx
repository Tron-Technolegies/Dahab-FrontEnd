import { motion } from "framer-motion";
import React from "react";
import FounderCard from "./FounderCard";

const data = [
  {
    id: 1,
    img: "/home/review-1.png",
    name: "Name",
    role: "Founder & CEO",
    about:
      "Mohamed is the visionary behind Dahab Miners. With a pioneering spirit and a strong foundation in blockchain technology, he founded the company to empower miners with scalable, secure, and future-ready crypto mining solutions.",
    fb: "#",
    inst: "#",
    link: "#",
  },
  {
    id: 2,
    img: "/home/review-2.png",
    name: "Name",
    role: "Founder & CEO",
    about:
      "Mohamed is the visionary behind Dahab Miners. With a pioneering spirit and a strong foundation in blockchain technology, he founded the company to empower miners with scalable, secure, and future-ready crypto mining solutions.",
    fb: "#",
    inst: "#",
    link: "#",
  },
  {
    id: 3,
    img: "/home/review-3.png",
    name: "Name",
    role: "Founder & CEO",
    about:
      "Mohamed is the visionary behind Dahab Miners. With a pioneering spirit and a strong foundation in blockchain technology, he founded the company to empower miners with scalable, secure, and future-ready crypto mining solutions.",
    fb: "#",
    inst: "#",
    link: "#",
  },
];

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
      <p className="text-sm text-center">
        The visionaries behind Dahab Miners driving innovation and Excellence in
        the Crypto mining industry
      </p>
      <div className="grid md:grid-cols-3 gap-9 my-5">
        {data.map((item) => (
          <FounderCard
            key={item.id}
            name={item.name}
            img={item.img}
            role={item.role}
            about={item.about}
            fb={item.fb}
            inst={item.inst}
            link={item.link}
          />
        ))}
      </div>
    </motion.section>
  );
}
