import React, { useEffect } from 'react'
// import css
import '../team/team.css'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'
// import image 
import team from '../../assets/team/team.png'

const Team = () => {
    // aos useEffect
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='container'>
            <div className="team_main">
                {/* team_title start */}
                <div className="team_title" data-aos="fade-up">
                    <h1 className='text-7xl font-bold text-nav_contact lg:ml-[80px] lg:mt-32'>Team</h1>
                </div>
                {/* team_title end */}

                {/* team box start */}
                <div className="team_boxs">
                    {/* team_right start */}
                    <div className="team_right lg:ml-24  mt-32">
                        <h1 data-aos="fade-up" className='team_info lg:mt-10 text-header_title lg:text-xl font-bold lg:w-[500px]'>
                            For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.
                        </h1>
                        <br />
                        <h1 data-aos="fade-up" className='team_num w-[100%] text-nav_contact lg:text-9xl font-bold'>100 +</h1>
                        <br />
                        <h1 data-aos="fade-up" className='team_dedicated font-medium text-4xl lg:font-bold text-header_title'>Dedicated team</h1>
                    </div>
                    {/* team_right end */}

                    {/* team_left start */}
                    <div data-aos="zoom-in-up" className="team_left">
                        <img className='lg:mr-44 mt-40' src={team} alt="" />
                    </div>
                    {/* team_left end*/}
                </div>
                {/* team box start */}
            </div>
        </div>
    )
}

export default Team