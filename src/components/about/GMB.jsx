import { motion } from "framer-motion";
import React from "react";

export default function GMB() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      <motion.div
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
          scale: 1.01,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        style={{
          borderStyle: "solid",
        }}
        className="md:p-5 p-2 rounded-md border flex flex-col gap-5 items-center justify-center overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1205725224554!2d54.06791347509289!3d23.056040779150297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e66cd25347a9cb1%3A0x545d311f79ad9ba8!2sDahab%20Miners%3A%20Crypto%20mining%20company!5e0!3m2!1sen!2sin!4v1748344699469!5m2!1sen!2sin"
          //   width="1000"
          //   height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="overflow-hidden w-[320px] sm:w-[400px] md:w-[800px] xl:w-[1000px] h-[400px]"
        ></iframe>
        <a
          href="https://www.google.com/maps/place/Dahab+Miners:+Crypto+mining+company/@23.0560408,54.0679135,17z/data=!3m1!4b1!4m6!3m5!1s0x3e66cd25347a9cb1:0x545d311f79ad9ba8!8m2!3d23.0560408!4d54.0704884!16s%2Fg%2F11x2h_3f3_?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#7decda] rounded-lg btn-bg "
        >
          View us on Google
        </a>
      </motion.div>
    </div>
  );
}
