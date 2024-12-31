import React from 'react'

const Work = () => {
  return (
    <div className="text-center bg-[#01a0a9] inter pt-1 lg:pt-1" id='services'>

      <div className='md:bg-white rounded-3xl   inter sm:m-14 lg:my-20 py-5 lg:py-20 flex flex-col items-center justify-center gap-8'>

        {/* Heading 1 */}
        <h1 id='works' className="text-[#bef6f3] md:text-[#01a0a9] text-2xl lg:text-3xl font-bold uppercase">WHAT WE PROVIDE</h1>

        {/* Introductory heading */}
        <h1 className="text-4xl lg:text-[40px] xl:text-5xl 2xl:text-7xl font-bold lg:font-semibold ">
          What We Offer
        </h1>

        {/* introductory paragraph */}
        <p className="text-2xl px-0 sm:px-20 md:px-30 lg:px-40 text-white md:text-[#5f5d5d]">
          A dynamic image or animation showing various healthcare interactions, including in-clinic appointments, telemedicine consultations, and remote examinations using devices like digital stethoscopes and dental cameras.
        </p>

        {/* Image Container */}
        <div className="imageConatiner py-10 flex flex-wrap items-center justify-center gap-8 flex-col md:flex-row">

          {/* Image 1*/}
          <div className="mx-8 md:mx-0 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[70vh] text-center flex flex-col gap-8 items-baseline px-8 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40 invert" src="/what_we_offer (1).png" alt="" />
            <h5 className="z-40 mb-2 text-2xl font-bold tracking-tight">Register Your Clinic</h5>
            <p className="text-left z-40 mb-3 text-white md:text-[#ededed] text-xl">Offer patients a secure portal for scheduling, records access, and communication.</p>
            <a href='/' className="z-40 text-xl text-[#004755]">Read More &gt;</a>
          </div>

          {/* Image 2*/}
          <div className="mx-8 md:mx-0 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[70vh] text-center flex flex-col gap-8 items-baseline px-8 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40 invert" src="/what_we_offer (2).png" alt="" />
            <h5 className="z-40 mb-2 text-2xl font-bold tracking-tight">Get Approved</h5>
            <p className="text-left z-40 mb-3 text-white md:text-[#ededed] text-xl">Our team will review and approve your registration within 2-3 business days.</p>
            <a href='/' className="z-40 text-xl text-[#004755]">Read More &gt;</a>
          </div>

          {/* Image 3*/}
          <div className="mx-8 md:mx-0 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[70vh] text-center flex flex-col gap-8 items-baseline px-8 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40 invert" src="/what_we_offer (3).png" alt="" />
            <h5 className="z-40 mb-2 text-2xl font-bold tracking-tight">Start Earning</h5>
            <p className="text-left z-40 mb-3 text-white md:text-[#ededed] text-xl">Start earning by providing consultations and selling products.</p>
            <a href='/' className="z-40 text-xl text-[#004755]">Read More &gt;</a>
          </div>

          {/* Image 4 */}
          <div className="mx-8 md:mx-0 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[70vh] text-center flex flex-col gap-8 items-baseline px-8 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40 invert" src="/what_we_offer (4).png" alt="" />
            <h5 className="z-40 mb-2 text-2xl font-bold tracking-tight">Start Earning</h5>
            <p className="text-left z-40 mb-3 text-white md:text-[#ededed] text-xl">Start earning by providing consultations and selling products.</p>
            <a href='/' className="z-40 text-xl text-[#004755]">Read More &gt;</a>
          </div>

          {/* Image 5 */}
          <div className="mx-8 md:mx-0 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[70vh] text-center flex flex-col gap-8 items-baseline px-8 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40 invert" src="/what_we_offer (5).png" alt="" />
            <h5 className="z-40 mb-2 text-2xl font-bold tracking-tight">Start Earning</h5>
            <p className="text-left z-40 mb-3 text-white md:text-[#ededed] text-xl">Start earning by providing consultations and selling products.</p>
            <a href='/' className="z-40 text-xl text-[#004755]">Read More &gt;</a>
          </div>

          {/* Image 6 */}
          <div className="mx-8 md:mx-0 md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[70vh] text-center flex flex-col gap-8 items-baseline px-8 justify-center bg-[#01a0a9] text-[#ffffff] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <h5 className="z-40 text-xl font-bold text-left">Register Your Clinic Today</h5>
            <h5 className="z-40 mb-2 text-2xl font-bold tracking-tight">Start Earning</h5>
            <p className="text-left z-40 mb-3 text-white md:text-[#ededed] text-xl">Start earning by providing consultations and selling products.</p>
            <a href='/' className="z-40 text-xl text-[#004755]">Read More &gt;</a>
          </div>


        </div>

      </div>

      <div className="part2 bg-[#004755] flex items-center justify-center flex-col lg:flex-row gap-20 lg:gap-2 py-16 sm:p-16 lg:p-20 xl:p-36">

        {/* Box container */}
        <div className="box w-full">
          <div className="bg-white text-black  w-full lg:w-[35vw] xl:w-[33vw] border h-[95vh] text-center lg:text-left flex flex-col gap-8 items-baseline px-8 justify-center hover:shadow-xl sm:rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105">
            <h1 className="z-40 text-2xl font-bold text-left">Why Choose us?</h1>
            {/* item 1 */}
            <div className="flex gap-5">
              <span className="icon"><img width={'28px'} src="/check.svg" alt="" /></span>
              <span className="content text-xl">In-clinic and remote.</span>
            </div>
            {/* item 2 */}
            <span className="flex gap-5">
              <div className="icon"><img width={'28px'} src="/check.svg" alt="" /></div>
              <div className="content text-xl">Innovative digital tools.</div>
            </span>
            {/* item 3 */}
            <span className="flex gap-5">
              <div className="icon"><img width={'28px'} src="/check.svg" alt="" /></div>
              <div className="content text-xl">Flexible access..</div>
            </span>
            {/* item 4 */}
            <span className="flex gap-5">
              <div className="icon"><img width={'28px'} src="/check.svg" alt="" /></div>
              <div className="content text-xl">Expert healthcare professionals.</div>
            </span>
            {/* item 5 */}
            <span className="flex gap-5">
              <div className="icon"><img width={'28px'} src="/check.svg" alt="" /></div>
              <div className="content text-xl">Patient-focused approach.</div>
            </span>
            {/* item 6 */}
            <span className="flex gap-5">
              <div className="icon"><img width={'28px'} src="/check.svg" alt="" /></div>
              <div className="content text-xl">Trusted healthcare partner.</div>
            </span>
          </div>
        </div>

        {/* text container */}
        <div className="text w-full flex flex-col gap-8 lg:gap-16 px-4 items-center lg:items-start text-center lg:text-left text-white">
          {/* Introductory heading */}
          <h1 className="text-3xl leading-10 lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold lg:font-bold ">
            Connecting Care: From Clinic to Home
          </h1>

          {/* introductory paragraph */}
          <p className="text-2xl leading-10">
            A dynamic image or animation showing various healthcare interactions, including in-clinic appointments, telemedicine consultations, and remote examinations using devices like digital stethoscopes and dental cameras.
          </p>

          {/* animated button */}
          <a href='/' className="border-2 text-lg relative overflow-hidden w-60 h-20 px-8 py-6 font-semibold text-white hover:text-[#004755] bg-[#01a0a9] rounded-md transition-all duration-500 group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            {/* Button text */}
            <span className="relative z-1">Schedule a Demo
            </span>
          </a>

        </div>

      </div>

    </div>
  )
}

export default Work