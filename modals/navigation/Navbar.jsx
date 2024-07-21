"use client";
import React from 'react';
import { ArrowRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
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
            <label htmlFor="Slider" className="btn btn-circle btn-ghost drawer-button float-right fixed lg:right-10 lg:top-16 right-2 top-2 btnanim z-50 bg-white hover:text-white">
                <ComputerDesktopIcon className="lg:size-7 size-5" />
            </label>

            <div className="drawer">
                <input id="Slider" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-40">
                    <label htmlFor="Slider" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-zinc-200 min-h-full lg:w-80 w-full p-4" onClick={closeSidebar}>
                        {menuData.map((item, index) => (
                            <li key={index} className="group text-2xl tracking-tight text-zinc-700 hover:font-semibold transition-all duration-300">
                                <a href={item.href} onClick={closeSidebar} className="flex items-center">
                                    {item.label}
                                    <ArrowRightIcon className="ml-2 size-3 text-zinc-400 group-hover:text-zinc-950 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
