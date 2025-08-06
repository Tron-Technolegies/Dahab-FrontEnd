import React from "react";

export default function S19KRevenueSection() {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-2 border-b border-homeBg pb-5">
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">Sats/Th/Day:</label>
          <input className="p-2 rounded-lg" type="number" disabled />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">
            Enter Total HashRate(TH/s):
          </label>
          <input className="p-2 rounded-lg" type="number" />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">Daily Uptime:</label>
          <input
            className="p-2 rounded-lg"
            type="number"
            disabled
            value={0.9}
          />
        </div>
        <button className="px-3 py-2 bg-homeBg text-white rounded-md w-fit ms-auto">
          Submit
        </button>
      </div>
      <p className="text-lg my-5">Revenue History</p>
    </div>
  );
}
