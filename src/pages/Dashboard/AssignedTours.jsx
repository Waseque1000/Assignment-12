import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Confetti from "../../hooks/Confetti";

const AssignedTours = ({ user, onAccept, onReject }) => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [tourToAccept, setTourToAccept] = useState(null);

  const queryClient = useQueryClient(); // For optimistic update

  // Fetch bookings using react-query
  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:5000/all-bookings`);
      return response.data;
    },
  });

  // Function to update the tour status on the backend
  const updateStatus = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/bookings/${id}/accept`,
      {
        method: "PATCH",
      }
    );
    const data = await response.json();
    return data;
  };

  // Handle accepting a tour
  const handleAccept = async (id) => {
    // Optimistically update the bookings data
    queryClient.setQueryData(["bookings"], (oldData) => {
      return oldData.map((tour) =>
        tour._id === id ? { ...tour, status: "Confirm" } : tour
      );
    });

    try {
      await updateStatus(id);
      console.log("Tour status updated to Confirm");
      toast.success("Tour bookings Successful");
      // <Confetti></Confetti>;
    } catch (error) {
      console.error("Error updating status:", error);
      // Revert optimistic update if the request fails
      queryClient.setQueryData(["bookings"], (oldData) => {
        return oldData.map((tour) =>
          tour._id === id ? { ...tour, status: "Pending" } : tour
        );
      });
    }
  };

  // Handle rejecting a tour
  const handleRejectConfirm = () => {
    if (!onReject || !selectedTourId) return;
    onReject(selectedTourId);
    setShowRejectModal(false);
    setSelectedTourId(null);
  };

  const openRejectModal = (tourId) => {
    setSelectedTourId(tourId);
    setShowRejectModal(true);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Loading tours...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>
          {error?.message || "Failed to fetch tours. Please try again later."}
        </p>
      </div>
    );
  }

  // If no bookings available
  if (!bookings.length) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">All Assigned Tours</h2>
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">No tours assigned yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Assigned Tours</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tourist Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tour Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((tour) => (
              <tr key={tour._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {tour.packageName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tour.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(tour.tourDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      tour.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : tour.status === "Accepted"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {tour.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(tour._id)}
                      disabled={tour.status !== "Pending"}
                      className={`px-3 py-1 rounded-md text-sm transition-colors ${
                        tour.status === "Pending"
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Accept
                    </button>
                    {tour.status === "Pending" && (
                      <button
                        onClick={() => openRejectModal(tour._id)}
                        className="px-3 py-1 rounded-md text-sm bg-red-600 text-white hover:bg-red-700 transition-colors"
                      >
                        Reject
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal for Reject */}
      {showRejectModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Rejection</h3>
            <p className="py-4">
              Are you sure you want to reject this tour? This action cannot be
              undone.
            </p>
            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setShowRejectModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleRejectConfirm}>
                Reject Tour
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for Accept */}
      {showAcceptModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Acceptance</h3>
            <p className="py-4">Are you sure you want to accept this tour?</p>
            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setShowAcceptModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-success" onClick={confirmAccept}>
                Accept Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedTours;
