import Link from "next/link";
import styles from "../styles/bottom_nav_bar.module.css";

const BottomNavBar = () => {
    return <div className="flex flex-col items-center gap-y-4 md:flex-row w-full my-9 px-6 md:items-center justify-between">
        <div className="flex flex-row items-center gap-x-7">
            <div className={`${styles.pokemonBall}`}></div>
            <Link href={'/'} className='font-normal tracking-wide text-sm text-gray-500 hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> About
            </Link>
            <Link href={'/'} className='font-normal tracking-wide text-sm text-gray-500 hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> Learn More
            </Link>
            <Link href={'/'} className='font-normal tracking-wide text-sm text-gray-500 hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> Contact
            </Link>
            <Link href={'/'} className='font-normal tracking-wide text-sm text-gray-500 hover:text-red-600 cursor-pointer hover:border-b-2 hover:border-red-600 '> Resources
            </Link>
        </div>
        <p className="text-sm"> © Pokeverse 2024</p>
    </div>
}

export default BottomNavBar;