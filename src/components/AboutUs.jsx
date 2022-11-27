import React from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './AboutusStyles.css'

AOS.init();
const AboutUs = () => {
  return (
    <div name='about' className='md:h-full bg-gray-200'>
        <div className='container px-5 mx-auto' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>
            <div className='section-title'>
                <h2>About Us</h2>
            </div>
        </div>

        {/* Cards */}
        <div className='flex flex-wrap m-4' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>
            {/* Card 1 */}
            <div className='p-4 sm:w-1/2 lg:w-1/2'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl'>
                    <img className='lg:h-72 md:h-48 w-full object-cover object-center' src="https://images.pexels.com/photos/7087614/pexels-photo-7087614.jpeg?cs=srgb&dl=pexels-cottonbro-7087614.jpg&fm=jpg&_gl=1*1juu7hv*_ga*MzAyNTQzMjg0LjE2NjYwNjgwMDU.*_ga_8JE65Q40S6*MTY2NjYyNzg2OC45LjEuMTY2NjYyOTk3MC4wLjAuMA.." alt="About-Us" />
                    <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                        <h1 className='text-2xl font-semibold mb-3'>About Us</h1>
                        <p className='leading-relaxed mb-3'>Real Jammers is a team of Musicians being able to 
                        create profiles of fellow musicians, instrumentalists and para-musical professionals 
                        out there for easy accessibility in other parts of the nation.</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className='p-4 sm:w-1/2 lg:w-1/2'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl'>
                    <img className='lg:h-72 md:h-48 w-full object-cover object-center' src="https://images.pexels.com/photos/7503461/pexels-photo-7503461.jpeg?cs=srgb&dl=pexels-rodnae-productions-7503461.jpg&fm=jpg&_gl=1*129ugrz*_ga*MzAyNTQzMjg0LjE2NjYwNjgwMDU.*_ga_8JE65Q40S6*MTY2NjYyNzg2OC45LjEuMTY2NjYyOTM1Ni4wLjAuMA.." alt="About-Us" />
                        <div className='p-9 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                            <h1 className='text-2xl font-semibold mb-3'>Our Vision</h1>
                            <p className='leading-relaxed mb-3'>Our vision is to bring professionals in all areas of fields not just in 
                            music. Being  able to market their services in their respective areas of profession.</p>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs