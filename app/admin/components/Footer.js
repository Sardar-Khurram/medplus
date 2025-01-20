"use client"
import React from 'react'
import Link from 'next/link'
const Footer = () => {

    return (
        <div className="bg-[#0e3340] text-[#ffffff] p-4">
            <div className="flex flex-col md:flex-row text-center gap-3 items-center justify-between font-semibold">
                <span className="">Copyrights &copy; MED PRO + 2024. All rights reserved.</span>
                <div className="flex items-center gap-6 justify-center text">
                    <Link className="hover:underline" href={"/admin"}>Report a bug</Link>
                    <Link className="hover:underline" href={"/admin"}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer