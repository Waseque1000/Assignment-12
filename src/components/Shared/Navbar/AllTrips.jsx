// // import React, { useEffect, useState } from "react";
// // import { MapPin, Calendar, Users, Clock, Star } from "lucide-react";
// // import useAxiosSecure from "../../../hooks/useAxiosSecure";

// // const AllTrips = () => {
// //   const [axiosSecure] = useAxiosSecure();
// //   const [tourPackages, setTourPackages] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   useEffect(() => {
// //     const fetchTourPackages = async () => {
// //       try {
// //         const response = await axiosSecure.get("/packages");
// //         setTourPackages(response.data); // Assuming the API returns an array of tour packages.
// //       } catch (error) {
// //         console.error("Failed to fetch tour packages:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchTourPackages();
// //   }, [axiosSecure]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }
// //   // const handleViewDetails = (packageId) => {
// //   //   console.log(`Navigating to package ${packageId}`);
// //   // };

// //   return (
// //     // <div className="bg-gray-50 min-h-screen py-12">
// //     //   <div className="container mx-auto px-4">
// //     //     <div className="text-center mb-12">
// //     //       <h1 className="text-4xl font-bold text-gray-900 mb-4">
// //     //         Discover Bangladesh
// //     //       </h1>
// //     //       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //     //         Explore the hidden gems and iconic destinations across Bangladesh
// //     //         with our carefully curated travel packages.
// //     //       </p>
// //     //     </div>

// //     //     <div className="space-y-8">
// //     //       {tourPackages.map((pkg) => (
// //     //         <div
// //     //           key={pkg.id}
// //     //           className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all"
// //     //         >
// //     //           <div className="flex flex-col md:flex-row">
// //     //             <div className="md:w-1/3 relative">
// //     //               <img
// //     //                 src={pkg.image}
// //     //                 alt={pkg.title}
// //     //                 className="w-full h-64 md:h-full object-cover"
// //     //               />
// //     //               <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
// //     //                 <div className="flex items-center gap-1">
// //     //                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
// //     //                   <span className="font-medium">{pkg.rating}</span>
// //     //                 </div>
// //     //               </div>
// //     //             </div>

// //     //             <div className="p-6 md:w-2/3">
// //     //               <div className="flex flex-col h-full justify-between">
// //     //                 <div>
// //     //                   <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>

// //     //                   <div className="grid grid-cols-2 gap-4 mb-6">
// //     //                     <div className="flex items-center gap-2">
// //     //                       <MapPin className="w-5 h-5 text-primary" />
// //     //                       <span>{pkg.location}</span>
// //     //                     </div>
// //     //                     <div className="flex items-center gap-2">
// //     //                       <Calendar className="w-5 h-5 text-primary" />
// //     //                       <span>{pkg.duration}</span>
// //     //                     </div>
// //     //                     <div className="flex items-center gap-2">
// //     //                       <Users className="w-5 h-5 text-primary" />
// //     //                       {/* <span>{pkg.groupSize}</span> */}
// //     //                     </div>
// //     //                     <div className="flex items-center gap-2">
// //     //                       <Clock className="w-5 h-5 text-primary" />
// //     //                       {/* <span>{pkg.startTime}</span> */}
// //     //                     </div>
// //     //                   </div>

// //     //                   <div className="mb-6">
// //     //                     <h3 className="font-semibold mb-2">Highlights:</h3>
// //     //                     <div className="flex flex-wrap gap-2">
// //     //                       {pkg.highlights.map((highlight, index) => (
// //     //                         <span
// //     //                           key={index}
// //     //                           className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
// //     //                         >
// //     //                           {highlight}
// //     //                         </span>
// //     //                       ))}
// //     //                     </div>
// //     //                   </div>
// //     //                 </div>

// //     //                 <div className="flex items-center justify-between mt-4">
// //     //                   <div className="text-2xl font-bold text-primary">
// //     //                     {pkg.price}
// //     //                     <span className="text-sm text-gray-500 font-normal">
// //     //                       /person
// //     //                     </span>
// //     //                   </div>
// //     //                   <button
// //     //                     className="btn btn-primary"
// //     //                     onClick={() => handleViewDetails(pkg.id)}
// //     //                   >
// //     //                     View Details
// //     //                   </button>
// //     //                 </div>
// //     //               </div>
// //     //             </div>
// //     //           </div>
// //     //         </div>
// //     //       ))}
// //     //     </div>
// //     //   </div>
// //     // </div>
// //     <div className="space-y-8">
// //       {tourPackages.map((pkg) => (
// //         <div
// //           key={pkg.id}
// //           className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all"
// //         >
// //           <div className="flex flex-col md:flex-row">
// //             <div className="md:w-1/3 relative">
// //               <img
// //                 src={pkg.image}
// //                 alt={pkg.title}
// //                 className="w-full h-64 md:h-full object-cover"
// //               />
// //               <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
// //                 <div className="flex items-center gap-1">
// //                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
// //                   <span className="font-medium">{pkg.rating}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="p-6 md:w-2/3">
// //               <div className="flex flex-col h-full justify-between">
// //                 <div>
// //                   <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>

// //                   <div className="grid grid-cols-2 gap-4 mb-6">
// //                     <div className="flex items-center gap-2">
// //                       <MapPin className="w-5 h-5 text-primary" />
// //                       <span>{pkg.location}</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <Calendar className="w-5 h-5 text-primary" />
// //                       <span>{pkg.duration}</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <Users className="w-5 h-5 text-primary" />
// //                       <span>{pkg.groupSize}</span>
// //                     </div>
// //                   </div>

// //                   <div className="mb-6">
// //                     <h3 className="font-semibold mb-2">Highlights:</h3>
// //                     <div className="flex flex-wrap gap-2">
// //                       {pkg.highlights.map((highlight, index) => (
// //                         <span
// //                           key={index}
// //                           className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
// //                         >
// //                           {highlight}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-center justify-between mt-4">
// //                   <div className="text-2xl font-bold text-primary">
// //                     {pkg.price}
// //                     <span className="text-sm text-gray-500 font-normal">
// //                       /person
// //                     </span>
// //                   </div>
// //                   <button
// //                     className="btn btn-primary"
// //                     onClick={() =>
// //                       console.log(`Navigating to package ${pkg.id}`)
// //                     }
// //                   >
// //                     View Details
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default AllTrips;

// import React, { useEffect, useState } from "react";
// import { MapPin, Calendar, Users, Clock, Star } from "lucide-react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AllTrips = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const [tourPackages, setTourPackages] = useState([]); // Default to empty array
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTourPackages = async () => {
//       try {
//         const response = await axiosSecure.get("/packages");
//         console.log("API Response:", response.data); // Debug response
//         setTourPackages(response.data || []); // Handle undefined or null responses
//       } catch (error) {
//         console.error("Failed to fetch tour packages:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTourPackages();
//   }, [axiosSecure]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Discover Bangladesh
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore the hidden gems and iconic destinations across Bangladesh
//             with our carefully curated travel packages.
//           </p>
//         </div>

//         <div className="space-y-8">
//           {tourPackages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all"
//             >
//               {/* Package Card Code */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTrips;

import React, { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllTrips = () => {
  const [axiosSecure] = useAxiosSecure();
  const [tourPackages, setTourPackages] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await axiosSecure.get("/packages");
        console.log("API Response:", response.data); // Debugging log
        setTourPackages(response.data || []); // Handle undefined or null responses
      } catch (error) {
        console.error("Failed to fetch tour packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourPackages();
  }, [axiosSecure]);

  if (loading) {
    return <div className="text-center text-lg py-12">Loading...</div>;
  }

  return (
    <div className="bg-gray-50  min-h-screen py-12">
      <div className="container  mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Bangladesh
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the hidden gems and iconic destinations across Bangladesh
            with our carefully curated travel packages.
          </p>
        </div>

        <div className="space-y-8 grid grid-cols-2 gap-4">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{pkg.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:w-2/3">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>{pkg.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span>{pkg.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          <span>{pkg.startTime || "N/A"}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Highlights:</h3>
                        <div className="flex flex-wrap gap-2">
                          {pkg.highlights?.map((highlight, index) => (
                            <span
                              key={index}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-2xl font-bold text-primary">
                        ${pkg.price}
                        <span className="text-sm text-gray-500 font-normal">
                          /person
                        </span>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          console.log(`View details for ${pkg._id}`)
                        }
                      >
                        <Link
                          to={`/details/${pkg._id}`}
                          className="flex items-center text-green-500 hover:text-green-600"
                        >
                          View Details
                          <ChevronRight className="w-5 h-5 ml-1" />
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTrips;
