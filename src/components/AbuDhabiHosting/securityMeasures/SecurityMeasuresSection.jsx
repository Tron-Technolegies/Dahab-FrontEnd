import { motion } from "framer-motion";
import React from "react";

export default function SecurityMeasuresSection() {
  const sectionVariants = {
    hidden: { scale: 0.95, opacity: 0 },
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
      className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-10 text-white"
    >
      <h4 className="gradient-heading text-3xl font-semibold text-center">
        Security Measures at Dahab Miners' Hosting Facilities
      </h4>

      <div className="p-6 md:p-10 customborder flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col gap-5">
          <p className="leading-relaxed">
            We take security seriously to ensure your mining hardware is
            protected at all times. Our facilities are equipped with advanced
            security protocols to safeguard your investment.
          </p>
          <ul className="ml-5 list-disc space-y-3 font-light">
            <li>
              <span className="font-semibold">
                24/7 Surveillance & Monitoring:
              </span>{" "}
              High-definition cameras monitor our operations round the clock,
              detecting and recording any suspicious activities.
            </li>
            <li>
              <span className="font-semibold">
                On-Site Security & Staff Presence:
              </span>{" "}
              Trained personnel are present 24/7 to oversee operations and
              respond immediately to any issues.
            </li>
            <li>
              <span className="font-semibold">
                Liability Protection Against Negligence:
              </span>{" "}
              Dahab Miners takes full responsibility for damages caused by
              negligence (e.g., theft, fire), excluding natural disasters.
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full">
          <img
            src="/abudhabi/hostingfacilities_abudhabi.webp"
            alt="Modern cryptocurrency mining facility at Dahab Miners Hosting Crypto Mining in UAE with multiple ASIC miners, industrial control panels, and high-capacity power cables in a secure environment."
            className="w-full h-auto rounded-lg shadow-md object-cover max-h-[400px]"
          />
        </div>
      </div>
    </motion.section>
  );
}
