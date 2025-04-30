import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  Users,
  Map,
  Calendar,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Plane,
  Camera,
  Star,
  DollarSign,
} from "lucide-react";

export default function TourManagementDashboard() {
  // Sample data for stats
  const stats = [
    { title: "Total Bookings", value: "1,245", change: "+18.2%", up: true },
    { title: "Active Tours", value: "32", change: "+5.3%", up: true },
    { title: "Customer Reviews", value: "754", change: "+12.7%", up: true },
    { title: "Monthly Revenue", value: "$84,520", change: "+15.3%", up: true },
  ];

  //

  const [allData, setAllData] = useState([]);
  // fetch data from backend

  useEffect(() => {
    fetch("http://localhost:4000/all-bookings")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        console.log("Fetched data:", data); // ✅ Log here instead
      });
  }, []);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log("Fetched data:", data); // ✅ Log here instead
      });
  });

  // Pagination config
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  //loading
  //   const [loading, setLoading] = useState(true);

  // Sample data for upcoming tours
  //   const upcomingTours =

  // Sample data for top destinations
  const topDestinations = [
    { name: "Paris, France", bookings: 124, satisfaction: 4.8 },
    { name: "Tokyo, Japan", bookings: 98, satisfaction: 4.9 },
    { name: "Rome, Italy", bookings: 86, satisfaction: 4.7 },
    { name: "Bali, Indonesia", bookings: 76, satisfaction: 4.6 },
    { name: "New York, USA", bookings: 70, satisfaction: 4.5 },
  ];

  // Sample data for bookings chart

  return (
    <div className="flex flex-col   bg-gray-100">
      {/* Top Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-600">
            <Plane className="h-6 w-6" />
            <h1 className="text-xl font-bold ml-2">TourMaster</h1>
          </div>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            Admin Portal
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tours, guides..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>

          <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Bell />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center space-x-3">
            <img
              src="/api/placeholder/40/40"
              alt="User avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">Tour Manager</p>
              <p className="text-xs text-gray-500">manager@tourmaster.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white px-6 py-2 shadow-sm">
        <nav className="flex space-x-6">
          <NavTab
            icon={<TrendingUp size={18} />}
            text="Dashboard"
            active={true}
          />
          <NavTab icon={<Map size={18} />} text="Tours" />
          <NavTab icon={<Users size={18} />} text="Customers" />
          <NavTab icon={<Calendar size={18} />} text="Bookings" />
          <NavTab icon={<Camera size={18} />} text="Destinations" />
          <NavTab icon={<Star size={18} />} text="Reviews" />
        </nav>
      </div>

      {/* Dashboard Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts & Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Bookings Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Peoples</h3>
              <select className="border rounded-md px-3 py-1.5 text-sm bg-white">
                <option>Last 7 hours</option>
                <option>Last 12 hours</option>
                <option>Year to date</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64 overflow-y-auto pr-2">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
                >
                  <h4 className="text-sm font-semibold text-gray-700">
                    {user.email}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 capitalize"></p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Destinations */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Top Destinations
            </h3>
            <div className="space-y-4">
              {topDestinations.map((destination, index) => (
                <DestinationItem
                  key={index}
                  name={destination.name}
                  bookings={destination.bookings}
                  satisfaction={destination.satisfaction}
                />
              ))}
            </div>
            <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
              View All Destinations →
            </button>
          </div>
        </div>

        {/* Upcoming Tours Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Tours</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Add New Tour
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View All Tours
              </button>
            </div>
          </div>
          {/* TODO: */}
          <div className="overflow-x-auto">
            {/*  this is not working  */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Package Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    User Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tour Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Guide
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.packageName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.userEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.tourDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.guideId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <TourStatus status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center p-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions & Tour Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ActionButton
                icon={<Calendar />}
                text="Schedule Tour"
                color="blue"
              />
              <ActionButton
                icon={<Users />}
                text="Add Customer"
                color="green"
              />
              <ActionButton
                icon={<Map />}
                text="Add Destination"
                color="purple"
              />
              <ActionButton icon={<Star />} text="View Reviews" color="amber" />
            </div>
          </div>

          {/* Tour Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Tour Summary
            </h3>
            <div className="space-y-3">
              <SummaryItem label="Active Tours" value="32" />
              <SummaryItem label="Total Destinations" value="124" />
              <SummaryItem label="Active Tour Guides" value="18" />
              <SummaryItem label="Average Tour Rating" value="4.8/5.0" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function NavTab({ icon, text, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center py-3 px-3 text-sm border-b-2 ${
        active
          ? "border-blue-600 text-blue-600 font-medium"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      } transition-colors`}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </a>
  );
}

function StatCard({ title, value, change, up }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="flex items-baseline mt-1">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span
          className={`ml-2 text-sm font-medium ${
            up ? "text-green-600" : "text-red-600"
          } flex items-center`}
        >
          {up ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
          {change}
        </span>
      </div>
    </div>
  );
}

function BookingsChart({ data }) {
  return (
    <div className="h-full flex items-end">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div
            className="bg-blue-500 rounded-t-sm w-8"
            style={{ height: `${item.bookings}%` }}
          ></div>
          <p className="text-xs mt-2 text-gray-500">{item.month}</p>
        </div>
      ))}
    </div>
  );
}

function DestinationItem({ name, bookings, satisfaction }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Map className="h-8 w-8 p-1.5 bg-blue-100 text-blue-600 rounded-lg mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{bookings} bookings</p>
        </div>
      </div>
      <div className="flex items-center text-amber-500">
        <Star className="h-4 w-4 fill-current" />
        <span className="ml-1 text-sm font-medium">{satisfaction}</span>
      </div>
    </div>
  );
}

function TourStatus({ status }) {
  let bgColor = "bg-gray-100 text-gray-800";

  if (status === "Confirmed") {
    bgColor = "bg-green-100 text-green-800";
  } else if (status === "Booking") {
    bgColor = "bg-blue-100 text-blue-800";
  } else if (status === "Pending") {
    bgColor = "bg-yellow-100 text-yellow-800";
  } else if (status === "Cancelled") {
    bgColor = "bg-red-100 text-red-800";
  }

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor}`}
    >
      {status}
    </span>
  );
}

function ActionButton({ icon, text, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    green: "bg-green-100 text-green-600 hover:bg-green-200",
    purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    amber: "bg-amber-100 text-amber-600 hover:bg-amber-200",
  };

  return (
    <button
      className={`flex items-center justify-center p-4 rounded-lg ${colors[color]} transition-colors`}
    >
      <span className="mr-2">{icon}</span>
      <span className="font-medium">{text}</span>
    </button>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}
