import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// css import
import '../delever/delever.css'

// aos import
import Aos from 'aos'
import 'aos/dist/aos.css'
// icon import
import { TbTruckDelivery } from "react-icons/tb";

// image import
import website from '../../assets/delever/website.png'
import admin from '../../assets/delever/admin.png'
import crossplatform from '../../assets/delever/crossplatform.png'
import desktop from '../../assets/delever/desktop.png'
import phone from '../../assets/delever/phone.png'
import delever from '../../assets/delever/delever.png'


const Delever = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="optimization_main mt-20">
                    {/* delever title start */}
                    <div data-aos="zoom-in" className='delever_title'>
                        <h1 className='text-center text-7xl	font-black text-delever'>Delever</h1>
                        <Link to='' className='flex justify-center items-center gap-2'>
                            <span><TbTruckDelivery /></span>
                            Delivery
                        </Link>
                    </div>
                    {/* delever title end */}


                    <div className="optimization_boxs mt-10">
                        {/* delever left image start */}
                        <div className="optimization_left lg:ml-[80px] mb-40">
                            <img data-aos="zoom-in" className='mt-16' src={delever} alt="" />
                        </div>
                        {/* delever left image end */}

                        {/* delever right start  */}
                        <div className="optimization_right lg:mr-44 mb-48">
                            {/* delever text */}
                            <h1 data-aos="fade-up" className='delever_text text-header_title text-base font-medium lg:w-[480px]'>
                                Delever - Delivery service automation targeted at both consumers and restaurants.
                            </h1>
                            {/* delever subtext */}
                            <h1 data-aos="fade-up" className='text-xl font-semibold mt-5'>What we did?</h1>
                            {/* delever app box start */}
                            <div data-aos="fade-up" className='goodzone_app flex gap-5 mt-10'>
                                <div className="goodzone_box">
                                    <img src={website} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Website</h1>
                                </div>
                                <div className="goodzone_box">
                                    <img src={admin} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Admin panel</h1>
                                </div>
                                <div className="goodzone_box">
                                    <img src={crossplatform} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Crossplatform</h1>
                                </div>
                            </div>
                            <div data-aos="fade-up" className='goodzone_app flex gap-5 mt-5'>
                                <div className="goodzone_box2 w-[150px]">
                                    <img src={desktop} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Web design</h1>
                                </div>
                                <div className="goodzone_box2 w-[150px]">
                                    <img src={phone} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Mobile design</h1>
                                </div>
                            </div>
                            {/* delever app box end */}
                        </div>
                        {/* delever right end  */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Delever