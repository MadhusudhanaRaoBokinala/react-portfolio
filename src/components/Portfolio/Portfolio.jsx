import React from 'react'
import arrayDestruct from '../assets/Portfolio/arrayDestruct.jpg'
import navbar from '../assets/Portfolio/navbar.jpg'
import reactParallax from '../assets/Portfolio/reactParallax.jpg'
import reactSmooth from '../assets/Portfolio/reactSmooth.jpg'
import reactWeather from '../assets/Portfolio/reactWeather.jpg'
import useState from '../assets/Portfolio/usestate.jpg'


const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src:arrayDestruct
        },
        {
            id:2,
            src:navbar
        },
        {
            id:3,
            src:reactParallax
        },
        {
            id:4,
            src:reactSmooth
        },
        {
            id:5,
            src:reactWeather
        },
        {
            id:6,
            src:useState
        }
    ]
    return (
        <div name="portfolio"
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg  flex flex-col p-4 mx-auto  justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src}) =>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex justify-center items-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                    ))
                }
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio