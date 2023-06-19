import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import heroImage from '../assets/HeroImage.png';
import { Link } from 'react-scroll';
import {Typewriter} from 'react-typewriter-effect'

const Home = () => {
    return (
        <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className=' flex flex-col max-w-screen-lg mx-auto  items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hello, World!")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Welcome to React!")
                                    .start();
                            }}
                        /></h2>
                    <p className='text-gray-500 py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam sed fugiat doloribus itaque quas ut dolorem sunt est ratione! Repellendus accusamus inventore voluptas vitae porro voluptatibus modi, aspernatur quos.</p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-200'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-2' />
                            </span>
                        </Link>
                    </div>

                </div>
                <div className=''>
                    <img src={heroImage} alt="my Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;