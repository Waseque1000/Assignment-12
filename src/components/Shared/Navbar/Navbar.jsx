// import React from "react";
// import Container from "../Container";
// import Logo from "./Logo";
// // import Search from "./Search";
// import MenuDropdown from "./MenuDropdown";
// import { NavLink } from "react-router-dom";
// import Confetti from "../../../hooks/Confetti";

// const Navbar = () => {
//   return (
//     <div className="fixed w-full bg-white z-10 shadow-sm">
//       <div className="py-4 border-b-[1px]">
//         <Container>
//           <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
//             <Logo />

//             {/* <Search /> */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <NavLink to="/" className="text-gray-700 hover:text-green-600">
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/community"
//                 className="text-gray-700 hover:text-green-600"
//               >
//                 Community
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className="text-gray-700 hover:text-green-600"
//               >
//                 About Us
//               </NavLink>
//               <NavLink
//                 to="/trip"
//                 className="text-gray-700 hover:text-green-600"
//               >
//                 Trips
//               </NavLink>
//             </nav>
//             <MenuDropdown />
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white shadow-md py-4 rounded-lg">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/community"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Community
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/trip"
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Trips
              </NavLink>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
