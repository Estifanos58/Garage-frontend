import React, { useEffect, useState } from 'react'
import classes from "./header.module.css"
import logo from "../../assets/abeGarageLogo.png"
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

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
                <p className={classes.schedule}>Monday &middot; Saturday 7:00AM &middot; 6:00PM</p>
                <p className={classes.name}>Welcome Admin</p>
            </div>
        </div>
        <div className={classes.lower}>
            <div className={classes.icon}>
                <img src={logo} alt="Abe Garage" />
            </div>
            <div className={classes.right}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about_us"}>About Us</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        <li><Link to={"/admin"}>ADMIN</Link></li>
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
                    <li> <Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about_us"}>About Us</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/admin"}>ADMIN</Link></li>
                    <button>LOGOUT</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header