import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainHero = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const words = [
    "Historical Sites",
    "Local Cuisine",
    "Cultural Events",
    "Hidden Gems",
    "Adventure Tours",
  ];

  // Use placeholder images - in production, replace with actual Bangladesh tourism images
  const backgroundImages = [
    "https://i.ibb.co.com/JsBNhZD/download.jpg",
    "https://i.ibb.co.com/7r4JnHZ/download-1.jpg",
    "https://i.ibb.co.com/r7hp1t5/download-2.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
    // Word carousel
    const wordInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[currentIndex]);
    }, 2000);

    // Image carousel
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 700);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, [currentIndex, currentImageIndex]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image carousel */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat
                     ${
                       currentImageIndex === index ? "opacity-100" : "opacity-0"
                     }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl font-bold text-white mb-2">
              Your Ultimate Guide to
            </h1>
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-green-400">Bangladesh</span>
            </h1>
          </div>

          <div
            className={`text-5xl font-bold text-red-300 italic mb-8 transform transition-all duration-1000 delay-300
                       ${
                         isVisible
                           ? "translate-x-0 opacity-100"
                           : "-translate-x-10 opacity-0"
                       }`}
          >
            {currentWord}
            <span className="animate-pulse">_</span>
          </div>

          <div
            className={`max-w-2xl transform transition-all duration-1000 delay-500
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
          >
            <p className="text-xl text-gray-200 mb-6">
              Discover the hidden treasures of Bangladesh - from ancient temples
              and lush landscapes to vibrant markets and authentic local
              experiences.
            </p>

            <div className="flex gap-4">
              <Link to="/trip">
                <button
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg 
                               transform transition hover:-translate-y-1"
                >
                  Explore Destinations
                </button>
              </Link>
              <Link to="/">
                <button
                  className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black 
                               rounded-lg transform transition hover:-translate-y-1"
                >
                  Plan Your Trip
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
