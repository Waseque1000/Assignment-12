import React from "react";
import Container from "../Container";
import Logo from "./Logo";
// import Search from "./Search";
import MenuDropdown from "./MenuDropdown";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <Logo />

            {/* <Search /> */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className="text-gray-700 hover:text-green-600">
                Home
              </NavLink>
              <NavLink
                to="/community"
                className="text-gray-700 hover:text-green-600"
              >
                Community
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-green-600"
              >
                About Us
              </NavLink>
              <NavLink
                to="/trip"
                className="text-gray-700 hover:text-green-600"
              >
                Trips
              </NavLink>
            </nav>
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
