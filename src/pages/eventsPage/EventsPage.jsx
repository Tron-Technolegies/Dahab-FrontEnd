import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { events } from "../../utils/events&Celebrations";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function EventsPage() {
  const location = useLocation();
  const fullUrl = window.location.origin + location.pathname + location.search;
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const event = events.find((x) => x.slug == slug);
    setEvent(event);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    if (event?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
    }
  };

  const prevImage = () => {
    if (event?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
    }
  };

  return (
    <div className=" text-white">
      <Helmet>
        <title>Dahab Miners App Launch | Green Bitcoin Mining in UAE & Ethiopia</title>
        <meta
          name="description"
          content="Dahab Miners App launched at Bitcoin Summit Ethiopia 2025 | showcasing sustainable Bitcoin mining powered by hosting farms in the UAE and Ethiopia."
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
Bitcoin Mining in Dubai,"
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
          {event?.hosted && (
            <div className="flex items-center lg:justify-start justify-center gap-2 text-[#A1D3F8]">
              <p>Hosted By: </p>
              <p>{event.hosted}</p>
            </div>
          )}
        </div>
        <div className="relative">
          {event?.images && event.images.length > 1 ? (
            <div className="relative lg:max-w-[650px] max-w-[350px]">
              <img
                src={event.images[currentImageIndex]}
                alt={`${event.alt} - Image ${currentImageIndex + 1}`}
                className="rounded-md object-cover w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2hover:bg-opacity-75 p-2 rounded-full transition"
                aria-label="Previous image"
              >
                <FaCircleArrowLeft className="text-black" size={24} />
              </button>
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2  bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition"
                aria-label="Next image"
              >
                <FaCircleArrowRight className="text-black" size={24} />
              </button>
              {/* Image Counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 px-3 py-1 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {event.images.length}
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {event.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentImageIndex ? "bg-[#A1D3F8]" : "bg-gray-600"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <img
              src={event?.imglg}
              srcSet={`${event?.imgsm} 350w, ${event?.imglg} 650w`}
              alt={event?.alt}
              sizes="(max-width: 768px) 350px, 650px"
              className="rounded-md object-cover lg:max-w-[650px] max-w-[350px]"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </section>
      <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 bg-black flex flex-col gap-5">
        {event &&
          Object.keys(event)
            .filter((key) => key.startsWith("p"))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((key) => <p key={key}>{event[key]}</p>)}
      </section>
      <section>
        {event?.btmimg && (
          <img
            src={event.btmimg}
            alt={event.alt}
            className="lg:w-3/5 w-full rounded mx-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        )}
        {event?.btmdesc && (
          <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 bg-black flex flex-col gap-5">
            {event?.btmdesc}
          </div>
        )}
      </section>
    </div>
  );
}
