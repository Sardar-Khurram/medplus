'use client';
import React from 'react';

const Sidebar = () => {
    const generalSettingsMenu = [
        { name: 'Brands', svg: 'palette' },
        { name: 'Payments', svg: 'creditCard' },
        { name: 'Operating Hours', svg: 'calendarHollow' },
        { name: 'Notification', svg: 'bell', isDropdown: true, dropdownOptions: ['SMS', 'Whatsapp', 'Email'] },
        { name: 'Localization', svg: 'earth' },
        { name: 'Logging', svg: 'file' },
        { name: 'Settings', svg: 'slider' }
    ];

    return (
        <div className="py-6 font-semibold">
            <div className="w-fit flex flex-col gap-3 border shadow rounded-lg p-4 pr-12 bg-[#dcf7f9]">
                {/* Sidebar Header */}
                <h2 className="text-3xl text-gray-900 mb-4">General Settings</h2>

                {/* Sidebar Menu Items */}
                <ul className="flex flex-col gap-4 space-y-2">
                    {generalSettingsMenu.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center space-x-2 opacity-70 hover:opacity-100 hover:scale-105 cursor-pointer"
                        >
                            <img
                                src={`/${item.svg}.svg`} // Dynamically load SVG
                                className="w-4 h-4"
                                alt={item.name}
                            />
                            {item.isDropdown ? (
                                <select className="bg-[#dcf7f9] border-0 focus:outline-none focus:ring-0">
                                    <option defaultValue="">{item.name}</option>
                                    {item.dropdownOptions.map((option, optIndex) => (
                                        <option key={optIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <span className="text-gray-700">{item.name}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
