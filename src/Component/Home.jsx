import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


const Home = () => {
    return (
        <div>
            <div className='bg-green-100'>
                <Navbar></Navbar>
                <hr></hr>
                <Banner></Banner>
            </div>
            <About></About>
            <div className='bg-green-100 mb-8'>
                <Skills></Skills>
            </div>
            <Projects></Projects>
            <div className='bg-green-100 mb-4'>
                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;