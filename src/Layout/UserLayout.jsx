import React from 'react'
import CustomeNavbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'

export default function UserLayout() {
  return (
    <>
      <CustomeNavbar/>
      <Home/>
      <Outlet/>
      <Footer/>
    </>
  )
}
