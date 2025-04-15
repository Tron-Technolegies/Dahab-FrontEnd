import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function CryptoCurrencySection() {
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <section className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex lg:flex-row flex-col justify-between items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
        variants={sectionVariants}
        className="max-w-[610px] flex flex-col lg:items-start items-center lg:text-left text-center gap-10"
      >
        {/* <p className="text-base font-semibold text-homeBgGradient">
          Unlock the potential of crypto
        </p> */}
        <div>
          <h4 className="text-5xl pb-3 font-semibold gradient-heading z-[2]">
            Empower Your Mining Journey with DAHAB Miners
          </h4>
          <h3 className="text-base font-semibold text-homeBgGradient">
            <a href="https://dahabminers.com/">Crypto Mining in UAE</a>
          </h3>
        </div>
        <p className="text-sm font-medium text-white leading-7 max-w-[500px]">
          From buying top-tier mining machines to hosting them in secure
          facilities and ensuring seamless repairs, we cover every step of your
          crypto mining needs. Start mining smarter with us today.
        </p>
        <Link
          to={"/buy-bitcoin-miners-uae"}
          className="px-4 py-2 mb-4 btn-bg text-white text-base font-semibold rounded-lg w-fit hover:bg-btnHover nav-link"
        >
          View Products
        </Link>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
        variants={sectionVariants}
      >
        <div className="max-w-[590px] max-h-[645px]">
          <motion.img
            animate={{
              rotateZ: [0, 360], // Full rotation on Z-axis (clockwise)
            }}
            transition={{
              rotateZ: {
                repeat: Infinity,
                duration: 20, // Rotation duration
                ease: "linear",
              },
            }}
            src="/home/crypto.png"
            alt="Explore-the-potential-of-crypto-mining-in-abu-dhabi-UAE"
            title="Dahab Miners is the premier crypto mining service in UAE Explore our Bitcoin machines in Abu Dhabi and maximize your cryptocurrency earnings!"
          ></motion.img>
        </div>
      </motion.div>
    </section>
  );
}
