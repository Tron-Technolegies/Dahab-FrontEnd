import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function FAQCard({
  count,
  question,
  answer,
  active,
  setActive,
}) {
  const handleClick = () => {
    if (active === count) {
      setActive(0);
    } else {
      setActive(count);
    }
  };

  const variants = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };
  return (
    <motion.div
      className={`text-white p-5 rounded-full duration-500 ease-in-out ${
        active === count && "row-span-2"
      }`}
      onClick={() => handleClick()}
      initial={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
        borderWidth: "2px",
        borderImageSlice: 1,
        borderRadius: "12px",
        scale: 1,
      }}
      whileHover={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, #A5E7F380 50%, #0194FE80 100%)",
        borderWidth: "2px",
        boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      style={{
        borderStyle: "solid",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          {/* <p className="bg-[#000618] w-10 h-10 rounded-full flex justify-center items-center border border-[#0194FE] text-[#0194FE]">
            {count}
          </p> */}
          <p>{question}</p>
        </div>
        <button className="text-[#0194FE] text-3xl">+</button>
      </div>
      <AnimatePresence>
        {active === count && (
          <motion.p
            key={`faq-answer-${count}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="mt-5 px-5 text-sm py-2 bg-[#000618] rounded-lg"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
