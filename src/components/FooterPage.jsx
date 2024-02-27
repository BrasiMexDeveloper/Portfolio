import React from 'react'
import { motion } from 'framer-motion'
import { UilMessage, UilLinkedin } from '@iconscout/react-unicons'

const FooterPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center mt-16">
                <hr className="w-1/4 border-1 border-[#50e0fa]" />
                <span className=" px-2 text-[#50e0fa] font-semibold">CONNECT WITH ME</span>
                <hr className="w-1/4 border-1 border-[#50e0fa]" />
            </div>
            <div className="flex items-center justify-center mt-5 gap-5">
                <a href='mailto:victorsoftwareeng@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <motion.p
                        whileHover={{ scale: 2.1 }}
                        whileTap={{ scale: 0.9 }}
                        title='Email me'
                        className=' '> <UilMessage color="#50e0fa" /></motion.p>
                </a>
                <a href='https://www.linkedin.com/in/victor-villagrana/' target='_blank' rel='noopener noreferrer'>
                    <motion.p
                        whileHover={{ scale: 2.1 }}
                        whileTap={{ scale: 0.9 }}
                        title='connect with me on linkedin'
                        className=' '> <UilLinkedin color="#50e0fa" /></motion.p>
                </a>
            </div>
            <p className="text-sm text-center text-[#50e0fa] p-5 ">ⓒ Copyright 2024 Victor Software Developer</p>
        </div>
    )
}

export default FooterPage