import React, { useEffect } from 'react'
import '../it_consulting/itconsulting.css'

import Aos from 'aos'
import 'aos/dist/aos.css'


import consulting from '../../assets/itconsulting/consulting_img.png'
import frontend from '../../assets/itconsulting/frontend.png'
import backend from '../../assets/itconsulting/backend.png'
import architecture from '../../assets/itconsulting/architecture.png'
import devops from '../../assets/itconsulting/devops.png'
import ui_ux from '../../assets/itconsulting/ui_ux.png'
import qa from '../../assets/itconsulting/qa.png'

const Itconsulting = () => {
  //  aos useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className='container'>
        <div className="consulting_main">
          {/* consulting title start */}
          <div data-aos="fade-up" className="consulting_title">
            <h1 className='lg:text-7xl font-semibold w-[550px] text-nav_contact lg:ml-[80px]'>IT consulting</h1>
          </div>
          {/* consulting title end */}

          {/* consulting boxs start */}
          <div className="consulting_boxs flex">
            <div className="consulting_right lg:mt-10 lg:ml-[80px]">
              {/* consulting text start */}
              <h1 data-aos="fade-up" className='consulting_text mt-10 text-header_title lg:text-2xl font-medium lg:w-[500px]'>
                We can improve the qualifications of your employees thereby increasing the efficiency of your company
              </h1>
              {/* consulting text end */}
              <br />
              {/* consulting app start*/}
              <div data-aos="fade-up" className='consulting_app flex gap-5'>
                <div className="consulting_box">
                  <img src={frontend} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>Frontend</h1>
                </div>
                <div className="consulting_box">
                  <img src={backend} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>Backend</h1>
                </div>
                <div className="consulting_box p-3">
                  <img src={architecture} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>Architecture</h1>
                </div>
              </div>
              {/* consulting app end*/}

              {/* consulting app 2 start*/}
              <div data-aos="fade-up" className='consulting_app flex mt-5 gap-5'>
                <div className="consulting_box">
                  <img src={devops} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>DevOps</h1>
                </div>
                <div className="consulting_box">
                  <img src={ui_ux} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>UX/UI</h1>
                </div>
                <div className="consulting_box p-3">
                  <img src={qa} alt="" />
                  <h1 className='mt-5 text-lg font-semibold'>QA</h1>
                </div>
              </div>
              {/* consulting app 2 end*/}
            </div>

            {/* consulting left start*/}
            <div className="consulting_left lg:mr-40">
              <img data-aos="zoom-in" className='ml-2 mt-10' src={consulting} alt="" />
            </div>
            {/* consulting left end*/}
          </div>
          {/* consulting boxs end*/}
        </div>
      </div>
    </>
  )
}

export default Itconsulting