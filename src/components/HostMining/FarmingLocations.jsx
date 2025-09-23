import React from "react";
import FarmLocationCard from "./FarmLocationCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { handleEmailEnquiry } from "../../utils/whatsapp";

export default function FarmingLocations() {
  const navigate = useNavigate();

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
      className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col items-center"
    >
      <div className="max-w-[600px] text-center mb-8">
        <h4 className="gradient-heading text-[40px] font-semibold">
          Bitcoin Mining Farm Locations
        </h4>
        <p className="text-sm text-white mt-2 text-start">
          A service that allows our customers to concentrate on the mining itself
          while outsourcing the operation of the infrastructure to us.
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-10 my-10">
        {/* Abu Dhabi Card */}
        <FarmLocationCard
          image={"/1.jpg"}
          power={"From $0.06 / kWh"}
          location={"Abu Dhabi"}
          hostingInfo={[
            "Hosting price: from $0.06 / kWh",
            "Minimum order quantity: 1 piece",
            "Setup fee; from $75",
          ]}
          generalInfo={[
            "Power Source: Various",
            "Capacity: 5 MW",
            "Accommodation: Various",
            "Security: Team on the site",
            "Camera surveillance: 24x7",
          ]}
          hostingAction={() =>
            navigate("/host-miners/bitcoin-mining-hosting-abu-dhabi")
          }
          whatsappAction={() =>
            handleEmailEnquiry({ email: `hosting in abudhabi` })
          }
        />

        {/* Ethiopia Card */}
        <FarmLocationCard
          image={"/2.jpg"}
          power={"From $0.05 / kWh"}
          location={"Ethiopia"}
          hostingInfo={[
            "Hosting price: from $0.05 / kWh",
            "Minimum order quantity: 50 piece",
            "Setup fee; None",
          ]}
          generalInfo={[
            "Power Source: Hydropower",
            "Capacity: 10 MW",
            "Accommodation: Warehouse",
            "Security: Team on the site",
            "Camera surveillance: 24x7",
          ]}
          hostingAction={() =>
            navigate("/host-miners/bitcoin-mining-hosting-ethiopia")
          }
          whatsappAction={() =>
            handleEmailEnquiry({ email: `hosting in Ethiopia` })
          }
        />
      </div>
    </motion.section>
  );
}
