import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Index from './pages/index'

import Objetivos from './pages/objetivos'
import Videos from './pages/videos'
import Articulos from './pages/articulos'
import Contacto, { action as actionContacto} from './pages/contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/objetivos',
        element: <Objetivos />
      },
      {
        path: '/videos',
        element: <Videos />
      },
      {
        path: '/articulos',
        element: <Articulos />
      },
      {
        path: '/contacto',
        element: <Contacto />,
        action: actionContacto
      },
       
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
