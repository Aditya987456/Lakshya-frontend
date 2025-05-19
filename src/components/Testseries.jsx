import React from 'react';

export const TestSeriesCard = ({ title, description, price }) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-300 text-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto transition-transform transform hover:scale-105">
  <div className="mb-4">
    <h2 className="text-3xl font-bold">{title} Test Series</h2>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
  </div>


      <ul className="list-disc list-inside text-sm space-y-1 mb-4">
        <li>10 Full-Length Mock Tests</li>
        <li>All India Ranking</li>
        <li>Detailed Solutions</li>
        <li>Live Doubt Sessions</li>
        <li>Performance Analytics</li>
      </ul>

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-bold">₹{price}</span>
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};
