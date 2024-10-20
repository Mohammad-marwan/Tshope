import React from 'react'
import Navbar from './components/user/Navbar/Navbar.jsx'
import Footer from './components/user/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}
