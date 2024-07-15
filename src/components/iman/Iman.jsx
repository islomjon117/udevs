import React, { useEffect } from 'react'
import '../iman/iman.css'
import { Link } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { CiBank } from "react-icons/ci";

import iman from '../../assets/iman/iman.png'
import iman_logo from '../../assets/iman/iman_logo.png'
import phone from '../../assets/delever/phone.png'
import admin from '../../assets/delever/admin.png'
import crossplatform from '../../assets/delever/crossplatform.png'

const Iman = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="iman_main">
                    {/* iman title start */}
                    <div className="iman_title">
                        <div data-aos="fade-up" className='iman_logo text-7xl font-bold lg:w-[550px] text-nav_contact lg:ml-[80px]'>
                            <img src={iman_logo} alt="" />
                        </div>
                    </div>
                    {/* iman title end */}

                    {/* iman box start */}
                    <div className="iman_boxs">
                        {/* iman right start */}
                        <div className="iman_right  lg:ml-[80px]">
                            {/* iman button and text start */}
                            <Link data-aos="fade-up" className='iman_notification mt-5 flex items-center gap-2 lg:justify-center'>
                                <span><CiBank /></span>Finance
                            </Link>
                            <h1 data-aos="fade-up" className='iman_text mt-8 text-header_title text-xl font-medium lg:w-[550px]'>
                                Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.
                            </h1>
                            <h1 data-aos="fade-up" className='iman_text text-xl font-semibold mt-5'>What we did?</h1>
                            {/* iman button and text end */}
                            <br />
                            {/* iman app start */}
                            <div data-aos="fade-up" className='iman_app flex gap-5 mt-10'>
                                <div className="iman_box">
                                    <img src={phone} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Mobile design</h1>
                                </div>
                                <div className="iman_box">
                                    <img src={admin} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Admin panel</h1>
                                </div>
                                <div className="iman_box">
                                    <img src={crossplatform} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Crossplatform</h1>
                                </div>
                            </div>
                            {/* iman app end */}
                        </div>
                        {/* iman right end */}

                        {/* iman left start */}
                        <div className="iman_left lg:mr-40">
                            <img data-aos="zoom-in" className=' mt-10' src={iman} alt="" />
                        </div>
                        {/* iman left end */}
                    </div>
                    {/* iman box end */}

                </div>
            </div>
        </>
    )
}

export default Iman