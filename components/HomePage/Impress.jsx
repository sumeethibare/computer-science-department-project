import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Impress() {
    return (
        <>

            <div class="px-4 py-8 mx-auto flex items-center justify-center bg-zinc-100 w-full h-96">
                <div class="mx-auto">
                    <p className='p-2'>Shetty institute of technology's</p>
                    <h1 class="mb-4 text-4xl tracking-tight leading-none">Department of Computer Science & Engineering</h1>
                    <div className='p-4 flex gap-6'>
                        <label className="input input-bordered flex items-center gap-2 btnanim">
                            <input type="text" className="grow" placeholder="Enroll Now!" />
                            <ChevronRightIcon className="h-4 w-4 text-zinc-950" />
                        </label>
                        <a className='p-3 btnanim bg-zinc-950 text-zinc-50 border-none'>linkedin</a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Impress