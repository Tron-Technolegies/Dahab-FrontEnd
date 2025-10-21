import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Jean",
    image: "/home/review-5.jpeg",
    review:
      "I’ve mined with Dahab Miners for over a year. Their reliable crypto mining hosting, near 100% uptime, clear pricing, and expert support made everything smooth even as a beginner. No hidden fees, just consistent earnings. Dahab Miners is a trusted, professional choice for Bitcoin mining",
  },
  {
    name: "Omar Al Mansoori",
    image: "/home/review-1.png",
    review:
      "I’ve had uptime issues with other hosting companies, but DAHAB Miners is on another level. My miners have been running at full capacity with almost zero downtime, and their repair services are exceptional. Whenever there’s an issue, their team gets it fixed fast and efficiently, reducing downtime keeping my earnings steady",
  },
  {
    name: "Sergei Ivanov",
    image: "/home/review-2.png",
    review:
      "I’ve worked with mining companies all over the world, but DAHAB Miners stands out. Their setup process was quick and hassle-free, and I was mining within days. On top of that, they don’t take any commissions every bit of what I earn is mine. It’s rare to find a company this reliable.",
  },
  {
    name: "Hans Müller",
    image: "/home/review-4.png",
    review:
      " I have been trading crypto for a long time now, yet I was hesitant about crypto mining at first, but DAHAB Miners made it so simple. I bought my first miner from them, and they even hosted it for me. The team is incredibly helpful, and now I’m making steady profits from both mining and trading!",
  },
  {
    name: "Johann Krause",
    image: "/home/review-3.png",
    review:
      "Hosting my miners in Ethiopia with DAHAB Miners has been a game-changer. The low costs, the stable climate, and their modern facilities have given me incredible returns. The conditions are optimal, and downtime is almost nonexistent. This was the smartest investment I’ve ever made.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h4 className="text-base font-light tracking-widest text-btnGreen text-center">
          TESTIMONIALS
        </h4>
        <h4 className="text-[40px] font-semibold gradient-heading text-center">
          What our clients say about us
        </h4>
      </motion.div>

      <Slider {...settings} className="my-10">
        {testimonials.map((x, index) => (
          <div key={index} className="px-2">
            <TestimonialCard name={x.name} content={x.review} image={x.image} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
