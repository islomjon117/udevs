import React, { useEffect } from 'react'
// import css
import '../contact/contact.css'
// google map import
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// map style
const containerStyle = {
    width: '100%',
    height: '100%',
};
// map lat leng 
const center = {
    lat: 40.52861000,
    lng: 70.94250000,
};

// icon import
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GrPhone } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
    // aos useEffec
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div className="contact_main">
                    {/* contact title start */}
                    <div data-aos="fade-up" className="contactpage_title">
                        <h1 className='lg:text-7xl font-bold lg:w-[550px] text-nav_contact lg:ml-[80px] lg:mt-32'>Contact us</h1>
                    </div>
                    {/* contact title end */}

                    <div className="contact_section flex justify-around	">
                        {/* contact right start */}
                        <div className="contact_right">
                            <div data-aos="fade-up" className="contact_input_title">
                                <p className='text-xl font-semibold'>Leave us a message</p>
                            </div>
                            <div data-aos="zoom-in" className="contact_inputs flex-col">
                                <input className='phone_input' type="text" placeholder='Name' />
                                <br />
                                <input className='email_input' type="email" placeholder='Your Email' />
                                <br />
                                <input className='comment_inpur' type="comment" placeholder='Briefly describe your project' />
                                <br />
                                <button>Send</button>
                            </div>
                        </div>
                        {/* contact right end */}

                        {/* contact left start */}
                        <div className="contact_left">
                            {/* address */}
                            <div data-aos="zoom-in" className="address flex items-center gap-2">
                                <span className='text-2xl text-nav_contact'><IoLocationOutline /></span>
                                <p className='w-[400px]'>Tашкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</p>
                            </div>
                            {/* phone number */}
                            <div data-aos="zoom-in" className="phone_num flex items-center gap-2 mt-5">
                                <span className='text-2xl text-nav_contact'><GrPhone /></span>
                                <p>+998 33 66 00 999</p>
                            </div>
                            {/* email address */}
                            <div data-aos="zoom-in" className="email_address flex items-center gap-2 mt-5">
                                <span className='text-2xl text-nav_contact'><HiOutlineMail /></span>
                                <p className=''>
                                    iconazizbek.b@udevs.io
                                </p>
                            </div>
                            {/* telegram address */}
                            <div data-aos="zoom-in" className="telegram_address flex items-center gap-2 mt-5">
                                <span className='text-2xl text-nav_contact'><FaTelegramPlane /></span>
                                <p className='text-nav_contact'>t.me/azizbekbakhodirov</p>
                            </div>
                            {/* social media start */}
                            <div data-aos="zoom-in" className="social_media flex gap-3 text-2xl text-nav_contact mt-5">
                                <Link><FaYoutube /></Link>
                                <Link><FaInstagram /></Link>
                                <Link><FaSquareFacebook /></Link>
                                <Link><FaTwitter /></Link>
                            </div>
                            {/* social media end */}
                            {/* google map start */}
                            <div data-aos="fade-up" className='google_map mt-8 lg:w-[450px] lg:h-[250px]'>
                                <LoadScript googleMapsApiKey="AIzaSyCbx1ERRfLuXePQwos_-jwvQNWCkEXptZg">
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                    >
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                            {/* google map end*/}

                        </div>
                        {/* contact left end */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact