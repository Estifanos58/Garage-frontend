import React, { useEffect, useState } from 'react'
import classes from "./header.module.css"
import logo from "../../../assets/abeGarageLogo.png"
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../hook/store';
import { LOGOUT } from '../../../utils/constant';
import axios from 'axios';
import { toast } from 'react-toastify';

function Header() {
    // const [width, setWidth] = useState(window.innerWidth);
    // const [isMobile, setMobile] = useState(false); 
    const [open, setOpen] = useState(false);
    const {userInfo, setUserInfo, isMobile} = useAppStore();
    // console.log("USER INFO: ",userInfo)
    const navigate = useNavigate();

    // useEffect(() => {  
    //     const handleResize = () => {  
    //         const currentWidth = window.innerWidth;
    //         setWidth(currentWidth);
    //         if (currentWidth < 800) {
    //             setMobile(true);
    //         } 
    //     };  
    
    //     handleResize(); // Ensure the state is set correctly on mount
    //     window.addEventListener('resize', handleResize);  
    
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []); // Only run once on mount

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };
    const handleLogout = async() =>{
        const response = await axios.get(LOGOUT, {withCredentials: true});
        if(response.data.success) {
            setUserInfo({});
            toast("User Logged out SuccessFully")
        } else {
            toast.error(response.data.message);
        }
    }
  return (
    <div className={classes.container}>
        <div className={classes.upper}>
            <div className={classes.left}>
                Enjoy the Beso while we fix your car
            </div>
            <div className={classes.middle}>
                <p className={classes.schedule}>Monday &middot; Saturday 7:00AM &middot; 6:00PM</p>
                <p className={classes.name}>{userInfo.first_name ? `Welcome ${userInfo.first_name}` : "Welcome TO ABE GARAGE"}</p>
            </div>
        </div>
        <div className={classes.lower}>
            <div className={classes.icon}>
                <img src={logo} alt="Abe Garage" />
            </div>
            <div className={classes.right}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About Us</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        {(userInfo.role === "employee") && <li><Link to={"/dashboard"}>DashBoard</Link></li>}
                        {(userInfo.role === "admin" || userInfo.role ==="manager") && <li><Link to={"/admin"}>ADMIN</Link></li>}
                        <li><p className={classes.line}></p></li>
                    </ul>
                    {
                    // <button>{userInfo ? 'LOGOUT' :'LOGIN'}</button>
                    userInfo.first_name ? <button onClick={()=>handleLogout()}>LOGOUT</button> : <button onClick={()=> navigate("/login")}>LOGIN</button>
                    }
            </div>
            <div className={classes.mobile} style={{display: isMobile ? "block" : "none"}}>
                <IoReorderThreeOutline onClick={handleToggle}/>
            </div>
            <div className={`${classes.mobileOpen} ${open ? classes.open : classes.close}`}>
                <div className={`${classes.red} ${open ? classes.active : classes.inactive}`} onClick={(e) => e.currentTarget.value === e.target.value && handleToggle()}  >   
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
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    {(userInfo.role === "employee") && <li><Link to={"/dashboard"}>DashBoard</Link></li>}
                    {(userInfo.role === "admin" || userInfo.role ==="manager") && <li><Link to={"/admin"}>ADMIN</Link></li>}
                    {
                    // <button>{userInfo ? 'LOGOUT' :'LOGIN'}</button>
                    userInfo.first_name ? <button onClick={()=>handleLogout()}>LOGOUT</button> : <button onClick={()=> navigate("/login")}>LOGIN</button>
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header