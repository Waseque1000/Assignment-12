// import React from "react";
// import { Share2, MapPin, Calendar } from "lucide-react";

// const TouristStories = () => {
//   const stories = [
//     {
//       id: 1,
//       title: "Amazing Trek Through the Alps",
//       author: "John Smith",
//       date: "2024-01-15",
//       location: "Swiss Alps",
//       content:
//         "What started as a simple hiking trip turned into the adventure of a lifetime...",
//       imageUrl: "https://i.ibb.co.com/KVhSvfX/tiger-1600x900.jpg",
//       likes: 156,
//     },
//     {
//       id: 2,
//       title: "Hidden Gems of Kyoto",
//       author: "Emma Wilson",
//       date: "2024-01-10",
//       location: "Kyoto, Japan",
//       content:
//         "Discovering ancient temples and peaceful gardens off the beaten path...",
//       imageUrl: "/api/placeholder/400/250",
//       likes: 243,
//     },
//     {
//       id: 3,
//       title: "Street Food Adventure in Bangkok",
//       author: "Mike Chen",
//       date: "2024-01-08",
//       location: "Bangkok, Thailand",
//       content: "A culinary journey through the vibrant street markets...",
//       imageUrl: "/api/placeholder/400/250",
//       likes: 189,
//     },
//     {
//       id: 4,
//       title: "Exploring the Amazon Rainforest",
//       author: "Maria Garcia",
//       date: "2024-01-05",
//       location: "Amazon, Brazil",
//       content:
//         "Three unforgettable days deep in the world's largest rainforest...",
//       imageUrl: "/api/placeholder/400/250",
//       likes: 312,
//     },
//   ];

//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//   const handleShare = (story) => {
//     if (!isLoggedIn) {
//       console.log("Redirecting to login page...");
//       return;
//     }

//     const shareUrl = `https://yourwebsite.com/stories/${story.id}`;
//     const shareText = `Check out this amazing travel story: ${story.title}`;

//     const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//       shareUrl
//     )}&quote=${encodeURIComponent(shareText)}`;

//     window.open(facebookShareUrl, "_blank", "width=600,height=400");
//   };

//   const handleViewDetails = (story) => {
//     console.log(`Navigating to details page for story ID: ${story.id}`);
//     // Add your navigation logic here, such as using React Router.
//   };

//   const navigateToAllStories = () => {
//     console.log("Navigating to all stories page...");
//   };

//   const navigateToAddStory = () => {
//     console.log("Navigating to add story page...");
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold">Tourist Stories</h2>
//         <div className="space-x-4">
//           <button className="btn btn-primary" onClick={navigateToAllStories}>
//             All Stories
//           </button>
//           <button className="btn btn-outline" onClick={navigateToAddStory}>
//             Add Story
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {stories.map((story) => (
//           <div
//             key={story.id}
//             className="card card-compact bg-base-100 shadow-xl"
//           >
//             <figure>
//               <img
//                 src={story.imageUrl}
//                 alt={story.title}
//                 className="w-full h-48 object-cover"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{story.title}</h2>
//               <div className="flex items-center gap-4 text-sm text-gray-600">
//                 <div className="flex items-center gap-1">
//                   <MapPin className="w-4 h-4" />
//                   {story.location}
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Calendar className="w-4 h-4" />
//                   {new Date(story.date).toLocaleDateString()}
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-2">By {story.author}</p>
//               <p className="line-clamp-3">{story.content}</p>
//               <div className="card-actions justify-between items-center">
//                 <span className="text-sm text-gray-600">
//                   {story.likes} people liked this story
//                 </span>
//                 <div className="space-x-2">
//                   <button
//                     className="btn btn-outline btn-sm"
//                     onClick={() => handleViewDetails(story)}
//                   >
//                     View Details
//                   </button>
//                   <button
//                     className="btn btn-outline btn-sm"
//                     onClick={() => handleShare(story)}
//                   >
//                     <Share2 className="w-4 h-4 mr-2" />
//                     Share on Facebook
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TouristStories;

import React from "react";
import { Share2, MapPin, Calendar } from "lucide-react";

const TouristStories = () => {
  const stories = [
    {
      id: 1,
      title: "Amazing Trek Through the Alps",
      author: "John Smith",
      date: "2024-01-15",
      location: "Swiss Alps",
      content:
        "What started as a simple hiking trip turned into the adventure of a lifetime...",
      imageUrl: "https://i.ibb.co/KVhSvfX/tiger-1600x900.jpg",
      likes: 156,
    },
    {
      id: 2,
      title: "Hidden Gems of Kyoto",
      author: "Emma Wilson",
      date: "2024-01-10",
      location: "Kyoto, Japan",
      content:
        "Discovering ancient temples and peaceful gardens off the beaten path...",
      imageUrl: "https://via.placeholder.com/400x250", // Placeholder image
      likes: 243,
    },
    {
      id: 3,
      title: "Street Food Adventure in Bangkok",
      author: "Mike Chen",
      date: "2024-01-08",
      location: "Bangkok, Thailand",
      content: "A culinary journey through the vibrant street markets...",
      imageUrl: "https://via.placeholder.com/400x250",
      likes: 189,
    },
    {
      id: 4,
      title: "Exploring the Amazon Rainforest",
      author: "Maria Garcia",
      date: "2024-01-05",
      location: "Amazon, Brazil",
      content:
        "Three unforgettable days deep in the world's largest rainforest...",
      imageUrl: "https://via.placeholder.com/400x250",
      likes: 312,
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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

  const navigateToAllStories = () => {
    console.log("Navigating to all stories page...");
  };

  const navigateToAddStory = () => {
    console.log("Navigating to add story page...");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-center md:text-left">
          Tourist Stories
        </h2>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
            onClick={navigateToAllStories}
          >
            All Stories
          </button>
          <button
            className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-100 transition duration-300"
            onClick={navigateToAddStory}
          >
            Add Story
          </button>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{story.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {story.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(story.date).toLocaleDateString()}
                </div>
              </div>
              <p className="text-gray-600 mt-2">By {story.author}</p>
              <p className="text-gray-700 mt-2 line-clamp-3">{story.content}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600">
                  {story.likes} likes
                </span>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition duration-300"
                    onClick={() => handleViewDetails(story)}
                  >
                    View Details
                  </button>
                  <button
                    className="px-3 py-1 border border-gray-600 text-gray-600 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center gap-1"
                    onClick={() => handleShare(story)}
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristStories;
