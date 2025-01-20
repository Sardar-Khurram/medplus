"use client"
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center ">

      {/* statistics information components */}
      <div className="flex items-center justify-center flex-col md:flex-row w-full flex-wrap gap-10 p-10">

        {/* Today Money */}
        <div className="w-full lg:w-[27vw] border flex items-center justify-between bg-white shadow-md rounded-lg p-4 ">
          {/* Left Section */}
          <div>
            <p className="text-gray-500 font-medium">Today's Money</p>
            <div className="flex items-center space-x-2">
              <p className="text-3xl font-bold">$53,000</p>
              <p className="text-green-500 font-semibold text-sm">+55%</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center bg-teal-500 rounded-lg w-12 h-12">
            <img src="/creditCard.svg" className="invert w-5 h-5" alt="" />
          </div>
        </div>

        {/* Total Users  */}
        <div className="w-full lg:w-[27vw] border flex items-center justify-between bg-white shadow-md rounded-lg p-4 ">
          {/* Left Section */}
          <div>
            <p className="text-gray-500 font-medium">Total Users</p>
            <div className="flex items-center space-x-2">
              <p className="text-3xl font-bold">450</p>
              <p className="text-green-500 font-semibold text-sm">+55%</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center bg-teal-500 rounded-lg w-12 h-12">
            <img src="/2users.svg" className="invert w-5 h-5" alt="" />
          </div>
        </div>

        {/* Appointments completed */}
        <div className="w-full lg:w-[27vw] border flex items-center justify-between bg-white shadow-md rounded-lg p-4 ">
          {/* Left Section */}
          <div>
            <p className="text-gray-500 font-medium">Appointments completed </p>
            <div className="flex items-center space-x-2">
              <p className="text-3xl font-bold">2000</p>
              <p className="text-green-500 font-semibold text-sm">+55%</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center bg-teal-500 rounded-lg w-12 h-12">
            <img src="/calanderMark.svg" className="invert w-5 h-5" alt="" />
          </div>
        </div>

        {/* Appointments canceled */}
        <div className="w-full lg:w-[27vw] border flex items-center justify-between bg-white shadow-md rounded-lg p-4 ">
          {/* Left Section */}
          <div>
            <p className="text-gray-500 font-medium">Appointments Canceled</p>
            <div className="flex items-center space-x-2">
              <p className="text-3xl font-bold">53</p>
              <p className="text-red-500 font-semibold text-sm">+55%</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center bg-teal-500 rounded-lg w-12 h-12">
            <img src="/calendarHollow.svg" className="invert w-5 h-5" alt="" />
          </div>
        </div>

      </div>

      {/* Admin Information */}
      <div className="bg-[#ffffff] border-2 md:w-[60vw] shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-105 rounded-lg p-8 flex flex-col-reverse md:flex-row items-center justify-around gap-6">
        {/* User Info */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">Welcome back,</p>
          <h1 className="text-3xl md:text-5xl font-semibold m-6 text-[#01a0a9]">
            Sardar Khurram
          </h1>
          <p className="text-gray-500 mt-2">You are logged in Clinic Admin</p>
          <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="font-semibold">Quick Links:</span>
            <Link
              className="text-[#23bdff] hover:underline transition-colors duration-200"
              href="/admin"
            >
              Visit Profile
            </Link>
            <Link
              className="text-[#23bdff] hover:underline transition-colors duration-200"
              href="/admin"
            >
              Change Role
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
          <img
            src="/p4.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Admin Activities */}
      <div className="flex flex-col gap-5 lg:flex-row m-4 my-14">

        <div className="bg-white w-full lg:w-[30vw] shadow-md rounded-lg p-4 flex flex-col gap-4">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-[#01656b] rounded-md">
            <img src="/2users.svg" alt="Users Icon" className="w-6 h-6 invert" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#014c53]">Users Management</h2>
            <p className="text-gray-500 mt-1">
              Manage user roles, permissions, and access levels for clinic staff.
            </p>
            <div className="mt-3 flex gap-4">
              <span className="font-semibold">Quick links:</span>
              <a
                href="/staff-roles"
                className="text-[#007bff] hover:underline transition-colors"
              >
                Staff roles
              </a>
              <a
                href="/user-permissions"
                className="text-[#007bff] hover:underline transition-colors"
              >
                User permissions
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white w-full lg:w-[30vw] shadow-md rounded-lg p-4 flex flex-col gap-4">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-[#01656b] rounded-md">
            <img src="/2users.svg" alt="Users Icon" className="w-6 h-6 invert" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#014c53]">Users Management</h2>
            <p className="text-gray-500 mt-1">
              Manage user roles, permissions, and access levels for clinic staff.
            </p>
            <div className="mt-3 flex gap-4">
              <span className="font-semibold">Quick links:</span>
              <a
                href="/staff-roles"
                className="text-[#007bff] hover:underline transition-colors"
              >
                Staff roles
              </a>
              <a
                href="/user-permissions"
                className="text-[#007bff] hover:underline transition-colors"
              >
                User permissions
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white w-full lg:w-[30vw] shadow-md rounded-lg p-4 flex flex-col gap-4">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-[#01656b] rounded-md">
            <img src="/2users.svg" alt="Users Icon" className="w-6 h-6 invert" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#014c53]">Users Management</h2>
            <p className="text-gray-500 mt-1">
              Manage user roles, permissions, and access levels for clinic staff.
            </p>
            <div className="mt-3 flex gap-4">
              <span className="font-semibold">Quick links:</span>
              <a
                href="/staff-roles"
                className="text-[#007bff] hover:underline transition-colors"
              >
                Staff roles
              </a>
              <a
                href="/user-permissions"
                className="text-[#007bff] hover:underline transition-colors"
              >
                User permissions
              </a>
            </div>
          </div>
        </div>


      </div>



    </div>
  )
}

export default page