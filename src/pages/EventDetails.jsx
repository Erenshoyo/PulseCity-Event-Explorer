import {
  Banknote,
  Calendar,
  Clock,
  MapPin,
  Tag,
  Ticket,
  CheckCircle2,
  User,
  Mail,
} from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

// eslint-disable-next-line no-unused-vars
const InfoCard = ({ icon: Icon, iconBg, iconColor, label, value }) => (
  <div className="flex items-center gap-4 border border-base-200 bg-base-200 shadow-md shadow-base-200 px-6 py-6 rounded-3xl flex-1 min-w-0">
    <div className={`rounded-full ${iconBg} p-3 shrink-0`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <div className="min-w-0">
      <p className="text-xs text-[#938e88] uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <h3 className="font-semibold text-base truncate">{value || "—"}</h3>
    </div>
  </div>
);

const ReservationForm = ({ currency, entry_fee, eventName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) return setErrors(next);

    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full gap-4 py-8">
        <div className="rounded-full bg-green-900/40 p-5">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-xl font-bold">You're in!</h3>
        <p className="text-sm text-[#938e88]">
          Confirmation sent to{" "}
          <span className="text-white font-medium">{form.email}</span>
        </p>
        <p className="text-xs text-[#938e88] mt-1">See you at {eventName}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Full Name */}
      <div>
        <label
          htmlFor="res-name"
          className="flex items-center gap-2 font-semibold text-sm mb-2"
        >
          <User className="w-4 h-4 text-[#938e88]" /> Full Name
        </label>
        <input
          id="res-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={`input rounded-2xl bg-base-300 w-full ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && (
          <p className="text-xs text-red-400 mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="mt-4">
        <label
          htmlFor="res-email"
          className="flex items-center gap-2 font-semibold text-sm mb-2"
        >
          <Mail className="w-4 h-4 text-[#938e88]" /> Email Address
        </label>
        <input
          id="res-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={`input rounded-2xl bg-base-300 w-full ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && (
          <p className="text-xs text-red-400 mt-1">{errors.email}</p>
        )}
      </div>

      <hr className="mt-6 mb-5 border-base-300" />

      {/* Total */}
      <div className="flex justify-between items-center text-sm text-[#938e88] mb-5">
        <span>Total Amount</span>
        <span className="text-white font-bold text-lg">
          {entry_fee ? `${currency ?? ""}${entry_fee}` : "Free"}
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn w-full rounded-2xl py-6 text-base font-semibold bg-linear-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          <>
            <Ticket className="w-4 h-4 mr-2" /> Reserve Now
          </>
        )}
      </button>
    </form>
  );
};

const INFO_CARDS = [
  {
    key: "date",
    label: "Date",
    icon: Calendar,
    iconBg: "bg-lime-800",
    iconColor: "text-primary",
  },
  {
    key: "time",
    label: "Time",
    icon: Clock,
    iconBg: "bg-red-800",
    iconColor: "text-secondary",
  },
  {
    key: "location",
    label: "Location",
    icon: MapPin,
    iconBg: "bg-orange-800",
    iconColor: "text-warning",
  },
  {
    key: "entry_fee",
    label: "Entry Fee",
    icon: Banknote,
    iconBg: "bg-pink-800",
    iconColor: "text-accent",
  },
];

const EventDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const event = data?.find((e) => e.id == id) ?? {};
  const {
    thumbnail,
    name,
    category,
    date,
    time,
    location,
    entry_fee,
    description,
    currency,
  } = event;

  const cardValues = {
    date,
    time: time ?? "7:00 PM – 11:00 PM",
    location,
    entry_fee: entry_fee ? `${currency ?? ""}${entry_fee}` : "Free",
  };

  if (!event.id) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#938e88]">
        Event not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 pb-16">
      {/* Hero */}
      <div className="relative h-64 md:h-125">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-base-100 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="w-2/3 mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            {category && (
              <span className="inline-block px-3 py-1 text-xs rounded-full border border-primary bg-black/60 backdrop-blur mb-3">
                {category}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {name}
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-2/3 mx-auto grid grid-cols-3 mt-8 gap-6">
        {/* Left: Info + Description */}
        <div className="col-span-2 space-y-5">
          {/* Info cards — 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {INFO_CARDS.map(({ key, label, icon, iconBg, iconColor }) => (
              <InfoCard
                key={key}
                icon={icon}
                iconBg={iconBg}
                iconColor={iconColor}
                label={label}
                value={cardValues[key]}
              />
            ))}
          </div>

          {/* Description */}
          <section className="rounded-3xl bg-base-200 px-8 py-6">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">About this event</span>
            </div>
            <p className="text-[#938e88] text-sm leading-relaxed">
              {description}
            </p>
          </section>
        </div>

        {/* Right: Reservation */}
        <div className="h-fit p-7 rounded-3xl bg-base-200 border border-base-300 shadow-2xl sticky top-8">
          <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
            <Ticket className="w-5 h-5 text-primary" /> Reserve Your Seat
          </h3>
          <ReservationForm
            currency={currency}
            entry_fee={entry_fee}
            eventName={name}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
