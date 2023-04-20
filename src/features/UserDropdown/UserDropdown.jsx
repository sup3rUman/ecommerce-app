import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from '@mui/material';

import '../UserDropdown/UserDropdown.css'
import UserProfile  from '../../images/headphone.jpg'

const UserDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };

  return (

    <div className="relative inline-block">
      <div
        className="user-icon-btn focus:outline-none"
      >
        <Avatar alt="User Profile" src={UserProfile} onClick={handleToggle}/>
      </div>


      {isOpen && (
          <div className="user-dropdown">
            <ul className="user-dropdown-items">
              <li>
                <Link to="" className="user-dropdown-item" role="menuItem">
                  <AccountCircleIcon/>
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <Link to="" className="user-dropdown-item" role="menuItem">
                  <SettingsIcon/>
                 <span> Settings</span>
                </Link>
              </li>
              <li>
                <Link to="" className="user-dropdown-item" role="menuItem">
                  <FavoriteBorderIcon/>
                  <span>Favourites</span>
                </Link>
              </li>
  
              <button
                className="user-dropdown-item-btn-logout user-dropdown-item-logout">
                  <LogoutIcon/>
                <span>Log Out</span>
              </button>
            </ul>
          </div>
        )};
    </div>
  );
}

export default UserDropdown