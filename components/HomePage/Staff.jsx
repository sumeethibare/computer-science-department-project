"use client";
import React from 'react';
import s1 from '/public/staff/1.jpg'
import s2 from '/public/staff/2.jpg'
import s3 from '/public/staff/3.jpg'
import s4 from '/public/staff/4.jpg'
import s5 from '/public/staff/5.jpg'
import s6 from '/public/staff/6.jpg'
import Image from 'next/image';
const users = [
    {
        name: 'chandrakala v patil',
        image: s1,
    },
    {
        name: 'shivlingama',
        image: s2,
    },
    {
        name: 'priyadarshini',
        image: s3,
    },
    {
        name: 'shruti rampure',
        image: s4,
    },
    {
        name: 'shweta',
        image: s5,
    },
    {
        name: '',
        image: s6,
    },
];

const Staff = () => {
    return (
        <>
            <div className='p-2 max-w-7xl mx-auto py-20'>
                <p className='text-5xl font-semibold text-zinc-600 p-2'>Faculty</p>
                <div className="grid lg:grid-cols-3">
                    {users.map(user => (
                        <div className="container p-2 relative rounded-xl" key={user.id}>
                            <Image src={user.image} alt={user.name} className="image block w-full h-80 rounded-xl" />
                            <div className="overlay absolute bottom-2 left-0 right-0 backdrop-blur-3xl overflow-hidden w-full h-0 transition-height duration-300 ease-in-out rounded-b-xl">
                                <div className="text text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    {user.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
       .container:hover .overlay {
    height: 20%;
}
      `}</style>
        </>
    );
};

export default Staff;
