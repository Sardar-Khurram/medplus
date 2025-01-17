import React from 'react'

const Features = () => {
  return (

    // Main Container
    <div className='bg-[#01a0a9] inter py-1' id='feature'>

      <div className='md:bg-white rounded-3xl   inter sm:m-14 lg:my-20 py-5 lg:py-20 flex flex-col items-center justify-center gap-16'>

        {/* Top text Container */}
        <div className=" text-center lg:text-left px-12 flex flex-col items-center justify-center lg:flex-row">

          <h1 className='w-full text-[44px] text-white md:text-[#01a0a9] font-bold'>Why Choose <br className='hidden lg:flex' /> [Platform Name]?</h1>

          <p className='w-full text-[25px] leading-snug'>A dynamic image or animation showing various healthcare interactions, including in-clinic appointments, telemedicine consultations, and remote examinations using devices like digital stethoscopes and dental cameras.</p>

        </div>


        {/* Card Conatiner */}

        <div className="imageConatiner py-10 flex flex-wrap items-center justify-center gap-10 flex-col md:flex-row">

          {/* Card 1 */}
          <div className="mx-3 md:w-[32vw] lg:w-[26vw] xl:w-[22vw] border text-center flex flex-col items-center justify-center  bg-[#01a0a9]  shadow-2xl text-white rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/why_choose (1).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Comprehensive Clinic Management</h5>
              <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mx-3 md:w-[32vw] lg:w-[26vw] xl:w-[22vw] border text-center flex flex-col items-center justify-center  bg-[#01a0a9]  shadow-2xl text-white rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/why_choose (2).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Telemedicine & In-Person Appointments</h5>
              <p className="mb-3 font-normal">Telemedicine & In-Person Appointments elemedicine & In-Person Appointments </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mx-3 md:w-[32vw] lg:w-[26vw] xl:w-[22vw] border text-center flex flex-col items-center justify-center  bg-[#01a0a9]  shadow-2xl text-white rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/why_choose (3).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Remote Examinations Facility</h5>
              <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="mx-3 md:w-[32vw] lg:w-[26vw] xl:w-[22vw] border text-center flex flex-col items-center justify-center  bg-[#01a0a9]  shadow-2xl text-white rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/why_choose (4).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Patient Engagement</h5>
              <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="mx-3 md:w-[32vw] lg:w-[26vw] xl:w-[22vw] border text-center flex flex-col items-center justify-center  bg-[#01a0a9]  shadow-2xl text-white rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            <img className="z-40" src="/why_choose (5).png" alt="" />
            <div className="p-3 relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Integrated Billing & Reports</h5>
              <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>

          {/* Card 6 */}
          <a href='/registration' className="mx-3 md:w-[32vw] lg:w-[26vw] xl:w-[22vw] borderter flex flex-col items-center justify-center py-3 bg-[#01a0a9] shadow-2xl text-white rounded-3xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#01a1a9e0] group">
            {/* Animated background layer */}
            <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

            <div className="p-16 relative z-10">
              <h5 className="mb-5 text-4xl font-bold tracking-tight">Register Your Clinic Today</h5>
              <p className="mb-3 text-xl font-semibold">Read More &gt;</p>
            </div>
          </a>

        </div>
      </div>

    </div>
  )
}

export default Features