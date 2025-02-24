import React from 'react'
import classes from "./Admin.module.css"
import { Outlet, Link } from 'react-router-dom'
function Admin() {
  return (
    <div className={classes.admin}>
        <div className={classes.left}>
            <h2>ADMIN MENU</h2>
            <ul>
                <Link ><li>Dashboard</li></Link>
                <Link to={"order"}><li>Orders</li></Link>
                <Link to={"new_order"}><li>New order</li></Link>
                <Link to={"add_employee"}><li>Add employee</li></Link>
                <Link to={"employee"}><li>Employees</li></Link>
                <Link to={"add_customer"}><li>Add customer</li></Link>
                <Link to={"customer"}><li>Customer</li></Link>
                <Link to={"service"}><li>Service</li></Link>   
                
            </ul>
            {/* <Link to={"add_employee"}><p>Add Employee</p></Link>
            <Link to={"add_customer"}>Add Customer</Link> */}
        </div>
        <div className={classes.right}>
            <Outlet />
        </div>
    </div>
  )
}

export default Admin