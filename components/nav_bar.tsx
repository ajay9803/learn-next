import Link from 'next/link';
import React from 'react'

const NavBar = () => {
    return <div className='flex flex-row '>
        <div className='flex flex-row py-6 justify-center gap-x-8 relative w-full'>
            <Link href={'/'} className='font-normal text-sm hover:font-semibold hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 transition-all duration-500 ease-out'> About </Link>
            <Link href={'/'} className='font-normal text-sm hover:font-semibold hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 transition-all duration-500 ease-out'> Learn More </Link>
            <Link href={'/'} className='font-normal text-sm hover:font-semibold hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 transition-all duration-500 ease-out'> Contact </Link>
            <Link href={'/'} className='font-normal text-sm hover:font-semibold hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 transition-all duration-500 ease-out'> Resources </Link>
            <div className='-z-10 absolute h-96 w-96 bg-red-600 rounded-full -left-24 -top-64 rotate-12'></div>
        </div>
    </div>
}
export default NavBar;