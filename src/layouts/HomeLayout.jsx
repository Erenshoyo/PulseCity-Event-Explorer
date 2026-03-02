import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
