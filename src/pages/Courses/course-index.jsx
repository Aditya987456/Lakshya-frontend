import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";




import React from 'react';
import { Button } from "../../components/button";

import img from '../../assets/cardbatch.png'

const courses = [
  {
    title: 'JEE (Main+Advanced)',
    image:img,
    batches:['class 11', 'class 12', 'class 12plus']
  },

  {
    title: 'NEET',
    image:img,
    batches:['class 11', 'class 12', 'class 12plus']

  },
  {
    title: 'Class 6–10',
    image:img,
    batches:['class 11', 'class 12', 'class 12plus']

  },
  {
    title: 'Extra Courses',
    image:img,
    batches:['class 11', 'class 12', 'class 12plus']

  }
];






export const Course = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 ">


      <h1 className="text-4xl font-bold text-center mb-10 text-blue-500">Our Courses</h1>






      {/* <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 max-w-7xl mx-auto">
        
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl h-60 shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className={`text-2xl font-semibold mb-6 flex justify-center ${course.color}`}>
              {course.title}
            </h2>
            <p className="text-gray-700">{course.description}</p>
            
            <span className='flex justify-center mt-3'><Button name="Explore"/></span>
            
            

          </div>

    
            

        ))}
      </div> */}



{/* <div className="grid grid-cols-2">

{courses.map((course)=>(

<div className="m-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl p-1 shadow-xl h-[550px] w-[500px] flex justify-items-center">
<div className="bg-white text-center rounded-xl p-4 border border-blue-500 shadow-lg w-full h-full">
    <h2 className="text-3xl font-extrabold text-blue-900 mb-4">{course.title}</h2>
    <p className="text-sm font-semibold text-gray-800 mb-6">BEST ONLINE COACHING</p>

    <div><img src={course.image} alt="img" className=''/></div>

    <div>Available Batches:</div>

    <div>
    <ul>
      {course.batches.map((avble, idx) => (
        <li key={idx}>{avble}</li>
      ))}
    </ul>
    </div>


    <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
      Enroll Now
    </button>
  </div>
</div>

))}








</div> */}




<div className="flex flex-wrap justify-center gap-8">
  {courses.map((course) => (
    <div className="mb-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl p-1 shadow-lg w-[500px] h-[400px] mx-auto">
      <div className="bg-white text-center rounded-lg p-4 border border-blue-500 shadow-lg w-full h-full">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4">{course.title}</h2>
        <p className="text-sm font-semibold text-gray-800 mb-6">BEST ONLINE COACHING</p>

        {/* Image Section */}
        <div><img src={course.image} alt="Course Image" className="mb-5 w-full max-h-28 object-cover rounded-md" /></div>

        {/* Available Batches */}
        <div>
          <strong>Available Batches:</strong> 

          <ul className="mt-2 mb-3 space-x-20 ml-7 text-blue-700 flex justify-start items-center">
            {course.batches.map((batch, idx) => (
              <li className=" cursor-pointer bg-blue-200 border-blue-300 border-2 rounded-3xl p-1 " key={idx}>{batch}</li>
            ))}
          </ul>
        </div>

        {/* Enroll Button */}
        <button className="mt-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Explore Courses
        </button>
      </div>
    </div>
  ))}
</div>

  





  
</div>
  );
};



























// export const Course = () => {
//   const location = useLocation();
//   const isRootCoursePage = location.pathname === "/courses";

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       {isRootCoursePage && (
//         <>
//           <h1 className="text-4xl font-bold text-center mb-10 text-blue-500">Explore Our Courses</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl h-60 shadow-lg p-6 hover:shadow-xl transition-shadow"
//               >
//                 <h2 className={`text-2xl font-semibold mb-6 flex justify-center ${course.color}`}>
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-700">{course.description}</p>
//                 <span className="flex justify-center mt-3">
//                   <Button name="Explore" />
//                 </span>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* Render nested components like NeetCourse here */}
//       <Outlet />
//     </div>
//   );
// };

//import React from 'react';
// import { CourseCard } from "./CourseCard";

// export const Course = () => {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">Available Courses</h1>
      
//       <CourseCard
//         title="JEE Batch - Class 11"
//         description="Comprehensive course covering mechanics, waves, and electromagnetism with live sessions and doubt support."
//         price="1499"
//       />
//     </div>
//   );
// };



