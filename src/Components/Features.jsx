import React from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'
import './AboutusStyles.css'

Aos.init();
const Features = () => {
  return (
    <div name='features' className='md:h-full pt-16 -mt-5 bg-gray-200'>
        <div className='container px-5 mx-auto' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>
            <div className='section-title'>
                <h2>Features</h2>
            </div>
        </div>
    </div>
  )
}

export default Features