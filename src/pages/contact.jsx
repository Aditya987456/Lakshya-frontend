
import { FaPhoneAlt,FaLinkedin  } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ContactCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
      <div className="md:flex">
        <div className="w-full p-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Us</h2>

          <div className="flex items-center mb-3 space-x-3 text-blue-800">
            <FaPhoneAlt />
            <span className="text-md">+91 00000 00000</span>
          </div>

         
          <div className="flex items-center mb-3 space-x-3 text-blue-800">
            <BiLogoGmail/>
            <span className="text-md">adityarajxdev@gmail.com</span>
          </div>


           <div className="flex items-center mb-3 space-x-3 text-blue-800">
            <FaLinkedin />
            <Link to='https://www.linkedin.com/in/aditya-raj-006978250/' ><span className="text-md">Linkedin</span></Link>
          </div>

          <div className="flex items-center mb-3 space-x-3 text-blue-800">
            <FaXTwitter />
            <Link to='https://x.com/AdityaRaj_x'  ><span className="text-md">X(Twitter)</span></Link>
          </div>






        </div>
      </div>
    </div>
  );
};
