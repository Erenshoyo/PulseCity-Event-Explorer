import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { id, thumbnail, name, category, date, location, currency, entry_fee } =
    event;
  return (
    <div
      className="group max-w-sm rounded-2xl 
    overflow-hidden border border-base-300 hover:border-primary bg-[#0f0f0f] 
    shadow-lg transition-all duration-300 hover:scale-[1.03] 
    hover:shadow-[0_0_25px_rgba(132,204,22,0.5)] flex flex-col justify-between"
    >
      <figure className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full border border-primary bg-black/60 backdrop-blur">
          {category}
        </span>
      </figure>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold group-hover:text-lime-400">{name}</h3>
        <p className="flex items-center gap-2 text-xs">
          <span className="text-primary">
            <IoCalendarOutline></IoCalendarOutline>
          </span>
          {date}
        </p>
        <p className="flex items-center gap-2 text-xs">
          <span className="text-secondary">
            <FaLocationDot></FaLocationDot>
          </span>
          {location}
        </p>
        <p className="text-xs flex items-center gap-2">
          <span>Fee:</span>
          <span>
            {currency}
            {entry_fee}
          </span>
        </p>
      </div>
      <Link
        to={`/event/${id}`}
        className="btn text-[12px] px-3 py-2"
      >
        View More
      </Link>
    </div>
  );
};

export default EventCard;
