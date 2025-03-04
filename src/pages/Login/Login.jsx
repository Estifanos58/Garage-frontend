import React, { useState } from 'react'
import classes from "./Login.module.css"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { LOGIN } from '../../utils/constant';
import axios from "axios";
import { useAppStore } from '../../hook/store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userInfo, setUserInfo} = useAppStore();
    const navigate = useNavigate();

    const hanglevisible = ()=> {
        setVisible((prev)=> !prev)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(email !== "" || password !== "") {
            const response  = await axios.post(LOGIN,{email, password}, {withCredentials: true});
            // console.log(response);
            if(response.data.success) {
                alert("Login Success");
                setUserInfo(response.data.data);
                toast("User Logged in SuccessFully")
                console.log("USER INFO: ", response.data.data.role);
                if(response.data.data.role === "admin") {
                    console.log("Navigate to admin");
                    navigate("/admin")
                } if(response.data.data.role !== "admin") {
                        if(response.data.status === "initial") {
                            navigate('')
                        } else if(response.data.status === "inactive"){

                        } else {

                        }
                    }else {
                     navigate("/");
                }

            } else {
                toast.error(response.data.message);
            }
        }
        // alert(`Email: ${email}  and Password: ${password}`)
    }

  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.login}>
                <h2>Login to your account <span className={classes.underline}></span></h2>
                <div className={classes.underline}></div>
            </div>
        <form onSubmit={handleSubmit}>
            <div className={classes.control}>
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className={`${classes.control} ${classes.password}`}>
                <input type={`${visible ? "password" : "text"}`} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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