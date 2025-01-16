'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react';

const Header = () => {

  const navRef = useRef(null);

  const scrollHandler = () => {
    if (window.scrollY > 50) {
      // Set navRef's top to 0 when scroll exceeds 50px
      if (navRef.current) {
        navRef.current.style.position = 'fixed';
        navRef.current.style.top = '0';
        navRef.current.style.transition = 'top 0.3s ease-in-out';
        navRef.current.style.padding = '20px';
        navRef.current.style.boxShadow = '0px 6px 6px rgba(0, 0, 0, 0.1)';
      }
    } else {
      // Reset navRef's position when scroll is less than 50px
      if (navRef.current) {
        navRef.current.style.position = 'relative';
        navRef.current.style.padding = '32px';
        navRef.current.style.boxShadow = 'none';
        navRef.current.style.top = '';
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', scrollHandler);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <header className="inter">

      {/* This is the top part of our Navbar */}
      <div className="text-sm font-medium topNav hidden lg:flex py-5 items-center gap-10 px-10 shadow-2xl">

        {/* item 1 */}
        <span className="flex items-center gap-2">
          <img width={'14px'} src="/location1.svg" alt="" />
          <span>90919 Madie Run Apt. 790/</span>
        </span>

        {/* item 2 */}
        <a className="flex items-center pl-4 gap-2 cursor-pointer" href="mailto:sardarkhurram121@gmail.com">
          <div className="icon"><img width={'20px'} src="/mail1.svg" alt="" /></div>
          <div className="content">hello@medplus.com</div>
        </a>


        {/* item 3 */}
        <a className="flex ml-auto items-center justify-center gap-1 cursor-pointer" href="/">
          <div className="icon"><img width={'22px'} src="/whatsapp.svg" alt="" /></div>
          <div className="content">Connect on Whatsapp</div>
        </a>

      </div>



      {/* This is our Navbar that contains link to various parts */}
      <nav ref={navRef} className="z-50 w-full text-[16px] bg-white flex items-center justify-between px-8 py-6">

        {/* logo goes here */}
        <div className="logo "> <a href="/"><img width={'160px'} src="/Medplus+.webp" alt="" /></a> </div>

        {/* Links goes here */}
        <ul className="hidden xl:flex gap-6 font-bold">
          <li className="hover:text-[#01a0a9]"><a href="/#home" >Home</a></li>
          <li className="hover:text-[#01a0a9]"><a href="/#feature">Feature</a></li>
          <li className="hover:text-[#01a0a9]"><a href="/#works">How It Works</a></li>
          <li className="hover:text-[#01a0a9]"><a href="/#services">Services</a></li>
          <li className="hover:text-[#01a0a9]"><a href="/#pricing">Pricing</a></li>
        </ul>


        <div className="flex fc gap-3">


          {/* registration and contact links goes here */}
          <div className="hidden lg:flex gap-6">

            <a href='/' className="hidden md:flex gap-6 group hover:text-[#01a0a9]">
              <div className="flex items-center ml-auto gap-1">
                {/* Phone Icon */}
                <div className="icon">
                  <svg
                    className="w-4 h-4 group-hover:fill-[#01a0a9] transition-all"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  >
                   <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                  </svg>
                </div>
                {/* Phone Text */}
                <div className="content group-hover:text-[#01a0a9]">1800-657-876</div>
              </div>
            </a>

            {/* animated button */}
            <a href='/registration' className="text-sm relative overflow-hidden px-6 py-4 font-semibold text-white bg-[#01a0a9] rounded-md transition-all duration-500 group">
              {/* Animated background layer */}
              <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              {/* Button text */}
              <span className="relative z-10">Register Your Clinic</span>
            </a>

          </div>


          {/* Navbar Toggler */}
          <button className="relative overflow-hidden p-5 bg-[#01a0a9] text-white rounded-md flex items-center justify-center xl:hidden group">
            {/* Overlay layer for animation */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>

            {/* SVG Icon */}
            <svg onClick={toggleSidebar} fill='#ffffff' className="relative z-10 h-5 w-4  cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>

          </button>


          {/* Sidebar */}
          <div className={`fixed top-0 left-0  z-40 w-full h-screen bg-black/70 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>

            {/* Sidebar content */}
            <div className="flex flex-col justify-between p-6 h-full w-96  bg-[#101e2a] text-white">
              <div>
                {/* Logo */}
                <div className="flex items-center justify-between my-8">
                  <img src="/Medplus+.webp" alt="Med Plus +" className="h-10 w-auto" />
                  {/* Navbar Toggler */}
                  <button onClick={toggleSidebar} className="relative overflow-hidden p-4 bg-[#01a0a9] text-white rounded-md flex items-center justify-center lg:hidden group">
                    {/* Overlay layer for animation */}
                    <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>

                    {/* SVG Icon */}
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                </div>

                {/* Links */}
                <ul className="space-y-6 pt-8 font-medium">
                  <li>
                    <a onClick={toggleSidebar} href="/#home" className="flex items-center gap-3 hover:text-[#01a0a9]">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={toggleSidebar} href="/#feature" className="flex items-center gap-3 hover:text-[#01a0a9]">
                      <span>Feature</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={toggleSidebar} href="/#works" className="flex items-center gap-3 hover:text-[#01a0a9]">
                      <span>How It Works</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={toggleSidebar} href="/#services" className="flex items-center gap-3 hover:text-[#01a0a9]">
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={toggleSidebar} href="/#pricing" className="flex items-center gap-3 hover:text-[#01a0a9]">
                      <span>Pricing</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-5 items-center">
                {/* Address */}
                <div className="flex items-center gap-2">
                  <img src="/location1.svg" alt="Location" className="w-6 h-6" />
                  <span>90919 Madie Run Apt. 790</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <img src="/mail1.svg" alt="Email" className="w-6 h-6" />
                  <a href="mailto:hello@medplus.com" className="hover:text-[#01a0a9]">
                    hello@medplus.com
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                  <a href="/" className="hover:text-[#01a0a9]">
                    Connect on WhatsApp
                  </a>
                </div>

                {/* animated register button */}
                <button onClick={toggleSidebar} className="relative overflow-hidden py-3 w-full text-sm font-semibold text-white bg-teal-500 rounded-md transition-all duration-500 group">
                  {/* Animated background layer */}
                  <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                  {/* Button text */}
                  <span className="relative z-10">Register Your Clinic</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </nav>

    </header>
  )
}

export default Header