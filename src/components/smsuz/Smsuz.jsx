import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../smsuz/smsuz.css'

import { MdMailOutline } from "react-icons/md";

import Aos from 'aos'
import 'aos/dist/aos.css'

import devbg from '../../assets/smsuz/smsuz.png'
import website from '../../assets/delever/website.png'
import admin from '../../assets/delever/admin.png'
import crossplatform from '../../assets/delever/crossplatform.png'

const Smsuz = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className='container'>
        <div className="smsuz_main">
          <div  data-aos="fade-up" className="smsuz_title">
            <h1 className='text-7xl font-bold w-[550px] text-nav_contact lg:ml-[80px]'>Sms.uz</h1>
          </div>
          <div className="smsuz_boxs">

            <div className="smsuz_right  lg:ml-[80px]">
              <Link  data-aos="fade-up" className='notification flex items-center gap-2 justify-center'>
                <span><MdMailOutline /></span>Notification
              </Link>
              <h1 data-aos="fade-up" className='smsuz_text mt-10 text-header_title text-xl font-medium lg:w-[480px]'>
                Smsuz.uz - It is a platform for bulk SMS messaging.
              </h1>
              <br />
              <h1 data-aos="fade-up">What we did?</h1>
              <br />
              <div data-aos="fade-up" className='smsuz_app flex gap-5 mt-10'>
                <div className="smsuz_box">
                  <img src={website} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>Website</h1>
                </div>
                <div className="smsuz_box">
                  <img src={admin} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>Admin panel</h1>
                </div>
                <div className="smsuz_box">
                  <img src={crossplatform} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>Crossplatform</h1>
                </div>
              </div>
            </div>
            <div className="smsuz_left lg:mr-40">
              <img data-aos="zoom-in" className=' mt-10' src={devbg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Smsuz