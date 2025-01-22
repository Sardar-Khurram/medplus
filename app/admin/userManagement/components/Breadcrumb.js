'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserManagementBreadcrumb = ({ activeSidebarItem }) => {
    let path = usePathname(); // Get the current path
    const basePath = path.split("/")[2]; // Extract the base path (e.g., "userManagement")

    // Convert basePath to sentence case with spaces
    const formattedBasePath = basePath
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert a space before uppercase letters
        .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter

    // Format the active sidebar item to match sentence case
    const formattedActiveItem = activeSidebarItem
        ? activeSidebarItem
            .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize the first letter
        : null;

    return (
        <div className="inline-flex items-center justify-center gap-2 font-semibold text-sm text-[#134657]">
            {/* Link to the Dashboard */}
            <Link className='flex gap-2' href={"/admin"}>
                <img src="/house.svg" className='w-4 h-4' alt="Home" />
                <span>Dashboard</span>
            </Link>

            {/* Separator */}
            <img src="/greater.svg" className='w-4 h-4 pt-[3px]' alt=">" />

            {/* Link to the Base Path */}
            <Link href={`/admin/${basePath}`}>
                <span>{formattedBasePath}</span>
            </Link>

            {/* Separator */}
            <img src="/greater.svg" className='w-4 h-4 pt-[3px]' alt=">" />

            {/* Active Sidebar Item */}
            {activeSidebarItem && (
                <>
                    <span>{formattedActiveItem}</span>
                </>
            )}
        </div>
    );
};

export default UserManagementBreadcrumb;
