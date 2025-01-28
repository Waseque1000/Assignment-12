import React, { useEffect, useState } from "react";
import { ChevronRight, MapPin, Clock, Users, Star, Heart } from "lucide-react";
import TourPackages from "./TourPackages";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("packages");
  const [guides, setGuides] = useState([]);
  const [showAllGuides, setShowAllGuides] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const [axiosSecure] = useAxiosSecure();
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tour packages
  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await axiosSecure.get("/packages");
        setTourPackages(response.data); // Assuming the API returns an array of tour packages.
      } catch (error) {
        console.error("Failed to fetch tour packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourPackages();
  }, [axiosSecure]);

  // Fetch guides
  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await axiosSecure.get("/guides");
        setGuides(response.data); // Assuming the API returns an array of guides.
      } catch (error) {
        console.error("Failed to fetch guides:", error);
      }
    };

    fetchGuides();
  }, [axiosSecure]);

  if (loading) {
    // return <progress className="progress w-56"></progress>;
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  // Limit the displayed items based on the state
  const visibleGuides = showAllGuides ? guides : guides.slice(0, 6);
  const visiblePackages = showAllPackages
    ? tourPackages
    : tourPackages.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Helmet>
        <title>Go Tour || Home</title>
      </Helmet> */}
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero content */}
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Discover the Beauty of
              <span className="text-green-400"> Bangladesh</span>
            </h1>
            <h1 className="text-6xl font-bold text-red-300 italic mb-6">
              <Typewriter
                words={["Travel", "Explore", "Learn", "Adventure", "Discover"]}
              />
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Experience the rich culture, stunning landscapes, and warm
              hospitality of Bangladesh through our curated travel experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Packages and Guides Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex text-black justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-200 p-1">
              {["packages", "guides"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full capitalize transition-colors ${
                    activeTab === tab
                      ? "bg-green-500 text-white"
                      : "hover:bg-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {activeTab === "packages" ? (
            <>
              <TourPackages tourPackages={visiblePackages} />
              {!showAllPackages && tourPackages.length > 6 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllPackages(true)}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Show All
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8">
                {visibleGuides.map((guide) => (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {guide.name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{guide.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{guide.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{guide.rating} rating</span>
                        </div>
                        <Link>
                          <button className="btn bg-green-400 m-2">
                            See Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {!showAllGuides && guides.length > 6 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllGuides(true)}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Show All
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
