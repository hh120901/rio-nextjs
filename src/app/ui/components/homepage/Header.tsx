'use client'
import React, { useState } from 'react'

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  }


  return (
    <div className='container mx-auto'>
      {/* <div className='hidden sm:hidden md:flex md:justify-between'>
        <div className='text-white flex gap-x-8'>
          <span className='text-white'>ISR Corporation</span>
          <p>Email: <a href="mailto:codehgl@gmail.com">codehgl@gmail.com</a></p>
          <p>Phone: <a href="tel:0384375658">0384375658</a></p>
        </div>
      </div>   */}
      <div className='p-4 flex justify-between items-center'>
        <div className='text-white lg:w-1/3 p-2 lg:p-0'>
          <a href="#">LOGO</a>
        </div>
        {/* Menu default */}
        <div className='text-white lg:w-1/3 hidden md:block'>
          <nav className='navbar mx-auto flex max-w-5xl items-center justify-center gap-x-8'>
            <div className="nav__item relative">
              <a href="#" className='block font-semibold text-white'>
                Home
              </a>
            </div>
            <div className="nav__item relative">
              <a href="#" className='block font-semibold text-white'>
                About Us
              </a>
            </div>
            <div className="nav__item relative">
              <a href="#" className='block font-semibold text-white'>
                Blogs
              </a>
            </div>
            <div className="nav__item relative">
              <a href="#" className='block font-semibold text-white'>
                Contact Us
              </a>
            </div>
          </nav>
        </div>

        <div className='hidden md:flex text-white justify-end gap-x-8 lg:w-1/3'>
          <span>Login</span>
          <span>Languages</span>
          <span>Theme</span>
        </div>

        {/* Button open menu on Mobile */}
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md px-5 text-white" onClick={showMobileMenu}>
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuVisible && (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuVisible && (
          <div className="lg:hidden h-2/3" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10"></div>
            <div className="fixed h-2/3 bg-gradient-to-b from-[#052A36] to-[#5A9EB5] w-2-3 inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="text-white">
                  LOGO
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={showMobileMenu}>
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white">
                  <div className="space-y-2 py-6">
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-500">Home</a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-500">About Us</a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-500">Blogs</a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-500">Contact Us</a>
                  </div>
                  <div className="py-6">
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-500">Log
                      in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}



      </div>
    </div>
  )
}

export default Header