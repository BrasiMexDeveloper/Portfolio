import React, { useState } from 'react';
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/logo.png';

const NavaBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <nav className="bg-gray-900 ">
      <div className="">
        <div className="relative flex items-center justify-between h-24">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={toggleMenu} className="sm:hidden lg:hidden">
              {isOpen ?
                <UilTimes className='text-4xl ml-2 mt-2' onClick={() => setIsOpen(!isOpen)} size='40' color="#50e0fa" /> :
                <UilBars className='text-4xl ml-2 mt-2' onClick={() => setIsOpen(!isOpen)} size='40' color="#50e0fa" />
              }
            </button>
          </div>
          <div className="flex-1 flex items-center justify-around  ">
            <div className="flex-shrink-0 flex items-center">
              <Link to='/' className="flex items-center">
                <img className="h-20 w-auto sm:h-24 p-2" src={Logo} alt="Full Stack Developer" />
                <div>
                  <h1 className="text-[#50e0fa] md:text-4xl text-xl ml-3">Victor Villagrana</h1>
                  <p className="text-[#50e0fa] md:text-2xl text-sm ml-3">Full Stack Developer</p>
                </div>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-12">
              <div className="flex space-x-6">
                <a href="/about" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">About</a>
                <a href="/contact" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Contact</a>
                <a href="/skills" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Skills</a>
                <a href="/projects" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //? Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? '' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/about" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded md:hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">About</a>
          <a href="/contact" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded md:hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">Contact</a>
          <a href="/skills" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded md:hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">Skills</a>
          <a href="/projects" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded md:hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default NavaBar;