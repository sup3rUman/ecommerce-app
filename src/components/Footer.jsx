import React from 'react'
import { Link } from 'react-router-dom';
import {BsInstagram,BsGithub,BsLinkedin} from "react-icons/bs"

function Footer() {
  return (
    <>
    <footer className='py-3'></footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
                <address className='text-white fs-8
                '>
                  Km : Along Thika Rd, <br /> 
                  PinCode: 43844-00100
                  </address>
                  <a href='tel:+25411960234' className='mt-3 text-white d-block mb-2'>
                  +25411960234
                  </a>
                  <a href='mailto:3liastester@gmail.com' className='mt-2 text-white d-block mb-1'>
                  3liastester@gmail.com
                  </a>
                  <div className='social_icons d-flex align-items-center gap-15 mt-4'>
                    <a className='text-white' href=''>
                      <BsInstagram className='fs-4' />
                    </a>
                    <a className='text-white' href=''>
                      <BsGithub className='fs-4' />
                    </a>
                    <a className='text-white' href=''>
                      <BsLinkedin className='fs-4' />
                    </a>
                  </div>
            </div>
              </div>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Business</h4>
            <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Want to be a Vendor</Link>
                <Link className='text-white py-2 mb-1'>Seller Centre</Link>
                <Link className='text-white py-2 mb-1'>About Shop</Link>
            </div>
              </div>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Website</h4>
            <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Terms&Conditions</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()};Powered by CodeBeacks</p>
        </div>
      </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;