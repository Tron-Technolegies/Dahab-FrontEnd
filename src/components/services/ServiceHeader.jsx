import React from "react";
import { handleChatClick } from "../../utils/whatsapp";

export default function ServiceHeader() {
  return (
    <div className="w-full">
      <div className="relative h-[100vh] flex items-center justify-center text-center text-white bg-[url('/service-hero.webp')] bg-cover">
        <img
          src="/service-hero.webp"
          alt="Technician repairing crypto miners at Dahab Digital Mining facility in Ethiopia and UAE - Bitcoin mining in Dubai."
          className="hidden"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Hero Content */}
        <div className="relative z-10 px-5 md:px-10 lg:px-[120px] xl:px-[180px]">
          <h1 className="text-2xl gradient-heading py-2 sm:text-4xl lg:text-5xl  font-bold max-w-[1000px] mx-auto">
            Start Mining Today with the Best Crypto Mining Services in UAE & Ethiopia
          </h1>
          <p className="mt-3 max-w-[900px] mx-auto text-md sm:text-lg">
            Ready to dive into cryptocurrency mining? Dahab Miners offers a one-stop solution to
            start mining Bitcoin and other cryptos easily. Our comprehensive ecosystem covers
            everything from hosting facilities in the UAE and Ethiopia to innovative digital mining
            options and expert ASIC repair services. It's like cloud mining but better. We handle
            the heavy lifting while you reap the rewards.
          </p>
          <button
            className="btn-bg px-5 py-2 mt-4 rounded-lg text-white text-sm sm:text-base w-fit mx-auto lg:mx-0"
            onClick={handleChatClick}
          >
            Explore Services
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-16 gap-10">
        {/* Left Content */}
        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
          <h3 className="text-[#22B7B7] text-xl sm:text-2xl font-semibold">
            Explore Our Comprehensive Ecosystem
          </h3>
          <p className="my-3 text-sm sm:text-base">
            Dahab Miners provides a full spectrum of crypto mining services to fit every need.
            Whether you're an investor without hardware or a miner with a fleet of machines, we have
            the perfect solution for you.
          </p>

          <h3 className="text-[#22B7B7] text-xl sm:text-2xl font-semibold mt-6">
            Dahab Digital Mining : Mining Made Easy
          </h3>
          <p className="my-3 text-sm sm:text-base">
            Start earning from real mining hardware without owning a physical miner. With our
            digital mining service, you can purchase a "Digital Dahab Miner" through our app and
            begin mining immediately no delays, no setup hassles. Your purchased share of hashpower
            is backed by actual ASIC machines running in our secure farms, delivering daily Bitcoin
            payouts to your account. It's real mining with zero stress.
          </p>

          <button
            onClick={handleChatClick}
            className="btn-bg px-5 py-2 mt-4 rounded-lg text-white text-sm sm:text-base w-fit mx-auto lg:mx-0"
          >
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/service-img.webp"
            alt="High-performance Bitcoin mining machine glowing with blue light, representing Dahab Digital crypto miners in UAE for Bitcoin Mining in Dubai and Ethiopia."
            className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
