import React from 'react'
import Service from '../../components/Our_service/Service'
import Information from '../../components/Information/Information'
import Banner from '../../components/Banner/Banner'
import banner_2 from "../../assets/banner_4.jpeg"
import Schedule from '../../components/Schedule/Schedule'
import Nav from '../../components/Nav/Nav'
import banner from '../../assets/Service.jpeg'


function OurService() {
  const header_2 = "We are leader in Car Mechanical Work";

  return (
    <div>
        <Nav header="Service" banner={banner}/>
        <Service />
        <Information />
        <Banner banner={banner_2} header={header_2}/>
        <Schedule />
    </div>
  )
}

export default OurService