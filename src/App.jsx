import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import UserContertProvider from './Context/Context.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
 

  
  return (
    <>
    <UserContertProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
      </UserContertProvider>
    </>
  )
}
