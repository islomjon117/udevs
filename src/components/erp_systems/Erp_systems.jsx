import React, { useEffect } from 'react'
// css import
import '../erp_systems/erpsystems.css'
// aos import
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import
import erpsystems from '../../assets/erpsystems/erpsystems.png'
import crm from '../../assets/erpsystems/crm.png'
import elarning from '../../assets/erpsystems/elearning.png'
import ecommerce from '../../assets/erpsystems/ecommerce.png'
import pos from '../../assets/erpsystems/pos.png'
import email from '../../assets/erpsystems/email.png'
import Warehouse from '../../assets/erpsystems/warehouse.png'

const Erp_systems = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='container'>
            <div className="development_main">
                {/* erp systems title start */}
                <div data-aos="fade-up" className="erpsystems_title">
                    <h1 className='text-7xl font-bold w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>ERP systems</h1>
                </div>
                {/* erp systems title end */}

                {/* erpsystems boxs  start*/}
                <div className="erpsystems_boxs mt-10">
                    {/* erpsystems left start*/}
                    <div className="erpsystems_left lg:ml-[80px] mb-10">
                        <img data-aos="zoom-in-up" className='mt-16' src={erpsystems} alt="" />
                    </div>
                    {/* erpsystems left end*/}

                    {/* erpsystems right start */}
                    <div className="erpsystems_right lg:mr-44 mb-36">
                        {/* erpsystems text start */}
                        <h1 data-aos="fade-up" className='erpsystems_text mt-10 text-header_title text-2xl font-medium lg:w-[480px]'>
                            IT Systems of any level of complexity at a convenient time for you
                        </h1>
                        {/* erpsystems text end */}

                        {/* erpsystems app  start*/}
                        <div data-aos="fade-up" className='erpsystems_app lg:flex gap-5 mt-10'>
                            <div className="erpsystems_box lg:mt-3">
                                <img src={crm} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>CRM</h1>
                            </div>
                            <div className="erpsystems_box mt-3">
                                <img src={elarning} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>eLearning</h1>
                            </div>
                            <div className="erpsystems_box mt-3">
                                <img src={ecommerce} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>E-Commerce</h1>
                            </div>
                        </div>
                        {/* erpsystems app end*/}

                        {/* erpsystems app 2 start*/}
                        <div data-aos="fade-up" className='erpsystems_app lg:flex gap-5 mt-5'>
                            <div className="erpsystems_box lg:mt-3">
                                <img src={pos} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>POS</h1>
                            </div>
                            <div className="erpsystems_box mt-3">
                                <img src={email} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Sms / Email</h1>
                            </div>
                            <div className="erpsystems_box mt-3">
                                <img src={Warehouse} alt="" />
                                <h1 className='mt-5 text-lg font-semibold'>Warehouse</h1>
                            </div>
                        </div>
                        {/* erpsystems app 2 end*/}
                    </div>
                    {/* erpsystems right end */}

                </div>
                {/* erpsystems boxs  end*/}

            </div>
        </div>
    )
}

export default Erp_systems