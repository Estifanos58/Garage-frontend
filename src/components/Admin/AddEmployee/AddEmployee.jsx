import React from 'react'
import classes from "./AddEmployee.module.css"
function AddEmployee() {
  return (
    <div className={classes.AddEmployee}>
         <div className={classes.container}>
            <div className={classes.header}> 
                <h3>Add a new Employee</h3>
                <div className={classes.line}></div>
            </div>
            <div className={classes.form}>
               <div className={classes.form_login}>
                <input type="text"  placeholder='Employee email'/>
               </div>
               <div className={classes.form_login}>
                <input type="text" placeholder='Employee first name '/>
               </div><div className={classes.form_login}>
                <input type="text" placeholder='Employee last name'/>
               </div><div className={classes.form_login}>
                <input type="text" placeholder='Employee phone (555-555-5555'/>
               </div>
               <div className={`${classes.form_login} ${classes.select}`}>
                    <select>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>
               </div>
               <button className={classes.btn}>ADD EMPLOYEE</button>
            </div>
         </div>
    </div>
  )
}

export default AddEmployee