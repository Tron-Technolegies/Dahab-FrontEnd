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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7434033888167!2d54.4914816!3d24.350669999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40015485e1e755f5%3A0xc818c6cfea82bf81!2sDAHAB%20MINERS%20ELECTRICAL%20CONTRACTING%20-%20L.L.C!5e1!3m2!1sen!2sin!4v1762000425053!5m2!1sen!2sin"
          className="overflow-hidden w-[320px] sm:w-[400px] md:w-[800px] xl:w-[1000px] h-[400px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          href="https://www.google.com/maps/place/DAHAB+MINERS+ELECTRICAL+CONTRACTING+-+L.L.C/@24.35067,54.4914816,793m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40015485e1e755f5:0xc818c6cfea82bf81!8m2!3d24.35067!4d54.4914816!16s%2Fg%2F11yh50zc4d?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
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
