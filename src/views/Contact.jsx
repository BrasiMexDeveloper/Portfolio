import React from 'react'
// import FooterPage from '../components/FooterPage'
import Coding6 from '../assets/image/coding6.jpg'

const Contact = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <img src={Coding6} alt="coding" className="w-full h-96 object-cover" />
        <h1 className="text-4xl font-bold mt-10 text-[#50e0fa]">Contact</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold my-3 text-[#50e0fa]">Email:</p>
          <a href="mailto:victorsoftwareeng@gmail.com" className="text-2xl font-bold my-3 text-[#50e0fa]">victorsoftwareeng@gmail.com</a>
          <p className="text-2xl font-bold my-3 text-[#50e0fa]">LinkedIn:</p>
          <a href='https://www.linkedin.com/in/victor-villagrana/' target='_blank' rel='noreferrer' className="text-2xl font-bold my-3 text-[#50e0fa]">linkedin.com/in/victor-villagrana/</a>
          <p className="text-2xl font-bold mt-3 mb-10 text-[#50e0fa]">Phone: 206-617-0191</p>
        </div>
      </div>
      {/* <FooterPage /> */}
    </div>
  )
}

export default Contact