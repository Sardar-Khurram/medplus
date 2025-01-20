"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const pathname = usePathname()

    return (
        // Header Wrapper
        <div className="bg-[#134657] text-[#cfcbcb] p-6">

            {/* Content of header */}
            <div className="flex items-center justify-between">

                {/* Logo medplus goes here */}
                <div className="logo">
                    <Link href={"/admin"}><img className='w-32' src="/footer_logo.png" alt="medplus logo" /></Link>
                </div>

                {/* Navigation buttons goes here */}
                <div className="hidden  lg:flex items-center font-semibold gap-6 justify-center text">
                    <Link className={`hover:text-white ${pathname === '/admin' ? 'text-white text-lg' : ''}`} href={"/admin"}>Dashboard</Link>
                    <Link className={`hover:text-white ${pathname === '/admin/generalSettings' ? 'text-white text-lg' : ''}`} href={"/admin/generalSettings"}>General Settings</Link>
                    <Link className={`hover:text-white ${pathname === '/admin/userManagement' ? 'text-white text-lg' : ''}`} href={"/admin/userManagement"}>User Management</Link>
                </div>

                {/* Search, Subscription and profile goes here */}

                <div className="flex items-center justify-center gap-6">

                    {/* Search Button */}
                    <div className="hidden md:flex items-center justify-center">
                        <button className='bg-[#01a0a9] px-4 py-[8px] rounded-s-md'>
                            <img className="invert w-5 h-5" src="/search.svg" alt="" />
                        </button>
                        <input className='px-12 py-[6px] text-black rounded-e-md' type="search" name="" id="" placeholder='type to search' />
                    </div>

                    {/* Notifications */}
                    <button className="bg-[#01a0a9] p-3 rounded-md">
                        <img src="/bell.svg" alt="Notification Icon" className="invert w-6 h-6" />
                    </button>

                    {/* Profilee image */}
                    <div className="image  rounded-full border-white ">
                        <img src="/p4.jpg" className='w-12 h-12  rounded-full' alt="profile" />
                    </div>

                    {/* Navbar Toggler */}
                    <button className="relative overflow-hidden p-3 bg-[#01a0a9] text-white rounded-md flex items-center justify-center lg:hidden group">
                        {/* Overlay layer for animation */}
                        <span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>

                        {/* SVG Icon */}
                        <svg onClick={toggleSidebar} fill='#ffffff' className="relative z-10 h-5 w-4  cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                    </button>

                    {/* Sidebar */}
                    <div className={`fixed top-0 left-0  z-40 w-full h-screen bg-black/70 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}>

                        {/* Sidebar content */}
                        <div className="flex flex-col justify-between p-6 h-full w-96  bg-[#ffffff] text-black font-bold">
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
                                        <a onClick={toggleSidebar} href="/admin" className="flex items-center gap-3 hover:text-[#01a0a9]">
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={toggleSidebar} href="/admin/generalSettings" className="flex items-center gap-3 hover:text-[#01a0a9]">
                                            <span>General Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={toggleSidebar} href="/admin/userManagement" className="flex items-center gap-3 hover:text-[#01a0a9]">
                                            <span>User Management</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header