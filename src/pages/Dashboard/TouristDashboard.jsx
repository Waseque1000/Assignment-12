// import React, { useState } from "react";
// import { UserCircle, BookOpen, FileEdit, PlusCircle } from "lucide-react";

// const MyBookings = ({ onPaymentClick }) => {
//   const bookings = [
//     {
//       id: 1,
//       packageName: "Sundarbans Adventure",
//       guideName: "Sarah Wilson",
//       date: "2025-02-15",
//       price: "15,000 BDT",
//       status: "pending",
//     },
//     {
//       id: 2,
//       packageName: "Cox's Bazar Tour",
//       guideName: "Mike Johnson",
//       date: "2025-03-01",
//       price: "12,000 BDT",
//       status: "in review",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th>Package</th>
//               <th>Guide</th>
//               <th>Date</th>
//               <th>Price</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking.id}>
//                 <td>{booking.packageName}</td>
//                 <td>{booking.guideName}</td>
//                 <td>{booking.date}</td>
//                 <td>{booking.price}</td>
//                 <td>
//                   <span
//                     className={`badge ${
//                       booking.status === "pending"
//                         ? "badge-warning"
//                         : "badge-info"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </td>
//                 <td>
//                   {booking.status === "pending" && (
//                     <div className="flex gap-2">
//                       <button
//                         className="btn btn-sm btn-primary"
//                         onClick={() => onPaymentClick(booking)}
//                       >
//                         Pay Now
//                       </button>
//                       <button className="btn btn-sm btn-error">Cancel</button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// const AddStory = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <h2 className="text-2xl font-bold mb-6">Share Your Travel Story</h2>
//       <form className="space-y-6">
//         <div>
//           <label className="block mb-2">Story Title</label>
//           <input
//             type="text"
//             placeholder="Enter your story title"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Your Story</label>
//           <textarea
//             placeholder="Share your experience..."
//             className="textarea textarea-bordered w-full h-32"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block mb-2">Upload Images</label>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             className="file-input file-input-bordered w-full"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Post Story
//         </button>
//       </form>
//     </div>
//   );
// };

// const ManageStories = ({ onEditStory, onDeleteStory }) => {
//   const stories = [
//     {
//       id: 1,
//       title: "Amazing Sundarbans Trip",
//       content: "The mangrove forest was breathtaking...",
//       images: ["/api/placeholder/300/200", "/api/placeholder/300/200"],
//       date: "2025-01-10",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {stories.map((story) => (
//         <div key={story.id} className="bg-white rounded-lg shadow p-6">
//           <div className="flex justify-between mb-4">
//             <h3 className="text-xl font-bold">{story.title}</h3>
//             <div className="flex gap-2">
//               <button
//                 className="btn btn-sm btn-outline"
//                 onClick={() => onEditStory(story)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-sm btn-error"
//                 onClick={() => onDeleteStory(story.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//           <p className="mb-4">{story.content}</p>
//           <div className="grid grid-cols-2 gap-4">
//             {story.images.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Story ${idx + 1}`}
//                 className="rounded-lg w-full h-40 object-cover"
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const TouristDashboard = () => {
//   const [activeRoute, setActiveRoute] = useState("bookings");
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   const handlePaymentClick = (booking) => {
//     setSelectedBooking(booking);
//     setIsPaymentModalOpen(true);
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="flex flex-wrap gap-4 mb-8">
//         {[
//           { icon: BookOpen, label: "My Bookings", route: "bookings" },
//           { icon: PlusCircle, label: "Add Story", route: "add-story" },
//           { icon: FileEdit, label: "Manage Stories", route: "manage-stories" },
//         ].map(({ icon: Icon, label, route }) => (
//           <button
//             key={route}
//             className={`btn ${
//               activeRoute === route ? "btn-primary" : "btn-outline"
//             } flex items-center gap-2`}
//             onClick={() => setActiveRoute(route)}
//           >
//             <Icon className="w-4 h-4" />
//             {label}
//           </button>
//         ))}
//       </div>

//       <div className="mt-6">
//         {activeRoute === "bookings" && (
//           <MyBookings onPaymentClick={handlePaymentClick} />
//         )}
//         {activeRoute === "add-story" && <AddStory />}
//         {activeRoute === "manage-stories" && <ManageStories />}
//       </div>

//       {isPaymentModalOpen && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Complete Payment</h3>
//             {selectedBooking && (
//               <div className="space-y-4">
//                 <p>{selectedBooking.packageName}</p>
//                 <p className="text-gray-600">Amount: {selectedBooking.price}</p>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => setIsPaymentModalOpen(false)}
//                 >
//                   Pay Now
//                 </button>
//               </div>
//             )}
//             <button
//               className="modal-close absolute top-3 right-3"
//               onClick={() => setIsPaymentModalOpen(false)}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TouristDashboard;
