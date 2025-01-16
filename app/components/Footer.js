import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#004755] text-white p-8 flex flex-col lg:flex-row">

      {/* left part */}
      <div className="p-4 lg:w-1/3 flex flex-col items-center lg:items-start gap-10">

        {/* logo */}
        <div className="logo">
          <img src="footer_logo.png" alt="Medpro" />
        </div>


        <div className="flex flex-col items-center md:items-start justify-center gap-10">

          {/* Animated Button 1 */}
          <button className="relative group overflow-hidden px-6 py-4 rounded-md text-sm font-semibold text-white hover:text-[#004755] border-2">
            <a href="/" className="flex items-center relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              <span>Register Your Clinic</span>
            </a>
            {/* Animated Background Layer */}
            <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </button>

          {/* Animated Button 2 */}
          <button className="relative group overflow-hidden px-6 py-4 rounded-md text-sm font-semibold text-white hover:text-[#004755] border-2">
            <a href="/" className="flex items-center relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />

              </svg>
              <span>Connect with whatsapp</span>
            </a>
            {/* Animated Background Layer */}
            <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-20 hidden lg:flex">
          <p className="text-[#7da3a9] text-[18px]">&copy; 2024 medplus</p>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex w-full p-4 gap-20 justify-center flex-col md:flex-row">

        {/* Services Section */}
        <div className="md:ml-auto items-center text-[#7da3a9]  text-[14px] font-semibold">
          <ul className="md:ml-auto items-center flex flex-col gap-5">

            <li className="text-white">Services</li>
            <a href="/">
              <li className="hover:text-white">Ambulance</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Pathology</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Radiology</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Pharmacy</li>
            </a>

          </ul>
        </div>


        {/* HEALTH CHECKUP Section */}
        <div className="md:ml-auto items-center text-[#7da3a9]  text-[14px] font-semibold">
          <ul className="md:ml-auto items-center flex flex-col gap-5">

            <li className="text-white">HEALTH CHECKUP</li>
            <a href="/">
              <li className="hover:text-white">Woman Health</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Cancer Screen</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Cardiac Health</li>
            </a>
            <a href="/">
              <li className="hover:text-white">MRI Checkup</li>
            </a>

          </ul>
        </div>


        {/* DEPARTMENTS Section */}
        <div className="md:ml-auto items-center text-[#7da3a9]  text-[14px] font-semibold">
          <ul className="md:ml-auto items-center flex flex-col gap-5">

            <li className="text-white">DEPARTMENTS</li>
            <a href="/">
              <li className="hover:text-white">GENERAL</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Dermatology</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Cardialogy</li>
            </a>
            <a href="/">
              <li className="hover:text-white">Cancer</li>
            </a>

          </ul>

          <div className="pt-44 hidden lg:flex gap-5 items-center justify-center">
            <a href="#"><img src="/facebook.svg" width={13} alt="" /></a>
            <a href="#"><img src="/pintrest.svg" width={17} alt="" /></a>
            <a href="#"><img src="/instagram.svg" width={19} alt="" /></a>
            <a href="#"><img src="/twitter.svg" width={19} alt="" /></a>
          </div>

        </div>

      </div>

      {/* bottom part */}
      <div className="flex lg:hidden items-center justify-around py-5 flex-col gap-5 md:flex-row md:gap-0">
        {/* Copyright */}
        <div className="">
          <p className="text-[#7da3a9] text-[18px]">&copy; 2024 medplus</p>
        </div>

        <div className="gap-5 flex items-center justify-center">
          <a href="#"><img src="/facebook.svg" width={13} alt="" /></a>
          <a href="#"><img src="/pintrest.svg" width={17} alt="" /></a>
          <a href="#"><img src="/instagram.svg" width={19} alt="" /></a>
          <a href="#"><img src="/twitter.svg" width={19} alt="" /></a>
        </div>


      </div>

    </footer>
  );
};

export default Footer;


