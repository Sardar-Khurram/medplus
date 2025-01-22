"use client"
import {React, useState} from 'react'
import Breadcrumb from './components/Breadcrumb'
import Brands from './components/Brands'
import Sidebar from './components/Sidebar'
import Payments from './components/Payments'
import OperatingHours  from './components/Payments'
import Localization from './components/Localization'
import Sms from './components/notification/Sms'
import Whatsapp from './components/notification/Whatsapp'
import Email from './components/notification/Email' 
import Logging from './components/Logging'
import Settings from './components/Settings'

const GeneralSettings = () => {

    const [activeItem, setActiveItem] = useState("Brands") 
  return (
    <div className='min-h-screen p-9'>

      {/* Bread Crumb */}
      <Breadcrumb activeSidebarItem={activeItem}/>
      
      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
        <Sidebar/>
        </div>

        {/* Active Content */}
        <div className="col-span-9 w-full bg-red-200 h-full mt-6 rounded-lg">
          {activeItem === "Brands" && <Brands/>}
          {activeItem === "Payments" && <Payments/>}
          {activeItem === "Operating Hours" && <OperatingHours/>}
          {activeItem === "Notification" && <Sms/>}
          {activeItem === "Notification" && <Whatsapp/>}
          {activeItem === "Notification" && <Email/>}
          {activeItem === "Localization" && <Localization/>}
          {activeItem === "Logging" && <Logging/>}
          {activeItem === "Settings" && <Settings/>}
        </div>
      </div>

    </div>
  )
}

export default GeneralSettings