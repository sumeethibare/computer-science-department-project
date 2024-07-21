import React from 'react';
import Image from 'next/image';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const importAll = (r) => {
    return r.keys().map((path) => {
        const fullName = path.replace('./', '');
        const nameWithoutExtension = fullName.replace(/\.[^/.]+$/, '');
        return {
            src: `/letters/${fullName}`,
            name: nameWithoutExtension,
        };
    });
};

const pdfs = importAll(require.context('../../../public/letters', false, /\.pdf$/));

function Letters() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl lg:text-5xl font-semibold tracking-tight text-gray-950">Newsletters</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {pdfs.map((pdf, index) => (
                        <div key={index} className='relative group'>
                            <div className="mt-4 flex justify-between items-center bg-zinc-200 p-4 rounded-lg text-zinc-950 group">
                                <div>
                                    <h3 className="text-sm">
                                        <a href={pdf.src} target="_blank" rel="noopener noreferrer">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {pdf.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm">PDF File</p>
                                </div>
                                <div>
                                    <a href={pdf.src} download>
                                        <FaCloudDownloadAlt className='size-5' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Letters;
