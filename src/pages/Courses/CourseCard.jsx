import React from 'react';

export const CourseCard = ({ title, description, price }) => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto border border-gray-300 hover:shadow-xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
  
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-green-500">₹{price}</span> {/* Price font size adjusted */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full hover:from-blue-600 hover:to-blue-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };
  
