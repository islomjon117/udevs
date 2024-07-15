import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import css 
import '../navbar/navbar.css'
// import data.json
import Translation from '../../lang/data.json';
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// import icon
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

// image import
import logo from '../../assets/navbarLogo/nav_logo.png'

const Navbar = () => {
    // sidebar function
    const [active, setActive] = useState()

    // lang function
    const [language, setLanguage] = useState("english")
    const [content, setContent] = useState({})

    // lang function
    useEffect(() => {
        if (language === "english") {
            setContent(Translation.english)
        } else if (language == "русский") {
            setContent(Translation.русский)
        }
    })

    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="navbar flex">
                <div className="container">
                    <div className="navbar_main flex items-senter justify-between px-20">
                        {/* nav_logo */}
                        <div className="nav_logo w-[96px] h-[32px] z-20">
                            <img src={logo} alt="" />
                        </div>
                        {/* nav link start */}
                        <div className={active ? 'nav_main_links active' : 'nav_main_links nav_links text-sm font-medium'}>
                            <Link to="/" className='direction'>
                                {content.nav_link1}
                            </Link>
                            <Link to="/" className='command'>
                                {content.nav_link2}
                            </Link>
                            <Link to="/" className='services'>
                                {content.nav_link3}
                            </Link>
                            <Link to="/" className='nav_tools'>
                                {content.nav_link4}
                            </Link>
                            <Link to="/" className=''>
                                {content.nav_link5}
                            </Link>
                            <Link to="/" className='nav_portifolio'>
                                {content.nav_link6}
                            </Link>
                            <select className='nav_lang' value={language} onChange={(e) => { setLanguage(e.target.value) }}>
                                <option value="english">english</option>
                                <option value="русский">Russian</option>
                            </select>
                            <Link to="/" className='nav_contact_btn px-8 py-3 tracking-wider leading-5 rounded-md text-white bg-nav_contact'>
                                Contact
                            </Link>
                        </div>
                        {/* nav link end */}

                        {/* sidebar start */}
                        <div className='navbar_main_menu_and_close open1' onClick={() => setActive(!active)} >
                            {
                                active ?
                                    <IoCloseSharp className='navbar_main_icon navbar_main_close' /> :
                                    <FaBars className='navbar_main_menu navbar_main_icon' />
                            }
                        </div>
                        {/* sidebar start end*/}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar