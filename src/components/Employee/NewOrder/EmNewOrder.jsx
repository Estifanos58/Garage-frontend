import React, { useEffect, useState } from 'react'
import classes from './NewOrder.module.css'
import { useAppStore } from '../../../hook/store'
import axios from 'axios';
import { GETNEWORDER } from '../../../utils/constant';
import { toast } from 'react-toastify';
import { set } from 'mongoose';
import moment from 'moment';
import { CiIndent } from 'react-icons/ci';
import { FaEdit } from 'react-icons/fa';

function EmNewOrder() {
  const {newOrder, setNewOrder} = useAppStore();
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    if(!newOrder._id){
      getNewOrder();
    }
  },[])

  const getNewOrder = async()=>{
    try {
      setLoading(true);
      const response = await axios.get(GETNEWORDER, {withCredentials: true});
      console.log("RESPONSE: ", response);
      if(response.data.success){
        setLoading(false);
        setNewOrder(response.data.data);
      }else {
        setLoading(false);
        toast.error(response.data.message);
      }
      
    } catch (error) {
      toast.error("Error in getting new order");
      setLoading(false);
    }
  }

  const getBgcolor = (status) => {
    switch(status) {
        case "pending":
            return "red";
        case "completed":
            return "green";
        case "In progress":
            return "yellow";
        case "Received":
            return "blue";
        default:
            return "black";
    }
}
const getColor = (status) =>{
    switch(status) {
        case "pending":
            return "white";
        case "completed":
            return "white";
        case "In progress":
            return "black";
        case "Received":
            return "white";
        default:
            return "white";
    }
}

  const formatDate = (timestamp) => moment(timestamp).format("MMM DD, YYYY");

  return (
    <div className={classes.EmNewOrder}>
        <div className={classes.header}> 
            <h3>New Orders</h3>
            <div className={classes.line}></div>
        </div>
        <div className={classes.table}>
            {
                isLoading ? <p>Loading</p> :
                <table>
                  <thead>
                      <tr>
                          <th>Customer</th>
                          <th>Vehicle</th>
                          <th>Order Date</th>
                          <th>Order status</th>
                          <th>Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          newOrder?._id   ?
                              <tr>
                                  <td>
                                      <h2>{`${newOrder.customer_id.first_name} ${newOrder.customer_id.last_name}`}</h2>
                                      <p>{newOrder.customer_id.email}</p>
                                      <p>{newOrder.customer_id.phone}</p>
                                  </td>
                                  <td>
                                      <h2>{newOrder.vehicle_id.make}</h2>
                                      <p>{newOrder.vehicle_id.model}</p>
                                      <p>{newOrder.vehicle_id.year}</p>
                                  </td>
                                  <td>
                                      <h2>{`${formatDate(newOrder.createdAt)}`}</h2>
                                  </td>
                                  <td>
                                      <p style={{backgroundColor:`${getBgcolor(newOrder.status)}`, color:`${getColor(newOrder.status)}`, textAlign:"center", borderRadius:"30px", padding:"3px 0"}}>{newOrder.status}</p>
                                  </td>
                                  <td style={{display:"flex", alignItems:"center", border: "none", paddingTop: "30px"}}>
                                    <p style={{fontSize:"20px"}} ><FaEdit/></p></td>
                              </tr>
              
                          : <tr><td colSpan="8">No data</td></tr>
                      }
                  </tbody>
              </table>
            }
        </div>
    </div>
  )
}

export default EmNewOrder