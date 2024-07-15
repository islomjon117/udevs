import React, { useEffect } from 'react'
// import css
import '../Our_servis/ourservices.css'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import
import person from '../../assets/our_services/our_services1.png'
import phone from '../../assets/our_services/phone.png'
import git from '../../assets/our_services/git.png'
import noname from '../../assets/our_services/noname_icon.png'
import setting from '../../assets/our_services/setting.png'
import desktop from '../../assets/our_services/desktop.png'

const Ourservices = () => {
  // aos useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='container'>
      <div className="ourservices">

        {/* our services title */}
        <div className="our_services_title" data-aos="fade-up">
          <h1 className='text-7xl font-bold	text-nav_contact lg:ml-[80px] lg:mt-32'>Our services</h1>
        </div>

        <div data-aos="fade-up" className="ourservices_boxs flex justify-center mt-20 flex-wrap gap-10">
          <div className="ourservices_box p-8">
            <img src={person} alt="" />
            <p className=' text-header_title mt-10 font-semibold	text-xl'>Team</p>
          </div>
          <div className="ourservices_box p-8">
            <img src={phone} alt="" />
            <p className=' text-header_title mt-10 font-semibold	text-xl'>
              Development of mobile applications
            </p>
          </div>
          <div className="ourservices_box p-8">
            <img src={git} alt="" />
            <p className=' text-header_title mt-10 font-semibold	text-xl'>Development and implementation ERP systems</p>
          </div>
          <div className="ourservices_box p-8">
            <img src={noname} alt="" />
            <p className=' text-header_title mt-10 font-semibold	text-xl'>User interface, User experience design</p>
          </div>
          <div className="ourservices_box p-8">
            <img src={setting} alt="" />
            <p className='w-62 text-header_title mt-10 font-semibold	text-xl	'>
              Optimization IT consulting infrastructure
            </p>
          </div>
          <div className="ourservices_box p-8">
            <img src={desktop} alt="" />
            <p className=' text-header_title mt-10 font-semibold	text-xl'>IT consulting</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Ourservices


