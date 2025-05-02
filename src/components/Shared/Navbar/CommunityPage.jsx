// import React, { useState, useEffect } from "react";
// import { Dialog } from "@headlessui/react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import toast from "react-hot-toast";
// import {
//   FiHeart,
//   FiMessageSquare,
//   FiShare2,
//   FiX,
//   FiClock,
// } from "react-icons/fi";
// import { format } from "date-fns";

// const CommunityPage = () => {
//   const [stories, setStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [axiosSecure] = useAxiosSecure();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axiosSecure.get("/stories");
//         setStories(response.data || []);
//       } catch (error) {
//         console.error("Failed to fetch stories:", error);
//         toast.error("Failed to load stories");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [axiosSecure]);

//   const formatDate = (dateString) => {
//     return format(new Date(dateString), "MMMM d, yyyy");
//   };

//   if (loading) {
//     return (
//       <div className="container mx-auto p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
//               <div className="animate-pulse">
//                 <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
//                 <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                 <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//                 <div className="space-y-2">
//                   <div className="h-3 bg-gray-200 rounded"></div>
//                   <div className="h-3 bg-gray-200 rounded w-5/6"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">
//           Community Stories
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Share your experiences and read stories from our community
//         </p>
//       </div>

//       {stories.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-gray-500">
//             No stories yet. Be the first to share!
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {stories.map((story) => (
//             <article
//               key={story._id}
//               className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 border border-gray-100"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={story.images[0]}
//                   alt={story.title}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                   onError={(e) => {
//                     e.target.src =
//                       "https://via.placeholder.com/400x300?text=Story+Image";
//                   }}
//                 />
//               </div>
//               <div className="p-5">
//                 <div className="flex items-center text-xs text-gray-500 mb-3">
//                   <span>{formatDate(story.createdAt)}</span>
//                   <span className="mx-2">•</span>
//                   <div className="flex items-center">
//                     <FiClock className="mr-1" />
//                     <span>3 min read</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
//                   {story.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                   {story.story.length > 150
//                     ? `${story.story.substring(0, 150)}...`
//                     : story.story}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <button
//                     onClick={() => setSelectedStory(story)}
//                     className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
//                   >
//                     Read full story
//                   </button>
//                   <div className="flex space-x-3 text-gray-400">
//                     <button
//                       className="hover:text-red-500 transition-colors"
//                       onClick={() => toast("Like functionality coming soon!")}
//                     >
//                       <FiHeart className="w-4 h-4" />
//                     </button>
//                     <button
//                       className="hover:text-indigo-500 transition-colors"
//                       onClick={() => toast("Share functionality coming soon!")}
//                     >
//                       <FiShare2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}

//       {/* Story Modal */}
//       {selectedStory && (
//         <Dialog
//           open={!!selectedStory}
//           onClose={() => setSelectedStory(null)}
//           className="relative z-50"
//         >
//           <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4">
//               <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
//                 <div className="relative">
//                   <img
//                     src={selectedStory.images[0]}
//                     alt={selectedStory.title}
//                     className="w-full h-64 md:h-80 object-cover"
//                     onError={(e) => {
//                       e.target.src =
//                         "https://via.placeholder.com/800x400?text=Story+Image";
//                     }}
//                   />
//                   <button
//                     onClick={() => setSelectedStory(null)}
//                     className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//                   >
//                     <FiX className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className="p-6 md:p-8">
//                   <div className="flex items-center text-sm text-gray-500 mb-4">
//                     <span>Posted by {selectedStory.author.split("@")[0]}</span>
//                     <span className="mx-2">•</span>
//                     <span>{formatDate(selectedStory.createdAt)}</span>
//                   </div>

//                   <Dialog.Title
//                     as="h2"
//                     className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
//                   >
//                     {selectedStory.title}
//                   </Dialog.Title>

//                   <div className="prose max-w-none text-gray-700 mb-6 whitespace-pre-line">
//                     {selectedStory.story}
//                   </div>

//                   <div className="flex items-center justify-between border-t pt-6">
//                     <div className="flex space-x-4">
//                       <button
//                         className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
//                         onClick={() => toast("Like functionality coming soon!")}
//                       >
//                         <FiHeart className="w-5 h-5" />
//                         <span>24</span>
//                       </button>
//                       <button
//                         className="flex items-center space-x-1 text-gray-500 hover:text-indigo-500 transition-colors"
//                         onClick={() =>
//                           toast("Comment functionality coming soon!")
//                         }
//                       >
//                         <FiMessageSquare className="w-5 h-5" />
//                         <span>Comment</span>
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => {
//                         navigator.clipboard.writeText(window.location.href);
//                         toast.success("Story link copied to clipboard!");
//                       }}
//                       className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 transition-colors"
//                     >
//                       <FiShare2 className="w-5 h-5" />
//                       <span>Share</span>
//                     </button>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </div>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default CommunityPage;

import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import {
  FiHeart,
  FiMessageSquare,
  FiShare2,
  FiX,
  FiClock,
  FiBookOpen,
  FiUser,
  FiSearch,
} from "react-icons/fi";
import { format } from "date-fns";

const CommunityPage = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedStories, setLikedStories] = useState({});

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosSecure.get("/stories");
        setStories(response.data || []);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        toast.error("Failed to load stories");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [axiosSecure]);

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  const categories = ["All", "Adventure", "Travel", "Food", "Life"];

  const filteredStories = stories.filter((story) => {
    const matchesCategory =
      activeCategory === "All" || story.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="animate-pulse">
                  <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5e4b1ad5ea2f4683f8e99658/5e4b1ad5ea2f46c5a1e996a7_pattern-white.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover <span className="text-yellow-300">Inspiring</span>{" "}
              Stories
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Join our community of storytellers and explore captivating
              journeys from around the world
            </p>

            <div className="relative max-w-xl mx-auto">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-300 text-xl" />
              <input
                type="text"
                placeholder="Search stories, authors, or topics..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-indigo-700 bg-opacity-50 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 border border-indigo-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 overflow-x-auto pb-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-indigo-600 shadow-lg font-medium"
                  : "bg-white bg-opacity-80 text-gray-700 hover:bg-opacity-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {filteredStories.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg mb-6">
              <FiBookOpen className="text-5xl text-indigo-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No stories found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchQuery
                ? "Try a different search term"
                : "Be the first to share your story!"}
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredStories.map((story) => (
                <motion.article
                  key={story._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-60 overflow-hidden group">
                    <img
                      src={story.images[0]}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          "https://source.unsplash.com/random/800x600/?travel";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="inline-block px-3 py-1 bg-indigo-500 text-white text-xs font-medium rounded-full mb-2">
                            {story.category || "Story"}
                          </span>
                          <h3 className="text-xl font-bold text-white line-clamp-2">
                            {story.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => setSelectedStory(story)}
                          className="flex-shrink-0 bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition-colors"
                        >
                          <FiBookOpen className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <FiUser className="mr-2 text-indigo-500" />
                        <span>{story.author.split("@")[0]}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-2 text-indigo-500" />
                        <span>{formatDate(story.createdAt)}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-5 line-clamp-3">
                      {story.story.length > 150
                        ? `${story.story.substring(0, 150)}...`
                        : story.story}
                    </p>

                    <div className="flex justify-between items-center border-t pt-4">
                      <button
                        onClick={() => {
                          setLikedStories((prev) => ({
                            ...prev,
                            [story._id]: !prev[story._id],
                          }));
                          toast.success(
                            likedStories[story._id]
                              ? "Removed from favorites"
                              : "Added to favorites"
                          );
                        }}
                        className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <FiHeart
                          className={`w-5 h-5 ${
                            likedStories[story._id]
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                        />
                        <span className="text-sm">
                          {likedStories[story._id] ? "Liked" : "Like"}
                        </span>
                      </button>

                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            toast.success("Story link copied!");
                          }}
                          className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                        >
                          <FiShare2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setSelectedStory(story)}
                          className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                        >
                          <span>Read More</span>
                          <FiBookOpen className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <Dialog
            as={motion.div}
            open={!!selectedStory}
            onClose={() => setSelectedStory(null)}
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex min-h-screen items-center justify-center p-4">
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative bg-white rounded-2xl max-w-4xl w-full mx-auto shadow-2xl overflow-hidden"
              >
                <div className="relative h-96">
                  <img
                    src={selectedStory.images[0]}
                    alt={selectedStory.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://source.unsplash.com/random/1600x900/?travel";
                    }}
                  />
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                    <FiX className="w-6 h-6 text-gray-800" />
                  </button>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 className="text-3xl font-bold text-white">
                      {selectedStory.title}
                    </h2>
                    <div className="flex items-center text-indigo-100 mt-2">
                      <span>By {selectedStory.author.split("@")[0]}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(selectedStory.createdAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="prose max-w-none text-gray-700 mb-8 whitespace-pre-line">
                    {selectedStory.story}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {selectedStory.category || "Story"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t pt-6">
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setLikedStories((prev) => ({
                            ...prev,
                            [selectedStory._id]: !prev[selectedStory._id],
                          }));
                          toast.success(
                            likedStories[selectedStory._id]
                              ? "Removed from favorites"
                              : "Added to favorites"
                          );
                        }}
                        className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <FiHeart
                          className={`w-6 h-6 ${
                            likedStories[selectedStory._id]
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                        />
                        <span>
                          {likedStories[selectedStory._id]
                            ? "Liked"
                            : "Like this story"}
                        </span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors">
                        <FiMessageSquare className="w-6 h-6" />
                        <span>Leave a comment</span>
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast.success("Story link copied to clipboard!");
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <FiShare2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommunityPage;
