import React, { useEffect, useState } from "react";
import img from './assests/conclusionsmartphone.png';
const Header = ({ data }) => {
  const headingPart=data?.heading.split(" ")||"";
  const [first, setfirst] = useState([])
  const data2=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setfirst(data)
    })
    .catch((error) => console.log(error));}
    useEffect(()=>{
  data2()
  console.log("data",first);
    },[])
  console.log("data",first);

  return (
    <header className="bg-gradient-to-b from-teal-100 to-white p-4 mb-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl text-black font-bold">{headingPart[0]+" "+headingPart[1]}</h1>
          <h1 className="text-3xl text-black font-bold">{headingPart[2]+" "+headingPart[3]}</h1>
          <p className="text-lg text-gray-600 mt-2">{data.description}</p>
          <div className="mt-4">
            {data.buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className="bg-pink-700 hover:bg-transparent hover:text-gray-700 hover:border-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img src={img} alt="Header Image" className="rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center pt-16 pb-2 h-screen">
        <p className="text-2xl text-gray-800">
          Team management mobile apps don’t get better than Pavo. It’s probably{" "}
          <br></br> the best app in the world for this purpose. Don’t hesitate
          to give it a try <br></br> today and you will fall in love with it.
        </p>
      </div>
    </header>
  );
};

export default Header;

