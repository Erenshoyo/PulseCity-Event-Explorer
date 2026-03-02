import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto mt-5">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="bg-base-200">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
