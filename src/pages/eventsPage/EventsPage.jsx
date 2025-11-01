import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { events } from "../../utils/events&Celebrations";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import EventImages from "../../components/eventsPage/EventImages";
import { Helmet } from "react-helmet-async";

export default function EventsPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;
  const { slug } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const event = events.find((x) => x.slug == slug);
    setEvent(event);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-white">
      <Helmet>
        <title>Dahab Miners App Launch | Green Bitcoin Mining in UAE & Ethiopia</title>
        <meta
          name="description"
          content="Dahab Miners App launched at Bitcoin Summit Ethiopia 2025 | showcasing sustainable Bitcoin mining powered by hosting farms in the UAE and Ethiopia."
        />
        <meta
          name="keyword"
          content="Dahab Miners App Ethiopia launch,
Real Bitcoin mining platform UAE,
Eco Bitcoin mining company UAE,
Host Bitcoin miners in Ethiopia,
Crypto miners UAE,
Bitcoin Mining in Dubai,
Miner repair service UAE,
Host miners in Ethiopia,
Bitcoin Mining in Dubai,"
        />
        <link rel="canonical" href={fullUrl || "https://dahabminers.com/"} />
      </Helmet>
      <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex lg:flex-row flex-col gap-5 justify-between items-center">
        <div className="flex flex-col gap-3">
          <h1 className="gradient-heading md:text-2xl lg:text-left text-center text-xl font-semibold">
            {event?.title}
          </h1>
          <div className="flex items-center lg:justify-start justify-center gap-2 text-[#A1D3F8]">
            <CiCalendar />
            <p>{event?.date}</p>
          </div>
          <div className="flex items-center lg:justify-start justify-center gap-2 text-[#A1D3F8]">
            <CiLocationOn />
            <p>{event?.location}</p>
          </div>
        </div>
        <div>
          <img
            src={event?.imglg}
            srcSet={`${event?.imgsm} 350w, ${event?.imglg} 650w`}
            alt={event?.alt}
            sizes="(max-width: 768px) 350px, 650px"
            className="rounded-md object-cover lg:max-w-[650px] max-w-[350px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
      {/* <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 bg-black flex flex-col gap-5">
        <p>{event?.p1}</p>
        <p>{event?.p2}</p>
        <p>{event?.p3}</p>
        <p>{event?.p4}</p>
        <p>{event?.p5}</p>
        <p>{event?.p6}</p>
      </section> */}
      <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 bg-black flex flex-col gap-5">
        {event &&
          Object.keys(event)
            .filter((key) => key.startsWith("p"))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((key) => <p key={key}>{event[key]}</p>)}
      </section>

      {/* <EventImages images={event?.images} /> */}
    </div>
  );
}
