import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import css
import '../footer/footer.css'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'
// import icon
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// import image 
import footer_logo from '../../assets/navbarLogo/nav_logo.png'


const Footer = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="container">
                <div className="footer_main">
                    {/* footer logo start */}
                    <div data-aos="fade-up" className="footer_logo flex justify-center mt-40">
                        <img src={footer_logo} alt="" />
                    </div>
                    {/* footer logo end*/}

                    {/* footer links start */}
                    <div data-aos="fade-up" className="footer_links mt-20 flex justify-around">
                        {/* footer links 1 start */}
                        <div className="footer_links_1">
                            <div className="footer_about_title">
                                <p className='text-xl font-bold	'>About us</p>
                            </div>
                            <div className="footer_about_links">
                                <Link>Direction</Link>
                                <Link>Command</Link>
                                <Link>Tools</Link>
                                <Link>Clients</Link>
                            </div>
                        </div>
                        {/* footer links 1 end */}

                        {/* footer links  2 start*/}
                        <div className="footer_links_2 mr-40">
                            <div className="footer_services_title">
                                <p className='text-xl font-bold	'>Services</p>
                            </div>
                            <div className="footer_services_links">
                                <Link>Development of mobile applications</Link>
                                <Link>Development and implementation ERP systems</Link>
                                <Link>User interface, User experience design</Link>
                                <Link>IT consulting</Link>
                                <Link>Optimization IT consulting infrastructure</Link>
                            </div>
                        </div>
                        {/* footer links  2 end*/}

                        {/* footer links  3 start*/}
                        <div className="footer_links_3">
                            <div className="footer_portifolio_title">
                                <p className='text-xl font-bold	'>Portfolio</p>
                            </div>
                            <div className="footer_portifolio_links">
                                <Link>Delever</Link>
                                <Link>Sms.uz</Link>
                                <Link>Goodzone</Link>
                                <Link>Iman</Link>
                            </div>
                        </div>
                        {/* footer links  3 end*/}
                    </div>
                    {/* footer links end */}

                    <br />
                    <hr className='w-[90%] mx-auto' />
                    <div className="footer_top flex items-center justify-between w-[82%] mx-auto mt-5 mb-5">
                        <p>© 2024 Udevs. All rights reserved</p>
                        <div className="footer_icons flex gap-5 text-2xl">
                            <div className="instagram">
                                <Link><FaInstagram /></Link>
                            </div>
                            <div className="twitter">
                                <Link><FaTwitter /></Link>
                            </div>
                            <div className="youtube">
                                <Link><FaYoutube /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer