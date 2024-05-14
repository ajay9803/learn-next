import Link from 'next/link';
import React from 'react'
import styles from "../styles/nav_bar.module.css";

const NavBar = () => {
    return <div className='flex flex-row '>
        <div className='flex flex-row py-6 justify-center gap-x-8 relative w-full'>
            <Link href={'/'} className='font-normal tracking-wide text-sm hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> About </Link>
            <Link href={'/'} className='font-normal tracking-wide text-sm hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> Learn More </Link>
            <Link href={'/'} className='font-normal tracking-wide text-sm hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> Contact </Link>
            <Link href={'/'} className='font-normal tracking-wide text-sm hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> Resources </Link>
            <div className='-z-10 absolute h-96 w-96 bg-red-600 rounded-full -left-24 -top-64 rotate-12'>
            </div>
            <div className='flex flex-row items-center top-8 absolute left-9 gap-x-4'>
                <div className={`${styles.pokemonBall}`}>
                </div>
                <p className='font-mono text-white font-semibold'> PokèVerse</p>
            </div>
        </div>
    </div>
}
export default NavBar;