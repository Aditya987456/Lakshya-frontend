









import React from 'react';
import { BatchCard } from '../../components/BatchCard';

const SchoolClasses = [
    {
      title: 'Class 6',
      description: 'Fundamental course focusing on building strong basics in all core subjects.',
      price: '3000',
    },
    {
      title: 'Class 7',
      description: 'Concept-oriented course designed to deepen understanding in Science and Math.',
      price: '3500',
    },
    {
      title: 'Class 8',
      description: 'Preparation-focused curriculum to strengthen analytical and problem-solving skills.',
      price: '3500',
    },
    {
      title: 'Class 9',
      description: 'Comprehensive academic course aligned with school and competitive standards.',
      price: '4000',
    },
    {
      title: 'Class 10',
      description: 'Board exam-oriented program with emphasis on revision, testing, and doubt-solving.',
      price: '5000',
    },
  ];
  






export const Classes= () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">



      <h1 className="text-4xl font-bold text-center mb-20  text-blue-600">
        Class 6-10 batches
      </h1>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        
        
        {SchoolClasses.map((course, index) => (
          

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
