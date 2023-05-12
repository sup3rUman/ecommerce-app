import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <React.Fragment>
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>

    </React.Fragment>
  )
}

export default HomeLayout
