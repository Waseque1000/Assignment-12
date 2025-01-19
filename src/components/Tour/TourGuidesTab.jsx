// import React from "react";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { User, MapPin, Star } from "lucide-react";

// const tourdetailsTab = () => {
//   // Sample data - in real app this would come from props or API
//   const guides = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       image: "/api/placeholder/300/300",
//       location: "Paris, France",
//       experience: "8 years",
//       rating: 4.8,
//       languages: ["English", "French"],
//       speciality: "Historical Tours",
//     },
//     {
//       id: 2,
//       name: "Marco Rivera",
//       image: "/api/placeholder/300/300",
//       location: "Barcelona, Spain",
//       experience: "5 years",
//       rating: 4.9,
//       languages: ["English", "Spanish"],
//       speciality: "Food Tours",
//     },
//     {
//       id: 3,
//       name: "Yuki Tanaka",
//       image: "/api/placeholder/300/300",
//       location: "Tokyo, Japan",
//       experience: "6 years",
//       rating: 4.7,
//       languages: ["English", "Japanese"],
//       speciality: "Cultural Tours",
//     },
//     {
//       id: 4,
//       name: "Hans Mueller",
//       image: "/api/placeholder/300/300",
//       location: "Berlin, Germany",
//       experience: "10 years",
//       rating: 4.9,
//       languages: ["English", "German"],
//       speciality: "Architecture Tours",
//     },
//     {
//       id: 5,
//       name: "Lisa Chen",
//       image: "/api/placeholder/300/300",
//       location: "Singapore",
//       experience: "4 years",
//       rating: 4.6,
//       languages: ["English", "Mandarin"],
//       speciality: "Street Food Tours",
//     },
//     {
//       id: 6,
//       name: "Ahmed Hassan",
//       image: "/api/placeholder/300/300",
//       location: "Dubai, UAE",
//       experience: "7 years",
//       rating: 4.8,
//       languages: ["English", "Arabic"],
//       speciality: "Desert Safari Tours",
//     },
//   ];

//   const handleViewDetails = (guideId) => {
//     // In a real app, this would use your routing solution
//     console.log(`Navigating to guide ${guideId} details page`);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-bold mb-8">Our Tour Guides</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// {guides.map((guide) => (
//   <Card key={guide.id} className="overflow-hidden">
//     <img
//       src={guide.image}
//       alt={guide.name}
//       className="w-full h-48 object-cover"
//     />
//     <CardContent className="p-4">
//       <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
//       <div className="space-y-2">
//         <div className="flex items-center gap-2">
//           <MapPin className="w-4 h-4" />
//           <span>{guide.location}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <User className="w-4 h-4" />
//           <span>{guide.experience} experience</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Star className="w-4 h-4 text-yellow-400" />
//           <span>{guide.rating} rating</span>
//         </div>
//         <div>
//           <p className="font-medium">Languages:</p>
//           <p>{guide.languages.join(", ")}</p>
//         </div>
//         <div>
//           <p className="font-medium">Speciality:</p>
//           <p>{guide.speciality}</p>
//         </div>
//       </div>
//     </CardContent>
//     <CardFooter className="p-4 pt-0">
//       <Button
//         className="w-full"
//         onClick={() => handleViewDetails(guide.id)}
//       >
//         View Details
//       </Button>
//     </CardFooter>
//   </Card>
// ))}
//       </div>
//     </div>
//   );
// };

// export default tourdetailsTab;
