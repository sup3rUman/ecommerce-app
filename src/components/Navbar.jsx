import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../images/ComradeSquare.svg'
import SearchBar from '../subcomponents/SearchComponents/SearchBar'
import ProfileAvator from '../subcomponents/AvatorComponents/ProfileAvator'
import CartButton from '../subcomponents/CartComponents/CartButton'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="bg-sky-400 ">
        <div className="flex items-center shadow-md justify-between lg:justify-around py-3">
          <div className="ml-4">
            <Link to="/" className="lg:flex">
                <img src={LOGO} alt="ComradeSquare logo" />
            </Link>
          </div>
          <div className="hidden lg:flex">
              <SearchBar/>
          </div>
          <div className='flex items-center justify-center mx-4'>
            <CartButton/>
            <ProfileAvator/>
          </div>
        </div>
        <div className="">
            <div className="lg:hidden">
                <SearchBar/>
            </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
