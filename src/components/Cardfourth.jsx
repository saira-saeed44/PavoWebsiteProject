import React from "react";
import img from '../components/assests/details2.jpg';
const Header = ({ data }) => {
  return (
    <header className="bg-white p-4 mb-1">
      <div></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl text-gray-600 font-bold">{data.heading}</h1>
          <p className="text-md text-gray-500 mt-2">{data.description2}</p>
          <p className="text-md text-gray-500 mt-2">{data.description}</p>
        </div>
        <div className="flex-1">
          <img src={img} alt="Header Image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
