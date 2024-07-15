import React, { useEffect } from 'react'
// css import
import '../ui_design/uidesign.css'
// aos import
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import 
import devbg from '../../assets/development/dev_img.png'
import ux from '../../assets/ui_design/ux.png'
import ui from '../../assets/ui_design/ui.png'
import prototyping from '../../assets/ui_design/Prototyping.png'
import mobile from '../../assets/ui_design/mobile.png'
import desktop from '../../assets/ui_design/desktop.png'
import atomic from '../../assets/ui_design/atomic.png'
import figma from '../../assets/ui_design/figma.png'
import sketch from '../../assets/ui_design/sketch.png'
import lottie from '../../assets/ui_design/lottie.png'
import illustrator from '../../assets/ui_design/illustrator.png'

const Ui_design = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="uidesign_main">
                    {/* uidesign_title start */}
                    <div data-aos="fade-up" className="uidesign_title">
                        <h1 className='text-7xl font-bold w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>UI / UX design</h1>
                    </div>
                    {/* uidesign_title end */}

                    {/* uidesign_boxs start */}
                    <div className="uidesign_boxs">
                        {/* uidesign_right start */}
                        <div className="uidesign_right lg:mt-10 lg:ml-[80px]">
                            <h1 data-aos="fade-up" className='uidesign_text mt-10 text-header_title lg:text-2xl font-medium lg:w-[480px]'>
                                Our company takes a human-centered approach to design
                            </h1>
                            <br />
                            <div data-aos="fade-up" className='uidesign_app flex gap-5'>
                                <div className="app_box">
                                    <img src={ux} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>IOS</h1>
                                </div>
                                <div className="app_box">
                                    <img src={ui} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Android</h1>
                                </div>
                                <div className="app_box p-3">
                                    <img src={prototyping} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Crossplatform</h1>
                                </div>
                            </div>

                            <div data-aos="fade-up" className='uidesign_app mt-5 flex gap-5'>
                                <div className="app_box">
                                    <img src={mobile} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>IOS</h1>
                                </div>
                                <div className="app_box">
                                    <img src={desktop} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Android</h1>
                                </div>
                                <div className="app_box p-3">
                                    <img src={atomic} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Crossplatform</h1>
                                </div>
                            </div>
                            <br />
                            <h1 data-aos="fade-up" className='font-medium text-4xl font-bold text-header_title mt-5'>Technologies</h1>
                            <div data-aos="fade-up" className='uidesign_code_lang flex gap-16 mt-10'>
                                <div className="code_lang_box">
                                    <img src={figma} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Figma</h1>
                                </div>
                                <div className="code_lang_box">
                                    <img src={sketch} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Sketch</h1>
                                </div>
                                <div className="code_lang_box mt-3">
                                    <img src={lottie} alt="" className='w-[35px]' />
                                    <h1 className='mt-7 text-lg font-semibold'>Lottie</h1>
                                </div>
                                <div className="code_lang_box">
                                    <img src={illustrator} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Illustrator</h1>
                                </div>
                            </div>
                        </div>
                        {/* uidesign_right end */}

                        {/* uidesign_left start */}
                        <div className="uidesign_left lg:mr-40">
                            <img data-aos="zoom-in" className='ml-2 mt-10' src={devbg} alt="" />
                        </div>
                        {/* uidesign_left end */}

                    </div>
                    {/* uidesign_boxs end */}

                </div>
            </div>
        </>
    )
}

export default Ui_design