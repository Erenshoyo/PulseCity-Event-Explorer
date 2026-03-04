import React from "react";
import Slider from "../components/Slider";
import EventCard from "../components/EventCards";
import Trendings from "../components/Trendings";
import { Calendar, CloudLightning, TrendingUp } from "lucide-react";

const Home = () => {
  const INFO_CARDS = [
    {
      key: "title_1",
      label: "Connect with People",
      icon: Calendar,
      iconBg: "bg-lime-800",
      iconColor: "text-primary",
      background: "bg-green-500/10",
      description:
        "Meet like-minded individuals and expand your professional and social network at exciting events.",
    },
    {
      key: "title_2",
      label: "New Experiences",
      icon: CloudLightning,
      iconBg: "bg-red-800",
      iconColor: "text-secondary",
      background: "bg-red-500/10",
      description:
        "Step out of your comfort zone and discover new interests, skills, and passions through diverse events.",
    },

    {
      key: "title_3",
      label: "Personal Growth",
      icon: TrendingUp,
      iconBg: "bg-pink-800",
      iconColor: "text-accent",
      background: "bg-pink-500/10",
      description:
        "Learn from experts, gain valuable insights, and accelerate your personal and professional development.",
    },
  ];
  return (
    <div className="mt-3">
      {/* Slider */}
      <section>
        <Slider></Slider>
      </section>
      {/* Events Card */}
      <main className="w-2/3 mx-auto">
        <EventCard></EventCard>
        <Trendings></Trendings>
      </main>
      <section data-aos="fade-up" className="w-2/3 mx-auto mt-34">
        <h1 className="text-center text-4xl font-bold mb-3">Why join Events?</h1>
        <p className="text-center text-sm text-[#938e88] mb-6">Experience unforgettable moments and create lasting memories</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-25">
          {INFO_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                data-aos="fade-up"
                key={card.key}
                className={`${card.background} p-6 rounded-2xl flex flex-col items-center text-center`}
              >
                <div
                  className={`${card.iconBg} ${card.iconColor} p-4 rounded-full mb-4`}
                >
                  <Icon size={32} />
                </div>

                <h2 className="text-xl font-bold mb-2">{card.label}</h2>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            );
          })}
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
