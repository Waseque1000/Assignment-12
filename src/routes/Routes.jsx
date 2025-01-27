import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
// import AddRoom from '../pages/Dashboard/AddRoom'
// import { getRoom } from "../api/rooms";
import MyBookings from "../pages/Dashboard/MyBookings";
import MyListings from "../pages/Dashboard/MyListings";
import ManageBookings from "../pages/Dashboard/ManageBooking";
import PackageDetails from "../components/Categories/PackageDetails";
import AboutPage from "../components/Categories/AboutPage";
import AllTrips from "../components/Shared/Navbar/AllTrips";
// import TouristDashboard from "../pages/Dashboard/TouristDashboard";
import ProfileCard from "../components/Dashboard/ProfileCard";
import AddStory from "../components/Dashboard/AddStory";
import ManageStories from "../components/Dashboard/ManageStory";
import ManageProfile from "../components/Dashboard/ManageProfile";
import Error from "../components/Shared/Error";
import CommunityPage from "../components/Shared/Navbar/CommunityPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PackageDetails></PackageDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-000002.vercel.app/packages/${params.id}`).then(
            (res) => res.json()
          ),
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/trip",
        element: (
          <PrivateRoute>
            <AllTrips></AllTrips>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard/", element: <MyBookings></MyBookings> },
      { path: "/dashboard/my-bookings", element: <MyBookings></MyBookings> },
      { path: "/dashboard/profile", element: <ProfileCard /> },
      { path: "/dashboard/add-story", element: <AddStory /> },
      { path: "/dashboard/manage-story", element: <ManageStories /> },

      { path: "/dashboard/users", element: <ManageProfile /> },
      { path: "/dashboard/my-listings", element: <MyListings /> },
      { path: "/dashboard/manage-bookings", element: <ManageBookings /> },
    ],
  },
]);
