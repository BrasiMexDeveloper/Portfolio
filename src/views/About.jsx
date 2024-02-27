import React from 'react'
import Coding5 from '../assets/image/coding5.jpg'
// import FooterPage from '../components/FooterPage'

const About = () => {
  return (
    <div className=" bg-gray-900 h-full">
        <div className="">
          <img src={Coding5} alt="coding" className="w-full h-96 object-cover" />
          <h1 className="flex justify-center font-bold text-3xl my-7 text-[#50e0fa]">About Me!</h1>
          <p className="mx-12 text-xl font-mono my-10 tracking-normal leading-loose p-2 text-[#50e0fa]">
            <strong>Hello!</strong> My name is  Victor Villagrana a <strong>Full Stack Software Developer</strong>,
            who didn't know what I was missing until I fixed my first bug graduate from a coding bootcamp
            at <strong>Coding Dojo.</strong> I love coding and am passionate about
            Machine Learning since I was a child. Now I eat, sleep, and dream in code (in moderation of course).
            Problem-solving is a super-power of mine, but I also bring valuable skills to the table when I'm not wearing my coding cape.
          </p>
        </div>
      {/* <FooterPage /> */}
    </div>
  )
}

export default About