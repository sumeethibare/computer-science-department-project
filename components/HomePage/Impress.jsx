"use client";
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React, { useRef, useState } from 'react';

function Impress() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>

            <section class="pt-12 bg-gray-50 sm:pt-16 dvh-screen">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="text-center">
                        <p
                            class="max-w-6xl lg:max-w-6xl mx-auto mb-4 text-xl font-bold leading-tight text-zinc-950 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tighter">
                            Department of <br></br> Computer Science & Engineering
                        </p>
                        <h1 class="max-w-2xl mx-auto px-6 lg:text-lg text-xs text-gray-600">
                            Creativity Meets Talent
                        </h1>

                        <video
                            className="lg:hidden w-full object-cover lg:h-screen h-[480px] rounded-xl mt-10"
                            autoPlay
                            muted
                            loop
                        >
                            <source
                                src="/branding.mp4"
                                type="video/mp4"
                            />
                        </video>

                        <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 space-x-2 sm:flex mt-9">
                            <a href="#"
                                class="mb-2 inline-flex items-center justify-center px-8 py-3 text-lg font-medium btnanim hover:font-semibold text-gray-900 hover:text-white transition-all duration-200 bg-gray-200 sm:w-auto rounded-xl hover:bg-zinc-950"
                                role="button">LinkedIn</a>
                            <a href="#"
                                class="mb-2 inline-flex items-center justify-center px-8 py-3 text-lg font-medium btnanim hover:font-semibold text-gray-900 hover:text-white transition-all duration-200 bg-gray-200 sm:w-auto rounded-xl hover:bg-zinc-950"
                                role="button">SGI</a>
                            <a href="#"
                                class="mb-2 inline-flex items-center justify-center px-8 py-3 text-lg font-medium btnanim hover:font-semibold text-gray-900 hover:text-white transition-all duration-200 bg-gray-200 sm:w-auto rounded-xl hover:bg-zinc-950"
                                role="button">Enroll Now</a>


                        </div>
                    </div>
                </div>

                <div className='px-4 mt-10 lg:flex hidden'>
                    <div className="p-2 bg-zinc-950 lg:rounded-2xl rounded-box lg:max-w-7xl lg:mx-auto">
                        <div className="flex justify-center">
                            <video
                                className="w-full lg:rounded-xl lg:h-screen h-[170px]"
                                autoPlay
                                muted
                                loop
                                ref={videoRef}
                                onClick={handleVideoClick}
                            >
                                <source src="/branding.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div class="lg:flex hidden mx-auto bg-zinc-950 rounded-b-lg h-[55px] max-w-[83px] md:h-[95px] md:max-w-[140px]">
                </div>
            </section >

        </>
    )
}

export default Impress