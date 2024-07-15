import React, { useEffect, useState } from 'react'
// import css
import '../langtools/tools.css'
// aos import 
import Aos from 'aos'
import 'aos/dist/aos.css'

// image import line 1
import promotheus from '../../assets/tools_img/line_1/promotheus.png'
import loki from '../../assets/tools_img/line_1/loki.png'
import bitbucket from '../../assets/tools_img/line_1/bitbucket.png'
import gitlab from '../../assets/tools_img/line_1/gitlab.png'
import kotlin from '../../assets/tools_img/line_1/kotlin.png'
import android from '../../assets/tools_img/line_1/android.png'
import java from '../../assets/tools_img/line_1/java.png'
import azure from '../../assets/tools_img/line_1/azure.png'
import gcp from '../../assets/tools_img/line_1/GCP.png'
import digitalocean from '../../assets/tools_img/line_1/digitalocean.png'
import aws from '../../assets/tools_img/line_1/aws.png'
import kubernetes from '../../assets/tools_img/line_1/kubernetes.png'

// line 2 import images
import devops from '../../assets/tools_img/line_2/devops.png'
import Grafana from '../../assets/tools_img/line_2/devops2.png'
import Terraform from '../../assets/tools_img/line_2/devops3.png'
import ios from '../../assets/tools_img/line_2/mobile2.png'
import Swift from '../../assets/tools_img/line_2/mobile1.png'
import Flutter from '../../assets/tools_img/line_2/mobile3.png'
import next from '../../assets/tools_img/line_2/front1.png'
import react from '../../assets/tools_img/line_2/front2.png'
import js from '../../assets/tools_img/line_2/front4.png'
import Balsamic from '../../assets/tools_img/line_2/uiux1.png'
import Invision from '../../assets/tools_img/line_2/uiux2.png'
import figma from '../../assets/tools_img/line_2/uiux3.png'

// line 3 import image
import doker from '../../assets/tools_img/line_3/devops.png'
import postgre from '../../assets/tools_img/line_3/backend1.png'
import pyton from '../../assets/tools_img/line_3/backend2.png'
import nodejs from '../../assets/tools_img/line_3/backend3.png'
import php from '../../assets/tools_img/line_3/backend4.png'
import go from '../../assets/tools_img/line_3/backend5.png'
import antdesign from '../../assets/tools_img/line_3/front1.png'
import gatsby from '../../assets/tools_img/line_3/front2.png'
import vue from '../../assets/tools_img/line_3/front3.png'
import Principle from '../../assets/tools_img/line_3/uiux2.png'
import Sketch from '../../assets/tools_img/line_3/uiux1.png'
import Adobe from '../../assets/tools_img/line_3/uiux3.png'

// line 4 import image 
import YouTrack from '../../assets/tools_img/line_4/testing.png'
import Appium from '../../assets/tools_img/line_4/testing2.png'
import Cypress from '../../assets/tools_img/line_4/testing3.png'
import Jmeter from '../../assets/tools_img/line_4/testing4.png'
import MongoDB from '../../assets/tools_img/line_4/backend.png'
import Cassandra from '../../assets/tools_img/line_4/backend2.png'
import Sass from '../../assets/tools_img/line_4/front.png'
import Material from '../../assets/tools_img/line_4/front2.png'
import Zeplin from '../../assets/tools_img/line_4/uiux.png'
import Illustrator from '../../assets/tools_img/line_4/uiux2.png'
import Lottie from '../../assets/tools_img/line_4/uiux3.png'
import Photoshop from '../../assets/tools_img/line_4/uiux4.png'

const Tools = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    // select dev lang function
    const [productsclass, setProductsclass] = useState('frontend_box')
    const [backendclass, setBackendsclass] = useState('backend_box')
    const [devopsclass, setDevopsclass] = useState('devops_box')
    const [uiuxclass, setUiuxclass] = useState('uiux_box')
    const [testingclass, setTestingclass] = useState('testing_box')
    const [infrastructureclass, setinfrastructureclass] = useState('infrastructure_box')
    const [mobileclass, setmobileclass] = useState('mobile_box')

    // onclick frontend 
    const handleLineClickfront = () => {
        setBackendsclass('backend_box2');
        setProductsclass('frontend_box');
        setDevopsclass('devops_box2');
        setUiuxclass('uiux_box2');
        setTestingclass('testing_box2');
        setinfrastructureclass('infrastructure_box2');
        setmobileclass('mobile_box2')
    }

    // onclick backend 
    const handleLineClickbackend = () => {
        setBackendsclass('backend_box');
        setProductsclass('frontend_box2');
        setDevopsclass('devops_box2');
        setUiuxclass('uiux_box2');
        setTestingclass('testing_box2');
        setinfrastructureclass('infrastructure_box2');
        setmobileclass('mobile_box2')
    }

    // onclick devops   
    const handleLineClickdevops = () => {
        setBackendsclass('backend_box2');
        setProductsclass('frontend_box2');
        setDevopsclass('devops_box');
        setUiuxclass('uiux_box2');
        setTestingclass('testing_box2');
        setinfrastructureclass('infrastructure_box2');
        setmobileclass('mobile_box2')
    }

    // onclick testing   
    const handleLineClicktesting = () => {
        setBackendsclass('backend_box2');
        setProductsclass('frontend_box2');
        setDevopsclass('devops_box2');
        setUiuxclass('uiux_box2');
        setTestingclass('testing_box');
        setinfrastructureclass('infrastructure_box2');
        setmobileclass('mobile_box2')
    }

    // onclick uxui  
    const handleLineClickuxui = () => {
        setBackendsclass('backend_box2');
        setProductsclass('frontend_box2');
        setDevopsclass('devops_box2');
        setUiuxclass('uiux_box');
        setTestingclass('testing_box2');
        setinfrastructureclass('infrastructure_box2');
        setmobileclass('mobile_box2')
    }

    // onclick infrastructure 
    const handleLineClickinfras = () => {
        setBackendsclass('backend_box2');
        setProductsclass('frontend_box2');
        setDevopsclass('devops_box2');
        setUiuxclass('uiux_box2');
        setTestingclass('testing_box2');
        setinfrastructureclass('infrastructure_box');
        setmobileclass('mobile_box2')
    }
    // onclick mobile 
    const handleLineClickmobile = () => {
        setBackendsclass('backend_box2');
        setProductsclass('frontend_box2');
        setDevopsclass('devops_box2');
        setUiuxclass('uiux_box2');
        setTestingclass('testing_box2');
        setinfrastructureclass('infrastructure_box2');
        setmobileclass('mobile_box')
    }


    return (
        <>
            <div className='container'>
                <div className="tools">
                    {/* tools start */}
                    <div data-aos="fade-up" className="tools_title">
                        <h1 className='text-7xl font-bold text-nav_contact lg:ml-[80px] lg:mt-32'>Tools</h1>
                    </div>
                    {/* tools end */}

                    {/* select lang start */}
                    <div data-aos="fade-up" className='tools_select flex items-center gap-5 lg:ml-[80px] lg:mt-16'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="frontend"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClickfront}
                            />
                            <label htmlFor="frontend">Frontend</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="backend"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClickbackend}
                            />
                            <label htmlFor="backend">Backend</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="devops"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClickdevops}
                            />
                            <label htmlFor="devops">Devops</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="testing"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClicktesting}
                            />
                            <label htmlFor="testing">Testing</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="uxui"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClickuxui}
                            />
                            <label htmlFor="uxui">UX/UI</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="infrastructure"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClickinfras}
                            />
                            <label htmlFor="infrastructure">Infrastructure</label>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                id="mobile"
                                name="role"
                                className="radio-like"
                                onClick={handleLineClickmobile}
                            />
                            <label htmlFor="mobile">Mobile</label>
                        </div>
                    </div>
                    {/* select lang end*/}

                    <div className="code_language_box">
                        {/* line 1 start */}
                        <div data-aos="fade-up" className="first_line mt-16 flex gap-2">
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={promotheus} alt="" />
                                <p>Promotheus</p>
                            </div>
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={loki} className='w-8' alt="" />
                                <p>Loki</p>
                            </div>
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={bitbucket} className='w-8' alt="" />
                                <p>Bitbucket</p>
                            </div>
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={gitlab} alt="" />
                                <p>Gitlab</p>
                            </div>
                            <div className={`${mobileclass} mobile_box flex items-center flex-col justify-center`}>
                                <img src={kotlin} alt="" />
                                <p>Kotlin</p>
                            </div>
                            <div className={`${mobileclass} mobile_box flex items-center flex-col justify-center`}>
                                <img src={android} alt="" />
                                <p>Android</p>
                            </div>
                            <div className={`${mobileclass} mobile_box flex items-center flex-col justify-center`}>
                                <img src={java} alt="" />
                                <p>Java</p>
                            </div>
                            <div className={`${infrastructureclass} infrastructure_box flex items-center flex-col justify-center`}>
                                <img src={azure} alt="" />
                                <p>Azure</p>
                            </div>
                            <div className={`${infrastructureclass} infrastructure_box flex items-center flex-col justify-center`}>
                                <img src={gcp} alt="" />
                                <p>GCP</p>
                            </div>
                            <div className={`${infrastructureclass} infrastructure_box flex items-center flex-col justify-center`}>
                                <img src={digitalocean} alt="" />
                                <p>DigitalOcean</p>
                            </div>
                            <div className={`${infrastructureclass} infrastructure_box flex items-center flex-col justify-center`}>
                                <img src={aws} alt="" />
                                <p>AWS</p>
                            </div>
                            <div className={`${infrastructureclass} infrastructure_box flex items-center flex-col justify-center`}>
                                <img src={kubernetes} alt="" />
                                <p>Kubernetes</p>
                            </div>
                        </div>
                        {/* line 1 end */}

                        {/* line 2 end */}
                        <div data-aos="fade-up" className="first_line mt-2 flex gap-2">
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={devops} alt="" />
                                <p>ELK</p>
                            </div>
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={Grafana} className='w-8' alt="" />
                                <p>Grafana</p>
                            </div>
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={Terraform} className='w-8' alt="" />
                                <p>Terraform</p>
                            </div>
                            <div className={`${mobileclass} mobile_box flex items-center flex-col justify-center`}>
                                <img src={ios} alt="" />
                                <p>IOS</p>
                            </div>
                            <div className={`${mobileclass} mobile_box flex items-center flex-col justify-center`}>
                                <img src={Swift} alt="" />
                                <p>Swift</p>
                            </div>
                            <div className={`${mobileclass} mobile_box flex items-center flex-col justify-center`}>
                                <img src={Flutter} className='w-[30px]' alt="" />
                                <p>Flutter</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={next} alt="" />
                                <p>Next.JS</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={react} alt="" />
                                <p>React.JS</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={js} alt="" />
                                <p>Javascript</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Balsamic} alt="" />
                                <p>Balsamic</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Invision} alt="" />
                                <p>Invision</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={figma} alt="" />
                                <p>Figma</p>
                            </div>
                        </div>
                        {/* line 2 end */}

                        {/* line 3 end */}
                        <div data-aos="fade-up" className="first_line mt-2 flex gap-2">
                            <div className={`${devopsclass} devops_box flex items-center flex-col justify-center`}>
                                <img src={doker} alt="" />
                                <p>Docker</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={postgre} className='w-8' alt="" />
                                <p>PostgreSQL</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={pyton} className='w-8' alt="" />
                                <p>Python</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={nodejs} alt="" />
                                <p>Node.JS</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={php} alt="" />
                                <p>PHP</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={go} alt="" />
                                <p>GO</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={antdesign} className='w-[30px]' alt="" />
                                <p>Ant Design</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={gatsby} className='w-[30px]' alt="" />
                                <p>Gatsby.JS</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={vue} alt="" />
                                <p>Vue.JS</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Principle} alt="" />
                                <p>Principle</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Sketch} alt="" />
                                <p>Sketch</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Adobe} alt="" />
                                <p>Adobe suite</p>
                            </div>
                        </div>
                        {/* line 3 end */}

                        {/* line 4 end */}
                        <div data-aos="fade-up" className="first_line mt-2 flex gap-2">
                            <div className={`${testingclass} testing_box flex items-center flex-col justify-center`}>
                                <img src={YouTrack} alt="" />
                                <p>YouTrack</p>
                            </div>
                            <div className={`${testingclass} testing_box flex items-center flex-col justify-center`}>
                                <img src={Appium} className='w-8' alt="" />
                                <p>Appium</p>
                            </div>
                            <div className={`${testingclass} testing_box flex items-center flex-col justify-center`}>
                                <img src={Cypress} className='w-8' alt="" />
                                <p>Cypress</p>
                            </div>
                            <div className={`${testingclass} testing_box flex items-center flex-col justify-center`}>
                                <img src={Jmeter} alt="" />
                                <p>Jmeter</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={MongoDB} alt="" />
                                <p>MongoDB</p>
                            </div>
                            <div className={`${backendclass} backend_box flex items-center flex-col justify-center`}>
                                <img src={Cassandra} alt="" />
                                <p>Cassandra</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={Sass} alt="" />
                                <p>Sass</p>
                            </div>
                            <div className={`${productsclass} frontend_box flex items-center flex-col justify-center`}>
                                <img src={Material} className='w-[30px]' alt="" />
                                <p>Material UI</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Zeplin} alt="" />
                                <p>Zeplin</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Illustrator} alt="" />
                                <p>Illustrator</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Lottie} alt="" />
                                <p>Lottie</p>
                            </div>
                            <div className={`${uiuxclass} uiux_box flex items-center flex-col justify-center`}>
                                <img src={Photoshop} className='w-[30px]' alt="" />
                                <p>Photoshop</p>
                            </div>
                        </div>
                        {/* line 4 end */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools