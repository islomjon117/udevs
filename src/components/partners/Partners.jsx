import React, { useEffect } from 'react'
// import marquee
import Marquee from "react-fast-marquee";
// import css
import '../partners/partners.css'
// import aos 
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import 
import partner1 from '../../assets/partners/partner1.png'
import partner2 from '../../assets/partners/partner2.png'
import partner3 from '../../assets/partners/partner3.png'
import partner4 from '../../assets/partners/partner4.png'
import partner5 from '../../assets/partners/partner5.png'
import partner6 from '../../assets/partners/partner6.png'
import partner7 from '../../assets/partners/partner7.png'
import partner8 from '../../assets/partners/partner8.png'
import partner9 from '../../assets/partners/partner9.png'
import partner10 from '../../assets/partners/partner10.png'
import partner11 from '../../assets/partners/partner11.png'
import partner12 from '../../assets/partners/partner12.png'
import partner13 from '../../assets/partners/partner13.png'
import partner14 from '../../assets/partners/partner14.png'

const Partners = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="partners_main">
                    {/* Our clients start */}
                    <div data-aos="fade-up" className="partner_title">
                        <h1 className='text-7xl font-bold w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>Our clients</h1>
                    </div>
                    {/* Our clients end */}

                    {/* marquee 1 start */}
                    <Marquee>
                        <div data-aos="fade-left" className='partners_line_1 mt-20 flex gap-10'>
                            <img src={partner1} alt="" />
                            <img src={partner2} alt="" />
                            <img src={partner3} alt="" />
                            <img src={partner4} alt="" />
                            <img src={partner5} alt="" />
                            <img src={partner6} alt="" />
                            <img src={partner7} alt="" />
                        </div>
                    </Marquee>
                    {/* marquee 1 end*/}

                    {/* marquee 2 start */}
                    <Marquee direction='right'>
                        <div data-aos="fade-right" className='partners_line_2 mt-5 flex gap-10'>
                            <img src={partner8} alt="" />
                            <img src={partner9} alt="" />
                            <img src={partner10} alt="" />
                            <img src={partner11} alt="" />
                            <img src={partner12} alt="" />
                            <img src={partner13} alt="" />
                            <img src={partner14} alt="" />
                        </div>
                    </Marquee>
                    {/* marquee 2 end*/}

                </div>
            </div>
        </>
    )
}

export default Partners