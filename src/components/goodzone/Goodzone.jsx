import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../goodzone/goodzone.css'

// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// import image 
import goodzone from '../../assets/goodzone/goodzone.png'
import website from '../../assets/delever/website.png'
import admin from '../../assets/delever/admin.png'
import crossplatform from '../../assets/delever/crossplatform.png'
import desktop from '../../assets/delever/desktop.png'
import phone from '../../assets/delever/phone.png'
import goodzone_bg from '../../assets/goodzone/goodzone_bg.png'
import ecommers from '../../assets/goodzone/ecommers.png'

const Goodzone = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className='container'>
                <div className="goodzone_main mt-20">
                    {/* goodzone title start */}
                    <div data-aos="fade-up" className='goodzone_title'>
                        <div className='flex justify-around'>
                            <img src={goodzone} alt="" />
                        </div>
                        <Link to='' className='flex lg:justify-center items-center gap-2'>
                            <img src={ecommers} alt="" />
                            E-Commerce
                        </Link>
                    </div>
                    {/* goodzone title end */}

                    <div className="goodzone_boxs mt-10">
                        {/* goodzone left start */}
                        <div className="goodzone_left lg:ml-[80px]">
                            <img data-aos="zoom-in" className='mt-16' src={goodzone_bg} alt="" />
                        </div>
                        {/* goodzone left end */}

                        {/* goodzone right start */}
                        <div className="goodzone_right lg:mr-44 mb-48">
                            {/* goodzone right text start */}
                            <h1 data-aos="fade-up" className='goodzone_text text-header_title text-base font-bold lg:w-[480px]'>
                                Goodzone - Internet shop of household appliances in Uzbekistan.
                            </h1>
                            <h1 data-aos="fade-up" className='goodzone_text2 text-xl font-semibold mt-5'>What we did?</h1>
                            {/* goodzone right text end */}
                            {/* goodzone app start */}
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
                            {/* goodzone app end*/}

                            {/* goodzone app 2 start*/}
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
                            {/* goodzone app 2 end*/}

                        </div>
                        {/* goodzone right end*/}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goodzone