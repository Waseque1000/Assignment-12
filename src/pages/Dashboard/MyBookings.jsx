import React, { useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const MyBookings = ({ onPaymentClick }) => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [selectedBooking, setSelectedBooking] = useState(null); // For modal

  // Fetch bookings
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `https://server-000002.vercel.app/bookings?email=${user?.email}`
      );
      return response.data;
    },
    enabled: !!user?.email, // Only fetch if the user is logged in
  });

  // Mutation for deleting a booking
  const deleteBookingMutation = useMutation({
    mutationFn: async (_id) => {
      const response = await axios.delete(
        `https://server-000002.vercel.app/bookings/${_id}`
      );
      return response.data;
    },
    onSuccess: () => {
      // Refetch bookings after successful deletion
      queryClient.invalidateQueries(["bookings", user?.email]);
      toast.success("Booking deleted successfully!");
    },
    onError: (error) => {
      console.error("Error deleting booking:", error);
      toast("Failed to delete booking. Please try again.");
    },
  });

  const handleDelete = (_id) => {
    deleteBookingMutation.mutate(_id);
    setSelectedBooking(null); // Close modal after deletion
  };

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-50">
            <tr>
              <th>Package</th>
              <th>Tour Date</th>
              <th>User</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody key={bookings}>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.packageName}</td>
                  <td>{booking.tourDate}</td>
                  <td>{booking.userName}</td>
                  <td>{booking.userEmail}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "pending"
                          ? "badge-warning"
                          : "badge-info"
                      }`}
                    >
                      {booking.status || "Pending"}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      {booking.status === "pending" && (
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => onPaymentClick(booking)}
                        >
                          Pay Now
                        </button>
                      )}
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold">Confirm Deletion</h2>
            <p className="mt-2">
              Are you sure you want to delete the booking for{" "}
              <strong>{selectedBooking.packageName}</strong>?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="btn btn-sm"
                onClick={() => setSelectedBooking(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={() => handleDelete(selectedBooking._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
