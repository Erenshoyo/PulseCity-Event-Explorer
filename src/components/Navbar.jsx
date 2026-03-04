import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";
import { gooeyToast } from "goey-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {
        gooeyToast.success("You are successfully logged out!", {
          classNames: {
            wrapper: "protect-gooey-wrapper",
          },
        });
      })
      .catch((error) => {
        gooeyToast.error(
          error.message || "Failed to logout. Please try again.",
          {
            classNames: {
              wrapper: "protect-gooey-wrapper",
            },
          },
        );
      });
  };
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

        {user ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="cursor-pointer">
              <img
                className="w-9 rounded-full"
                src={user.photoURL}
                alt="user"
              />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu py-2 shadow bg-base-100 rounded-box w-52 mt-2"
            >
              <div className="px-3 py-2">
                <h1>{user.displayName}</h1>
                <p className="text-xs">{user.email}</p>
              </div>
              <li>
                <Link to="/dashboard" className="font-semibold text-sm">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-sm" to="/profile">
                  My Profile
                </Link>
              </li>

              <div className="divider my-1"></div>

              <li>
                <button onClick={handleLogout}>Log out</button>
              </li>
            </ul>
          </div>
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
