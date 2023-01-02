import React, {useState} from 'react'
import AOS from 'aos'
import {FaArrowUp} from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'

import 'aos/dist/aos.css'
import './FooterStyles.css'

AOS.init();
const Footer = () => {

  //Visible useState
  const [visible, setvisible] = useState(false)
  const makeVisible = () => {
    if(window.scrollY >= 100){
      setvisible(true)
    }else{
      setvisible(false)
    }
  }

  window.addEventListener('scroll', makeVisible)

  return (
    <div className='w-full'>
      <div className='max-w-[2240px] text-center px-3 py-7 md:flex md:justify-between bg-[#f7ac22f5]'>
        <h2 className='font-bold'>&copy; 2022 Copyright <span className=' text-indigo-700'>Real Jammers</span>. All Rights Reserved</h2>
        <h4 className='font-semibold'>Designed by <span className=' text-indigo-700'>GLATEC</span> </h4>
      </div>
      <div className={visible ? 'back-to-top active flex items-center justify-center' : 'back-to-top flex items-center justify-center'} data-aos="fade-right" data-aos-duration='1500'>
        <Link to='home' smooth={true} offset={0} duration={1500} onClick={makeVisible}>
          <FaArrowUp />
        </Link>
      </div>
    </div>
  )
}

export default Footer