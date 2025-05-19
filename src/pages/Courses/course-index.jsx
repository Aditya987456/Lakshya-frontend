import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Navigate } from "react-router-dom";


import React from 'react';
import { Button } from "../../components/button";

import imgJee from '../../assets/jee.png'
import imgNeet from '../../assets/neet.png'
import imgClass from '../../assets/imgClass.png'
import imgExtra from '../../assets/imgExtra.png'


const courses = [
  {
    title: 'JEE (Main+Advanced)',
    image:imgJee,
    nav: 'jee',
    batches:['class 11', 'class 12', 'class 12th plus']
  },

  {
    title: 'NEET',
    image:imgNeet,
    nav: 'neet',
    batches:['class 11', 'class 12', 'class 12th plus']

  },
  {
    title: 'Class 6–10',
    image:imgClass,
    nav: 'class-6-10',
    batches:['class 6', 'class 7', 'class 8', 'class 9', 'class 10']

  },
  {
    title: 'Extra Courses',
    image:imgExtra,
    nav: 'view-all',
    batches:['offline', 'Hindi medium', 'Olympiad']

  }
];






export const Course = () => {

  const location=useLocation()
  const CourseIndexRoot=location.pathname==='/courses'

  const navigate=useNavigate()








  return (
    <div className="bg-gray-100">

{CourseIndexRoot && (

// storing gradient color here for page bg  gradient-to-br from-blue-100 to-purple-200
<div className="bg-slate-50 min-h-screen p-6 pb-10">


<h1 className="text-3xl font-bold text-center mb-10 p-5 text-blue-900">Explore Our Courses Categories</h1>
{/* hover:bg-gradient-to-r from-blue-400    gradient color storing here.*/}


<div className="flex flex-wrap justify-center gap-8">
  {courses.map((course) => (


    // <div className="mb-10  hover:shadow-xl transition-transform transform hover:scale-105  rounded-xl p-1 shadow-xl w-[550px] h-[470px] mx-auto bg-white">
    //   <div className="bg-white text-center rounded-lg p-6  w-full h-full">
    //     <h2 className="text-2xl font-bold text-black mb-4">{course.title}</h2>
    //     <p className="text-sm font-semibold text-gray-800 mb-6">BEST ONLINE COACHING</p>

    //     {/* Image Section */}
    //     <div><img src={course.image} alt="Course Image" className="mb-10 w-full max-h-35 object-cover rounded-md" /></div>

    //     {/* Available Batches */}
    //     <div>
    //       <strong>Available Batches:</strong> 

    //       <ul className="mt-2 mb-3 text-sm ml-7 text-blue-700 flex justify-between items-center">
    //         {course.batches.map((batch, idx) => (
    //           <li className=" cursor-pointer bg-blue-100 border-blue-300 border-2 rounded-3xl p-1 " key={idx}>{batch}</li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Enroll Button */}
    //     <button className="mt-1 bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
    //       Explore Courses
    //     </button>
    //   </div>
    // </div>

    <div className="mb-10 hover:shadow-xl transition-transform transform hover:scale-105 border rounded-xl p-1 shadow-xl w-[550px] h-[470px] mx-auto bg-white">
  <div className="bg-white text-center rounded-lg p-6 w-full h-full flex flex-col overflow-hidden">
    <h2 className="text-2xl font-bold text-black mb-4">{course.title}</h2>
    <p className="text-sm font-semibold text-gray-800 mb-6">BEST ONLINE COACHING</p>

    <div>
      <img
        src={course.image}
        alt="Course Image"
        className="mb-6 w-full h-40 object-cover rounded-md"
      />
    </div>

    <div className="flex-grow">
      <strong>Available Batches:</strong>
      <ul className="mt-2 mb-3 text-sm ml-7 text-blue-700 flex justify-between items-center flex-wrap">
        {course.batches.map((batch, idx) => (
          <li
            className="cursor-pointer bg-blue-100 border-blue-300 border-2 rounded-3xl p-1"
            key={idx}
          >
            {batch}
          </li>
        ))}
      </ul>
    </div>

    <button
      onClick={() => navigate(`/courses/${course.nav}`)}
      className="mt-auto bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
      Explore Courses
    </button>
  </div>
</div>





  ))}
</div>

</div>



)}


<Outlet/>


</div>
  );
};































