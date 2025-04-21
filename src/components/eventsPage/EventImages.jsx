import React from "react";

export default function EventImages({ images }) {
  return (
    <section className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl w-full place-items-center">
        <div className="flex flex-col gap-4">
          {images && images[0] ? (
            <img src={images[0]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
          {images && images[3] ? (
            <img src={images[3]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
          {images && images[6] ? (
            <img src={images[6]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-2 sm:mt-0">
          {images && images[1] ? (
            <img src={images[1]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
          {images && images[4] ? (
            <img src={images[4]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
          {images && images[7] ? (
            <img src={images[7]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-1 sm:mt-0">
          {images && images[2] ? (
            <img src={images[2]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
          {images && images[5] ? (
            <img src={images[5]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
          {images && images[8] ? (
            <img src={images[8]} className="img-tile" />
          ) : (
            <div className="div-tile"></div>
          )}
        </div>
      </div>
    </section>
  );
}
