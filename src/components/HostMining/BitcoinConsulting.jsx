import React from "react";
import { handleChatClick } from "../../utils/whatsapp";

export default function BitcoinConsulting() {
  return (
    <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col items-center gap-5">
      {/* Heading and Intro */}
      <div className="w-full max-w-[800px] text-left">
        <h5 className="gradient-heading text-[40px] font-semibold">
          Expert Guidance for Your Mining Success
        </h5>
        <p className="text-white mt-2 max-w-[600px]">
          Get free consultation, expert purchasing advice, miner configuration
          assistance, and tailored investment strategies—all at no extra cost.
        </p>
      </div>

      {/* Services & Image */}
      <div className="p-8 customborder flex flex-col md:flex-row gap-10 items-center justify-between w-full">
        {/* Left Column: Services */}
        <div className="text-white flex flex-col items-start gap-6 max-w-[600px]">
          {[
            {
              icon: "/host/icon-1.png",
              title: "Purchasing advice",
              detail: "Choose the best miner for your needs",
            },
            {
              icon: "/host/icon-2.png",
              title: "Free Miner Configuration",
              detail: "We help set up pools, worker IDs, and more.",
            },
            {
              icon: "/host/icon-3.png",
              title: "Investment Strategy Planning",
              detail: "Get insights to maximize your mining profits",
            },
            {
              icon: "/host/icon-4.png",
              title: "Hassle-Free Setup",
              detail: "From selection to deployment, we make it easy.",
            },
          ].map(({ icon, title, detail }, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img src={icon} alt={title} className="w-5 mt-1" />
              <p>
                {title} -{" "}
                <span className="font-extralight">{detail}</span>
              </p>
            </div>
          ))}

          <button
            className="px-6 py-2 rounded-full btn-bg text-white mt-4"
            onClick={() => handleChatClick()}
          >
            Know More
          </button>
        </div>

        {/* Right Column: Image */}
        <img
          src="/5.jpg"
          alt="Crypto mining hosting UAE"
          className="md:max-w-[400px] w-full max-w-[350px] rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
