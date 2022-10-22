import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to='/home' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer"to='/travel' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Travel</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer"to='/blog' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
                    </li>
                </ul>
                <Link rel="noopener noreferrer" to='/' className="flex justify-center space-x-3 ">

                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
                            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                    </div>
                    <span className="self-center text-2xl font-semibold">Travel BD</span>
                </Link>
                <div className="flex items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-100">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900" />
                    </div>
                    <Link rel="noopener noreferrer" to='/login'>
                        <button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-violet-400 text-gray-900">Log in</button>
                    </Link>
                    <Link rel="noopener noreferrer" to='/register'>
                        <button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-violet-400 text-gray-900">Register</button>
                    </Link>
                   
                </div>
                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
               
            </div>
        </header>
    );
};

export default Navbar;