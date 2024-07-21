// pages/staff.js
import React from 'react';
import './staff.css';

const users = [
    {
        id: 1,
        name: 'Alice',
        image: 'https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg'
    },
    {
        id: 2,
        name: 'Bob',
        image: 'https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg'
    },
    {
        id: 3,
        name: 'Charlie',
        image: 'https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg'
    },
    {
        id: 4,
        name: 'Charlie',
        image: 'https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg'
    },
    {
        id: 5,
        name: 'Charlie',
        image: 'https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg'
    },
    {
        id: 6,
        name: 'Charlie',
        image: 'https://rare-gallery.com/thumbs/5408546-woman-female-girl-photographer-camera-beanie-pine-holding-hand-jean-jacket-red-film-caucasian-blonde-photography-nature-exterior-hat-vintage-contax-creative-commons-images.jpg'
    },
];

const Staff = () => {
    return (
        <div className='p-2 max-w-7xl mx-auto py-20'>
            <p className='text-5xl font-semibold text-zinc-600 p-2'>Faculty</p>
            <div className="grid lg:grid-cols-3">
                {users.map(user => (
                    <div className="container p-2 relative rounded-xl" key={user.id}>
                        <img src={user.image} alt={user.name} className="image block w-full h-auto rounded-xl" />
                        <div className="overlay absolute bottom-2 left-0 right-0 backdrop-blur-3xl overflow-hidden w-full h-0 transition-height duration-300 ease-in-out rounded-b-xl">
                            <div className="text text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                {user.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Staff;
