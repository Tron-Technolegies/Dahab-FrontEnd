import React from "react";
import ProductCategoryCard from "./ProductCategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function ProductCategorySection() {
  const data = [
    {
      id: 1,
      img: "/buycarousel.webp",
      title: "Air Cooled",
      content:
        "Take your mining to the next level with our state-of-the-art Air-Cooled Crypto Mining Machine—engineered for high performance and long-term stability, even under intensive workloads.",
    },
    {
      id: 2,
      img: "/buycarousel.webp",
      title: "Immersion",
      content:
        "Step into the future of mining with our Immersion-Cooled Crypto Mining Machine—a next-gen solution designed for maximum efficiency, thermal stability, and serious profitability.",
    },
    {
      id: 3,
      img: "/buycarousel.webp",
      title: "Hydro",
      content:
        "Designed for peak efficiency and industrial-scale operations, our Hydro-Cooled Mining Machines use water-based liquid cooling to deliver unmatched stability, quieter operation, and boosted performance—even in the harshest environments.",
    },
    {
      id: 4,
      img: "/buycarousel.webp",
      title: "Home Miner",
      content:
        "Get started with crypto mining from the comfort of your home with our specially designed Home Miner Machines—easy to use, energy-efficient, and optimized for residential environments.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 text-white flex flex-col gap-5 items-center"
    >
      <div className="flex flex-col items-center max-w-[600px]">
        <h4 className="gradient-heading md:text-4xl text-3xl font-semibold py-5">
          Product Categories
        </h4>
        <p className="text-center text-sm">
          Explore our range of crypto mining solutions, designed to suit every
          miner—from beginners to blockchain pros. At Dahab Crypto Mining, we
          combine performance, reliability, and innovation to help you mine
          smarter.
        </p>
      </div>

      <Slider {...settings} className="my-10 w-full">
        {data.map((x) => (
          <div key={x.id}>
            <ProductCategoryCard
              img={x.img}
              title={x.title}
              content={x.content}
            />
          </div>
        ))}
      </Slider>
    </motion.section>
  );
}
