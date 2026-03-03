// import { Banknote, Calendar, Clock, MapPin, Tag } from "lucide-react";
// import React from "react";
// import { useLoaderData, useParams } from "react-router";

// const EventDetails = () => {
//   const data = useLoaderData();
//   const { id } = useParams();

//   // Better Practice: Derive the event directly without useEffect/useState
//   // Fallback to an empty object to prevent destructuring errors if not found
//   const events = data?.find((singleEvent) => singleEvent.id == id) || {};

//   const { thumbnail, name, category, date, location, entry_fee, description } =
//     events;

//   return (
//     <div className="min-h-screen mt-10">
//       <div className="relative h-100 md:h-125">
//         {/* Added a conditional check so the img tag doesn't break if thumbnail is undefined */}
//         {thumbnail && (
//           <img
//             src={thumbnail}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//         )}

//         <div className="absolute inset-0 bg-linear-to-t from-base-100 via-black/50 to-transparent">
//           <div className="absolute bottom-0 left-0 right-0">
//             <div className="w-2/3 mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//               <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//                 {name}
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="w-2/3 mx-auto grid grid-cols-3">
//           <div className="col-span-2">
//             <section className="mx-auto">
//               <div className="flex gap-8 mb-8">
//                 <div className="flex items-center border border-base-200 bg-base-300 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
//                   <div className=" rounded-full bg-lime-800 p-3 mx-8">
//                     <Calendar className="w-6 h-6 text-primary"></Calendar>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#938e88]">Date</p>
//                     <h3 className="font-semibold text-lg">{date}</h3>
//                   </div>
//                 </div>
//                 <div className="flex items-center border border-base-200 bg-base-300 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
//                   <div className=" rounded-full bg-red-800 p-3 mx-8">
//                     <Clock className="w-6 h-6 text-secondary"></Clock>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#938e88]">Time</p>
//                     <h3 className="font-semibold text-lg">7:00pm - 11:00pm</h3>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-8">
//                 <div className="flex items-center border border-base-200 bg-base-300 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
//                   <div className=" rounded-full bg-orange-800 p-3 mx-8">
//                     <MapPin className="w-6 h-6 text-warning"></MapPin>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#938e88]">Location</p>
//                     <h3 className="font-semibold text-lg">{location}</h3>
//                   </div>
//                 </div>
//                 <div className="flex items-center border border-base-200 bg-base-300 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
//                   <div className=" rounded-full bg-pink-800 p-3 mx-8">
//                     <Banknote className="w-6 h-6 text-accent"></Banknote>
//                   </div>
//                   <div>
//                     <p className="text-sm text-[#938e88]">Entry Fee</p>
//                     <h3 className="font-semibold text-lg">{entry_fee}</h3>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <section className="w-full rounded-4xl bg-base-300 mt-5 px-8 py-4">
//               <badge className="px-3 py-1 text-xs rounded-full border border-primary bg-black/60 backdrop-blur">
//                 {category}
//               </badge>
//               <div className="mt-5 flex items-center gap-3">
//                 <Tag className="text-primary"></Tag>
//                 <span className="text-lg font-semibold">
//                   About this section.
//                 </span>
//               </div>
//               <div className="mt-3 text-[#938e88] text-sm">{description}</div>
//             </section>
//           </div>
//           <form></form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

import { gooeyToast } from "goey-toast";
import { Banknote, Calendar, Clock, MapPin, Tag } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const EventDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const events = data?.find((singleEvent) => singleEvent.id == id) || {};

  const {
    thumbnail,
    name,
    category,
    date,
    location,
    entry_fee,
    description,
    currency,
  } = events;

  return (
    <div className="min-h-screen mt-10 pb-12">
      <div className="relative h-100 md:h-125">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-base-100 via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0">
            <div className="w-2/3 mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto grid grid-cols-3 mt-8 gap-5">
        <div className="col-span-2">
          <section className="mx-auto">
            <div className="flex gap-8 mb-8">
              <div className="flex items-center border border-base-200 bg-base-200 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
                <div className=" rounded-full bg-lime-800 p-3 mx-8">
                  <Calendar className="w-6 h-6 text-primary"></Calendar>
                </div>
                <div>
                  <p className="text-sm text-[#938e88]">Date</p>
                  <h3 className="font-semibold text-lg">{date}</h3>
                </div>
              </div>
              <div className="flex items-center border border-base-200 bg-base-200 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
                <div className=" rounded-full bg-red-800 p-3 mx-8">
                  <Clock className="w-6 h-6 text-secondary"></Clock>
                </div>
                <div>
                  <p className="text-sm text-[#938e88]">Time</p>
                  <h3 className="font-semibold text-lg">7:00pm - 11:00pm</h3>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center border border-base-200 bg-base-200 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
                <div className=" rounded-full bg-orange-800 p-3 mx-8">
                  <MapPin className="w-6 h-6 text-warning"></MapPin>
                </div>
                <div>
                  <p className="text-sm text-[#938e88]">Location</p>
                  <h3 className="font-semibold text-lg">{location}</h3>
                </div>
              </div>
              <div className="flex items-center border border-base-200 bg-base-200 shadow-md shadow-base-200 pr-20 py-8 rounded-4xl w-1/2">
                <div className=" rounded-full bg-pink-800 p-3 mx-8">
                  <Banknote className="w-6 h-6 text-accent"></Banknote>
                </div>
                <div>
                  <p className="text-sm text-[#938e88]">Entry Fee</p>
                  <h3 className="font-semibold text-lg">{entry_fee}</h3>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full rounded-4xl bg-base-200 mt-5 px-8 py-4">
            <badge className="px-3 py-1 text-xs rounded-full border border-primary bg-black/60 backdrop-blur">
              {category}
            </badge>
            <div className="mt-5 flex items-center gap-3">
              <Tag className="text-primary"></Tag>
              <span className="text-lg font-semibold">About this event.</span>
            </div>
            <div className="my-5 text-[#938e88] text-sm">{description}</div>
          </section>
        </div>
        <div className="h-3/4 p-8 rounded-2xl bg-base-200 backdrop-blur-xl border border-base-300 shadow-2xl">
          <h3 className="mb-5 text-xl font-bold">Reserve Your Seat</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              gooeyToast.success("Seat reserved successfully!", {
                classNames: {
                  wrapper: "protect-gooey-wrapper",
                },
              });
            }}
            className=""
          >
            <div className="">
              <label className="flex items-center gap-2">
                <span className="font-bold">Full Name</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="input rounded-4xl mt-2 bg-base-300 w-full"
              />
            </div>
            <div className="mt-5">
              <label className="flex items-center gap-2">
                <span className="font-bold">Email Address</span>
              </label>
              <div className="">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="input rounded-4xl mt-2 bg-base-300 w-full"
                  required
                />
              </div>
            </div>
            <hr className="mt-7 text-[#938e88]" />
            <div className="grid grid-cols-3 gap-10 mt-5 text-[#938e88]">
              <div className="col-span-2">
                <h3>Total Amount:</h3>
              </div>
              <div className="col-span-1 text-center">
                <p>
                  <span>{currency}</span>
                  <span>{entry_fee}</span>
                </p>
              </div>
            </div>
            <button className="btn my-4 w-full rounded-4xl py-6 text-lg bg-linear-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
