import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { GoThreeBars } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'


import Logo from '../../images/ComradeSquare.svg'
import UserDropdown from '../../features/UserDropdown/UserDropdown';
import CartButton from '../../features/CartButton/CartButton';
import SearchInput from '../../features/SearchInput/SearchInput';
import CategoryButton from '../../features/CategoryButton/CategoryButton';

import '../Navbar/Navbar.css'
import SideNav from '../../features/SideNav/SideNav';


const  Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav>
        {/* Navigation Section with Help Center section */}
        <div className="navbar__container-top">
            <div className="nav__container help__container">
              <Link to="" className="logo" onClick={ () => setIsOpen(false)}>
                <p className="help__center-text">Help Center</p>
              </Link>
            </div>
        </div>

        {/* Navigation Section with logo Searchbar and Accounts-Icons */}
        <div className="navbar__container-center">
            <div className="nav__container logo__container">
              <div className="logo__div">
                <button className="nav__toggle-btn" onClick={ () => setIsOpen(prev => !prev)}>
                  {
                    isOpen ? <AiOutlineClose/> && <SideNav/> : <GoThreeBars/>
                  }
                </button>
                <Link to="/" className="logo">
                  <img src={Logo} alt="ComradeSquare logo"></img>
                </Link>
              </div>

              <div className='search__div'>
                <div className='shop__category-btn'>
                    <CategoryButton/>
                </div>
                <div>
                    <SearchInput />
                </div>
              </div>

              <div className="icons-link__div">
                <div className='icon__cart-btn'>
                    <CartButton />
                </div>
                <div className='icon__user-btn'>
                    <UserDropdown />
                </div>
              </div>
            </div>
        </div>

        {/* Navigation Section With All page Links and Categories */}
        <div className="navbar__container-bottom">
        </div>

    </nav>
  );
}

export default Navbar