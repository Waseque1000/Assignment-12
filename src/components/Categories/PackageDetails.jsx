import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Calendar, MapPin, Clock, User } from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const PackageDetails = () => {
  const tourDetails = useLoaderData(); // Get the data from the loader
  const [tourGuides, setTourGuides] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState("");
  const [tourDate, setTourDate] = useState("");

  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await axiosSecure.get("/guides"); // Replace with your guides API endpoint
        setTourGuides(response.data);
      } catch (error) {
        console.error("Failed to fetch guides:", error);
      }
    };

    fetchGuides();
  }, [axiosSecure]);

  const handleBooking = async (e) => {
    e.preventDefault();

    // Check if the user has selected a date and guide
    if (!tourDate || !selectedGuide) {
      alert("Please select a date and guide.");
      return;
    }

    const bookingData = {
      packageId: tourDetails.id,
      packageName: tourDetails.title,
      userName: user?.displayName || "Guest",
      userEmail: user?.email || "Not Available",
      tourDate,
      guideId: selectedGuide,
    };

    try {
      const response = await axiosSecure.post("/bookings", bookingData); // Replace with your bookings API endpoint
      if (response.data.success) {
        // Show toast on success
        toast.success("Tour Booking successfully!");
      } else {
        // Show toast if the booking failed
        toast.success("Tour Booking successfully!"); // Show toast on success
      }
    } catch (error) {
      console.error("Booking failed:", error);
      // Show toast if there was an error
      toast.error("An error occurred while booking. Please try again.");
    }
  };
  /******  586bdad9-7997-4767-8f73-08404e3df99f  *******/

  if (!tourDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Gallery Section */}
      <div>
        <img
          src={tourDetails.image}
          alt={tourDetails.title}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
      </div>

      {/* About The Tour Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{tourDetails.title}</h2>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{tourDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{tourDetails.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{tourDetails.location}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Price: ${tourDetails.price} | Rating: {tourDetails.rating} ⭐
            </p>
          </div>
        </div>

        {/* Booking Form Section */}
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>
            <form onSubmit={handleBooking}>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Package Name
                </label>
                <input
                  type="text"
                  value={tourDetails.title}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Tourist Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Guest"}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Tourist Email
                </label>
                <input
                  type="email"
                  value={user?.email || "Not Available"}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Tour Date
                </label>
                <input
                  type="date"
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Tour Guide
                </label>
                <select
                  onChange={(e) => setSelectedGuide(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a guide</option>
                  {tourGuides.map((guide) => (
                    <option key={guide.id} value={guide.id}>
                      {guide.name} - {guide.speciality}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Booking Confirmed!</h3>
            <p className="py-4">
              Your booking for {tourDetails.title} has been confirmed and is
              pending approval.
            </p>
            <div className="modal-action">
              <button
                onClick={() => setShowBookingModal(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
