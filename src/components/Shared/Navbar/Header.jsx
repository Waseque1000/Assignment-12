import React from "react";
import { LogIn, User, Bell, LogOut } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  // Mock authentication state - in real app, this would come from your auth context/provider
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Mock user data - in real app, this would come from your auth context/provider
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: "/api/placeholder/40/40",
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/api/placeholder/40/40"
              alt="Tourist Guide Logo"
              className="h-10 w-10 rounded"
            />
            <span className="text-xl font-bold text-green-600">
              Tourist Guide
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Community
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Trips
            </a>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <LogIn size={20} />
                <span>Login/Register</span>
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3"
                >
                  <img
                    src={mockUser.profilePic}
                    alt="Profile"
                    className="h-10 w-10 rounded-full border-2 border-green-600"
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">
                        {mockUser.name}
                      </p>
                      <p className="text-sm text-gray-600">{mockUser.email}</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="py-2">
                      <a
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-green-50"
                      >
                        <User size={18} />
                        <span>Dashboard</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-green-50"
                      >
                        <Bell size={18} />
                        <span>Offer Announcements</span>
                      </a>
                    </div>

                    {/* Logout Button */}
                    <div className="border-t border-gray-100 mt-2">
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 w-full"
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
