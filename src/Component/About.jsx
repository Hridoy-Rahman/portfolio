import React from 'react';

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-1/2'>
                <img src="https://i.ibb.co/N61w0wh/How-to-Optimize-Your-Mobile-App-Projects-App-Developers-Working-on-Mobile-App-1024x1024.webp" alt="" />
            </div>
            <div className='w-1/2'>
                <h2 className='text-3xl font-bold text-blue-800'>About Me</h2>
                <p className='text-blue-600 font-semibold'>As a junior front-end developer, I have honed my skills in HTML, CSS, and JavaScript, ES6, and have
                    experience working with popular framework like React. I am also skilled in Tailwind CSS, Bootstrap, Daisy UI
                    for making the website responsive. I am comfortable to develop back-end using NodeJs, ExpressJs, MongoDB.
                    I use JSON Web Token to make the website secure. Through my previous projects, I have gained hands-on
                    experience in translating design concepts into functional code, and delivering high-quality websites.</p>
            </div>

        </div>
    );
};

export default About;