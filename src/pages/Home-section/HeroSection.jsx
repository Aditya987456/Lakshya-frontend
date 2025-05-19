
import { CiStreamOn } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

import image from '../../assets/hero-img3.png'

export const HeroSection = () => {
    return (
      <section className="bg-gradient-to-br from-blue-200 to-purple-300 min-h-[600px] flex items-center px-10 md:px-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Master <span className="text-purple-700">JEE & NEET</span> with Expert Guidance
          </h1>
          <p className="text-lg text-blue-800 mb-8">
            Comprehensive online coaching for classes 6–12, tailored batches, doubt clearing, and exam-focused practice.
          </p>
          <button className="bg-purple-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-800 transition">
            Explore Courses
          </button>
  
          <div className="mt-10 flex space-x-6 text-blue-900">
            
            <div className="flex items-center space-x-2">
              <CiStreamOn/>
              <span>Live Classes</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaChalkboardTeacher/>
              <span>Expert Teachers</span>
            </div>

            <div className="flex items-center space-x-2">
              <CiDiscount1/>
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>
  
        <div className="hidden md:block flex-1">
          <img
            src={image}
            alt="log-hero-section"
            className="w-full h-auto m-8 mt-12 mb-12 rounded-3xl"
          />
        </div>
      </section>
    );
  };
  