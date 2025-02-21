import React from 'react'
import classes from "./header.module.css"
import logo from "../../assets/abeGarageLogo.png"

function Header() {
  return (
    <div className={classes.container}>
        <div className={classes.upper}>
            <div className={classes.left}>
                Enjoy the Beso while we fix your car
            </div>
            <div className={classes.middle}>
                <p>Monday &middot; Saturday 7:00AM &middot; 6:00PM</p>
                <p>Welcome Admin</p>
            </div>
        </div>
        <div className={classes.lower}>
            <div className={classes.icon}>
                <img src={logo} alt="Abe Garage" />
            </div>
            <div className={classes.right}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">ADMIN</a></li>
                        <li><p className={classes.line}></p></li>
                    </ul>
                    <button>LOG OUT</button>
            </div>
        </div>
    </div>
  )
}

export default Header