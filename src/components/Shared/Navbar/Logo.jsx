// import { Link } from "react-router-dom";
// // import logoImg from "../../../assets/images/logo.png";
// import logoImg from "../../../assets/holiday-trip.png";

// const Logo = () => {
//   return (
//     <Link to="/">
//       <img
//         className="hidden md:block"
//         src={logoImg}
//         alt="logo"
//         width="70"
//         height="70"
//       />
//     </Link>
//   );
// };

// export default Logo;

import { Link } from "react-router-dom";
import logoImg from "../../../assets/holiday-trip.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        className="h-10 w-auto md:h-14"
        src={logoImg}
        alt="Holiday Trip Logo"
      />
    </Link>
  );
};

export default Logo;
