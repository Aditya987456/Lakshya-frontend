
import React from 'react';

const neetCourses = [
    {
      title: 'Class 11 - NEET Foundation',
      description: 'A strong foundation course for students starting their NEET journey.',
    },
    {
      title: 'Class 12 - NEET Advanced',
      description: 'Comprehensive coverage of the NEET syllabus for Class 12 students.',
    },
    {
      title: 'NEET Droppers',
      description: 'Exclusive preparation program for students reattempting NEET.',
    },
  ];

export const NeetCourse = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
        NEET Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 h-60 gap-10 max-w-7xl mx-auto">
        {neetCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
              {course.title}
            </h2>
            <p className="text-gray-700 text-center">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
