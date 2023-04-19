'use client';
import { useState } from 'react';
import logo from '../public/img/logo.svg'
import Image from 'next/image'

export default function NavHeader() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function getHamburgerClass() {
     let res= 'block hamburger md:hidden focus:outline-none'
     if (openMobileMenu === true) {
        res += `${res} open`
     }
     return res 
  }

  return (
    <nav className='ralativecontainer p-6 mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Image src={logo} alt='logo' />
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            About us
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        <a
          href='#'
          className='hidden md:block p-3 px-6 pt-2 baseline text-white bg-brightRed rounded-full hover:bg-brightRedLight'
        >
          Get Started
        </a>

        <button
          id='menu-btn'
          className= {getHamburgerClass()}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      <div className='md:hidden'>
        {openMobileMenu && (
          <div
            id='menu'
            className='absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          >
            <a href='#'>Pricing</a>
            <a href='#'>Product</a>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Community</a>
          </div>
        )}
      </div>
    </nav>
  );
}
