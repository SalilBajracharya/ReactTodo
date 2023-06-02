import { Popover } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='bg-white'>
            <nav className='mx-auto max-w-7xl items-center justify-center p-6 lg-px:8' aria-label="Global">
                <Popover.Group className='flex justify-center gap-x-12'>
                    <Link to="/" className='text-sm font-semibold loading-6 text-gray-900'>Home</Link>
                    <Link to="/Todo" className='text-sm font-semibold loading-6 text-gray-900'>Todo</Link>
                </Popover.Group>
            </nav>
        </header>
    )
}