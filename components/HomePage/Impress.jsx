import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Impress() {
    return (
        <>


            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg">
                        <p className="hidden text-gray-500 sm:mt-4 sm:block p-4">
                            Shetty institute of technology's
                        </p>
                        <h2 className="text-lg font-semibold text-gray-950 lg:text-3xl tracking-tight">
                            Department of Computer Science & Engineering
                        </h2>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form action="#" className="flex gap-4">
                            <div className="sm:flex-1">
                                <label className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full text-zinc-950 input input-bordered flex items-center gap-2 btnanim"
                                />

                            </div>

                            <a className='p-3 btnanim bg-zinc-950 text-zinc-50 border-none'>linkedin</a>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Impress