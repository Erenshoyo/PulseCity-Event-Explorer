import {
  Ticket,
  User,
  Mail,
  WalletCards,
  Clock,
  CalendarX2,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBookings(stored);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 border border-neutral-800 bg-[#0f0f0f] rounded-3xl shadow-xl">
      <div className="mb-8 border-b border-neutral-800 pb-6">
        <h1 className="flex items-center gap-3 text-3xl md:text-4xl text-lime-400 font-bold tracking-tight">
          <Ticket className="w-8 h-8 md:w-10 md:h-10 text-lime-400" />
          My Bookings
        </h1>
        <p className="mt-2 text-neutral-400 text-lg">
          Track and manage your reserved events
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4 border-2 border-dashed border-neutral-800 rounded-2xl bg-neutral-900/30">
            <CalendarX2 className="w-16 h-16 text-neutral-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-300">
              No bookings found
            </h3>
            <p className="text-neutral-500 mt-2 text-center max-w-sm">
              Looks like you haven't reserved any events yet. Check out our
              upcoming events!
            </p>
          </div>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking.id}
              className="group flex flex-col md:flex-row gap-6 p-5 md:p-6 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-lg transition-all duration-300 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.15)] hover:-translate-y-1"
            >
              <div className="w-full md:w-72 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={booking.eventImage || "/api/placeholder/400/300"}
                  alt={booking.eventName}
                  className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-5 transition-colors duration-300 group-hover:text-lime-400">
                    {booking.eventName}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-neutral-400">
                      <User className="w-5 h-5 text-neutral-500" />
                      <span className="text-neutral-200">{booking.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <Mail className="w-5 h-5 text-neutral-500" />
                      <span className="text-neutral-200">{booking.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <WalletCards className="w-5 h-5 text-neutral-500" />
                      <span className="text-lime-400 font-semibold text-lg">
                        {booking.entry_fee
                          ? `${booking.currency}${booking.entry_fee}`
                          : "Free Entry"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 w-fit px-5 py-2.5 flex items-center gap-2 border border-pink-500/30 bg-pink-500/10 rounded-full text-pink-400 text-sm font-medium shadow-[0_0_15px_rgba(236,72,153,0)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:border-pink-500/50">
                  <Clock className="w-4 h-4" />
                  Booked on {new Date(
                    booking.bookedAt,
                  ).toLocaleDateString()} at{" "}
                  {new Date(booking.bookedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
