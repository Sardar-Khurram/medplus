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
          <div className="imageConatiner p-2 sm:p-8 lg:p-12 flex flex-wrap items-center justify-center gap-12 flex-col lg:flex-row">

{/* Smaller Component */}
<div className="py-6 border text-left flex flex-col gap-4 items-baseline px-6 justify-center bg-[#01a0a9] text-[#ffffff] shadow-md sm:rounded-2xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-sm hover:bg-[#01a1a9e0] group">
    {/* Animated background layer */}
    <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

    {/* <div className="absolute top-0 right-0">
        <input type="checkbox" name="individual" id="individual" />
    </div> */}
    {/* Above part */}
    <div className="flex flex-col gap-3">
        {/* Icon part */}
        <div className="flex gap-3 z-40">
            <img className="w-8 h-8" src="/pricing (1).png" alt="" />
            <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-[#e3e0e0]">For Individuals</span>
                <span className="text-lg font-bold">Basic</span>
            </div>
        </div>
        <p className="text-left z-40 text-[#e3e0e0] text-sm">
            Access essential healthcare services remotely with virtual consultations, basic health checkups, and easy-to-use digital tools.
        </p>
    </div>

    {/* Middle part */}
    <div className="flex flex-col gap-3 z-40 text-[#e3e0e0]">
        {/* Price heading */}
        <h1 className="text-left">
            <span className="text-3xl text-[#ffffff] font-bold">$49</span>
            <span className="text-[#e3e0e0d6] text-sm">/month</span>
        </h1>

        {/* Choose Heading */}
        <h1 className="text-white z-40 text-base font-bold text-left">Why Choose us?</h1>

        {/* Benefits */}
        {["In-clinic and remote.", "Innovative digital tools.", "Flexible access.", "Expert healthcare professionals."].map(
            (text, idx) => (
                <div key={idx} className="flex gap-2">
                    <span className="icon">
                        <img width="16px" src="/check1.svg" alt="" />
                    </span>
                    <span className="content text-sm">{text}</span>
                </div>
            )
        )}
    </div>

    {/* Animated button */}
    <a
        href="/"
        className="text-center text-xs lg:text-sm relative overflow-hidden px-12 py-2 font-semibold text-[#01a0a9] bg-white rounded-lg mx-auto transition-all duration-500 group"
    >
        {/* Button text */}
        <span className="relative">Get Started</span>
    </a>
</div>



{/* Smaller Component */}
<div className="py-6 border text-left flex flex-col gap-4 items-baseline px-6 justify-center bg-[#01a0a9] text-[#ffffff] shadow-md sm:rounded-2xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-sm hover:bg-[#01a1a9e0] group">
    {/* Animated background layer */}
    <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

    {/* Above part */}
    <div className="flex flex-col gap-3">
        {/* Icon part */}
        <div className="flex gap-3 z-40 relative">
            <img className="w-8 h-8" src="/pricing (2).png" alt="" />
            <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-[#e3e0e0]">For Startups</span>
                <span className="text-lg font-bold">Pro</span>
            </div>
            <span className="absolute py-1 px-2 text-xs rounded-lg flex items-center justify-center bg-[#91f9fe4a] right-2">
                Popular
            </span>
        </div>
        <p className="text-left z-40 text-[#e3e0e0] text-sm">
            Perfect for startups and small clinics looking to offer remote care to their patients, with advanced features and personalized support.
        </p>
    </div>

    {/* Middle part */}
    <div className="flex flex-col gap-3 z-40 text-[#e3e0e0]">
        {/* Price heading */}
        <h1 className="text-left">
            <span className="text-3xl text-[#ffffff] font-bold">$199</span>
            <span className="text-[#e3e0e0d6] text-sm">/month</span>
        </h1>

        {/* Choose Heading */}
        <h1 className="text-white z-40 text-base font-bold text-left">Why Choose us?</h1>

        {/* Benefits */}
        {[
            "Up to 10 telemedicine consultations per month.",
            "Remote health monitoring kits for patients.",
            "Electronic health record (EHR) integration.",
            "Dedicated account manager and tech support.",
        ].map((text, idx) => (
            <div key={idx} className="flex gap-2">
                <span className="icon">
                    <img width="16px" src="/check1.svg" alt="" />
                </span>
                <span className="content text-xs">{text}</span>
            </div>
        ))}
    </div>

    {/* Animated button */}
    <a
        href="/"
        className="text-center text-xs lg:text-sm relative overflow-hidden px-12 py-2 font-semibold text-[#01a0a9] bg-white rounded-lg mx-auto transition-all duration-500 group"
    >
        {/* Button text */}
        <span className="relative">Get Started</span>
    </a>
</div>



{/* Compact Component */}
<div className="py-6 border text-left flex flex-col gap-4 items-baseline px-6 justify-center bg-[#01a0a9] text-[#ffffff] shadow-md sm:rounded-2xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-sm hover:bg-[#01a1a9e0] group">
    {/* Animated background layer */}
    <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

    {/* Above part */}
    <div className="flex flex-col gap-3">
        {/* Icon part */}
        <div className="flex gap-3 z-40">
            <img className="w-8 h-8" src="/pricing (3).png" alt="" />
            <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-[#e3e0e0]">For Individuals</span>
                <span className="text-lg font-bold">Basic</span>
            </div>
        </div>
        <p className="text-left z-40 text-[#e3e0e0] text-sm">
            Access essential healthcare services remotely with virtual consultations, basic health checkups, and easy-to-use digital tools.
        </p>
    </div>

    {/* Middle part */}
    <div className="flex flex-col gap-3 z-40 text-[#e3e0e0]">
        {/* Price heading */}
        <h1 className="text-left">
            <span className="text-3xl text-[#ffffff] font-bold">$499</span>
            <span className="text-[#e3e0e0d6] text-sm">/month</span>
        </h1>

        {/* Choose Heading */}
        <h1 className="text-white z-40 text-base font-bold text-left">Why Choose us?</h1>

        {/* Benefits */}
        {[
            "In-clinic and remote.",
            "Innovative digital tools.",
            "Flexible access.",
            "Expert healthcare professionals.",
        ].map((text, idx) => (
            <div key={idx} className="flex gap-2">
                <span className="icon">
                    <img width="16px" src="/check1.svg" alt="" />
                </span>
                <span className="content text-xs">{text}</span>
            </div>
        ))}
    </div>

    {/* Animated button */}
    <a
        href="/"
        className="text-center text-xs lg:text-sm relative overflow-hidden px-12 py-2 font-semibold text-[#01a0a9] bg-white rounded-lg mx-auto transition-all duration-500 group"
    >
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