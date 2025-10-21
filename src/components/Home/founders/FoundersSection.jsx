import { motion } from "framer-motion";

import FounderCard from "./FounderCard";

const data = [
  {
    id: 1,
    img: "/home/founder1.webp",
    name: "Rizwan Kamarudheen",
    role: "Co-Founder & Chief Executive Officer",
    about:
      "Born and raised in the UAE, Rizwan has been a pioneer in the region’s crypto mining space since 2020 well before founding Dahab Miners. With a deep understanding of the challenges miners face in the UAE, he has developed strategic, streamlined solutions tailored to the local environment. Prior to Dahab, Rizwan held leadership roles at renowned industry firms such as GreenGate and Tron Digital. His background as a technical lead in energy focused projects, especially in the EV sector at GreenGate, has played a vital role in shaping Dahab’s success and sustainability driven operations.",
    fb: "#",
    inst: "https://www.instagram.com/kf_rizwan?igsh=b2Y2bG95cGg1MXlw",
    link: "https://www.linkedin.com/in/rizwan-kamar-ab117a172/",
    alt: "Rizwan Kamarudheen Co-Founder & Chief Executive Officer",
  },
  {
    id: 2,
    img: "/home/founder2.webp",
    name: "Ahmed Rameez",
    role: "Co-Founder & Executive Director",
    about:
      "Also born and raised in the UAE, Ahmed has been actively involved in the crypto mining scene alongside Rizwan since 2020. Coming from a family with deep business roots, he has always had a keen entrepreneurial spirit. In addition to co-founding Dahab Miners, Ahmed leads several successful ventures across industries including F&B, FMCG, and Real Estate. Hisdiverse business experience brings a valuable strategic perspective to Dahab’s leadership. ",
    fb: "#",
    inst: "https://www.instagram.com/ah_rameez?igsh=eHE2cnpvcHhpMzEw",
    link: "#",
    alt: "Ahmed Rameez Co-Founder & Executive Director",
  },
  // {
  //   id: 3,
  //   img: "/home/review-3.png",
  //   name: "Name",
  //   role: "Founder & CEO",
  //   about:
  //     "Mohamed is the visionary behind Dahab Miners. With a pioneering spirit and a strong foundation in blockchain technology, he founded the company to empower miners with scalable, secure, and future-ready crypto mining solutions.",
  //   fb: "#",
  //   inst: "#",
  //   link: "#",
  // },
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
      viewport={{ once: false, amount: 0.1 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <h4 className="gradient-heading md:text-4xl text-3xl font-semibold pb-5">
        Meet our Founders
      </h4>
      <p className="text-sm text-center">
        The visionaries behind Dahab Miners driving innovation and Excellence in the Crypto mining
        industry
      </p>
      <div className="grid md:grid-cols-2 gap-9 my-5">
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
            alt={item.alt}
          />
        ))}
      </div>
    </motion.section>
  );
}
