import React from 'react';
import { Link } from 'react-router-dom';
import { HiFolderDownload } from "react-icons/hi";


const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center px-12 mt-12 '>
            <div>
                <h4 className='text-xl text-blue-600 font-bold mb-2'>Hi Everyone, I am</h4>
                <h1 className='text-3xl text-blue-600 font-bold mb-2'>Hridoy Rahman</h1>
                <h3 className='text-xl text-blue-600 font-bold mb-2'>Web Developer</h3>
                <h1 className='text-xl text-blue-600 mb-2'>I create professional web application using MERN Stack</h1>
                <div className='flex gap-12'>
                    <button className='flex btn btn-success'>
                        <div>
                        <Link to="https://drive.google.com/file/u/1/d/1twnRZwQHLQ7vvmjIQ4WnN2KPutBNebpo/view?usp=drive_open">Resume</Link>
                    </div>
                    <div><HiFolderDownload className='text-xl'></HiFolderDownload></div>
                    </button>
                    <button className='btn btn-outline btn-success'><Link>Hire Me</Link></button>
                </div>
            </div>
            <div>
                <img className='lg:w-96 lg:h-96 mb-12' src="https://i.ibb.co/KVqTYrz/me-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;