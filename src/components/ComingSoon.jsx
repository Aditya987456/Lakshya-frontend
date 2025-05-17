import React from 'react';
import { FaTools, FaClock } from 'react-icons/fa';
import { BsHourglassSplit } from 'react-icons/bs';

export const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-12 md:p-20 max-w-4xl w-full text-center border border-dashed border-blue-400">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          This section is currently under development. We’re working hard to bring you amazing features. Stay tuned and check back soon!
        </p>

        <div className="flex justify-center gap-6 text-3xl text-purple-600 mb-4">
          <FaTools className="animate-spin-slow" />
          <FaClock className="animate-bounce" />
        </div>

        <p className="text-sm text-gray-500">
          Meanwhile, you can explore other parts of our website.
        </p>
      </div>
    </div>
  );
};
