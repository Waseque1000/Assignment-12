import React, { useState } from "react";
import {
  Share2,
  MapPin,
  Calendar,
  Heart,
  Search,
  Globe,
  Plus,
  ChevronDown,
} from "lucide-react";

const TouristStories = () => {
  const stories = [
    {
      id: 1,
      title: "Amazing Trek Through the Alps",
      author: "John Smith",
      date: "2024-01-15",
      location: "Swiss Alps",
      content:
        "What started as a simple hiking trip turned into the adventure of a lifetime. The snow-capped peaks and crystal-clear alpine lakes created a landscape that seemed almost surreal.",
      imageUrl: "https://i.ibb.co.com/KVhSvfX/tiger-1600x900.jpg",
      likes: 156,
      category: "Adventure",
    },
    {
      id: 2,
      title: "Hidden Gems of Kyoto",
      author: "Emma Wilson",
      date: "2024-01-10",
      location: "Kyoto, Japan",
      content:
        "Discovering ancient temples and peaceful gardens off the beaten path. Kyoto's traditional architecture and spiritual atmosphere provided a glimpse into Japan's rich cultural heritage.",
      imageUrl: "/api/placeholder/400/250",
      likes: 243,
      category: "Culture",
    },
    {
      id: 3,
      title: "Street Food Adventure in Bangkok",
      author: "Mike Chen",
      date: "2024-01-08",
      location: "Bangkok, Thailand",
      content:
        "A culinary journey through the vibrant street markets of Bangkok revealed flavors I never knew existed. From spicy som tam to sweet mango sticky rice, every bite was a discovery.",
      imageUrl: "/api/placeholder/400/250",
      likes: 189,
      category: "Food",
    },
    {
      id: 4,
      title: "Exploring the Amazon Rainforest",
      author: "Maria Garcia",
      date: "2024-01-05",
      location: "Amazon, Brazil",
      content:
        "Three unforgettable days deep in the world's largest rainforest. The biodiversity was astounding - from colorful macaws to elusive jaguars, the Amazon is truly nature's greatest treasure.",
      imageUrl: "/api/placeholder/400/250",
      likes: 312,
      category: "Nature",
    },
    {
      id: 5,
      title: "Sailing Around Greek Islands",
      author: "David Johnson",
      date: "2024-01-22",
      location: "Cyclades, Greece",
      content:
        "Island hopping through the azure waters of the Aegean Sea. Each island had its own character - from the white-washed buildings of Santorini to the ancient ruins of Delos.",
      imageUrl: "/api/placeholder/400/250",
      likes: 278,
      category: "Adventure",
    },
    {
      id: 6,
      title: "Wine Tasting in Bordeaux",
      author: "Sophie Martin",
      date: "2024-01-17",
      location: "Bordeaux, France",
      content:
        "Exploring the vineyards of France's most famous wine region. Learning about centuries-old winemaking traditions while sampling exquisite vintages was an unforgettable sensory experience.",
      imageUrl: "/api/placeholder/400/250",
      likes: 231,
      category: "Food",
    },
    {
      id: 7,
      title: "Ancient Temples of Angkor",
      author: "Thomas Lee",
      date: "2024-01-12",
      location: "Siem Reap, Cambodia",
      content:
        "Wandering through the mysterious ruins of the Khmer Empire. Watching the sunrise over Angkor Wat as the ancient stones glowed in the golden light was a spiritual experience.",
      imageUrl: "/api/placeholder/400/250",
      likes: 267,
      category: "Culture",
    },
    {
      id: 8,
      title: "Safari in Serengeti",
      author: "Amara Okafor",
      date: "2024-01-28",
      location: "Serengeti, Tanzania",
      content:
        "Witnessing the great migration across the vast savannah plains. Seeing lions, elephants, and giraffes in their natural habitat made me feel connected to the circle of life.",
      imageUrl: "/api/placeholder/400/250",
      likes: 325,
      category: "Nature",
    },
    {
      id: 9,
      title: "Northern Lights in Lapland",
      author: "Erik Johansson",
      date: "2024-01-03",
      location: "Rovaniemi, Finland",
      content:
        "Chasing the aurora borealis in the Arctic Circle. Standing in silence as green and purple lights danced across the night sky was like witnessing nature's most magical performance.",
      imageUrl: "/api/placeholder/400/250",
      likes: 298,
      category: "Adventure",
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedStories, setLikedStories] = useState({});
  const [showAllStories, setShowAllStories] = useState(false);

  const categories = ["All", "Adventure", "Culture", "Food", "Nature"];

  const handleShare = (story) => {
    if (!isLoggedIn) {
      console.log("Redirecting to login page...");
      return;
    }

    const shareUrl = `https://yourwebsite.com/stories/${story.id}`;
    const shareText = `Check out this amazing travel story: ${story.title}`;

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}&quote=${encodeURIComponent(shareText)}`;

    window.open(facebookShareUrl, "_blank", "width=600,height=400");
  };

  const handleViewDetails = (story) => {
    console.log(`Navigating to details page for story ID: ${story.id}`);
  };

  const handleLike = (storyId) => {
    setLikedStories((prev) => ({
      ...prev,
      [storyId]: !prev[storyId],
    }));
  };

  const filteredStories = stories.filter((story) => {
    const matchesCategory =
      activeCategory === "All" || story.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const displayedStories = showAllStories
    ? filteredStories
    : filteredStories.slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-8 mb-10 shadow-lg text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Travel Tales</h1>
            <p className="text-xl max-w-2xl mb-6">
              Discover inspiring stories from fellow travelers and share your
              own adventures with the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stories, authors, or destinations..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition duration-300">
                <Plus className="w-5 h-5" />
                Share Your Story
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {story.category}
                </div>
              </div>

              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {story.title}
                </h3>

                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{story.location}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(story.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {story.content}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
                    {story.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-sm font-medium">{story.author}</span>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => handleLike(story.id)}
                  className="flex items-center gap-1"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedStories[story.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-sm text-gray-600">
                    {likedStories[story.id] ? story.likes + 1 : story.likes}
                  </span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare(story)}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition duration-300"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleViewDetails(story)}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-16">
            <Globe className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No stories found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or category filter
            </p>
          </div>
        )}

        {/* Show All/Show Less Button */}
        {filteredStories.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllStories(!showAllStories)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700 transition duration-300"
            >
              {showAllStories ? "Show Less" : "Show All Stories"}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  showAllStories ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <p className="text-gray-500 mt-2">
              {showAllStories
                ? `Showing all ${filteredStories.length} stories`
                : `Showing 6 of ${filteredStories.length} stories`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TouristStories;
