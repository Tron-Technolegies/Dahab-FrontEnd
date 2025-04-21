import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { events } from "../../../utils/events&Celebrations";
import EventCard from "./EventCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 50,
  slidesToShow: 2, // Number of slides to show at a time
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default function EventSection() {
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
      <h4 className="gradient-heading md:text-4xl text-3xl font-semibold pb-2">
        Events & Celebrations
      </h4>
      <p className="text-sm text-center max-w-[550px]">
        At DahabMiners, we believe in more than just blockchain and hash
        rates—we believe in community, innovation, and celebrating milestones
        together. From major achievements to community-driven initiatives,
        here’s how we keep the energy high and the crypto vibes strong.
      </p>
      <Slider {...settings} className="my-10 w-full">
        {events.map((x) => (
          <div key={x.id} className="">
            <EventCard
              img={x.img}
              title={x.title}
              date={x.date}
              location={x.location}
              id={x.id}
            />
          </div>
        ))}
      </Slider>
    </motion.section>
  );
}
