import React from "react";
import { handleChatClick } from "../../utils/whatsapp";

export default function ServiceHeader() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="gradient-heading text-2xl sm:text-3xl lg:text-4xl font-semibold p-4 sm:p-6 max-w-[800px] w-full text-center">
          Start Mining Today with the Best Crypto Mining Services in UAE & Ethiopia
        </h1>
        <p className="max-w-[900px] w-full text-center text-sm sm:text-base px-4">
          Ready to dive into cryptocurrency mining? Dahab Miners offers a one-stop solution to start
          mining Bitcoin and other cryptos easily. Our comprehensive ecosystem covers everything
          from state-of-the-art hosting facilities in the UAE and Ethiopia to innovative digital
          mining options and expert ASIC repair services. It's like cloud mining – but better. We
          handle the heavy lifting while you reap the rewards.
        </p>
      </div>

      <div className="max-w-[1200px] w-full mx-auto mt-12 sm:mt-16 lg:mt-24 items-center text-center">
        <h2 className="text-[#2295B7] text-xl sm:text-2xl text-center mt-8 sm:mt-12 lg:mt-16 px-4">
          Explore Our Comprehensive Ecosystem
        </h2>
        <p className="my-2 text-center max-w-[800px] w-full mx-auto px-4 text-sm sm:text-base">
          Dahab Miners provides a full spectrum of crypto mining services to fit every need. Whether
          you're an investor without hardware or a miner with a fleet of machines, we have the
          perfect solution for you:
        </p>
        <h3 className="text-[#2295B7] text-xl sm:text-2xl text-center mt-8 sm:mt-10 lg:mt-10 px-4">
          Dahab Digital Mining : Mining Made Easy
        </h3>
        <p className="my-2 max-w-[800px] w-full mx-auto px-4 text-sm sm:text-base">
          Start earning from real mining hardware without owning a physical miner. With our digital
          mining service, you can purchase a "Digital Dahab Miner" through our app and begin mining
          immediately no delays, no setup hassles. Your purchased share of hashpower is backed by
          actual ASIC machines running in our secure farms, delivering daily Bitcoin payouts to your
          account. It's real mining with zero stress.
        </p>

        <button
          className="btn-bg px-5 mt-5 py-2 rounded-lg text-white text-sm sm:text-base"
          onClick={handleChatClick}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}
