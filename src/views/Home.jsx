import React from 'react'
import Coding from '../assets/image/coding.jpg'
import About from '../views/About'
import Skills from '../views/Skills'
import Projects from '../views/Projects'
import Contact from '../views/Contact'
import BackToTopButtom from '../components/BackToTopButtom'
import FooterPage from '../components/FooterPage'
import ChatNow from '../components/ChatNow'


const home = () => {
  return (
    <div className="bg-gray-900">
      <div className="">
        <img src={Coding} alt="coding" className="w-full h-96 object-cover" />
        <div className="flex flex-col p-6 items-center justify-center  md:absolute md:top-1/3 md:left-2/4 text-4xl font-bold my-10 text-[#50e0fa] absolute top-1/3 ">
          <h1 className="text-4xl font-bold "><strong>F</strong>ull Stack Software Developer</h1>
        </div>
        <section id="about"> <About /></section>
        <section id="contact"><Contact /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
      </div>
      <BackToTopButtom />
      <FooterPage />
      <div className='p-2'>
        <ChatNow />
      </div>
    </div>
  )
}

export default home