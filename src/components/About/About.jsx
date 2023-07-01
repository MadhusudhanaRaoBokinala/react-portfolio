import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-14'>
                    Hello! I'm Madhu, a web developer specializing in building engaging web applications. With expertise in HTML, CSS, JavaScript, and React, I am passionate about creating dynamic and user-friendly websites that provide exceptional experiences.
                </p>
                <br />
                <p className='text-xl mt-14'>
                    I have developed a strong foundation in front-end technologies, allowing me to bring designs to life and create visually appealing interfaces. Additionally, I have learned Java for web development, enabling me to handle complex data processing and deliver robust server-side functionality. With a focus on clean code and attention to detail, I strive to deliver high-quality solutions that meet clients' unique needs.
                </p>
                <br />
                <p className='text-xl'>Thank you for visiting my portfolio! I invite you to explore my projects and get in touch for any inquiries or collaboration opportunities. Let's work together to create exceptional web experiences using HTML, CSS, JavaScript, React, and Java.</p>
            </div>
        </div>
    )
}

export default About