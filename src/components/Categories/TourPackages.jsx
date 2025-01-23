import React from "react";
import { Link } from "react-router-dom";
import { Heart, Clock, Users, Star, ChevronRight } from "lucide-react";

const TourPackages = ({ tourPackages }) => {
  return (
    <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8">
      {tourPackages.map((pkg) => (
        <div
          key={pkg.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
              <Heart className="w-5 h-5 text-red-500" />
            </button>
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
              {pkg.location}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {pkg.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {pkg.groupSize}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                {pkg.rating}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-green-500">
                ${pkg.price}
              </div>
              <Link
                to={`/details/${pkg._id}`}
                className="flex items-center text-green-500 hover:text-green-600"
              >
                View Details
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourPackages;
