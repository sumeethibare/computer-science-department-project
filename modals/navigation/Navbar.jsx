"use client";
import React from 'react';
import { ComputerDesktopIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import menuData from './menuData';

function Navbar() {
    const closeSidebar = () => {
        const sliderCheckbox = document.getElementById('Slider');
        if (sliderCheckbox) {
            sliderCheckbox.checked = false;
        }
    };

    return (
        <>
            <label htmlFor="Slider" className="btn btn-circle btn-ghost drawer-button float-right absolute lg:right-10 lg:top-10 right-4 top-4 btnanim">
                <ComputerDesktopIcon className="size-6" />
            </label>

            <div className="drawer">
                <input id="Slider" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="Slider" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-zinc-950 min-h-full lg:w-80 w-full p-4" onClick={closeSidebar}>
                        {menuData.map((item, index) => (
                            <li className='text-2xl tracking-tight text-zinc-200' key={index}><a href={item.href} onClick={closeSidebar}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
