import { gooeyToast } from "goey-toast";
import { Calendar, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import React, { useContext, useState } from "react";

import { Link, Navigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { BsGoogle } from "react-icons/bs";

const Register = () => {
  const { user, setUser, register, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length === 0) {
      gooeyToast.error("Enter your name!");
      return;
    }
    const image = e.target.image.value;
    if (image === "") {
      gooeyToast.error("Enter a photoURL!");
      return;
    }
    const email = e.target.email.value;
    const password = e.target.password.value;

    register(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: image }).then(() => {
          setUser({ ...user, displayName: name, photoURL: image }).catch(() => {
            setUser(user);
          });
        });
        gooeyToast.success("You are successfully registered!");
      })
      .catch((error) => {
        gooeyToast.error(
          error.message || "Failed to sign in. Please try again.",
        );
      });
  };
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Calendar className="w-7 h-7 text-white"></Calendar>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Event Explorer
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-[#938e88]">Sign in to continue your journey</p>
        </div>
        {/* Form */}
        <div className="p-8 rounded-2xl bg-base-200 backdrop-blur-xl border border-base-300 shadow-2xl">
          <form onSubmit={handleRegister} className="w-100">
            <div className="">
              <label className="flex items-center gap-2">
                <User className="text-primary w-5 h-5"></User>{" "}
                <span className="font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input rounded-4xl mt-2 bg-base-300 w-full"
                required
              />
            </div>
            <div className="mt-5">
              <label className="flex items-center gap-2">
                <Mail className="text-secondary w-5 h-5"></Mail>{" "}
                <span className="font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="input rounded-4xl mt-2 bg-base-300 w-full"
                required
              />
            </div>
            <div className="mt-5">
              <label className="flex items-center gap-2">
                <Mail className="text-primary w-5 h-5"></Mail>{" "}
                <span className="font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter a photoURL"
                className="input rounded-4xl mt-2 bg-base-300 w-full"
                required
              />
            </div>
            <div className="mt-5 ">
              <label className="flex items-center gap-2">
                <Lock className="text-secondary w-5 h-5"></Lock>{" "}
                <span className="font-bold">Password:</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input rounded-4xl mt-2 bg-base-300 w-full"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-6 -translate-y-0.5"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button className="btn my-4 w-full rounded-4xl py-6 text-lg bg-linear-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
              Create Account
            </button>
          </form>
          <div className="relative">
            <hr className="my-5 text-base-300" />
            <p className="absolute -top-2.5 bg-base-300 px-4 text-[#938e88] left-33 text-sm">
              Or register with
            </p>
          </div>

          <div className="btn w-full rounded-4xl my-5 py-6">
            <button className="flex justify-center items-center gap-4 text-sm">
              <BsGoogle />
              <span>Register with Google</span>
            </button>
          </div>
          <div>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-secondary underline hover:text-warning"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
