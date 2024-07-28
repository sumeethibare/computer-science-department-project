import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import Logo from './logo.webp'

const Footer = ({ contact, socialLinks, contentLink1, contentLink2, subsidiaries }) => {
    return (
        <>
            <footer className="bg-white lg:grid lg:grid-cols-5 py-20">
                <div className="relative block h-32 lg:col-span-2 lg:h-full">
                    <Image
                        src={Logo}
                        alt="Logo"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 h-full w-full lg:rounded-full"
                    />
                </div>

                <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <p>
                                <span className="text-xs uppercase tracking-wide text-zinc-500">Call us</span>
                                <a href={`tel:${contact.phone}`} className="block text-2xl font-medium text-zinc-900 hover:opacity-75 sm:text-3xl">
                                    {contact.phone}
                                </a>
                            </p>

                            <ul className="mt-8 flex gap-6">
                                {socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-zinc-700 transition hover:opacity-75"
                                        >
                                            <span className="sr-only">{link.name}</span>
                                            <link.iconPath className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <p className="font-semibold text-zinc-950">CSD</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    {contentLink1.map((service, index) => (
                                        <li key={index}>
                                            <a href={service.href} className="text-zinc-700 transition hover:opacity-75">{service.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-4 text-sm">
                                    {contentLink2.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className="text-zinc-700 transition hover:opacity-75">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-zinc-100 pt-12">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                {subsidiaries.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-zinc-500 transition hover:opacity-75">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-xs text-zinc-500 sm:mt-0">
                                &copy; 2024 Design & Developed By Sumeet Hibare.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='w-full h-10 bg-base-200 flex items-center justify-center'>
                <p className='text-xs'>this is the ideation stage build of website</p>
            </footer>
        </>
    );
};

Footer.defaultProps = {
    contact: { phone: '9535652222' },
    socialLinks: [
        { name: 'LinkedIn', href: '#', iconPath: FaLinkedin },
        { name: 'YouTube', href: '#', iconPath: FaYoutube },
        { name: 'Github', href: '#', iconPath: FaGithub }
    ],
    contentLink1: [
        { name: 'About', href: '#' },
        { name: 'Staff', href: '#' },
        { name: 'Achievements', href: '#' },
        { name: 'Clubs', href: '#' },
        { name: 'Newsletters', href: '#' }
    ],
    contentLink2: [
        { name: 'Gallery', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'Programes', href: '#' },
        { name: 'Enrollments', href: '#' }
    ],
    subsidiaries: [
        { name: 'SGI', href: '#' },
        { name: 'SIT', href: '#' }
    ]
};

export default Footer;
