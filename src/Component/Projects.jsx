import React from 'react';
import { HiLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='max-w-screen-xl mx-auto p-4'>
            <div className='mb-12'>
                <h1 className='text-3xl font-bold text-center text-blue-800 mt-12'>Projects</h1>
                <h1 className='text-5xl font-bold text-center mt-2 mb-8'>What I have made</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 '>
                <div className="card w-96 bg-green-100 shadow-xl mb-4 p-4">
                    <figure><iframe src="https://martial-arts-c605b.web.app/"></iframe></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            Martial Arts School
                        </h2>
                        <div className="card-actions justify-center items-center">
                            <h1>Links : </h1>
                            <div className="badge badge-outline"><Link to="https://martial-arts-c605b.web.app/"><HiLink></HiLink></Link></div>
                            <div className="badge badge-outline"><Link to="https://github.com/Hridoy-Rahman/martial-arts-School"><FaGithub></FaGithub></Link></div>
                            <div className="badge badge-outline"><Link to="https://github.com/Hridoy-Rahman/martial-arts-school-server"><FaGithub></FaGithub></Link></div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-green-100 shadow-xl p-4 mb-4">
                    <figure><iframe src="https://kit-for-kids-client.web.app/"></iframe></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            Kits for Kids
                        </h2>
                        <div className="card-actions justify-center items-center">
                            <h1>Links : </h1>
                            <div className="badge badge-outline"><Link to="https://kit-for-kids-client.web.app/"><HiLink></HiLink></Link></div>
                            <div className="badge badge-outline"><Link to="https://github.com/Hridoy-Rahman/kit-for-kids-client"><FaGithub></FaGithub></Link></div>
                            <div className="badge badge-outline"><Link to="https://github.com/Hridoy-Rahman/kit-for-kids-server"><FaGithub></FaGithub></Link></div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-green-100 shadow-xl p-4">
                    <figure><iframe src="https://food-buzz-b2a90.web.app/"></iframe></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">
                           FoodBuzz
                        </h2>
                        <div className="card-actions justify-center items-center">
                            <h1>Links : </h1>
                            <div className="badge badge-outline"><Link to="https://food-buzz-b2a90.web.app/"><HiLink></HiLink></Link></div>
                            <div className="badge badge-outline"><Link to="https://github.com/Hridoy-Rahman/foodBuZz-client"><FaGithub></FaGithub></Link></div>
                            <div className="badge badge-outline"><Link to="https://github.com/Hridoy-Rahman/foodBuZz-server"><FaGithub></FaGithub></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;