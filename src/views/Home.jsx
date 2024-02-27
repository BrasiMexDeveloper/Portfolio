import React from 'react'
import Coding from '../assets/image/coding.jpg'

import FooterPage from '../components/FooterPage'

const home = () => {
  return (
    <div className="">
      <div className="">
        <img src={Coding} alt="coding" className="w-full h-screen object-cover" />
        <div className="flex flex-col p-6 items-center justify-center  md:absolute md:top-1/3 md:left-2/4 text-4xl font-bold my-10 text-[#50e0fa] 
        absolute top-1/3 ">
          <h1 className="text-4xl font-bold "><strong>F</strong>ull Stack Software Developer</h1>
          <FooterPage />
        </div>
      </div>
    </div>
  )
}

export default home