import React, { useState } from 'react'
import classes from "./EditCustomer.module.css"
import { useAppStore } from '../../../hook/store'
import { useNavigate } from 'react-router-dom';

function EditCustomer() {
    const {selectedCustomer} = useAppStore();
    const [first_name, setFirst_name] = useState(selectedCustomer.first_name);
    const [last_name, setLast_name] = useState(selectedCustomer.last_name);
    const [email, setEmail] = useState(selectedCustomer.email);
    const [phone, setPhone] = useState(selectedCustomer.phone);
    const [isLoading, setLoading] = useState(false);
    const [status, setStatus] = useState(selectedCustomer.status);
    const navigate = useNavigate(); 


  return (
     <div className={classes.EditCustomer}>
            <div className={classes.header}> 
                <h3>{`Edit: ${selectedCustomer.first_name} ${selectedCustomer.last_name}`}</h3>
                <div className={classes.line}></div>
            </div>
    
            <p className={classes.email}>{`Employee email: ${selectedCustomer.email}`}</p>
    
            <div className={classes.form}>
                  <div className={classes.form_login}>
                    <input type="text"  placeholder='Employee first name' value={first_name} onChange={(e)=>setFirst_name(e.target.value)}/>
                  </div>
                  <div className={classes.form_login}>
                    <input type="text" placeholder='Employee last name' value={last_name} onChange={(e)=> setLast_name(e.target.value)} />
                  </div>
                  <div className={classes.form_login}>
                    <input type="text" placeholder='Employee email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                  </div>
                  <div className={classes.form_login}>
                    <input type="text" placeholder='Employee phone (555-555-5555' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                </div>
                  <button className={classes.btn}>{isLoading? "Loading ..." :"UPDATE"}</button>
            </div>
        </div>
  )
}

export default EditCustomer