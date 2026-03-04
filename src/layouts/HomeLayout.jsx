import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
      mirror: true,
    });
  }, []);
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
