
import React from 'react';
import { BatchCard } from '../../components/BatchCard';

const neetCourses = [
    {
      title: 'Class 11 - NEET Foundation',
      description: 'A strong foundation course for students starting their NEET journey.',
      price:'6000'
    },

    {
      title: 'Class 12 - NEET Advanced',
      description: 'Comprehensive coverage of the NEET syllabus for Class 12 students.',
      price:'6000'
    },

    {
      title: 'NEET Droppers',
      description: 'Exclusive preparation program for students reattempting NEET.',
      price:'6000'
    },
  ];






export const NeetCourse = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-6 px-4">



      <h1 className="text-4xl font-bold text-center mb-20  text-blue-600">
        NEET Batches
      </h1>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto flex-grow">
        
        
        {neetCourses.map((course, index) => (
          

<BatchCard
  title={course.title}
  description={course.description}
  price={course.price}
/>

        ))}
      </div>
    </div>
  );
};
