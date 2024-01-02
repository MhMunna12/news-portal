import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,

} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes/route';
import AuthProvider from './Auth/AuthProvider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
