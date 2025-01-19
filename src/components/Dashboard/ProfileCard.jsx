import React, { useContext } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Link2,
  Github,
  Twitter,
  User,
} from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";

const VisitorProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="relative w-full max-w-md mx-auto mt-20 group">
      {/* Background card with hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-70"></div>

      {/* Main card */}
      <div className="relative bg-white rounded-xl shadow-xl p-6">
        {/* Profile Image Section */}
        <div className="relative -mt-16 mb-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white">
              <img
                src={user.photoURL}
                alt="Visitor"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors duration-300">
            Welcome,
            <span className="text-3xl italic uppercase text-red-500 font-extrabold">
              {" "}
              {user.displayName}
            </span>
          </h2>
          <p className="text-gray-600 italic">Explore our community</p>

          {/* Interactive Badges */}
          <div className="flex justify-center gap-2 flex-wrap">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:-translate-y-1 transition-transform duration-200">
              Developer
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:-translate-y-1 transition-transform duration-200">
              Designer
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium hover:-translate-y-1 transition-transform duration-200">
              Creator
            </span>
          </div>
        </div>

        {/* Stats with hover effects */}
        <div className="grid grid-cols-3 gap-4 my-6 py-4 border-y border-gray-100">
          <div className="text-center group cursor-pointer">
            <div className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
              24
            </div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
              150+
            </div>
            <div className="text-sm text-gray-600">Connections</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              10k
            </div>
            <div className="text-sm text-gray-600">Impressions</div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="text-gray-600">Join our global community</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            <Mail className="w-5 h-5 text-pink-500" />
            <span className="text-gray-600">Sign up for updates</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            <Link2 className="w-5 h-5 text-orange-500" />
            <span className="text-gray-600">Discover more features</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <Github className="w-6 h-6 text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-300 cursor-pointer" />
          <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-500 transform hover:scale-110 transition-all duration-300 cursor-pointer" />
          <MessageCircle className="w-6 h-6 text-gray-600 hover:text-purple-500 transform hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default VisitorProfile;
