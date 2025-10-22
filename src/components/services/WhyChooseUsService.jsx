import React from "react";
import { motion } from "framer-motion";
import { IoHardwareChipSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";

export default function WhyChooseUsService() {
  const benefits = [
    {
      title: "Latest-Generation Hardware",
      description:
        "We deploy top-of-the-line ASIC miners from the industry's leading brands, ensuring you always mine with efficient, high-performance equipment.",
      icon: <IoHardwareChipSharp className="text-[#55a2fa]" />,
    },
    {
      title: "Advanced Cooling Technology",
      description:
        "Our facilities utilize both traditional air cooling and next-gen immersion cooling techniques to keep hardware at optimal temperatures. This means better performance and longevity for your miners – even in high-heat environments.",
      icon: "❄️",
    },
    {
      title: "Low-Cost, High-Yield Operations",
      description:
        "By operating in energy-rich locations and at scale, we secure electricity rates as low as 3–5¢ per kWh, giving you some of the lowest mining costs globally. You keep more of what your miners earn.",
      icon: <FaArrowTrendUp className="text-[#55a2fa]" />,
    },
    {
      title: "End-to-End Support",
      description:
        "From hardware procurement and installation to 24/7 monitoring, maintenance, and consulting, our expert team has you covered. We handle the hard parts – you focus on collecting your crypto rewards.",
      icon: <LuHeartHandshake className="text-[#55a2fa]" />,
    },
  ];

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-16 sm:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center items-center mb-12 sm:mb-16">
          <h2 className="gradient-heading text-2xl sm:text-3xl lg:text-4xl font-semibold pb-4 items-center text-center">
            Why Choose Dahab Miners?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Dahab Miners is committed to delivering maximum performance at minimal cost for our
            clients. Here's what makes us the ideal crypto mining partner:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 lg:gap-5 mb-16 sm:mb-20 lg:mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[#060E23] rounded-xl p-6 sm:p-8 flex flex-col gap-4"
              initial={{
                borderImageSource:
                  "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
                borderWidth: "2px",
                borderImageSlice: 1,
                scale: 1,
              }}
              // whileHover={{
              //   borderImageSource:
              //     "linear-gradient(to bottom right, #004DF480 0%, #A5E7F380 50%, #0194FE80 100%)",
              //   boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",
              //   scale: 1.02,
              //   transition: { duration: 0.4, ease: "easeOut" },
              // }}
              // style={{
              //   borderStyle: "solid",
              // }}
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1ECBAF]">{benefit.title}</h3>
              <p className="text-sm sm:text-sm text-gray-300 text-justify leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto sm:p-10">
          <motion.div
            className=" rounded-xl p-6 sm:p-8 lg:p-10 text-center"
            // initial={{
            //   borderImageSource:
            //     "linear-gradient(to right, #1ECBAF80 0%, #2295B780 50%, #1ECBAF80 100%)",
            //   borderWidth: "2px",
            //   borderImageSlice: 1,
            //   scale: 1,
            // }}
            // whileHover={{
            //   borderImageSource: "linear-gradient(to right, #1ECBAF 0%, #2295B7 50%, #1ECBAF 100%)",
            //   boxShadow: "0px 0px 25px rgba(30, 203, 175, 0.5)",
            //   scale: 1.01,
            //   transition: { duration: 0.4, ease: "easeOut" },
            // }}
            // style={{
            //   borderStyle: "solid",
            // }}
          >
            <h3 className="gradient-heading text-2xl sm:text-3xl lg:text-4xl font-semibold pb-6 items-center text-center">
              Making Crypto Mining Accessible to Everyone
            </h3>

            <div className="space-y-4 text-sm sm:text-base lg:text-md text-gray-300 leading-relaxed mb-8">
              <p>
                At Dahab Miners, we're passionate about democratizing the world of Bitcoin and
                crypto mining. Cryptocurrencies are the future, and mining offers a unique
                opportunity for everyday people to build wealth from that future. Our services are
                designed to open up this opportunity to newcomers and veterans alike whether you're
                a student, a home investor, or a business, you can plug into the profit potential of
                mining without running into the usual roadblocks.
              </p>

              <p>
                Dahab Miners is making crypto mining available to everyone. Our mission is to break
                down barriers so that anyone can participate in the crypto revolution. You don't
                need technical expertise or a warehouse of equipment to start mining with us just a
                desire to earn crypto. We believe crypto mining should be as accessible as possible,
                and our Digital Miner program is built to deliver exactly that.
              </p>
            </div>

            <div className=" gap-10 space-y-6 justify-center items-center">
              <p className="text-base sm:text-lg text-[#2295B7] font-semibold">
                Ready to start mining without the headaches?
              </p>

              <a
                href="https://mining.dahabminers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bg px-6 py-3 rounded-lg text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity inline-block"
              >
                Learn more Dahab Digital Mining
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
