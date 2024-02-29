import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import FooterPage from '../components/FooterPage'
import Coding4 from '../assets/image/coding4.jpg'
// ? Fabiana Fabulous Cleaning Service LLC
import Fabulous from '../assets/image/fabulous.png'
import Fabulous2 from '../assets/image/fabulous2.png'
import Fabulous3 from '../assets/image/fabulous3.png'
// ? Wheather Forecast
import Weather from '../assets/image/weather.png'
import Weather2 from '../assets/image/weather2.png'
import Weather3 from '../assets/image/weather3.png'
// ? Off Road Map
import RoadMap from '../assets/image/roadMap.png'
import RoadMap2 from '../assets/image/roadMap2.png'
import RoadMap3 from '../assets/image/roadMap3.png'
import RoadMap4 from '../assets/image/roadMap4.png'
import RoadMap5 from '../assets/image/roadMap5.png'
// ? E-Commerce App
import ECommerce from '../assets/image/ECommerce.png'
import ECommerce2 from '../assets/image/ECommerce2.png'
import ECommerce3 from '../assets/image/ECommerce3.png'
import ECommerce4 from '../assets/image/ECommerce4.png'

const Projects = () => {
  return (
    <div className=" bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <img src={Coding4} alt="coding" className="w-full h-96 object-cover" />
        <h1 className="text-4xl font-bold mt-10 text-[#50e0fa]">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
          <a href="https://fabycleaners.com/" className="text-2xl font-bold my-5 text-[#50e0fa]">
            <div className="max-w-md mx-auto border rounded-xl border-slate-300  hover:shadow-xl overflow-hidden md:max-w-6xl m-5 ">
              <div className="">
                <div className="shrink-0">
                  <p className="text-center text-2xl font-bold mt-5 text-[#50e0fa]">Fabiana Fabulous</p>
                  <p className="text-center text-2xl font-bold mb-1 text-[#50e0fa]">Cleaning Service LLC</p>
                  <Carousel showArrows={false} autoPlay infiniteLoop transitionTime={1000} easing="ease" showThumbs={false}>
                    <img src={Fabulous} alt="Fabiana Fabulous Cleaning Service LLC" className="w-96 h-96" />
                    <img src={Fabulous2} alt="Fabiana Fabulous Cleaning Service LLC" className="w-96 h-96" />
                    <img src={Fabulous3} alt="Fabiana Fabulous Cleaning Service LLC" className="w-96 h-96" />
                  </Carousel>
                  <p className="text-xl font-light p-2 text-start">A responsive website created for privated cleaning services businesse, 
                  built using React, Firebase, NodeJS, Express, Cors, and TailwindCSS.</p>
                </div>
              </div>
            </div>
          </a>
          <a href='https://github.com/BrasiMexDeveloper/Weather_Forecast' target='_blank' rel='noreferrer' className="text-2xl font-bold my-5 text-[#50e0fa]">
            <div className="max-w-md mx-auto border rounded-xl border-slate-300  hover:shadow-xl overflow-hidden md:max-w-6xl m-5 ">
              <div className="">
                <div className="shrink-0">
                  <p className="text-center text-2xl font-bold my-5 text-[#50e0fa]">Weather Forecast</p>
                  <Carousel showArrows={false} autoPlay infiniteLoop transitionTime={1000} easing="ease" showThumbs={false}>
                    <img src={Weather} alt="Weather Forecast" className="w-96 h-96 " />
                    <img src={Weather2} alt="Weather Forecast" className="w-96 h-96 " />
                    <img src={Weather3} alt="Weather Forecast" className="w-96 h-96 " />
                  </Carousel>
                  <p className="text-xl font-light p-2 text-start">A desktop React Application  for daily use on your laptop built using React, 
                  JavaScript, CSS, Tailwind, and OpenWeatherMap  API. </p>
                </div>
              </div>
            </div>
          </a>
          <a href='https://github.com/BrasiMexDeveloper/Off_Road_Map' target='_blank' rel='noreferrer' className="text-2xl font-bold my-5 text-[#50e0fa]">
            <div className="max-w-md mx-auto border rounded-xl border-slate-300  hover:shadow-xl overflow-hidden md:max-w-6xl m-5 ">
              <div className="">
                <div className="shrink-0">
                  <p className="text-center text-2xl font-bold my-5 text-[#50e0fa]">Off Road Map</p>
                  <Carousel showArrows={false} autoPlay infiniteLoop transitionTime={1000} easing="ease" showThumbs={false}>
                    <img src={RoadMap} alt="Off Road Map" className="w-96 h-96 " />
                    <img src={RoadMap2} alt="Off Road Map" className="w-96 h-96 " />
                    <img src={RoadMap3} alt="Off Road Map" className="w-96 h-96 " />
                    <img src={RoadMap4} alt="Off Road Map" className="w-96 h-96 " />
                    <img src={RoadMap5} alt="Off Road Map" className="w-96 h-96 " />
                  </Carousel>
                  <p className="text-xl font-light p-2 text-start">An application for adventure enthusiasts, built using Python, Javascript, Flask, Bootstrap and Bcrypt.</p>
                </div>
              </div>
            </div>
          </a>
          <a href='https://github.com/BrasiMexDeveloper/Commerce-Track' target='_blank' rel='noreferrer' className="text-2xl font-bold my-5 text-[#50e0fa]">
            <div className="max-w-md mx-auto border rounded-xl border-slate-300  hover:shadow-xl overflow-hidden md:max-w-6xl m-5 ">
              <div className="">
                <div className="shrink-0">
                  <p className="text-center text-2xl font-bold my-5 text-[#50e0fa]">E-Commerce App</p>
                  <Carousel showArrows={false} autoPlay infiniteLoop transitionTime={1000} easing="ease" showThumbs={false}>
                    <img src={ECommerce} alt="E-Commerce App" className="w-96 h-96 " />
                    <img src={ECommerce2} alt="E-Commerce App" className="w-96 h-96 " />
                    <img src={ECommerce3} alt="E-Commerce App" className="w-96 h-96 " />
                    <img src={ECommerce4} alt="E-Commerce App" className="w-96 h-96 " />
                  </Carousel>
                  <p className="text-xl font-light p-2 text-start">A commerce app that  could be used for small businesses to track  their inventory, built using C-SHARP and Bootstrap.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* <FooterPage /> */}
    </div>

  )
}

export default Projects