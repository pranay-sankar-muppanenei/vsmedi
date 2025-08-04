import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-green-700">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all"
      >
       ← Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
