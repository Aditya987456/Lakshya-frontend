import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter,Navigate } from 'react-router-dom'
import { Layout } from './layouts/mainlayout.jsx'
import { Home } from './pages/home.jsx'
import { Testseries } from './pages/Testseries.jsx'
import { RouterProvider } from 'react-router-dom'
import { Course } from './pages/courses.jsx'
import { NeetCourse } from './components/Courses/Neet.jsx'
import { JeeCourse } from './components/Courses/Jee.jsx'

//import { Courses } from './pages/Courses.jsx'




//here we creating routes:  --> we can also make a separate file for this
const router=createBrowserRouter([
  {


    path: '/',
    element: <Layout/>,
    children: [

      { path: "", element: <Home/> },


      { path: "courses",
        element:  <Course/>,
        children: [
          { path: "neet", element: <NeetCourse/>,
            children: [
              { path: "class-11", element: <NeetCourse/>},
              { path: "class-12", element: <NeetCourse/>},
              { path: "class-12-droppers", element: <NeetCourse/>},
            ],
          },


          { path: "jee", element: <JeeCourse/>,
            children: [
              { path: "class-11", element: <JeeCourse/>},
              { path: "class-12", element: <JeeCourse/>},
              { path: "class-12-droppers", element: <JeeCourse/>},
            ],
          },
        ],
      },





      // {
      //   path: "contact",
      //   element: <Contact />
      // }
    ]












  }
])









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
