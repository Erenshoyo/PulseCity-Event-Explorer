import { Ticket } from "lucide-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBookings(stored);
  }, []);
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="flex items-center">
        <Ticket></Ticket> My Bookings
      </h1>
      <p>Track and manage your reserved events</p>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id}>
            <h3>{booking.eventName}</h3>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>
              {booking.entry_fee
                ? `${booking.currency}${booking.entry_fee}`
                : "Free"}
            </p>
            <p>Booked at: {new Date(booking.bookedAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
