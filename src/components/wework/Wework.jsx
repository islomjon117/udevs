import React, { useEffect } from 'react'
// import css
import '../wework/wework.css'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'
// image import 
import phone from '../../assets/wework/phone.png'
import analysis from '../../assets/wework/analysis.png'
import offer from '../../assets/wework/offer.png'
import team from '../../assets/wework/analysis.png'
import poweroff from '../../assets/wework/poweroff.png'

const Wework = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="wework_main">
                    {/* wework_title start */}
                    <div data-aos="fade-up" className="wework_title">
                        <h1 className='text-7xl font-bold w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>How we work!</h1>
                    </div>
                    {/* wework_title start */}

                    {/* wework_boxs start */}
                    <div className="wework_boxs flex gap-3 mt-28 flex-wrap justify-center">
                        {/* wework_box 1 start */}
                        <div data-aos="fade-up" className="wework_box">
                            <div className="contact_icon flex justify-center">
                                <img src={phone} alt="" />
                            </div>
                            <div className="contact_title mt-10">
                                <h1 className='text-xl	font-semibold'>Сontact</h1>
                            </div>
                            <div className="contact_info">
                                <p className='text-header_title'>Send us your project request or project idea.</p>
                            </div>
                        </div>
                        {/* wework_box 1 end */}

                        {/* wework_box 2 start */}
                        <div data-aos="fade-up" className="wework_box">
                            <div className='contact_icon flex justify-center'>
                                <img src={analysis} alt="" />
                            </div>
                            <div>
                                <div className="contact_title mt-10">
                                    <h1 className='text-xl	font-semibold'>Analysis</h1>
                                </div>
                                <div className="contact_info">
                                    <p className='text-header_title'>We will contact you to clarify your project requirements.</p>
                                </div>
                            </div>
                        </div>
                        {/* wework_box 2 end */}

                        {/* wework_box 3 start */}
                        <div data-aos="fade-up" className="wework_box">
                            <div className='contact_icon flex justify-center'>
                                <img src={offer} alt="" />
                            </div>
                            <div className="contact_title mt-10">
                                <h1 className='text-xl	font-semibold'>Offer</h1>
                            </div>
                            <div className="contact_info">
                                <p className='text-header_title'>We will provide you with our free, non-binding application.</p>
                            </div>
                        </div>
                        {/* wework_box 3 end */}

                        {/* wework_box 3 start */}
                        <div data-aos="fade-up" className="wework_box">
                            <div className='contact_icon flex justify-center'>
                                <img src={team} alt="" />
                            </div>
                            <div className="contact_title mt-10">
                                <h1 className='text-xl	font-semibold'>Team</h1>
                            </div>
                            <div className="contact_info">
                                <p className='text-header_title'>We provide a team for your requirements</p>
                            </div>
                        </div>
                        {/* wework_box 3 end */}

                        {/* wework_box 4 start */}
                        <div data-aos="fade-up" className="wework_box">
                            <div className='contact_icon flex justify-center'>
                                <img src={poweroff} alt="" />
                            </div>
                            <div className="contact_title mt-10">
                                <h1 className='text-xl	font-semibold'>Start</h1>
                            </div>
                            <div className="contact_info">
                                <p className='text-header_title'>You will get to know the team and we'll get started.</p>
                            </div>
                        </div>
                        {/* wework_box 4 end */}

                    </div>
                    {/* wework_boxs end */}

                </div>
            </div>
        </>
    )
}

export default Wework