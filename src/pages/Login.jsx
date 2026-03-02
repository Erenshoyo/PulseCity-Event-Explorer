import { Calendar, Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { gooeyToast, GooeyToaster } from "goey-toast";

const Login = () => {
  // const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        gooeyToast.success("Sign In Successful");
      })
      .catch((error) => {
        gooeyToast.error(
          error.message || "Failed to sign in. Please try again.",
        );
      });
  };

  return (
    <>
      <GooeyToaster position="top-center" theme="dark" />
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
          <form onSubmit={handleLogIn} className="w-100">
            <div className="">
              <label className="flex items-center gap-2">
                <Mail className="text-primary w-5 h-5"></Mail>{" "}
                <span className="font-bold">Email:</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="input rounded-4xl mt-2 bg-base-300 w-full"
                required
              />
            </div>
            <div className="mt-10 ">
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
            <div className="flex items-center justify-between mt-2 ml-2">
              <Link
                to="/forget-password"
                className="text-[12px] text-warning hover:text-primary transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <button className="btn mt-4 w-full py-6 text-lg bg-linear-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </form>
          <hr className="my-5 text-[#938e88]" />
          <div>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-secondary underline hover:text-warning"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
