import React from 'react'
import classes from "./About.module.css"
import Exprience from '../../components/exprience/exprience'
import Information from '../../components/Information/Information'
import Banner from '../../components/Banner/Banner'
import Schedule from '../../components/Schedule/Schedule'
import banner_2 from "../../assets/banner_4.jpeg"
import Nav from '../../components/Nav/Nav'
import banner from "../../assets/About.jpeg"
import Skill from '../../components/Skill/Skill'
function About() {
  const header_2 = "We are leader in Car Mechanical Work";

  return (
    <div className={classes.About}>
        <Nav header="About Us" banner={banner}/>
        <Skill />      
        <Exprience />
        <Information />
        <Banner banner={banner_2} header={header_2}/>
        <Schedule />

    </div>
  )
}

export default About