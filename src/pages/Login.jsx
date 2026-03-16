import { Calendar, Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { gooeyToast } from "goey-toast";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const { login, user, googleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace></Navigate>;

  const handleLogIn = (e) => {
    e.preventDefault();

    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        gooeyToast.success("Sign In Successful", {
          classNames: { wrapper: "protect-gooey-wrapper" },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        gooeyToast.error(
          error.message || "Failed to sign in. Please try again.",
          { classNames: { wrapper: "protect-gooey-wrapper" } },
        );
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        gooeyToast.success("You are successfully logged in!", {
          classNames: { wrapper: "protect-gooey-wrapper" },
        });
      })
      .catch((error) => {
        gooeyToast.error(
          error.message || "Failed to sign in. Please try again.",
          { classNames: { wrapper: "protect-gooey-wrapper" } },
        );
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center mb-4 space-x-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary">
            <Calendar className="w-7 h-7 text-white"></Calendar>
          </div>
          <span className="text-2xl font-bold text-transparent bg-primary bg-clip-text">
            Event Explorer
          </span>
        </div>
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Welcome Back
        </h1>
        <p className="text-[#938e88]">Sign in to continue your journey</p>
      </div>

      {/* Form */}
      <div className="p-6 sm:p-8 border shadow-2xl rounded-2xl bg-base-200 backdrop-blur-xl border-base-300 w-full max-w-md">
        <form onSubmit={handleLogIn} className="w-full sm:w-100">
          <div>
            <label className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary"></Mail>{" "}
              <span className="font-bold">Email:</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 input rounded-4xl bg-base-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-5">
            <label className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-secondary"></Lock>{" "}
              <span className="font-bold">Password:</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full mt-2 input rounded-4xl bg-base-300"
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

          <div className="flex items-center justify-between mt-2 ml-2">
            <Link
              to="/forget-password"
              state={{ email: email }}
              className="text-[12px] text-warning hover:text-primary transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button className="w-full py-6 my-4 text-lg transition-opacity btn rounded-4xl bg-primary hover:opacity-90">
            Sign In
          </button>
        </form>

        <div className="relative">
          <hr className="my-5 border-base-300" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="px-4 text-sm bg-base-200 text-[#938e88]">
              Or continue with
            </span>
          </div>
        </div>

        <div className="py-6 my-5 w-full btn rounded-4xl">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full gap-4 text-sm"
          >
            <BsGoogle />
            <span>Continue with Google</span>
          </button>
        </div>

        <div>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="underline text-secondary hover:text-warning"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
