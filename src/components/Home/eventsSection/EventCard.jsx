import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EventCard({ img, date, location, title, id }) {
  return (
    <div className="p-5 rounded-md bg-black border border-[#0194FE] mx-5 flex flex-col items-center gap-3">
      <img src={img} className=" object-cover rounded-lg" />
      <div className="flex justify-between items-center text-sm w-full text-[#A1D3F8]">
        <div className="flex items-center gap-2">
          <CiCalendar />
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p>{location}</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm w-full">
        <p className="text-lg tracking-[2px]">{title.toUpperCase()}</p>
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
