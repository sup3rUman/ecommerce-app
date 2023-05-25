import React from 'react'
import Profile from '../../images/camera.jpg'
import FloatingBadge from './FloatingBadge'

const ProfileAvator = () => {
  return (
    <React.Fragment>
        <div className='flex items-center justify-center gap-2 mx-2 mr-2'>
            <button className='flex items-center justify-center flex-shrink-0'>
                <FloatingBadge />
                <img src={Profile} alt="" className="h-12 w-12 rounded-full border-4 border-green-600"/>
            </button>
        </div>  
    </React.Fragment>
  )
}

export default ProfileAvator
