import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-14'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore maiores dicta error, ullam sed nobis enim ipsa eum itaque ea quasi necessitatibus soluta vel quos neque voluptas aut nesciunt id odio optio! Unde repudiandae deserunt ipsum! Hic maxime debitis dignissimos doloremque maiores dolore. Enim quas nesciunt consectetur omnis corporis.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores accusantium laborum, assumenda sint vel eligendi velit quisquam facere deleniti exercitationem odit! Voluptatem quasi, velit dolor modi quod reprehenderit perspiciatis mollitia molestiae repudiandae ratione dolorum perferendis fugiat, unde ducimus! Quos quidem maiores eius eveniet tempore nesciunt ipsum dignissimos rem tenetur.
                </p>
            </div>
        </div>
    )
}

export default About