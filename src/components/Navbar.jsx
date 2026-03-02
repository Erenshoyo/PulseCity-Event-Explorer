import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="bg-base-300 flex justify-between p-3 rounded-2xl lg:px-20">
      <div className="flex items-center gap-2">
        <img className="w-8" src="/logo2.svg" alt="" />
        <Link
          to="/"
          className="flex items-center font-bold text-xl text-primary"
        >
          Event Explorer
        </Link>
      </div>

      <div className="flex justify-end items-center gap-4">
        <Link to="/" className="font-medium text-sm">
          Home
        </Link>
        {user && (
          <Link className="font-semibold text-sm" to="/profile">
            My Profile
          </Link>
        )}
        {user ? (
          <button
            className="bg-primary px-3 py-2 rounded-xl font-semibold text-sm"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link
            className="bg-primary px-3 py-2 rounded-xl font-semibold text-sm"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
