import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdAdd, IoMdSearch, IoIosLogOut } from 'react-icons/io'

import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth'

const DashNavbar = ({ searchTerm, setSearchTerm, user }) => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await signOut(auth);
      
      navigate('/login');
      console.log('You are logged out');
    }catch(e){
      console.log(e.message);
    }
  }

  if(!user) return null;

  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch fontSize={21} className='ml-1' />
        <input 
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('search')}
          className='p-2 w-full bg-white outline-none'
          />
      </div>
      <div className='flex gap-3'>
        <Link to={`user-profile/${user?.uid}`} className='hidden md:block'>
          <img src={user?.photoURL} alt="profile" className='w-14 h-12 rounded-lg' />
        </Link>
        <Link to='create-pin' className='bg-black text-white rounded-lg w-12 h-12  md:w-14 md:h-12 flex justify-center items-center'>
          <IoMdAdd />
        </Link>
        <Link to='' className='bg-blue-300 text-white rounded-lg w-12 h-12  md:w-14 md:h-12 flex justify-center items-center' onClick={handleLogout}>
          <IoIosLogOut />
        </Link>
      </div>
    </div>
  )
}

export default DashNavbar