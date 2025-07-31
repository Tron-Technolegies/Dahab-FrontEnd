import React from "react";

export default function MiningSections({ active, setActive }) {
  return (
    <div className="flex gap-2 p-5">
      <button
        onClick={() => setActive("Revenue")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "Revenue" && "bg-homeBgGradient translate-y-1 scale-105"
        }`}
      >
        Revenue
      </button>
      <button
        onClick={() => setActive("Payout")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "Payout" && "bg-homeBgGradient translate-y-1 scale-105"
        }`}
      >
        Payout
      </button>
      <button
        onClick={() => setActive("BTC")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "BTC" && "bg-homeBgGradient translate-y-1 scale-105"
        }`}
      >
        BTC/Th/Day
      </button>
    </div>
  );
}
