import React from "react";
import { counterData } from "../data";

const Counter = () => {
  return (
    <div className=" bg-white flex items-center justify-center">
      {counterData?.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-5"
        >
          <h2 className="text-4xl font-bold">{data?.count}</h2>
          <p className="text-lg">{data?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
