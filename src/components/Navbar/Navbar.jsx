import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

    const[nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experince'
        },
        {
            id: 5,
            link: 'contact'
        }

    ]

    return (
        <div className='flex justify-between items-center w-full h-20   px-4 text-white bg-black fixed'>
            <div>
                <h2 className='text-5xl font-signature ml-2'>Madhu</h2>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li
                    key={id}
                    className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                ) 
                )}
            </ul>

            <div onClick={() =>{
                setNav(!nav)
            }} className='md:hidden text-gray-500 cursor-pointer z-10 pr-4 '>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className=' md:hidden flex flex-col text-gray-500 py-4 text-4xl justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                {links.map(({ id, link }) => (
                    <li
                    key={id}
                    className='px-6 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize'>
                    <Link onClick={() =>{setNav(!nav)}} to={link} smooth duration={500}>{link}</Link>
                </li>
                ) 
                )}
            </ul>
            )}

            

            
        </div>
    )
}

export default Navbar