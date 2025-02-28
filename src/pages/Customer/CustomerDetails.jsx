import React, { useEffect, useState } from 'react'
import classes from "./CustomerDetails.module.css"
import { useAppStore } from '../../hook/store'
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import axios from 'axios';
import { ADDVEHICLE, GETALLVEHICLE } from '../../utils/constant';
import AddVehicle from '../../components/Admin/AddVehicle/AddVehicle';

function CustomerDetails() {
  const {displayOpt,setDisplayOpt,selectedCustomer, addCustomerVehicle, customerVehicles,setCustomerVehicles} = useAppStore();
  // const [displayOpt, setDisplayOpt] = useState(false);
  const [isLoading, setLoading] = useState(false);
  console.log(displayOpt);

  const getAllVehicle = async ()=>{
    try {
      setLoading(true);
      const response = await axios.post(GETALLVEHICLE,{customer_id: selectedCustomer._id},{withCredentials: true})
      console.log(response);
      if(response.data.success){
        setLoading(false)
        setCustomerVehicles(response.data.data);
        alert("Vehicle found")
      }else {
        setLoading(false);
        console.log("Error is", response.data.message);
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  useEffect(()=>{
    if(customerVehicles.length === 0){
      getAllVehicle()
    }
  },[])


  console.log("CustomerType: ",typeof(customerVehicles), " Customer: ", customerVehicles)

  const customerCar = () =>{
    if(customerVehicles?.length === 0) {
      return <p>No vehicle found</p>
    } else {
        return customerVehicles?.map((item,index)=>(
          // console.log("ITMES: ", item.make)
          <div key={index}>
              <p>{item.make}</p>
          </div>
          
        ))
    }
    
    
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
                {isLoading ? <p> Loading... </p> : customerCar()}
              </div>
              <div className={classes.addVehicle}>
                {
                  displayOpt ?
                  <AddVehicle />
                  :
                  <button onClick={setDisplayOpt}>ADD NEW VEHICLE</button>
                  
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