import React, { useEffect, useState } from 'react'
import Translation from '../lang/data.json';

// import components 
import Header from '../components/header/Header'
import Ourservices from '../components/Our_servis/Ourservices'
import Team from '../components/team/Team'
import Development from '../components/development/Development'
import Erp_systems from '../components/erp_systems/Erp_systems'
import Ui_design from '../components/ui_design/Ui_design'
import Salom from '../components/salom/Salom'
import Itconsulting from '../components/it_consulting/Itconsulting'
import Tools from '../components/langtools/Tools'
import Partners from '../components/partners/Partners'
import Delever from '../components/delever/Delever'
import Smsuz from '../components/smsuz/Smsuz'
import Goodzone from '../components/goodzone/Goodzone'
import Iman from '../components/iman/Iman'
import Wework from '../components/wework/Wework'
import Contact from '../components/contact/Contact'


const HomePage = () => {
  return (
    <>
      <Header/>
      <Ourservices />
      <Team />
      <Development />
      <Erp_systems />
      <Ui_design />
      <Salom />
      <Itconsulting />
      <Tools />
      <Partners />
      <Delever />
      <Smsuz />
      <Goodzone />
      <Iman />
      <Wework />
      <Contact />
    </>
  )
}

export default HomePage