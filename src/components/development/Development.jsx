import React, { useEffect } from 'react'
// css import
import '../development/development.css'
// aos import
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import
import devbg from '../../assets/development/dev_img.png'
import ios from '../../assets/development/ios.png'
import android from '../../assets/development/android.png'
import crossplatform from '../../assets/development/crossplatform.png'
import swift from '../../assets/development/swift.png'
import kotlin from '../../assets/development/kotlin.png'
import flutter from '../../assets/development/flutter.png'

const Development = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='container'>
            <div className="development_main">
                {/* development title start*/}
                <div data-aos="fade-up" className="development_title">
                    <h1 className='text-7xl font-bold lg:w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>Development of mobile applications</h1>
                </div>
                {/* development title end*/}

                <div className="development_boxs mt-10">

                    {/* development right start */}
                    <div className="development_right mb-10 lg:ml-[80px]">
                        {/* development text */}
                        <h1 data-aos="fade-up" className='development_text mt-10 text-header_title lg:text-2xl font-medium lg:w-[480px]'>
                            In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.
                        </h1>
                        <br />
                        {/* development app start */}
                        <div data-aos="fade-up" className='development_app flex gap-5'>
                            <div className="app_box">
                                <img src={ios} alt="" />
                                <h1 className='mt-5 lg:text-lg font-semibold'>IOS</h1>
                            </div>
                            <div className="app_box">
                                <img src={android} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Android</h1>
                            </div>
                            <div className="app_box p-3">
                                <img src={crossplatform} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Crossplatform</h1>
                            </div>
                        </div>
                        {/* development app end */}
                        <br />
                        <h1 data-aos="fade-up" className='font-medium text-4xl font-bold text-header_title mt-5'>Technologies</h1>
                        {/* development app 2 start */}
                        <div data-aos="fade-up" className='development_code_lang flex gap-16 mt-10'>
                            <div className="code_lang_box">
                                <img src={swift} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Swift</h1>
                            </div>
                            <div className="code_lang_box">
                                <img src={kotlin} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Kotlin</h1>
                            </div>
                            <div className="code_lang_box">
                                <img src={flutter} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Flutter</h1>
                            </div>
                        </div>
                        {/* development app 2 end */}

                    </div>
                    {/* development right end */}

                    {/* development left image  start*/}
                    <div className="development_left lg:mr-40" >
                        <img data-aos="zoom-in-up" className='ml-2 mt-10' src={devbg} alt="" />
                    </div>
                    {/* development left image end */}
                </div>
            </div>
        </div>
    )
}

export default Development