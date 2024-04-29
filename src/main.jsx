import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Welcome from './component/Welcome.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'
import Start from './component/Start.jsx'
import Main1 from './component/Main1.jsx'
import About from './component/About.jsx'
import Upload from './component/Upload.jsx'
import Note from './component/Note.jsx'
import Placement from './component/Placement.jsx'


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
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/Start",
    element:<Start/>
  },
  {
    path:"/Main1",
    element:<Main1/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Upload",
    element:<Upload/>
  },
  {
    path:"/Note",
    element:<Note/>
  },
  {
    path:"/Placement",
    element:<Placement/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
