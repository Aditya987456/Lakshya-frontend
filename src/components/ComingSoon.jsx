import { Navigate, useNavigate } from "react-router-dom";

export const ComingSoon = () => {

const navigate=useNavigate()

const GoHomePage = () => {
    navigate('/'); // Redirect to homepage
  };


  return  (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl flex-row justify-center items-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Coming Soon 🚧</h1>
        <p className="text-gray-600 text-lg">
          This page is currently under construction. We're working hard to bring it to you soon!
        </p>
        <div className="mt-6">
          <button
            onClick={GoHomePage}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full">
            Go Back Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
