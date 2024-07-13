import React from "react";
import CopyRight from "./CopyRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-100 to-white text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4 text-2xl text-black font-semibold">
          Pavo is a mobile application for marketing automation and you ca
          <br></br>reach the team at
          <a
            href="mailto:email@domain.com"
            className="underlinen text-blue-900 hover:text-gray-600"
          >
            email@domain.com
          </a>
        </h2>
        <div className="flex justify-center">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl mx-2 hover:text-black" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2 hover:text-black" />
          <FontAwesomeIcon icon={faPinterest} className="text-2xl mx-2 hover:text-black" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 hover:text-black" />
          <FontAwesomeIcon icon={faYoutube} className=" text-2xl mx-2 hover:text-black" />
        </div>
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-4">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2024 Your Company. All rights reserved.</p>
//         <div className="mt-2">
//           <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
