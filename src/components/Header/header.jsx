import React, { useEffect, useState } from 'react'
import classes from "./header.module.css"
import logo from "../../assets/abeGarageLogo.png"
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isTablet, setTable] = useState(false);
    const [isMobile, setMobile] = useState(false); 
    const [open, setOpen] = useState(false);

    useEffect(() => {  
        const handleResize = () => {  
            const currentWidth = window.innerWidth;
            setWidth(currentWidth);
            if (currentWidth < 992 && currentWidth > 768) {
                setMobile(false);
                setTable(true);
            } else if (currentWidth < 768) {
                setTable(false);
                setMobile(true);
            } else {
                setMobile(false);
                setTable(false);
            }
        };  
    
        handleResize(); // Ensure the state is set correctly on mount
        window.addEventListener('resize', handleResize);  
    
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Only run once on mount

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };
    
    
    console.log(width)
    console.log("IsTablet: ",isTablet)
    console.log("IsMobile: ", isMobile)
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
            <div className={classes.mobile} style={{display: isMobile ? "block" : "none"}}>
                <IoReorderThreeOutline onClick={handleToggle}/>
            </div>
            <div className={`${classes.mobileOpen} ${open ? classes.open : classes.close}`}>
                <div className={`${classes.red} ${open ? classes.active : classes.inactive}`}>
                </div>
                <ul>
                        <div className={classes.logo}>
                            <img src={logo} alt="" />
                            <div className={classes.exit}>
                                <p>
                                   <RxCross2 onClick={handleToggle} /> 
                                </p>
                                
                            </div>
                        </div>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">ADMIN</a></li>
                    <button>LOGOUT</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header