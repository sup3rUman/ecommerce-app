import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-0'>
            <p className='text-end text-white mb-0'>
              Help Centre
            </p>
          </div>
          </div> 
      </div>
    </header>
    <header className="header-upper py-3">
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-2'>
            <h4>
              <Link className='text-white'>Comrade_Square</Link>
            </h4>
          </div>
          <div className='col-4'>
            <div className="input-group">
              <input
                type="text"
                className="form-control py-1"
                placeholder="Search Product Here"
                aria-label="Search Product Here"
                aria-describedby="basic-addon2" 
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className='fs-7'/>
              </span>
            </div>
          </div>
          <div className='col-5 '>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='/images/wishlist.svg' alt='wishlist' />
                <p className='text-white mb-0'>
                  Favorite 
                </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='images/user.svg' alt='user' />
                <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white mb-0" href="#">My Account</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle bg-secondary" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
          <ul className="dropdown-menu dropdown-menu-transparent" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Your Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/cart.svg' alt='cart' />
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>0</span>
                  </div>
                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-40'>
              <div>
              <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
  type="button"
  id="dropdownMenuButton1" 
  data-bs-toggle="dropdown" 
  aria-expanded="false">
    <img src='images/menu.svg' alt='' /><span className='d-inline-block'>Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" to="#">Action</Link></li>
    <li><Link className="dropdown-item" to="#">Another action</Link></li>
    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
  </ul>
</div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink className='text-white' to="/#">Sneakers</NavLink>
                  <NavLink className='text-white' to="/#">Trending</NavLink>
                  <NavLink className='text-white' to="/#">Fashion</NavLink>
                  <NavLink className='text-white' to="/#">Electronics</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>  
    </header> 
    </>
  )
}

export default Header