import React from "react";
import Slider from "../components/Slider";
import EventCard from "../components/EventCards";

const Home = () => {
  return (
    <div className="mt-3">
      {/* Slider */}
      <section>
        <Slider></Slider>
      </section>
      {/* Events Card */}
      <main className="w-2/3 mx-auto">
        <EventCard></EventCard>
      </main>
    </div>
  );
};

export default Home;
