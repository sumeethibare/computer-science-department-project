import React from 'react';
function About() {
    return (
        <>

            <div class="relative h-screen overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-bottom before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div class="mt-5 max-w-2xl text-center mx-auto">
                        <h1 class="block font-bold text-zinc-950 text-4xl md:text-5xl lg:text-6xl tracking-tight">
                            Dive Into
                            <span class="bg-clip-text bg-gradient-to-tl from-sky-400 to-blue-600 text-transparent"> Department</span>
                        </h1>
                    </div>
                    <div class="mt-5 max-w-3xl mx-auto">
                        <div className='flex gap-6 p-4 lg:items-start justify-center flex-col lg:flex-row'>
                            <p className='text-5xl font-semibold text-zinc-200 font-mono'>vision</p>
                            <p className='text-md font-semibold lg:text-xl text-zinc-500 tracking-tight'>
                                Department of Computer Science and Engineering aspires to become a center of excellence for quality technical education by keeping pace with new technologies to create competent professionals.
                            </p>
                        </div>

                        <div className='flex gap-6 p-4 lg:items-start justify-center flex-col lg:flex-row'>
                            <p className='text-5xl font-semibold text-zinc-200 font-mono'>Mission</p>
                            <ul className='text-md font-semibold lg:text-xl text-zinc-500 tracking-tight'>
                                <li>
                                    Prepare students full and ethical participation in a diverse society and encourage lifelong learning
                                </li>
                                <li>
                                    Foster the development of problem solving and communication skills as an integral component of the profession
                                </li>
                                <li>
                                    Provide quality learning experiences through effective classroom practices, active learning styles of teaching, and opportunities for meaningful interactions between students and faculty
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}

export default About;
