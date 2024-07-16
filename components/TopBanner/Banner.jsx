import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Banner() {
    return (
        <>
            <div class="lg:flex hidden justify-between text-zinc-950 top-0 w-full p-4 border-b border-zinc-200 bg-zinc-50">
                <div className='flex text-xs items-center gap-6'>
                    <a className='flex items-center gap-1'>
                        <PhoneIcon className='size-3' />
                        <p>+91 9535652222</p>
                    </a>
                    <a href='mailto:shettygroupofinstitutions@gmail.com' className='flex items-center gap-1'>
                        <EnvelopeIcon className='size-3' />
                        <p>Shettygroupofinstitutions@gmail.com</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Banner