import React from "react"; 
import { CiCalendar, CiLocationOn } from "react-icons/ci"; 
import { FaArrowRight } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 
 
export default function EventCard({ img, date, location, title, id }) { 
  return ( 
    <div className="p-4 rounded-lg bg-black border border-[#0194FE] mx-5 flex flex-col gap-4 md:max-w-[450px] h-[400px]"> 
      {/* Image Container */}
      <div className="flex-1 overflow-hidden rounded-lg">
        <img 
          src={img} 
          alt={title}
          className="w-full h-full object-cover rounded-lg" 
        /> 
      </div>
      
      {/* Date and Location */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between text-xs text-[#A1D3F8]"> 
        <div className="flex items-center gap-2"> 
          <CiCalendar className="text-base" /> 
          <p className="whitespace-nowrap">{date.toUpperCase()}</p> 
        </div> 
        <div className="flex items-center gap-2"> 
          <CiLocationOn className="text-base" /> 
          <p className="text-right sm:text-left">{location.toUpperCase()}</p> 
        </div> 
      </div> 
      
      {/* Title and View Button */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center"> 
        <h3 className="text-white text-sm font-medium tracking-[1px] leading-tight flex-1 pr-2"> 
          {title.toUpperCase()} 
        </h3> 
        <div className="flex items-center gap-2 flex-shrink-0"> 
          <Link 
            to={`/events/${id}`} 
            className="text-[#48E5E1] text-sm hover:underline transition-all duration-200"
          > 
            View 
          </Link> 
          <Link 
            to={`/events/${id}`} 
            className="w-8 h-8 rounded-full bg-[#48E5E1] flex justify-center items-center text-black hover:bg-[#3dd5d1] transition-all duration-200" 
          > 
            <FaArrowRight className="text-xs" /> 
          </Link> 
        </div> 
      </div> 
    </div> 
  ); 
}