"use client"
import {React, useState} from 'react'
import Breadcrumb from './components/Breadcrumb'
import Sidebar from './components/Sidebar'
import All from './components/All'
import Staff from './components/Staff'
import Doctors from './components/Doctors'
import Patient from './components/Patients'

const UserManagement = () => {

  const [activeItem, setActiveItem] = useState("All") 

  return (
    <div className='min-h-screen p-9'>
      {/* Bread Crumb */}
      <Breadcrumb activeSidebarItem={activeItem}/>
      
      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
        <Sidebar />
        </div>

        {/* Active Content */}
        <div className="col-span-9 w-full bg-red-200 h-full mt-6 rounded-lg">
          {activeItem === All && <All/>}
          {activeItem === Staff && <Staff/>}
          {activeItem === Doctors && <Doctors/>}
          {activeItem === Patient && <Patient/>}
        </div>
      </div>
    </div>
  )
}

export default UserManagement