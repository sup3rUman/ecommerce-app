import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


import Logo from '../../images/ComradeSquare.svg'
import UserDropdown from '../../features/UserDropdown/UserDropdown';
import CartButton from '../../features/CartButton/CartButton';
import SearchInput from '../../features/SearchInput/SearchInput';
import '../Navbar/Navbar.css'

const  Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="navbar__container-all">
      {/* Navigation Section with Help Center section */}
      <div className="navbar__container-top">
        <nav>
          <div className="nav__container help__container">
            <Link to="" className="logo" onClick={ () => setIsOpen(false)}>
              <p className="help__center-text">Help Center</p>
            </Link>
          </div>
        </nav>
      </div>

      {/* Navigation Section with logo Searchbar and Accounts-Icons */}
      <div className="navbar__container-center">
        <nav>
          <div className="nav__container logo__container">
            <div className="logo__div">
              <Link to="/" className="logo">
                <img src={Logo} alt="ComradeSquare logo"></img>
              </Link>
            </div>

            <div className='search__div'>
              <SearchInput />
            </div>

            <div className="icons-link__div">
              <CartButton />
              <UserDropdown />
            </div>
          </div>
        </nav>
      </div>

      {/* Navigation Section With All page Links and Categories */}
      <div className="navbar__container-bottom">
        <nav>
        </nav>
      </div>
    </div>
  );
}

export default Navbar