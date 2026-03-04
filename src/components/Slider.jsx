import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // console.log(events);
  return (
    <div className="w-[99%] mx-auto h-150">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="w-full h-full"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className="relative">
            {/* Background Image */}
            <img
              src={event.thumbnail}
              alt={event.name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
              <div className="relative z-10 backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20">
                {" "}
                <h2 className="text-4xl font-bold mb-2">{event.name}</h2>
                <p className="text-lg opacity-90">{event.location}</p>
                <p className="text-sm opacity-70">{event.date}</p>
                <Link
                  to={`/event/${event.id}`}
                  className="btn btn-primary mt-2"
                >
                  Explore Event
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
