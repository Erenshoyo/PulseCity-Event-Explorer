import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

import Aos from "aos";

const EventCards = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [showAll, events]);
  const displayedEvents = showAll ? events : events.slice(0, 6);

  // console.log(events);
  return (
    <div>
      <h1 className="mt-14 text-4xl font-bold">Upcoming Events</h1>
      <p className="mt-2 text-[#938e88]">
        Discover the hottest events happening near you
      </p>
      {/* EventCards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {displayedEvents.map((event, index) => (
          <div
            key={event.id}
            data-aos="fade-up"
            data-aos-delay={(index % 6) * 50}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
      {events.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-[#61a100] transition-colors"
          >
            {showAll ? "Collapse" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCards;
