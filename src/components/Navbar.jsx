import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="bg-base-300 flex justify-between p-3 rounded-2xl lg:px-20">
      <div className="flex items-center gap-2">
        <img className="w-10" src="/logo2.svg" alt="" />
        <Link
          to="/"
          className="flex items-center font-bold text-2xl text-primary"
        >
          Event Explorer
        </Link>
      </div>

      <div className="flex justify-end items-center gap-8">
        <Link to="/" className="font-medium">Home</Link>
        {user && <Link to="/profile">My Profile</Link>}
        {user ? (
          <button className="btn btn-primary font-semibold" onClick={logout}>Logout</button>
        ) : (
          <Link className="btn btn-primary font-semibold" to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
