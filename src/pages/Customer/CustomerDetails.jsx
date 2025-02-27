import React, { useState } from 'react'
import classes from "./CustomerDetails.module.css"
import { useAppStore } from '../../hook/store'
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function CustomerDetails() {
  const {selectedCustomer} = useAppStore();
  const [displayOpt, setDisplayOpt] = useState(false);
  
  const handleClick = ()=>{
    setDisplayOpt((prev)=> !prev)
  }
  
  return (
    <div className={classes.CustomerDetails}>
        <div className={classes.container}>
            <div className={classes.customerInfo}>
              <h1>{`Customer: ${selectedCustomer.first_name} ${selectedCustomer.last_name}`}</h1>
              <p>Email: <span>{`${selectedCustomer.email}`}</span></p>
              <p>Phone: <span>{` ${selectedCustomer.phone}`}</span></p>
              <p>Active Customer: <span>{` ${selectedCustomer.status}`}</span></p>
              <p>Added Date: <span>{` ${selectedCustomer.added_date}`}</span></p>
              <p>Edit customer info <span className={classes.edit}><FaEdit/></span></p>
              
              <div className={classes.text}>Info</div>
            </div>
            <div className={classes.vehicleInfo}>
              <h1>{`Vehicles of ${selectedCustomer.first_name}`}</h1>
              <div className={classes.vehicleList}>
                  <p>No vehicle found</p>
              </div>
              <div className={classes.addVehicle}>
                {
                  displayOpt ?
                  <div className={classes.AddCustomer}>
                    <div className={classes.addContainer}>
                      <div className={classes.header}> 
                            <h3>Add a new vehicle</h3>
                            <div className={classes.line}></div>
                      </div>
                      <div className={classes.form}>
                                     <div className={classes.form_login}>
                                      <input type="text"  placeholder='Vehicle year'/>
                                     </div>
                                     <div className={classes.form_login}>
                                      <input type="text" placeholder='Vehicle model' />
                                     </div>
                                     <div className={classes.form_login}>
                                      <input type="text" placeholder='Vehicle type' />
                                     </div>
                                     <div className={classes.form_login}>
                                      <input type="text" placeholder='Vehicle mileage' />
                                     </div>
                                     <div className={classes.form_login}>
                                      <input type="text" placeholder='Vehicle tag' />
                                     </div>
                                     <div className={classes.form_login}>
                                      <input type="text" placeholder='Vehicle serial' />
                                     </div>
                                     <div className={classes.form_login}>
                                      <input type="text" placeholder='Vehicle color' />
                                     </div>
                                     
                                     <button className={classes.btn} >{"ADD VEHICLE"}</button>
                                  </div>
                    </div>
                    <button onClick={handleClick}>< IoMdClose/></button>
                  </div>
                  :
                  <button onClick={handleClick}>ADD NEW VEHICLE</button>
                  
                  }
              </div>
              <div className={classes.text}>Cars</div>
            </div>
            <div className={classes.serviceInfo}>
              <h1>{`Orders of ${selectedCustomer.first_name}`}</h1>
              <p>Orders will be displayed here</p>
              <div className={classes.text}>Orders</div>
            </div>
        </div>
    </div>
  )
}

export default CustomerDetails