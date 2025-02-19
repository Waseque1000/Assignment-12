import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import { Helmet } from "react-helmet";

const DashboardLayout = () => {
  // if (isLoading) {
  //   return <progress className="progress w-56"></progress>;
  // }
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Sidebar />
      <div className="flex-1 ">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
