

import React from "react";

const defaultFeatures = [
  "Live Interactive Classes with top educators",
  "Weekly Tests & Assessments to track progress",
  "Dedicated Doubt-Solving Sessions for clarity",
  "Comprehensive Study Materials provided",
];




export const BatchCard = ({ title, description, price }) => {
    return (
      <div className="max-w-sm  bg-white rounded-lg p-6 hover:shadow-lg shadow-md transition-transform transform hover:scale-105 ">
        <h2 className="text-xl font-bold text-gray-800 ">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          {defaultFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-600">₹{price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    );
  };