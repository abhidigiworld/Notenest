import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Welcome from './component/Welcome.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'


const router= createBrowserRouter([
  {
    path:"/",
    element: <Welcome/>
  },
  {
    path:"/Login",
    element: <Login/>
  },
  {
    path:"Signup",
    element:<Signup/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
