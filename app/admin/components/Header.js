"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

    const pathname = usePathname()
    
    return (
        // Header Wrapper
        <div className="bg-[#134657] text-[#cfcbcb] p-6">

            {/* Content of header */}
            <div className="flex items-center justify-between">

                {/* Logo medplus goes here */}
                <div className="logo">
                    <img src="/footer_logo.png" alt="medplus logo" />
                </div>

                {/* Navigation buttons goes here */}
                <div className="flex items-center font-semibold gap-6 justify-center text">
                    <Link className={`hover:text-white ${ pathname === '/admin' ? 'text-white text-lg' : '' }`} href={"/admin"}>Dashboard</Link>
                    <Link className={`hover:text-white ${ pathname === '/admin/generalSettings' ? 'text-white text-lg' : '' }`} href={"/admin/generalSettings"}>General Settings</Link>
                    <Link className={`hover:text-white ${ pathname === '/admin/userManagement' ? 'text-white text-lg' : '' }`} href={"/admin/userManagement"}>User Management</Link>
                </div>

                {/* Search, Subscription and profile goes here */}
                <div className="flex items-center justify-center gap-10">
                    <div className="">
                        <button className='bg-[#01a0a9] px-5 py-[6px] rounded-s-sm'>S</button>
                        <input className='px-12 py-[6px] text-black rounded-e-sm' type="search" name="" id="" placeholder='type to search' />
                    </div>
                    <button className='bg-[#01a0a9] px-4 py-[6px] rounded-sm'>btn</button>
                    <div className="image">
                        <img src="/p4.jpg" width={45} height={60} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header