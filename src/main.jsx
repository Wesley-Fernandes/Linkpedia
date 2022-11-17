import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {router} from './Routes/Rotas.jsx'
import { ToastContainer } from 'react-toastify'


import 'react-toastify/dist/ReactToastify.css';
import "./Style/Global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000}/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
