import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

import Aos from "aos";
import Trending from "./Trending";
import { TrendingUp } from "lucide-react";

const Trendings = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [events]);
  const trendingEvents = events.filter((event) => event.is_trending === true);
  //   const displayedEvents = showAll ? events : events.slice(0, 6);

  // console.log(events);
  return (
    <div>
      <h1 className="mt-14 text-3xl md:text-4xl font-bold flex items-center gap-4">
        <TrendingUp className="w-9 h-9 text-secondary" />
        Trending Now
      </h1>
      <p className="mt-2 text-[#938e88]">
        Don't miss out on the most popular events
      </p>
      {/* EventCards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {trendingEvents.map((event, index) => (
          <div
            key={event.id}
            data-aos="fade-up"
            data-aos-delay={(index % 6) * 50}
          >
            <Trending event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendings;
