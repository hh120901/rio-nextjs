import React from 'react'
import Header from './Header'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-banner-home bg-no-repeat bg-full bg-cover w-full h-[900px] bg-center'>
      <Header />
      <div className='container mx-auto relative'>
        <div className='flex flex-col justify-center items-center gap-y-8 py-56'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-400 text-3xl sm:text-5xl font-extrabold'>START YOUR TRIP</span>
          <input 
            type="text" 
            className='block w-2/5 min-w-[300px] px-8 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 border-0'
            placeholder='search location ' />
        </div>  
      </div>
    </div>
  )
} 

export default Hero