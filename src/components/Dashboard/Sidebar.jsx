import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from "../Shared/Navbar/Logo";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import HostMenu from "./HostMenu";
import GuestMenu from "./GuestMenu";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logOut, role, loading, setLoading } = useContext(AuthContext);
  const [toggle, setToggle] = useState(role === "admin");
  const [isActive, setActive] = useState(false);

  const handleToggle = () => setActive(!isActive);
  const toggleHandler = (event) => setToggle(event.target.checked);

  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between items-center md:hidden px-4 py-2">
        <Logo />
        <button
          onClick={handleToggle}
          className="p-2 focus:outline-none focus:bg-gray-200 rounded-md"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 fixed md:relative flex flex-col justify-between bg-gray-100 md:w-1/5 w-64 h-screen space-y-6 px-2 py-4 transition-all duration-200 ease-in-out ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div className="w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto">
            <Logo />
          </div>
          <div className="flex flex-col items-center mt-6 -mx-2">
            <Link to="/dashboard">
              <img
                className="object-cover w-16 h-16 md:w-24 md:h-24 mx-2 rounded-full"
                src={user?.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/dashboard">
              <h4 className="mx-2 mt-2 font-medium text-gray-800 hover:underline hidden md:block">
                {user?.displayName}
              </h4>
            </Link>
            <Link to="/dashboard">
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600 hover:underline hidden md:block">
                {user?.email}
              </p>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role === "admin" ? (
                <>
                  <label
                    htmlFor="Toggle3"
                    className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
                  >
                    <input
                      onChange={toggleHandler}
                      id="Toggle3"
                      type="checkbox"
                      checked={toggle}
                      className="hidden peer"
                    />
                    <span className="px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300">
                      Guest
                    </span>
                    <span className="px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400">
                      Host
                    </span>
                  </label>
                  {toggle ? <HostMenu /> : <GuestMenu />}
                </>
              ) : (
                <GuestMenu />
              )}
            </nav>
          </div>
        </div>

        {/* Profile and Logout */}
        <div>
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
                isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-6 h-6" />
            <span className="mx-4 font-medium hidden md:inline">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-6 h-6" />
            <span className="mx-4 font-medium hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
