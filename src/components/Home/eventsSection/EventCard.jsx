import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EventCard({ img, date, location, title, slug }) {
  return (
    <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-[#0194FE] shadow-lg hover:shadow-[#0194FE]/40 transition-all duration-300 mx-3 flex flex-col gap-4 md:max-w-[450px] h-[440px]">
      {/* Image Container */}
      <div className="flex-1 overflow-hidden rounded-xl relative group">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Date and Location */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between text-xs sm:text-sm text-[#A1D3F8]">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-lg" />
          <p className="font-medium">{date.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-lg" />
          <p className="font-medium">{location.toUpperCase()}</p>
        </div>
      </div>

      {/* Title and Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center w-full">
        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide leading-tight flex-1">
          {title.toUpperCase()}
        </h3>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* View text link (hidden on mobile, visible on desktop) */}
          <Link
            to={`/events/${slug}`}
            className="hidden sm:inline text-[#48E5E1] text-sm sm:text-base font-medium hover:underline transition-all duration-200"
          >
            View
          </Link>

          {/* Full-width button on mobile, small round button on desktop */}
          <Link
            to={`/events/${slug}`}
            className="w-full sm:w-10 sm:h-10 h-12 rounded-lg sm:rounded-full bg-gradient-to-r from-[#48E5E1] to-[#00C6FF] flex justify-center sm:justify-center items-center gap-2 text-black font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="block sm:hidden">View Event</span>
            <FaArrowRight className="text-lg sm:text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}
