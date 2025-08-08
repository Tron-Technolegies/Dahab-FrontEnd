import React from "react";
import { handleChatClick } from "../../utils/whatsapp";

export default function ContactButtonSection() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <div className="p-5 px-10 customborder flex md:flex-row flex-col gap-5 justify-around items-center">
        {/* Left Side: Heading and Paragraph */}
        <div className="max-w-[400px] text-left">
          <h5 className="text-[#0194FE] text-3xl font-semibold">
            Ready to Start Mining?
          </h5>
          <p className="text-white mt-2">
            Whether you need a miner, hosting, or expert guidance, we’re here to
            help. Let’s get you mining today!
          </p>
        </div>

        {/* Right Side: Button */}
        <div>
          <button
            className="px-10 py-2 btn-bg rounded-full text-white"
            onClick={() => handleChatClick()}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
