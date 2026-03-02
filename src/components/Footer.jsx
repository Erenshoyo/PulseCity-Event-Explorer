import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { LuCopyright, LuFacebook, LuInstagram } from "react-icons/lu";
import { PiTiktokLogoLight } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="pb-14">
      {" "}
      <div className="w-2/3 mx-auto grid grid-cols-4 gap-5 py-10">
        <div className="col-span-1 space-y-4">
          <div className="flex gap-2 items-center">
            <img className="w-10" src="/logo2.svg" alt="" />
            <Link
              to="/"
              className="flex items-center font-bold text-xl text-primary"
            >
              Event Explorer
            </Link>
          </div>
          <p className="text-sm text-[#938e88]">
            Discover amazing local events and connect with your community. Your
            next unforgettable experience is just a click away.
          </p>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <h2>Quick Links</h2>
          <ul className="text-[#938e88] space-y-3 flex flex-col justify-center">
            <Link to="/">Home</Link>
            <Link to="/dashboard">My Bookings</Link>
            <Link to="/profile">My Profile</Link>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          {" "}
          <h2>Legal</h2>
          <ul className="text-[#938e88] space-y-3">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2>Follow Us</h2>
          <ul className="text-[#938e88] flex gap-2 mt-2">
            <li className="border-0 bg-base-300 rounded-full p-2">
              <LuFacebook></LuFacebook>
            </li>
            <li className="border-0 bg-base-300 rounded-full p-2">
              <BsTwitterX></BsTwitterX>
            </li>
            <li className="border-0 bg-base-300 rounded-full p-2">
              <LuInstagram></LuInstagram>
            </li>
            <li className="border-0 bg-base-300 rounded-full p-2">
              <PiTiktokLogoLight></PiTiktokLogoLight>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-2/3 mx-auto text-base-300">
        <hr></hr>
      </div>
      <p className="flex justify-center items-center gap-1 mt-10 text-[#938e88]">
        <LuCopyright />
        {new Date().getFullYear()} Event Explorer. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
