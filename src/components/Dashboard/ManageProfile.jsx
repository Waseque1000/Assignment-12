// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";

// import { useQuery } from "@tanstack/react-query";

// import { MdDeleteForever } from "react-icons/md";

// import { HiUserGroup } from "react-icons/hi2";
// import { toast } from "react-toastify";

// const ManageProfile = () => {
//   const [axiosSecure] = useAxiosSecure();
//   // const [users, setUsers] = useState([]);
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });

//   // ?
//   const handleMakeAdmin = (user) => {
//     console.log(user);
//     axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
//       if (res.data.modifiedCount > 0) {
//         refetch();
//         Swal.fire({
//           title: "Good job!",
//           text: `${user.email} is an Admin Now!`,
//           icon: "success",
//         });
//       }
//     });
//   };

//   // const handleRemoveUser = (user) => {
//   //   console.log(user);
//   //   Swal.fire({
//   //     title: "Are you sure?",
//   //     text: "You won't be able to revert this!",
//   //     icon: "warning",
//   //     showCancelButton: true,
//   //     confirmButtonColor: "#3085d6",
//   //     cancelButtonColor: "#d33",
//   //     confirmButtonText: "Yes, delete it!",
//   //   }).then((result) => {
//   //     if (result.isConfirmed) {
//   //       axiosSecure.delete(`/users/${user._id}`).then((res) => {
//   //         if (res.data.deletedCount > 0) {
//   //           refetch();
//   //           Swal.fire({
//   //             title: "Deleted!",
//   //             text: "Your file has been deleted.",
//   //             icon: "success",
//   //           });
//   //         }
//   //       });
//   //     }
//   //   });
//   // };

//   const handleRemoveUser = (user) => {
//     console.log(user);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure
//           .delete(`https://server-000002.vercel.app/users/${user._id}`) // Use default axios here
//           .then((res) => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//               });
//             }
//           })
//           .catch((error) => {
//             console.error("Error deleting user:", error);
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="bg-white p-8 rounded-xl">
//         <div className="flex justify-between">
//           <h2 className="text-4xl font-bold">Total Users : {users.length} </h2>
//         </div>
//         <div className="mt-8">
//           <div className="overflow-x-auto">
//             <table className="table">
//               {/* head */}
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>NAME</th>
//                   <th>EMAIL</th>
//                   <th>ROLE</th>
//                   <th>ACTION</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, idx) => (
//                   <tr key={user._id}>
//                     <th>{idx + 1}</th>
//                     <td>
//                       <span className="text-lg font-bold"> {user.name}</span>
//                     </td>
//                     <td>
//                       <span className="text-lg">{user.email}</span>
//                     </td>
//                     <td>
//                       {user.role === "admin" ? (
//                         "Admin"
//                       ) : (
//                         <button
//                           onClick={() => handleMakeAdmin(user)}
//                           className="p-3 rounded-xl text-white bg-yellow-500"
//                         >
//                           <HiUserGroup size={25} />
//                         </button>
//                       )}
//                     </td>
//                     <th>
//                       <button
//                         onClick={() => handleRemoveUser(user)}
//                         className="text-red-600"
//                       >
//                         <MdDeleteForever size={35} />
//                       </button>
//                     </th>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageProfile;

import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { toast } from "react-toastify";

const ManageProfile = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Good job!",
          text: `${user.email} is an Admin Now!`,
          icon: "success",
        });
      }
    });
  };

  const handleRemoveUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`https://server-000002.vercel.app/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    });
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-xl">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Total Users: {users.length}
      </h2>
      <div className="mt-8">
        <div className="hidden md:block overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td className="text-lg font-bold">{user.name}</td>
                  <td className="text-lg">{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="p-3 rounded-xl text-white bg-yellow-500"
                      >
                        <HiUserGroup size={25} />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemoveUser(user)}
                      className="text-red-600"
                    >
                      <MdDeleteForever size={35} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden flex flex-wrap gap-4 justify-center">
          {users.map((user, idx) => (
            <div
              key={user._id}
              className="bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-sm"
            >
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p className="text-gray-700">{user.email}</p>
              <div className="mt-2 flex justify-between items-center">
                {user.role === "admin" ? (
                  <span className="text-green-600 font-bold">Admin</span>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="p-2 rounded-md text-white bg-yellow-500"
                  >
                    <HiUserGroup size={20} />
                  </button>
                )}
                <button
                  onClick={() => handleRemoveUser(user)}
                  className="text-red-600"
                >
                  <MdDeleteForever size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
