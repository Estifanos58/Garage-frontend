import React, { useState } from 'react'
import classes from "./Login.module.css"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function Login() {
    const [visible, setVisible] = useState(false);

    const hanglevisible = ()=> {
        setVisible((prev)=> !prev)
    }

  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.login}>
                <h2>Login to your account <span className={classes.underline}></span></h2>
                <div className={classes.underline}></div>
            </div>
        <form>
            <div className={classes.control}>
                <input type="email" placeholder='Email' />
            </div>
            <div className={`${classes.control} ${classes.password}`}>
                <input type={`${visible ? "password" : "text"}`} placeholder='Password'/>
                {visible ? <FaEye className={classes.eye} onClick={hanglevisible}/> : <FaEyeSlash className={classes.eye} onClick={hanglevisible}/>}
            </div>
            <div className={classes.btn}>
                <button>Login</button>
            </div>
        </form>
        </div>
       </div>
  )
}

export default Login