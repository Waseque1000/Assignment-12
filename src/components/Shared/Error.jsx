import React, { useState } from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

const Error = () => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleRetry = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div
        key={animationKey}
        className="bg-white p-8 rounded-xl shadow-lg text-center animate-fade-in-down"
      >
        <div className="flex justify-center mb-6">
          <AlertCircle size={80} className="text-red-500 animate-bounce" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for seems to have wandered off.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            <Home size={20} className="mr-2" />
            Home
          </button>
          <button
            onClick={handleRetry}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            <RefreshCw size={20} className="mr-2" />
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
