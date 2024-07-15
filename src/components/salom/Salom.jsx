import React, { useEffect } from 'react'
// import css 
import '../salom/salom.css'

// import image 
import erpsystems from '../../assets/erpsystems/erpsystems.png'
import architecture from '../../assets/optimization/architecture.png'
import auto from '../../assets/optimization/auto.png'
import stress from '../../assets/optimization/stress.png'
import load from '../../assets/optimization/load.png'
import devops from '../../assets/optimization/devops.png'
import cloud from '../../assets/optimization/cloud.png'
import ci_cd from '../../assets/optimization/ci_cd.png'

// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'


const Salom = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="optimization_main">
                    {/* optimization_title start */}
                    <div data-aos="fade-up" className="optimization_title">
                        <h1 className='lg:text-7xl font-bold w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>Optimization Infrastructure</h1>
                    </div>
                    {/* optimization_title end */}

                    {/* optimization_boxs start */}
                    <div className="optimization_boxs mt-10">
                        {/* optimization_left start */}
                        <div className="optimization_left lg:ml-[80px] mb-10">
                            <img data-aos="zoom-in" className='mt-16' src={erpsystems} alt="" />
                        </div>
                        {/* optimization_left end */}

                        {/* optimization_right start */}
                        <div className="optimization_right lg:mr-44 mb-36">
                            <h1 data-aos="fade-up" className='optimization_text mt-10 text-header_title lg:text-2xl font-medium lg:w-[490px]'>
                                Our experienced professionals will help you optimize your infrastructure
                            </h1>
                            <div data-aos="fade-up" className='optimization_app flex gap-5 mt-10'>
                                <div className="optimization_box">
                                    <img src={architecture} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Architecture</h1>
                                </div>
                                <div className="optimization_box">
                                    <img src={auto} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Auto testing</h1>
                                </div>
                                <div className="optimization_box">
                                    <img src={stress} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Stress testing</h1>
                                </div>
                            </div>
                            <div data-aos="fade-up" className='optimization_app flex gap-5 mt-5'>
                                <div className="erpsystems_box">
                                    <img src={load} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Load testing</h1>
                                </div>
                                <div className="optimization_box">
                                    <img src={devops} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Devops</h1>
                                </div>
                                <div className="optimization_box">
                                    <img src={cloud} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>Cloud</h1>
                                </div>
                            </div>
                            <div data-aos="fade-up" className='optimization_app flex gap-5 mt-5'>
                                <div className="optimization_box2">
                                    <img src={ci_cd} alt="" />
                                    <h1 className='mt-5 text-lg font-semibold'>CI / CD</h1>
                                </div>
                            </div>
                        </div>
                        {/* optimization_right end */}

                    </div>
                    {/* optimization_boxs end */}

                </div>
            </div>
        </>
    )
}

export default Salom