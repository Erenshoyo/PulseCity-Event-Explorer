import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1
          className="text-[120px] md:text-[160px] font-extrabold leading-none 
                       bg-primary 
                       bg-clip-text text-transparent drop-shadow-lg"
        >
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Page Not Found
        </h2>

        <p className="text-base-content/70 text-lg max-w-lg mx-auto">
          The page you are looking for doesn’t exist or has been moved. Maybe
          you mistyped the URL, or the page was removed.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/" className="btn btn-primary rounded-box px-8">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-accent rounded-box px-8"
          >
            Go Back
          </button>
        </div>

        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div
            className="w-100 h-100 
                          bg-primary/20 blur-[120px] 
                          rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
