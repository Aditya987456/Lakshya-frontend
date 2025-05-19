
import React from 'react';
import { BatchCard } from '../../components/BatchCard';

const jeeCourses = [
  {
    title: 'Class 11 - JEE Foundation',
    description:
      'Build strong concepts in Physics, Chemistry, and Math to prepare for JEE from an early stage.',
      price:'6000'
  },


  {
    title: 'Class 12 - JEE Advanced',
    description:
      'Focus on advanced problem-solving and exam strategy with a tailored Class 12 curriculum.',
      price:'6000'
  },

  
  {
    title: 'JEE Droppers',
    description:
      'Exclusive repeater course for students targeting JEE with an additional year of preparation.',
      price:'6000'
  },
];

export const JeeCourse = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-6 px-4">



      <h1 className="text-4xl font-bold text-center mb-20  text-blue-600">
        JEE Batches
      </h1>



      <div className="grid grid-cols-1 md:grid-cols-3 h-60 gap-10 max-w-7xl mx-auto">
        
        
        {jeeCourses.map((course, index) => (
          

          // <div
          //   key={index}
          //   className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          // >
          //   <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">
          //     {course.title}
          //   </h2>
          //   <p className="text-gray-700 text-center">{course.description}</p>
          // </div>

          // <div className="flex justify-center items-center min-h-screen bg-gray-100">
<BatchCard
  title={course.title}
  description={course.description}
  price={course.price}
/>
// </div>


        ))}



      </div>




    </div>
  );
};



{/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
<BatchCard
  title="JEE Advanced Coaching"
  description="Comprehensive coaching for JEE Advanced aspirants."
  price="19999"
/>
</div> */}