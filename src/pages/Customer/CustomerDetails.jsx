import React from 'react'
import classes from "./CustomerDetails.module.css"
import { useAppStore } from '../../hook/store'
import { FaEdit } from "react-icons/fa";

function CustomerDetails() {
  const {selectedCustomer} = useAppStore();

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

              </div>
              <div className={classes.addVehicle}>
                <button>ADD NEW VEHICLE</button>
              </div>
              <div className={classes.text}>Cars</div>
            </div>
            <div className={classes.serviceInfo}>
              <h1>{`Orders of ${selectedCustomer.first_name}`}</h1>
              <div className={classes.text}>Orders</div>
            </div>
        </div>
    </div>
  )
}

export default CustomerDetails