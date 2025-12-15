import React from "react";

export default function MinerRepairHeadSection({ scrollfunction }) {
  return (
    <div className="relative px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 min-h-[640px] flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/repair/bg.png"
        alt="ASIC miner repair Dubai"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="max-w-[970px] flex flex-col gap-10 justify-center items-center relative z-[1]">
        <h1 className="text-4xl lg:text-5xl font-semibold gradient-heading max-w-[850px] text-center">
          Expert Bitcoin ASIC Miner Repair Services
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-base lg:text-lg font-normal leading-8 text-white text-start">
            Get your miners back online fast and hassle free. Our certified
            technicians specialize in diagnosing and repairing ASIC miners,
            ensuring maximum uptime and efficiency.
          </p>
          <p className="text-base lg:text-lg font-normal leading-8 text-white text-start">
            From minor fixes to full scale refurbishments, we repair all major
            brands, including Bitmain, Icerivers, Whatsminer, and Avalon. Fast
            turnaround. Zero compromises.
          </p>
          <p className="text-base lg:text-lg font-normal leading-8 text-white text-start">
            Trust the experts. Keep mining without interruptions.
          </p>
        </div>

        <button
          onClick={scrollfunction}
          className="text-lg font-semibold btn-bg px-10 py-3 text-white rounded-full"
        >
          View Pricing
        </button>
      </div>
    </div>
  );
}
