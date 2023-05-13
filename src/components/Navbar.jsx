import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../images/ComradeSquare.svg'
import SearchBar from '../subcomponents/SearchBar'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="bg-blue-400 dark:bg-blue-950">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src={LOGO} alt="ComradeSquare logo" className='w-auto text-gray-50' />
            </Link>

            <div className="flex">
                <SearchBar/>
            </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
