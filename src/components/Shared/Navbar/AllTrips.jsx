import React, { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  ChevronRight,
  Search,
  Filter,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRightSquare,
} from "lucide-react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate"; // Import ReactPaginate package

const AllTrips = () => {
  const [axiosSecure] = useAxiosSecure();
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState("grid");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Categories for filter buttons
  const categories = ["All", "Historical", "Nature", "Cultural", "Adventure"];

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await axiosSecure.get("/packages");
        setTourPackages(response.data || []);
      } catch (error) {
        console.error("Failed to fetch tour packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTourPackages();
  }, [axiosSecure]);

  // Filtered packages based on search and category
  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch =
      pkg.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || pkg.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPackages.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change from ReactPaginate
  const handlePageChange = (selectedItem) => {
    // ReactPaginate provides the selected page in selectedItem.selected (0-indexed)
    const newPage = selectedItem.selected + 1;
    setCurrentPage(newPage);

    // Scroll to top when changing pages
    window.scrollTo({
      top: document.querySelector(".container").offsetTop - 100,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin">
            <div className="h-full w-full rounded-full border-4 border-t-green-500 border-r-transparent border-b-green-300 border-l-transparent"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Camera size={24} className="text-green-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <Helmet>
        <title>Explore Bangladesh | Discover Amazing Trips</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 overflow-hidden h-64">
          <img
            src="/api/placeholder/1920/400"
            alt="Bangladesh landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative pt-16">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center mb-3">
              <div className="h-1 w-10 bg-green-400 mr-3"></div>
              <span className="text-green-500 font-medium uppercase tracking-wider">
                Explore Bangladesh
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Discover Incredible Journeys
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl">
              From ancient temples to lush tea gardens, from bustling cities to
              tranquil beaches - experience the beauty and diversity of
              Bangladesh.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-xl p-4 mb-8 transform translate-y-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search destinations, experiences..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <Filter size={20} className="text-gray-500" />
                <span className="text-gray-700">View:</span>
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded ${
                    viewType === "grid"
                      ? "bg-green-100 text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded ${
                    viewType === "list"
                      ? "bg-green-100 text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full mt-5 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-green-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count and Items per page selector */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-2 sm:mb-0">
            {filteredPackages.length} amazing trips found
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              Sorted by: <span className="font-medium">Popularity</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2">Show:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page when changing items per page
                }}
                className="border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>
            </div>
          </div>
        </div>

        {/* Packages Grid View */}
        {viewType === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((pkg) => (
              <div
                key={pkg.id || pkg._id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={pkg.image || "/api/placeholder/600/400"}
                    alt={pkg.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
                      <Heart size={18} className="text-rose-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center">
                        <Star size={14} className="mr-1 fill-current" />
                        {pkg.rating || "4.5"}
                      </span>
                      <span className="text-white text-sm">(32 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-green-600 font-medium mb-2">
                    <MapPin size={14} className="mr-1" />
                    {pkg.location || "Dhaka, Bangladesh"}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                    {pkg.title || "Amazing Tour Package"}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-1 text-gray-400" />
                      {pkg.duration || "3 Days"}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-1 text-gray-400" />
                      {pkg.groupSize || "10 People"}
                    </div>
                  </div>

                  <div className="mb-4">
                    {pkg.highlights && pkg.highlights.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <span className="inline-block bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded">
                            +{pkg.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded">
                          Guided Tour
                        </span>
                        <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded">
                          Meals Included
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        ${pkg.price || "199"}
                      </span>
                      <span className="text-sm text-gray-500">/person</span>
                    </div>
                    <Link
                      to={`/details/${pkg._id || pkg.id}`}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Details
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Packages List View */}
        {viewType === "list" && (
          <div className="space-y-6">
            {currentItems.map((pkg) => (
              <div
                key={pkg.id || pkg._id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="relative md:w-1/3">
                  <img
                    src={pkg.image || "/api/placeholder/600/400"}
                    alt={pkg.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
                      <Heart size={18} className="text-rose-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center">
                        <Star size={14} className="mr-1 fill-current" />
                        {pkg.rating || "4.5"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:w-2/3 flex flex-col">
                  <div className="flex items-center text-xs text-green-600 font-medium mb-2">
                    <MapPin size={14} className="mr-1" />
                    {pkg.location || "Dhaka, Bangladesh"}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-green-600 transition-colors">
                    {pkg.title || "Amazing Tour Package"}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={18} className="mr-2 text-green-500" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div>{pkg.duration || "3 Days"}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={18} className="mr-2 text-green-500" />
                      <div>
                        <div className="font-medium">Group Size</div>
                        <div>{pkg.groupSize || "10 People"}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={18} className="mr-2 text-green-500" />
                      <div>
                        <div className="font-medium">Start Time</div>
                        <div>{pkg.startTime || "9:00 AM"}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star size={18} className="mr-2 text-green-500" />
                      <div>
                        <div className="font-medium">Rating</div>
                        <div>{pkg.rating || "4.5"} (32 reviews)</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex-grow">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    {pkg.highlights && pkg.highlights.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded">
                          Guided Tour
                        </span>
                        <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded">
                          Meals Included
                        </span>
                        <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded">
                          Transportation
                        </span>
                        <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-1 rounded">
                          Accommodation
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        ${pkg.price || "199"}
                      </span>
                      <span className="text-sm text-gray-500">/person</span>
                    </div>
                    <Link
                      to={`/details/${pkg._id || pkg.id}`}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search size={48} className="mx-auto text-gray-300" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No trips found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ReactPaginate Component */}
        {filteredPackages.length > 0 && (
          <div className="flex justify-center mt-12">
            <ReactPaginate
              previousLabel={
                <div className="flex items-center">
                  <ChevronLeft size={16} className="mr-1" />
                  Previous
                </div>
              }
              nextLabel={
                <div className="flex items-center">
                  Next
                  <ChevronRightSquare size={16} className="ml-1" />
                </div>
              }
              breakLabel={"..."}
              pageCount={Math.ceil(filteredPackages.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName="flex items-center space-x-1"
              pageClassName="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              pageLinkClassName="focus:outline-none"
              previousClassName="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center"
              nextClassName="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center"
              breakClassName="px-4 py-2 text-gray-400"
              activeClassName="!bg-green-500 !text-white !border-green-500"
              disabledClassName="opacity-50 cursor-not-allowed"
              forcePage={currentPage - 1} // ReactPaginate is 0-indexed, but our currentPage is 1-indexed
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTrips;
