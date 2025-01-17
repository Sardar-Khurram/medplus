import React from 'react'

const Home = () => {
  return (
    // Main container
    <div className='appBg inter px-8 py-10 lg:py-28' id='home'>


      {/* content container */}
      <div className=" flex flex-col items-center lg:items-start lg:flex-row">

        {/* text container */}
        <div className="w-full text-center lg:text-left flex flex-col  items-center justify-center lg:items-baseline gap-7">

          {/* coloured heading */}
          <h3 className="text-2xl lg:text-3xl  font-semibold text-[#01a0a9] uppercase">
            Welcome to Healthcare
          </h3>

          {/* Introduction heading */}
          <h1 className="text-4xl lg:text-[36px] xl:text-5xl 2xl:text-7xl font-semibold lg:font-semibold">
            Revolutionize Healthcare with Remote Examinations & Comprehensive Care.
          </h1>

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

        {/* image container */}
        <div className="image w-96 lg:w-[60vw]">
          <img src="banner_img.png" alt="" />
        </div>

      </div>


    </div>
  )
}

export default Home