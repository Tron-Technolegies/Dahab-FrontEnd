import React from "react";

export default function TermsSection() {
  return (
    <div className="p-5 flex flex-col gap-3">
      <p className="text-lg font-semibold">Terms and Conditions</p>
      <button className="px-3 py-2 bg-homeBg hover:bg-homeBgGradient rounded-md text-white w-fit">
        Add New Version
      </button>
    </div>
  );
}
