import React from 'react'
// import FooterPage from '../components/FooterPage'
import FullStack from '../assets/image/FullStack.png'


const Skills = () => {
  return (
    <div className="bg-gray-900">
      <img src={FullStack} alt="Html" className="w-full h-96 " />
      <div className="p-2 py-1">
        <h1 className="text-4xl font-bold mt-10 mb-5 text-[#50e0fa] text-center">Skills</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-center font-bold my-5 text-[#50e0fa]">Frontend:</p>
          <p className="text-2xl text-center font-bold my-5 text-[#50e0fa]">React, JavaScript, HTML, CSS, Python, C-Sharp, Flutter</p>
          <p className="text-2xl text-center font-bold my-5 text-[#50e0fa]">Backend:</p>
          <p className="text-2xl text-center font-bold my-5 text-[#50e0fa]">Node.js, Express, MongoDB, Mongoose, PostgreSQL, Sequelize, Firebase, MySQL</p>
          <p className="text-2xl text-center font-bold my-5 text-[#50e0fa]">Tools:</p>
          <p className="text-2xl text-center font-bold my-5 text-[#50e0fa]">Git, Github, Vercel, Postman, TailwindCSS, Figma, Ajax, Flask, JQuery, Bootstrap, Jinja</p>
          <p className="text-2xl text-center font-bold mt-5 mb-10 text-[#50e0fa]">And Learning . . . . .</p>
        </div>
      </div>
      {/* <FooterPage /> */}
    </div>
  )
}

export default Skills

