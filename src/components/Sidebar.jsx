import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'

import Logo from '../assets/logo2.png'
import Pic from '../assets/emyIcon.png'

export const categories = [
  {name: 'Keyboard'},
  {name: 'Drum'},
  {name: 'Producer'},
  {name: 'Para-music'},
  {name: 'Concert'},
]

const Sidebar = ({ user, closeToggle }) => {

  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-full duration-200 ease-in-out capitalize';
  const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-full duration-200 ease-in-out capitalize';

  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false)
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link
          to='/'
          className='px-5 gap-2 my-6 pt-1 w-190 items-center'
          onClick={handleCloseSidebar}>
            <img src={Logo} alt="logo" className='w-64' />
          </Link>
          <div className='flex flex-col gap-5'>
            <NavLink
              to='*/'
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}>
                <RiHomeFill />
                Home
              </NavLink>
              <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Categories</h3>
              {categories.slice(0, categories.length - 1).map((category) => (
                <NavLink
                  to={`category/${category.name}`}
                  className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                  onClick={handleCloseSidebar}
                  key={category.name}>
                    {category.name}
                  </NavLink>
              ))}
          </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._uid}`}
          className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
          onClick={handleCloseSidebar}
          >
            <img src={Pic} alt="profile" className='w-10 h-10 rounded-full' />
            <p>{user.displayName}</p>
          </Link>
      )}
    </div>
  )
}

export default Sidebar