import { motion } from "framer-motion";
import FooterLinks from "../../FooterLinks";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FounderCard({
  img,
  fb,
  inst,
  link,
  name,
  role,
  about,
}) {
  return (
    <motion.div
      className="p-3 py-5 bg-[#000618] text-white rounded-lg flex flex-col gap-5 justify-between items-center max-w-[350px]"
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

        transition: { duration: 0.6, ease: "easeOut" },
      }}
      style={{
        borderStyle: "solid",
      }}
    >
      <div className="flex flex-col justify-between gap-5 items-center h-full">
        <div className="flex flex-col gap-5 items-center">
          <img
            src={img}
            className="rounded-full w-24 h-24 object-cover border-2 border-[#4D8390]"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{role}</p>
          </div>
          <p className="text-start text-sm">{about}</p>
        </div>

        <div className="flex gap-5 text-base font-normal text-white">
          <FooterLinks link={inst} icon={<FaInstagram />} />
          {/* <FooterLinks link={fb} icon={<FaFacebookF />} /> */}
          <FooterLinks link={link} icon={<FaLinkedinIn />} />
        </div>
      </div>
    </motion.div>
  );
}
