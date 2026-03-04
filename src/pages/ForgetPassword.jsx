import { ArrowLeft, Calendar, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { gooeyToast } from "goey-toast";

const ForgetPassword = () => {
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    gooeyToast.success("Reset link sent to your email!", {
      classNames: { wrapper: "protect-gooey-wrapper" },
    });

    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-base-100">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-6 space-x-3">
            <div className="flex items-center justify-center w-12 h-12 shadow-lg rounded-2xl bg-primary shadow-primary/30">
              <Calendar className="w-7 h-7 text-primary-content" />
            </div>
            <span className="text-3xl font-bold tracking-tight text-base-content">
              Event Explorer
            </span>
          </div>
          <h1 className="mb-2 text-3xl font-extrabold text-base-content">
            Forgot Password?
          </h1>
          <p className="text-base-content/60">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        <div className="p-8 border shadow-2xl rounded-3xl bg-base-200/50 backdrop-blur-xl border-base-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="flex items-center space-x-2 text-sm font-semibold text-base-content/80"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Email Address</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitted}
                className="w-full input input-bordered rounded-2xl bg-base-100 focus:outline-primary disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full py-4 text-lg font-semibold transition-transform h-auto btn btn-primary rounded-2xl hover:scale-[1.02] shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitted ? "Sending..." : "Reset Password"}
            </button>

            <Link
              to="/login"
              className="flex items-center justify-center w-full py-4 text-sm font-semibold transition-colors border-2 rounded-2xl border-base-300 text-base-content/70 hover:bg-base-300 hover:text-base-content"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
