import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-12 py-12 p-4'>

            <h1 className='text-2xl text-blue-600 mb-2'>Contacts</h1>
            <h2 className='text-5xl font-bold mb-4'>Get In Touch</h2>
            <h3 className='text-xl mb-3'>hridoyrahman715@gmail.com</h3>
            <div className='flex gap-4 items-center'>
                <Link to="https://www.linkedin.com/in/hridoy-rahman-ba67aa21a/"><FaLinkedin></FaLinkedin></Link>
                <Link to="https://github.com/Hridoy-Rahman"><FaGithub></FaGithub></Link>
                <Link className='flex items-center'><FaWhatsapp></FaWhatsapp>+8801568658754</Link>
            </div>
            <p className='text-center mt-8'>Copyright © 2023. Develop & Designed by Hridoy Rahman</p>
        </div>
    );
};

export default Contact;