import React, { useState } from "react";
import {
  User,
  MapPin,
  BookOpen,
  Library,
  Menu,
  X,
  Bell,
  Search,
} from "lucide-react";

const ModernTourDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [notifications] = useState([
    { id: 1, text: "New tour assigned: City Explorer", time: "2m ago" },
    { id: 2, text: "Story approved: Mountain Adventure", time: "1h ago" },
  ]);

  const menuItems = [
    { id: "profile", icon: User, label: "Profile", count: null },
    { id: "assigned-tours", icon: MapPin, label: "Assigned Tours", count: 3 },
    { id: "add-story", icon: BookOpen, label: "Add Story", count: null },
    { id: "manage-stories", icon: Library, label: "Stories", count: 12 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">Total Tours</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Reviews</p>
                  <p className="text-2xl font-bold">4.8</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-center justify-between"
                  >
                    <p className="text-sm">{notif.text}</p>
                    <span className="text-xs text-gray-500">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              {menuItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <p>Content for {activeTab} goes here</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              TG
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } transition-all duration-300 bg-white shadow-sm min-h-[calc(100vh-64px)]`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map(({ id, icon: Icon, label, count }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
                  ${
                    activeTab === id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {isSidebarOpen && (
                  <div className="flex-1 flex items-center justify-between">
                    <span>{label}</span>
                    {count && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {count}
                      </span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {menuItems.find((item) => item.id === activeTab)?.label}
            </h1>
            <p className="text-gray-600">Welcome back, Tour Guide</p>
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default ModernTourDashboard;
