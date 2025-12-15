import ProductCategoryCard from "./ProductCategoryCard";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProductCategorySection() {
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  const data = [
    {
      id: 1,
      img: "/home/category-3.webp",
      title: "Air Cooled",
      content:
        "Explore our selection of air-cooled mining machines, designed for efficient performance in well-ventilated environments. This range includes top models from industry leaders like Antminer (Bitmain), WhatsMiner, and more—perfect for mining Bitcoin, Litecoin, and Kaspa using algorithms such as SHA-256, Scrypt, and kHeavyHash. Ideal for both personal and professional mining setups across the UAE and Ethiopia, these machines offer reliable output with simplified cooling requirements",
    },
    {
      id: 2,
      img: "/home/category-2.webp",
      title: "Immersion",
      content:
        "Take your mining to the next level with our immersion cooling-compatible miners, built for maximum thermal performance and hardware longevity.Discover high-efficiency immersion-ready mining machines, engineered to deliver consistent hashrates in liquid-cooled environments. This range includes models from trusted names like IceRiver, Antminer, and Jasminer, supporting algorithms such as SHA-256, kHeavyHash, and Etchash. Immersion cooling enables optimized performance and extended hardware life—ideal for enterprise-scale crypto mining operations",
    },
    {
      id: 3,
      img: "/home/category-4.webp",
      title: "Hydro",
      content:
        "Our collection of hydro-cooled miners offers high-performance solutions for miners looking to reduce heat and noise while maximizing uptime. Featuring advanced models from Antminer Hydro and WhatsMiner Hydro, these machines are optimized for SHA-256 algorithm mining, making them an excellent choice for large-scale Bitcoin mining. Built for durability and consistent output, hydro miners are perfect for high-density hosting environents. Widely used in both the UAE and Ethiopian sites, these systems are suited for scalable mining farms requiring reliable uptime and noise control.",
    },
    {
      id: 4,
      img: "/home/category-1.webp",
      title: "Home Miner",
      content:
        "Browse compact, efficient home crypto mining machines from trusted brands like Elphapex, Goldshell, iPollo, and IceRiver—designed for hobbyists and small-scale investors. Ideal for Scrypt, Blake2s, and kHeavyHash algorithms, these units support coins like Litecoin, Dogecoin, and Kaspa while offering low-noise and plug-and-play usability. Whether you're mining at home or starting small, Dahab Miners provides mining machines in UAE and Ethiopia tailored for every user level.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    touchThreshold: 10,
    swipe: true,
    useCSS: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          infinite: true,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          swipe: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          infinite: true,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          swipe: true,
          variableWidth: false,
          touchThreshold: 5,
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
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 text-white flex flex-col gap-5 items-center"
    >
      <div className="flex flex-col items-center max-w-[600px]">
        <h4 className="gradient-heading md:text-4xl text-3xl font-semibold py-5">
          Product Categories
        </h4>
        <p className="text-left text-sm ">
          Explore our range of crypto mining solutions, designed to suit every
          miner from beginners to blockchain pros. At Dahab Crypto Mining, we
          combine performance, reliability, and innovation to help you mine
          smarter.
        </p>
      </div>

      <div className="my-10 w-full [&_.slick-list]:mx-0 [&_.slick-slide]:px-2 [&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button:before]:text-[#0194FE] [&_.slick-dots_li_button:before]:text-xs [&_.slick-dots_li.slick-active_button:before]:text-[#48E5E1] [&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-slide]:transition-transform [&_.slick-slide]:duration-300 [&_.slick-slide:active]:scale-[0.98]">
        <Slider {...settings}>
          {data.map((x) => (
            <div key={x.id} className="px-2 focus:outline-none">
              <ProductCategoryCard
                img={x.img}
                title={x.title}
                content={x.content}
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}
