import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Components/Homepage/Homepage'
import Project from './Components/Project/Project'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne></LayoutOne>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/project/:id',
        element: <Project></Project>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
