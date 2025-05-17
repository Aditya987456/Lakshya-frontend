
import React from 'react';

const jeeCourses = [
  {
    title: 'Class 11 - JEE Foundation',
    description:
      'Build strong concepts in Physics, Chemistry, and Math to prepare for JEE from an early stage.',
  },
  {
    title: 'Class 12 - JEE Advanced',
    description:
      'Focus on advanced problem-solving and exam strategy with a tailored Class 12 curriculum.',
  },
  {
    title: 'JEE Droppers',
    description:
      'Exclusive repeater course for students targeting JEE with an additional year of preparation.',
  },
];

export const JeeCourse = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
        JEE Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 h-60 gap-10 max-w-7xl mx-auto">
        {jeeCourses.map((course, index) => (
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
