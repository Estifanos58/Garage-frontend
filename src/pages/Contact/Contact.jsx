import React from 'react'
import classes from "./Contact.module.css"
import Schedule from '../../components/Schedule/Schedule'
import Nav from '../../components/Nav/Nav'
import banner from "../../assets/Contact.jpeg"

function Contact() {
  return (
    <div className={classes.contact}>
       <Nav header="Service" banner={banner}/>
        <Schedule />
    </div>
  )
}

export default Contact