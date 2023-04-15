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
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='/images/wishlist.svg' alt='wishlist' />
                <p className='text-white mb-0'>
                  Favorite <br /> Wishlist
                </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='images/user.svg' alt='user' />
                <p className='text-white mb-0'>
                    Login <br /> My Account
                </p>
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
    </>
  )
}

export default Header