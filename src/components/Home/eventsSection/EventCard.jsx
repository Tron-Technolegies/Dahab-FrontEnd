import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EventCard({ img, date, location, title, id }) {
  return (
    <div className="py-5 px-2 rounded-md bg-black border border-[#0194FE] mx-5 flex flex-col items-center overflow-hidden gap-3 md:max-w-[450px] h-[400px]">
      <img
        src={img}
        className=" object-cover rounded-lg md:max-w-[400px] overflow-hidden"
      />
      <div className="flex md:flex-row flex-col gap-3 justify-between items-center text-xs w-full text-[#A1D3F8]">
        <div className="flex items-center gap-2">
          <CiCalendar />
          <p>{date.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p>{location.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-3 justify-between items-center text-sm w-full">
        <p className="tracking-[2px] md:text-left text-center">
          {title.toUpperCase()}
        </p>
        <div className="flex items-center gap-2">
          <Link to={`/events/${id}`} className="text-[#48E5E1]">
            View
          </Link>
          <Link
            to={`/events/${id}`}
            className="w-10 h-10 rounded-full bg-[#48E5E1] flex justify-center items-center text-black"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
