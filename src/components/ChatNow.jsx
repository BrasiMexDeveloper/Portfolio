import React, { useState } from 'react'
import Logo from '../assets/image/logo.png';
import axios from 'axios';
import { motion } from 'framer-motion';
import { UilCommentAltDots, UilTimesCircle } from '@iconscout/react-unicons'


const ChatNow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectDescription: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Form validation
        if (!formData.name || !formData.phone || !formData.email || !formData.projectDescription) {
            alert('Please fill out all fields');
            return;
        }
        setIsLoading(true);
        try {
            const message = `Hi Fabiana's, you have new estimate request by:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Description: ${formData.projectDescription}`;
            await axios.post('https://api.twilio.com/2010-04-01/Accounts/used your own account/Messages.json', {
                To: '2066170191',
                From: '+18885598412',
                Body: message
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic QUM0ODUyZTI1YThkMDRiMjcwN2YzM2I4YTZiNjhlNjhhODpiOTJhMDVjMGM2MTc0N2FhOGQ3ZTNlMTJmY2Q3MDM0Mg=='
                }
            });
            setIsSubmitted(true);
            setFormData({ name: '', phone: '', email: '', projectDescription: '' });
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error(error);
            alert('Failed to send message');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatnow__container">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                title='Chat Now'
                className="fixed right-4 bottom-4 bg-gradient-colors text-[#50e0fa] p-4 rounded-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <UilTimesCircle className=" text-black w-7 h-7  rounded-full" /> : <UilCommentAltDots className='text-[#04030b]  rounded-full w-9 h-9' />}
            </motion.button>
            {isOpen && (
                <div className="chatnow__form bg-gradient-colors border border-gray-300 rounded p-4">
                    <div className="chatnow__logo flex items-center gap-1">
                        <img src={Logo} alt="Fabiana Fabulous Cleaning Services LLC" className='w-12 h-12 border rounded-full' />
                        <p className='text-sm text-[#ffff] font-semibold'>Please feel free to contact me and will be send you an SMS shorly.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Project Description" required className="overflow-auto p-2" />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                    <div className='text-[#2baaff] text-center my-1'>
                        {isSubmitted && <p>Message sent successfully!</p>}
                    </div>
                </div>
            )}
        </div>
    );

};

export default ChatNow;