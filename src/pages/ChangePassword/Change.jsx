import React, { useState } from 'react'
import classes from './Change.module.css'
import { toast } from 'react-toastify';

function Change() {
    const [oldpassword, setOldPassword] = useState("");
    const [newPasswrod, setNewPassword] = useState("");
    const [renewPassword, setReNewPassword] = useState("");
    const [visible, setVisible] =  useState(false);

    const handlevisible = ()=> {
        setVisible(prev => !prev);
    }
    console.log("CHecked", visible)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!oldpassword || !newPasswrod || !renewPassword) {
            return toast.error("All fields are required");
        }
        if(newPasswrod !== renewPassword) {
            return toast.error("Password don't match");
        }
        if(oldpassword === newPasswrod) {
            return toast.error("Old password and New password cannot be the same");
        }
        toast.success("All Complete succefully");
    }
    
  return (
    <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.login}>
                    <h2>Change password <span className={classes.underline}></span></h2>
                    <div className={classes.underline}></div>
                </div>
            <form onSubmit={handleSubmit}>
                <div className={`${classes.control} ${classes.password}`}>
                    <input type={`${visible ? "password" : "text"}`} placeholder='Old Password' value={oldpassword} onChange={(e)=>setOldPassword(e.target.value)} />
                </div>
                <div className={`${classes.control} ${classes.password}`}>
                    <input type={`${visible ? "password" : "text"}`} placeholder='New Password' value={newPasswrod} onChange={(e)=>setNewPassword(e.target.value)}/>
                </div>
                <div className={`${classes.control} ${classes.password}`}>
                    <input type={`${visible ? "password" : "text"}`} placeholder='Confirm Password' value={renewPassword} onChange={(e)=>setReNewPassword(e.target.value)}/>
                </div>
                <div className={classes.check}>
                    <p>Show Password</p>
                    <input type="checkbox" value={visible} onChange={handlevisible} />
                </div>
                <div className={classes.btn}>
                    <button>Change</button>
                </div>
            </form>
            </div>
           </div>
  )
}

export default Change