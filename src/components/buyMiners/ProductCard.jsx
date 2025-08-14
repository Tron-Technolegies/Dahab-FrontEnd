import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { handleProductEnquiry } from "../../utils/whatsapp";
import { Link } from "react-router-dom";

export default function ProductCard({ bgwhite, img, name, price, id }) {
  return (
    <div

      className={`pt-2 border border-[#0F3958] flex flex-col justify-between rounded-lg text-white hover:border-[#26ddff] duration-300 ease-in-out bigglow-effect h-full`}

     
    >
      {/* Top: Image + Name + Price */}
      <div className="flex flex-col items-center gap-5 flex-grow px-3">
        <img

          className="w-[200px] h-[200px] overflow-hidden object-contain"

          src={img}
          alt={"Buy Bitcoin Miners UAE"}
        />
        <h1 className="text-xl text-center font-medium">{name}</h1>
        <p className="text-xl font-semibold text-[#F79009]">{`AED ${price}`}</p>
      </div>

      {/* Bottom: Buy Now button */}
      <Link
        to={`/buy-bitcoin-miners-uae/${id}`}
        className="text-base w-full font-semibold flex gap-3 cursor-pointer justify-center py-3 border-t border-[#0F3958] items-center hover:bg-[#1ECBAF] rounded-b-lg nav-link"
      >
        <button>Buy Now</button>
        <IoMdAddCircleOutline />
      </Link>
    </div>
  );
}
