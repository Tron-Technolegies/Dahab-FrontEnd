import { Link } from "react-router-dom";
import FeaturedCarousel from "./FeaturedCarousel";
import { motion } from "framer-motion";
import { handleChatClick } from "../../../utils/whatsapp";

export default function Miners() {
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <section className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Triggers when 20% of the section is visible
        variants={sectionVariants}
        className="text-center"
      >
        <p className="text-base font-semibold text-btnGreen py-5 z-[5]">
          Miners
        </p>
        <h1 className="md:text-[38px] text-3xl font-semibold gradient-heading z-[5] py-3">
          Start Mining Crypto Currency in UAE & Ethiopia with Dahab Miners
        </h1>
        <h2 className="mt-5 mb-7 max-w-[500px] mx-auto">
          {/* <a href="https://www.dahabminers.com/buy-bitcoin-miners-uae">Buy Bitcoin Machines in Dubai.</a>{" "} */}
          Get ready to mine into the fortune of crypto coins with the best
          crypto mining hardware from Dahab Miners.
        </h2>
        <div className="flex justify-center items-center md:flex-row flex-col">
          <Link
            to={"/buy-bitcoin-miners-uae"}
            className="px-3 py-2 md:my-5 rounded-lg text-base text-white font-semibold border border-[#1ECBAF] nav-link hover:shadow-lg hover:shadow-[#1ECBAF] z-[5]"
          >
            Buy a Mining Machine
          </Link>
          <button
            onClick={handleChatClick}
            className="px-3 py-2 md:my-5 rounded-lg text-base m-2 text-white font-semibold border border-[#1ECBAF] nav-link hover:shadow-lg hover:shadow-[#1ECBAF]"
          >
            Free consultation
          </button>
        </div>
      </motion.div>
      <FeaturedCarousel />
    </section>
  );
}
