import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/mainlayout.jsx'
import { Home } from './pages/home.jsx'
import { Testseries } from './pages/Testseries.jsx'
import { RouterProvider } from 'react-router-dom'




//here we creating routes:  --> we can also make a separate file for this
const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:"",   //here "" empty becz / pe bhi to kuch display karana hai above '/' ke liye...
        element:<Home/>
      },

      {
        path:'test',
        element:<Testseries/>
      }
    ]
  }
])









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
