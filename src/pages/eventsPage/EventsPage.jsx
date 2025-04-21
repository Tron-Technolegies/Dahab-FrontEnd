import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { events } from "../../utils/events&Celebrations";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import EventImages from "../../components/eventsPage/EventImages";
import { Helmet } from "react-helmet-async";

export default function EventsPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const event = events.find((x) => x.id == id);
    setEvent(event);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-white">
      <Helmet>
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
      </Helmet>
      <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <p className="gradient-heading md:text-2xl text-xl font-semibold">
            {event?.title}
          </p>
          <div className="flex items-center gap-2 text-[#A1D3F8]">
            <CiCalendar />
            <p>{event?.date}</p>
          </div>
          <div className="flex items-center gap-2 text-[#A1D3F8]">
            <CiLocationOn />
            <p>{event?.location}</p>
          </div>
        </div>
        <div>
          <img src={event?.img} className="rounded-md object-cover" />
        </div>
      </section>
      <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 bg-black flex flex-col gap-5">
        <p>{event?.p1}</p>
        <p>{event?.p2}</p>
        <p>{event?.p3}</p>
        <p>{event?.p4}</p>
        <p>{event?.p5}</p>
      </section>
      <EventImages images={event?.images} />
    </div>
  );
}
