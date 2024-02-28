import React, { useState, useRef, useEffect } from 'react';
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/image/logo.png';

const NavaBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);



  return (
    <nav className="bg-gray-900" ref={node}>
      <div className="">
        <div className="relative flex items-center justify-around h-24">
          <div className="absolute inset-y-0 right-5 flex items-center sm:hidden">
            <button onClick={toggleMenu} className="sm:hidden lg:hidden">
              {isOpen ?
                <UilTimes className='text-4xl ml-2 mt-2' onClick={() => setIsOpen(!isOpen)} size='50' color="#50e0fa" /> :
                <UilBars className='text-4xl ml-2 mt-2' onClick={() => setIsOpen(!isOpen)} size='50' color="#50e0fa" />
              }
            </button>
          </div>
          <div className="flex-1 flex items-center md:justify-between p-5  ">
            <div className="flex-shrink-0 ">
              <Link to='/' className="flex items-center">
                <img className="h-20 w-auto sm:h-24 p-2" src={Logo} alt="Full Stack Developer" />
                <div className="hover:opacity-80">
                  <h1 className="text-[#50e0fa] md:text-4xl text-xl ml-3">Victor Villagrana</h1>
                  <p className="text-[#50e0fa] md:text-2xl text-sm ml-3">Full Stack Software Developer</p>
                </div>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-12">
              <div className="flex space-x-6">
                <ScrollLink to="about" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">About</ScrollLink>
                <ScrollLink to="contact" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Contact</ScrollLink>
                <ScrollLink to="skills" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Skills</ScrollLink>
                <ScrollLink to="projects" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Projects</ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //? Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'bg-[#50e0fa]  translate-x-0 ease-out ' : 'bg-gray-900 translate-x-full ease-in h-0'} sm:hidden  transition transform duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ScrollLink to="about" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">About</ScrollLink>
          <ScrollLink to="contact" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Contact</ScrollLink>
          <ScrollLink to="skills" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Skills</ScrollLink>
          <ScrollLink to="projects" smooth={true} className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-600 hover:text-[#50e0fa] sm:mt-0 sm:ml-2 cursor-pointer">Projects</ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default NavaBar;