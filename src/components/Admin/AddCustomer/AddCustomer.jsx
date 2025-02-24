import React from 'react'
import classes from "./AddCustomer.module.css"
function AddCustomer() {
  return (
    <div className={classes.AddCustomer}>
        <div className={classes.container}>
            <div className={classes.header}> 
                <h3>Add a new customer</h3>
                <div className={classes.line}></div>
            </div>
            <div className={classes.form}>
               <div className={classes.form_login}>
                <input type="text"  placeholder='Customer email'/>
               </div>
               <div className={classes.form_login}>
                <input type="text" placeholder='Customer first name '/>
               </div><div className={classes.form_login}>
                <input type="text" placeholder='Customer last name'/>
               </div><div className={classes.form_login}>
                <input type="text" placeholder='Customer phone (555-555-5555'/>
               </div>
              
               <button className={classes.btn}>ADD CUSTOMER</button>
            </div>
         </div>
    </div>
  )
}

export default AddCustomer