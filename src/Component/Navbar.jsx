import React from 'react';
import { Link } from 'react-router-dom';
AOS.init();

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-3 relative">
            <div className="flex items-center justify-between py-4 px-6">
                <div className="flex items-center justify-between">
                    <div className="dropdown mr-4">
                        <button className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul className="menu text-blue-600 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link >Home</Link>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                            <li>
                                <Link>Skill</Link>
                            </li>
                            <li>
                                <Link>Projects</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className=" normal-case text-blue-600 font-bold text-xl">Hridoy Rahman</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-blue-600 font-semibold menu-horizontal px-1 flex items-center">
                        <li className="mr-4">
                            <Link>Home</Link>
                        </li>
                        <li className="mr-4">
                            <Link>About</Link>
                        </li>
                        <li className="mr-4">
                            <Link>Skills</Link>
                        </li>
                        <li className="mr-4">
                            <Link>Projects</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
