"use client";
import React from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
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
            <label htmlFor="Slider" className="btn btn-circle btn-ghost drawer-button float-right absolute right-10 top-10 btnanim">
                <EllipsisHorizontalIcon className="size-7 inline-block stroke-current" />
            </label>

            <div className="drawer">
                <input id="Slider" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="Slider" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-zinc-950 min-h-full w-80 p-4" onClick={closeSidebar}>
                        {menuData.map((item, index) => (
                            <li className='rounded-lg btnanim text-zinc-50' key={index}><a href={item.href} onClick={closeSidebar}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
