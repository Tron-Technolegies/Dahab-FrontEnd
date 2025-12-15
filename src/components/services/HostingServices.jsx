import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HostingCard = ({ title, subtitle, features, buttonText, buttonLink, gradient }) => {
  return (
    <motion.div
      className="bg-[#060E23] rounded-xl overflow-hidden flex flex-col h-full"
      initial={{
        borderImageSource: gradient,
        borderWidth: "2px",
        borderImageSlice: 1,
        scale: 1,
      }}
      // whileHover={{
      //   borderImageSource: gradient.replace("transparent 50%", "#A5E7F380 50%"),
      //   boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",
      //   scale: 1.02,
      //   transition: { duration: 0.4, ease: "easeOut" },
      // }}
      style={{
        borderStyle: "solid",
      }}
    >
      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#1ECBAF]">{title}</h3>
        <p className="text-sm sm:text-xl text-[#2295B7] font-medium">{subtitle}</p>

        <div className="flex flex-col gap-3 text-sm sm:text-base text-gray-300 leading-relaxed flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <p>{feature}</p>
            </div>
          ))}
        </div>

        <Link
          to={buttonLink}
          className="btn-bg px-5 py-2.5 rounded-lg text-white text-sm sm:text-base font-medium mt-4 hover:opacity-90 transition-opacity inline-block text-center"
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

export default function HostingServices() {
  const ethiopiaFeatures = [
    "Maximize profits by hosting your miners in our Ethiopia facility, which boasts some of the cheapest electricity rates in the world (around $0.05 per kWh) thanks to 100% renewable hydropowernews.cryptos.com. Our Ethiopian farm offers up to 30 MW of capacity with containerized infrastructure for easy scaling. The high-altitude cool climate and robust grid mean your miners run efficiently with minimal downtime.",
    "Get industry-leading low costs and sustainable power in Ethiopia.",
  ];

  const uaeFeatures = [
    "Plug into the Middle East’s mining hotspot. Our Abu Dhabi data center provides reliable 24/7 power (from $0.06/kWh electricity) and cutting-edge cooling systems to beat the desert heat. We guarantee high uptime (over 95%) by leveraging advanced air and immersion cooling and a stable energy supply backed by Abu Dhabi’s oil, gas, and nuclear infrastructure. With capacity for up to 10 MW, our UAE facility easily supports deployments from single miners to industrial farms. We also maintain strict on-site security (24/7 monitoring, staff, and insurance coverage for your equipment) so your investment stays safe. Scale your mining operation with confidence in the UAE",
  ];

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-32">
          <HostingCard
            title="Hosting in Ethiopia"
            subtitle="Ultra-Low-Cost, Green Energy"
            features={ethiopiaFeatures}
            buttonText="Know more about Ethiopia hosting"
            buttonLink="/host-miners/bitcoin-mining-hosting-ethiopia"
            gradient="linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)"
          />

          {/* UAE Card */}
          <HostingCard
            title="Hosting in UAE (Abu Dhabi)"
            subtitle="Secure & Scalable"
            features={uaeFeatures}
            buttonText="Know more about UAE hosting"
            buttonLink="/host-miners/bitcoin-mining-hosting-abu-dhabi"
            gradient="linear-gradient(to bottom right, #0194FE80 0%, transparent 50%, transparent 50%, #004DF480 100%)"
          />
        </div>

        {/* ASIC Repair Service Section */}
        <div className="max-w-6xl mx-auto text-center ">
          <motion.div
            className=" rounded-xl p-6 sm:p-8 lg:p-10"
            // initial={{
            //   borderImageSource:
            //     "linear-gradient(to right, #004DF480 0%, #1ECBAF80 50%, #0194FE80 100%)",
            //   borderWidth: "2px",
            //   borderImageSlice: 1,
            //   scale: 1,
            // }}
            // whileHover={{
            //   borderImageSource:
            //     "linear-gradient(to right, #004DF480 0%, #1ECBAF 50%, #0194FE80 100%)",
            //   boxShadow: "0px 0px 20px rgba(30, 203, 175, 0.4)",
            //   scale: 1.01,
            //   transition: { duration: 0.4, ease: "easeOut" },
            // }}
            style={{
              borderStyle: "solid",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold gradient-heading mb-3">
              ASIC Miner Repair in UAE
            </h2>
            <p className="text-lg sm:text-xl text-[#1ECBAF] font-medium mb-6">
              Expert Maintenance & Fixes
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Keep your mining hardware running at peak performance with our chip-level repair and
              maintenance services in Dubai/UAE. Dahab's certified technicians can diagnose and fix
              issues on all major ASIC brands Bitmain Antminer, WhatsMiner, IceRiver, Avalon, and
              more. From replacing burnt-out hashboard chips to PSU repairs and preventive cleaning,
              we've got you covered. Our transparent pricing and fast turnaround minimize your
              downtime and costs: no surprise fees, just efficient service to get your miners back
              online fast.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Don't let faulty hardware stop your earnings our UAE repair center will have you
              mining again in no time.
            </p>
            <Link to={"/asic-miner-repair-dubai"}>
              <button className="btn-bg px-5 py-2.5 rounded-lg text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity inline-block">
                Learn about Repair Services
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
