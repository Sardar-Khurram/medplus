import React from 'react'

const Work = () => {
  return (
    <div className="id='works'" >

      <div  className='text-center md:text-left flex items-center justify-center flex-col gap-3 md:bg-white rounded-3xl inter m-14 lg:my-20 py-5 lg:py-20'>

        {/* Heading 1 */}
        <h1 className="my-5 text-2xl lg:text-3xl  font-bold text-[#01a0a9] uppercase">WORK PROCESS</h1>

        {/* Introductory heading */}
        <h1 className="text-4xl lg:text-[40px] xl:text-5xl 2xl:text-7xl font-bold lg:font-semibold ">
          Let&#39;s See How We Work
        </h1>

        {/* Image Container */}
        <div className="imageConatiner py-10 flex flex-wrap items-center justify-center gap-10 flex-col md:flex-row">

          {/* Image 1*/}
          <div className="w-full md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[75vh] text-center flex flex-col items-center justify-center py-3 bg-[#bef6f3] text-[#01a0a9] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/work_process(2).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Register Your Clinic</h5>
              <p className="mb-3 text-[20px] leading-6">Complete the registration form to get started.</p>
            </div>
          </div>

          {/* Image 2*/}
          <div className="w-full md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[75vh] text-center flex flex-col items-center justify-center py-3 bg-[#bef6f3] text-[#01a0a9] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/work_process(1).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-xl font-bold tracking-tight">Get Approved</h5>
              <p className="mb-3 text-[20px] leading-6">Our team will review and approve your registration within 2-3 business days.</p>
            </div>
          </div>

          {/* Image 3*/}
          <div className="w-full md:w-[35vw] lg:w-[30vw] xl:w-[25vw] border h-[75vh] text-center flex flex-col items-center justify-center py-3 bg-[#bef6f3] text-[#01a0a9] shadow-2xl rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/work_process.png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Start Earning</h5>
              <p className="mb-3 text-[20px] leading-6">Start earning by providing consultations and selling products.</p>
            </div>
          </div>
        </div>

        {/* Other links */}
        <div className="flex flex-col lg:flex-row pt-6 items-center gap-6">

          {/* animated button */}
          <a href='/registration' className="text-lg lg:text-2xl relative overflow-hidden px-6 py-4 font-semibold text-white bg-[#01a0a9] rounded-md transition-all duration-500 group">
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

    </div>
  )
}

export default Work