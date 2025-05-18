import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter,Navigate } from 'react-router-dom'
import { Layout } from './layouts/mainlayout.jsx'
//import { Home } from './pages/home.jsx'
import { Testseries } from './pages/TestSeries/Testseries.jsx'
import { RouterProvider } from 'react-router-dom'
import { Course } from './pages/Courses/course-index.jsx'
import { NeetCourse } from './pages/Courses/Neet.jsx'
import { JeeCourse } from './pages/Courses/Jee.jsx'
import { NeetTest } from './pages/TestSeries/Neet-test.jsx'
import { Home } from './pages/home.jsx'
import { ComingSoon } from './components/ComingSoon.jsx'
import { Classes } from './pages/Courses/Classes.jsx'

//import { Courses } from './pages/Courses.jsx'




//here we creating routes:  --> we can also make a separate file for this
const router=createBrowserRouter([
  {


    path: '/',
    element: <Layout/>,
    children: [

//-------------HOME--------------- 
      { path: "", element: <Home/>},




//-------------COURSES--------------- 
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


          { path: "class-6-10", element: <Classes/> ,
            children: [
              { path: "class-6", element:<Classes/> },
              { path: "class-7", element: <Classes/>},
              { path: "class-8", element: <Classes/>},
              { path: "class-9", element: <Classes/>},
              { path: "class-10", element: <Classes/>}
            ],
          },

          { path: "view-all", element: <ComingSoon/>
            // children: [
            //   { path: "class-6", element: <NeetCourse/>},
            //   { path: "class-7", element: <NeetCourse/>},
            //   { path: "class-8", element: <NeetCourse/>},
            //   { path: "class-9", element: <NeetCourse/>},
            //   { path: "class-10", element: <NeetCourse/>}
            // ],
          },






        ],
      },



//------------- TEST-SERIES --------------- 
{path:'tests', element:<ComingSoon/>,
  children:[
    {path:'online-neet-test', element:<NeetTest/>}
  ]
},


{path: 'study-materials', element:<ComingSoon/> },





















      
    ]












  }
])









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
