import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

function preview() {
    return (
        <>
            <div class="bg-neutral-900">
                <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
                    <h1 class=" text-white text-5xl md:text-6xl italic">
                        <span class=" not-italic font-bold">CLUBS</span> transforming <span className='text-yellow-400 font-serif'>ideas</span> into <span className='text-sky-400 font-serif'>reality</span>
                    </h1>
                    <div class="max-w-4xl">
                        <div className='py-10'>
                            <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-sky-600 hover:from-sky-600 hover:to-sky-600 border border-transparent text-white text-sm font-medium rounded-md py-3 px-4" href="#">
                                Get started
                                <ArrowRightIcon className='size-4' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default preview