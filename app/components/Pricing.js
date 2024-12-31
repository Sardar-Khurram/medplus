'use client'
import React from 'react'
import { useState } from 'react';

const Pricing = () => {

  const [activeIndex, setActiveIndex] = useState(0)


  const slides = [
    { id: 1, content: 'part 1', img: '/why_choose (1).png' },
    { id: 2, content: 'part 2', img: '/why_choose (2).png' },
    { id: 3, content: 'part 3', img: '/why_choose (3).png' },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (

    // main container
    <div className="main">

      {/* part 1 */}
      <div className="appBg sm:p-14 lg:py-20" id='pricing'>

        <div className="text-center flex items-center justify-center flex-col gap-16 md:bg-white  rounded-3xl inter  py-5 lg:py-20">

          {/* Introductory heading */}
          <h1 className="text-4xl lg:text-[38px] xl:text-[44px] 2xl:text-7xl font-bold lg:font-semibold pt-14">
            Health Checkup Plans
          </h1>

          {/* introductory paragraph */}
          <p className="leading-10 text-2xl px-0 sm:px-20 md:px-30 lg:px-40  text-[#5f5d5d]">
            Offering comprehensive remote healthcare solutions, from telemedicine consultations to advanced monitoring, designed to cater to individuals, startups, and large organizations.
          </p>

          {/* Image Container */}
          <div className="imageConatiner sm:p-10 lg:p-32 flex flex-wrap items-center justify-center gap-20 flex-col">

            {/* Image 1*/}
            <div className=" py-10 border  text-left  flex flex-col gap-10 items-baseline px-7 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl sm:rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
              {/* Animated background layer */}
              <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

              {/* Above part */}
              <div className="flex flex-col gap-5">
                {/* Icon part */}
                <div className="flex gap-6 z-40">
                  <img className=" " src="/pricing (1).png" alt="" />
                  <div className=" flex flex-col items-start justify-center">
                    <span className="text-xl text-[#e3e0e0]">For Individuals</span>
                    <span className="text-2xl font-bold">Basic</span>
                  </div>
                </div>
                <p className="text-left z-40 text-[#e3e0e0] text-2xl">Access essential healthcare services remotely with virtual consultations, basic health checkups, and easy-to-use digital tools.</p>
              </div>

              {/* Middle part */}
              <div className="flex flex-col gap-5 z-40 text-[#e3e0e0]">

                {/* Price heading */}
                <h1 className="text-left"><span className='text-7xl text-[#ffffff] font-bold'>$49</span><span className='text-[#e3e0e0d6]'>/month</span></h1>

                {/* Choose Heading */}
                <h1 className="text-white z-40 text-2xl font-bold text-left">Why Choose us?</h1>

                {/* item 1 */}
                <div className="flex gap-5">
                  <span className="icon"><img width={'28px'} src="/check1.svg" alt="" /></span>
                  <span className="content text-xl">In-clinic and remote.</span>
                </div>
                {/* item 2 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Innovative digital tools.</div>
                </span>
                {/* item 3 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Flexible access..</div>
                </span>
                {/* item 4 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Expert healthcare professionals.</div>
                </span>
              </div>

              {/* animated button */}
              <a href='/' className="text-center text-lg lg:text-2xl relative overflow-hidden px-20 py-6 font-semibold text-[#01a0a9] bg-white rounded-2xl mx-auto transition-all duration-500 group">
                {/* Button text */}
                <span className="relative">Get Started</span>
              </a>

            </div>

            {/* Image 2*/}
            <div className=" py-10 border  text-left  flex flex-col gap-10 items-baseline px-7 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl sm:rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
              {/* Animated background layer */}
              <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

              {/* Above part */}
              <div className="flex flex-col gap-5">
                {/* Icon part */}
                <div className="flex gap-6 z-40 relative">
                  <img className=" " src="/pricing (2).png" alt="" />
                  <div className=" flex flex-col items-start justify-center">
                    <span className="text-xl text-[#e3e0e0]">For Startups</span>
                    <span className="text-2xl font-bold">Pro</span>
                  </div>
                  <span className="absolute py-2 px-3 rounded-xl flex items-center justify-center bg-[#91f9fe4a] right-2">Popular</span>
                </div>
                <p className="text-left z-40 text-[#e3e0e0] text-2xl">Perfect for startups and small clinics looking to offer remote care to their patients, with advanced features and personalized support.</p>
              </div>

              {/* Middle part */}
              <div className="flex flex-col gap-5 z-40 text-[#e3e0e0]">

                {/* Price heading */}
                <h1 className="text-left"><span className='text-7xl text-[#ffffff] font-bold'>$199</span><span className='text-[#e3e0e0d6]'>/month</span></h1>

                {/* Choose Heading */}
                <h1 className="text-white z-40 text-2xl font-bold text-left">Why Choose us?</h1>

                {/* item 1 */}
                <div className="flex gap-5">
                  <span className="icon"><img width={'28px'} src="/check1.svg" alt="" /></span>
                  <span className="content text-xl">Up to 10 telemedicine consultations per month.</span>
                </div>
                {/* item 2 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Remote health monitoring kits for patients.</div>
                </span>
                {/* item 3 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Electronic health record (EHR) integration.</div>
                </span>
                {/* item 4 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Dedicated account manager and tech support.</div>
                </span>
              </div>

              {/* animated button */}
              <a href='/' className="text-center text-lg lg:text-2xl relative overflow-hidden px-20 py-6 font-semibold text-[#01a0a9] bg-white rounded-2xl mx-auto transition-all duration-500 group">
                {/* Button text */}
                <span className="relative">Get Started</span>
              </a>

            </div>


            {/* Image 3*/}
            <div className=" py-10 border  text-left  flex flex-col gap-10 items-baseline px-7 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl sm:rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
              {/* Animated background layer */}
              <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

              {/* Above part */}
              <div className="flex flex-col gap-5">
                {/* Icon part */}
                <div className="flex gap-6 z-40">
                  <img className=" " src="/pricing (3).png" alt="" />
                  <div className=" flex flex-col items-start justify-center">
                    <span className="text-xl text-[#e3e0e0]">For Individuals</span>
                    <span className="text-2xl font-bold">Basic</span>
                  </div>
                </div>
                <p className="text-left z-40 text-[#e3e0e0] text-2xl">Access essential healthcare services remotely with virtual consultations, basic health checkups, and easy-to-use digital tools.</p>
              </div>

              {/* Middle part */}
              <div className="flex flex-col gap-5 z-40 text-[#e3e0e0]">

                {/* Price heading */}
                <h1 className="text-left"><span className='text-7xl text-[#ffffff] font-bold'>$499</span><span className='text-[#e3e0e0d6]'>/month</span></h1>

                {/* Choose Heading */}
                <h1 className="text-white z-40 text-2xl font-bold text-left">Why Choose us?</h1>

                {/* item 1 */}
                <div className="flex gap-5">
                  <span className="icon"><img width={'28px'} src="/check1.svg" alt="" /></span>
                  <span className="content text-xl">In-clinic and remote.</span>
                </div>
                {/* item 2 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Innovative digital tools.</div>
                </span>
                {/* item 3 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Flexible access..</div>
                </span>
                {/* item 4 */}
                <span className="flex gap-5">
                  <div className="icon"><img width={'28px'} src="/check1.svg" alt="" /></div>
                  <div className="content text-xl">Expert healthcare professionals.</div>
                </span>
              </div>

              {/* animated button */}
              <a href='/' className="text-center text-lg lg:text-2xl relative overflow-hidden px-20 py-6 font-semibold text-[#01a0a9] bg-white rounded-2xl mx-auto transition-all duration-500 group">
                {/* Button text */}
                <span className="relative">Get Started</span>
              </a>

            </div>


          </div>

        </div>
      </div>


      {/* part 2 */}
      <div className="bg-[#004755] p-32 text-white relative w-full">
        {/* Carousel wrapper */}
        <div className="relative h-[56vh] overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`md:border-2 gap-10 lg:gap-0 flex flex-col lg:flex-row items-center justify-center absolute inset-0 transition-opacity duration-200 ease-linear ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="lg:right w-full text-center ">
                <div className="absolute top-0 z-40  icon bg-[#ffffff] w-20 h-20 rounded-br-full">
                  <img className='w-14' src="quote.png" alt="" />
                </div>
                <div className="content">
                  <p className="text-3xl font-bold">This is {slide.content}</p>
                </div>
              </div>
              <div className="lg:left lg:w-full">
                <img src={`${slide.img}`} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>


      {/* Part 3 */}
      <div className="w-full appBg flex flex-col gap-20 lg:gap-0 lg:flex-row ">

        {/* Text part  */}
        <div className="text px-2 lg:px-12 pt-20 text-center lg:text-left">

          {/* coloured heading */}
          <h3 className="text-2xl  font-bold text-[#01a0a9] uppercase">
            APPOINTMENT
          </h3>

          {/* Introduction heading */}
          <h1 className="leading-[60px]  text-5xl font-bold lg:font-bold">
            Ready to Transform Your Healthcare Practice?
          </h1>

          {/* introductory paragraph */}
          <p className="leading-10 text-2xl  text-[#5f5d5d]">
          In-clinic appointments, telemedicine consultations, and remote examinations using devices like digital stethoscopes and dental cameras.         
          </p>

          {/* Other links */}
          <div className="flex flex-col lg:flex-row pt-6 items-center gap-6">

            {/* animated button */}
            <a href='/' className="text-lg lg:text-2xl relative overflow-hidden px-6 py-4 font-semibold text-white bg-[#01a0a9] rounded-md transition-all duration-500 group">
              {/* Animated background layer */}
              <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              {/* Button text */}
              <span className="relative">Register Your Clinic</span>
            </a>

            <a href="/">
              <div className="flex items-center flex-col">
                <span>For Appointments</span>
                <div className="flex items-center">
                  {/* Phone Icon */}
                  <svg
                    className="w-5 h-5 group-hover:fill-[#01a0a9] transition-all"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  {/* Phone Text */}
                  <div className="content group-hover:text-[#01a0a9]">1800-657-876</div>
                </div>
              </div>
            </a>
          </div>
          
        </div>

        {/* Image part */}
        <div className="image w-full ml-auto">
          <img className='w-full' src="/appointment.png" alt="" />
        </div>

      </div>


    </div>
  )
}

export default Pricing