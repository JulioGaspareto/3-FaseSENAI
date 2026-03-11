import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter} from 'react-router'
import {RouterProvider} from "react-router/dom"
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Main from './layouts/Main'
// import App from './App.jsx'


const router = createBrowserRouter([
  // {
  //   path:"/",
  //   element: <Home/>

  // },

  //   {
  //   path:"/sobre",
  //   element: <Sobre/>

  // },
    {
    element: <Main/>,
    children:[
      {
        path:"/", element:<Home/>
      },
      {
        path:"/sobre", element:<Sobre/>
      },
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
