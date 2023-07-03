import React from 'react';

const Skills = () => {
    
    return (
        <div className='max-w-screen-xl mx-auto mt-12 py-12 p-4'>
            <h1 className='text-3xl font-bold text-center text-blue-800'>Skills</h1>
            <h1 className='text-5xl font-bold text-center mt-2 mb-8'>What I am capable of</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2  '>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/bsJycBB/HTML5.png" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>HTML5</h1>
                        <p>HTML is the standard markup language for creating the structure and content of web page</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/HgRgzSJ/Css.png" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>CSS3</h1>
                        <p>CSS is a style sheet language used to control the visual appearance of HTML or XML documents on the web.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/fndnv9X/Bootstrap-logo-svg.png" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>Bootstrap</h1>
                        <p>Bootstrap is a popular front-end framework that provides pre-built CSS and JavaScript components for creating responsive and visually appealing websites.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/RCkW6Bw/Tailwind-CSS-Logo-svg.png" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>Tailwind</h1>
                        <p>Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes for building customizable and responsive web interfaces.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/k28fWzh/js-logo.webp" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>JavaScript</h1>
                        <p>JS, short for JavaScript, is a versatile programming language used to add interactivity, manipulate web page content, and build web applications.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/k28fWzh/js-logo.webp" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>ReactJs</h1>
                        <p>React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and build interactive web applications.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/B26z3yt/node.png" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>NodeJs</h1>
                        <p>Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server-side, enabling scalable and efficient web applications.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/YQdtkwq/express-logo.png" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>Express Js</h1>
                        <p>Express.js is a minimalist web application framework for Node.js, providing a set of tools and features to build robust and scalable web applications.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center border-2 rounded-lg p-2 gap-2'>
                    <div className='w-1/4'>
                        <img className='h-1/2 w-full' src="https://i.ibb.co/1syntN1/Mongo-DB-Logo.jpg" alt="" />
                    </div>
                    <div className='w-3/4'>
                        <h1 className='font-bold'>MongoDB</h1>
                        <p>MongoDB is a popular NoSQL database that stores data in a flexible, document-oriented format, providing scalability and high performance for modern applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;