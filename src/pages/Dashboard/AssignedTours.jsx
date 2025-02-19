// import React, { useState } from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Confetti from "../../hooks/Confetti";

// const AssignedTours = ({ user, onAccept, onReject }) => {
//   const [showRejectModal, setShowRejectModal] = useState(false);
//   const [selectedTourId, setSelectedTourId] = useState(null);
//   const queryClient = useQueryClient();

//   const {
//     data: bookings = [],
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["bookings"],
//     queryFn: async () => {
//       const response = await axios.get(
//         `https://server-000002.vercel.app/all-bookings`
//       );
//       return response.data;
//     },
//   });

//   const updateStatus = async (id) => {
//     const response = await fetch(
//       `${import.meta.env.VITE_API_URL}/bookings/${id}/accept`,
//       {
//         method: "PATCH",
//       }
//     );
//     return response.json();
//   };

//   const handleAccept = async (id) => {
//     queryClient.setQueryData(["bookings"], (oldData) =>
//       oldData.map((tour) =>
//         tour._id === id ? { ...tour, status: "Confirm" } : tour
//       )
//     );

//     try {
//       await updateStatus(id);
//       toast.success("Tour booking successful");
//     } catch (error) {
//       queryClient.setQueryData(["bookings"], (oldData) =>
//         oldData.map((tour) =>
//           tour._id === id ? { ...tour, status: "Pending" } : tour
//         )
//       );
//     }
//   };

//   if (isLoading) {
//     return <p className="text-center text-gray-500">Loading tours...</p>;
//   }

//   if (isError) {
//     return (
//       <p className="text-center text-red-500">
//         {error?.message || "Failed to fetch tours."}
//       </p>
//     );
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
//         All Assigned Tours
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 text-xs md:text-sm">Package Name</th>
//               <th className="px-4 py-2 text-xs md:text-sm">Tourist Name</th>
//               <th className="px-4 py-2 text-xs md:text-sm">Tour Date</th>
//               <th className="px-4 py-2 text-xs md:text-sm">Status</th>
//               <th className="px-4 py-2 text-xs md:text-sm">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((tour) => (
//               <tr
//                 key={tour._id}
//                 className="border-b hover:bg-gray-50 text-center"
//               >
//                 <td className="px-4 py-3 text-xs md:text-sm">
//                   {tour.packageName}
//                 </td>
//                 <td className="px-4 py-3 text-xs md:text-sm">
//                   {tour.userName}
//                 </td>
//                 <td className="px-4 py-3 text-xs md:text-sm">
//                   {new Date(tour.tourDate).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-2 py-1 text-xs rounded-full ${
//                       tour.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : tour.status === "Confirm"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {tour.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 flex justify-center gap-2 text-xs md:text-sm">
//                   <button
//                     onClick={() => handleAccept(tour._id)}
//                     disabled={tour.status !== "Pending"}
//                     className={`px-3 py-1 rounded-md ${
//                       tour.status === "Pending"
//                         ? "bg-green-600 text-white hover:bg-green-700"
//                         : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     }`}
//                   >
//                     Accept
//                   </button>
//                   {tour.status === "Pending" && (
//                     <button
//                       onClick={() => {
//                         setSelectedTourId(tour._id);
//                         setShowRejectModal(true);
//                       }}
//                       className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
//                     >
//                       Reject
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Reject Confirmation Modal */}
//       {showRejectModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold">Confirm Rejection</h3>
//             <p className="py-4">Are you sure you want to reject this tour?</p>
//             <div className="flex justify-end gap-4">
//               <button
//                 className="px-4 py-2 bg-gray-300 rounded-md"
//                 onClick={() => setShowRejectModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-600 text-white rounded-md"
//                 onClick={() => {
//                   if (onReject) onReject(selectedTourId);
//                   setShowRejectModal(false);
//                 }}
//               >
//                 Reject Tour
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssignedTours;

import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const AssignedTours = ({ user, onAccept, onReject }) => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await axios.get(
        `https://server-000002.vercel.app/all-bookings`
      );
      return response.data;
    },
  });

  const updateStatus = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/bookings/${id}/accept`,
      {
        method: "PATCH",
      }
    );
    return response.json();
  };

  const handleAccept = async (id) => {
    queryClient.setQueryData(["bookings"], (oldData) =>
      oldData.map((tour) =>
        tour._id === id ? { ...tour, status: "Confirm" } : tour
      )
    );

    try {
      await updateStatus(id);
      toast.success("Tour booking successful");
    } catch (error) {
      queryClient.setQueryData(["bookings"], (oldData) =>
        oldData.map((tour) =>
          tour._id === id ? { ...tour, status: "Pending" } : tour
        )
      );
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading tours...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        {error?.message || "Failed to fetch tours."}
      </p>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        All Assigned Tours
      </h2>

      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm">Package Name</th>
              <th className="px-4 py-2 text-sm">Tourist Name</th>
              <th className="px-4 py-2 text-sm">Tour Date</th>
              <th className="px-4 py-2 text-sm">Status</th>
              <th className="px-4 py-2 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((tour) => (
              <tr
                key={tour._id}
                className="border-b hover:bg-gray-50 text-center"
              >
                <td className="px-4 py-3 text-sm">{tour.packageName}</td>
                <td className="px-4 py-3 text-sm">{tour.userName}</td>
                <td className="px-4 py-3 text-sm">
                  {new Date(tour.tourDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      tour.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : tour.status === "Confirm"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {tour.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex justify-center gap-2 text-sm">
                  <button
                    onClick={() => handleAccept(tour._id)}
                    disabled={tour.status !== "Pending"}
                    className={`px-3 py-1 rounded-md ${
                      tour.status === "Pending"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Accept
                  </button>
                  {tour.status === "Pending" && (
                    <button
                      onClick={() => {
                        setSelectedTourId(tour._id);
                        setShowRejectModal(true);
                      }}
                      className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for smaller screens */}
      <div className="md:hidden space-y-4">
        {bookings.map((tour) => (
          <div
            key={tour._id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <div className="space-y-2">
              <p className="text-sm font-medium">
                <span className="font-bold">Package:</span> {tour.packageName}
              </p>
              <p className="text-sm font-medium">
                <span className="font-bold">Tourist:</span> {tour.userName}
              </p>
              <p className="text-sm font-medium">
                <span className="font-bold">Date:</span>{" "}
                {new Date(tour.tourDate).toLocaleDateString()}
              </p>
              <p className="text-sm font-medium">
                <span className="font-bold">Status:</span>{" "}
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    tour.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : tour.status === "Confirm"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {tour.status}
                </span>
              </p>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <button
                onClick={() => handleAccept(tour._id)}
                disabled={tour.status !== "Pending"}
                className={`px-3 py-1 rounded-md flex-1 ${
                  tour.status === "Pending"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Accept
              </button>
              {tour.status === "Pending" && (
                <button
                  onClick={() => {
                    setSelectedTourId(tour._id);
                    setShowRejectModal(true);
                  }}
                  className="px-3 py-1 bg-red-600 text-white rounded-md flex-1 hover:bg-red-700"
                >
                  Reject
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reject Confirmation Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Confirm Rejection</h3>
            <p className="py-4">Are you sure you want to reject this tour?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setShowRejectModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={() => {
                  if (onReject) onReject(selectedTourId);
                  setShowRejectModal(false);
                }}
              >
                Reject Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedTours;
