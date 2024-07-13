import React from "react";
import img from '../components/assests/details3.jpg';
const Header = ({ data }) => {
  return (
    <header className="bg-white p-4 mb-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <img src={img} alt="Header Image" className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl text-black font-bold">{data.heading}</h1>
          <p className="text-lg text-gray-600 mt-2">{data.description}</p>
          <div className="mt-4">
            {data.buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className="bg-blue-700 hover:bg-transparent hover:text-gray-700 hover:border-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
