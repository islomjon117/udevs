import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../header/header.css'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import
import hero_img from '../../assets/header_img/hero_img.png'
import hero_logo from '../../assets/header_img/hero_logo.png'

const Header = () => {
    //  aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='container'>
            <div className="header_main">
                {/* header right start */}
                <div data-aos="fade-up" className="header_right lg:ml-[80px] mt-32">
                    <img className="w-[36%]" data-aos="fade-up" src={hero_logo} alt="Hero Logo" />
                    <h1 data-aos="fade-up" className="mt-10  text-header_title">IT-Outsourcing Company</h1>
                    <div className="wrapper">
                        <h1 data-aos="fade-up" className="typing-demo w-[100%] lg:w-[70%] text-nav_contact">User interface, User experience design </h1>
                    </div>
                    <br />
                    <Link href="/contact" className="contact_btn px-10 py-3 t-10 rounded-lg text-white font-medium bg-nav_contact">Contact</Link>
                </div>
                {/* header right end */}

                {/* header left start */}
                <div className="header_left" >
                    <img data-aos="fade-up" className='lg:mr-60  lg:mt-20' src={hero_img} alt="" />
                </div>
                {/* header left end */}
            </div>
        </div>
    )
}

export default Header