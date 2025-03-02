import React, { useEffect, useRef, useState } from 'react'
import classes from './Orders.module.css'
import { BiSolidEdit } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAppStore } from '../../../hook/store';
import { CiIndent } from "react-icons/ci";
import moment from "moment";
import { GETALLORDER } from '../../../utils/constant';
import axios from 'axios';
import {toast} from "react-toastify";

function Orders() {

    // const data = [
    //     {
    //         _id: "123",
    //         customerInfo: {
    //             name: "John Doe",
    //             email: "example@gmail.com",
    //             "phone": "1234567890"
    //         }, 
    //         vehicleInfo : {
    //             make: "Toyota",
    //             model: "Corolla",
    //             year: "2020"
    //         },
    //         orderDate: "2021-10-10",
    //         receivedBy: "Jane Doe",
    //         status: "Received"
    //     },
    //     {
    //         _id: "123",
    //         customerInfo: {
    //             name: "John Doe",
    //             email: "example@gmail.com",
    //             "phone": "1234567890"
    //         }, 
    //         vehicleInfo : {
    //             make: "Toyota",
    //             model: "Corolla",
    //             year: "2020"
    //         },
    //         orderDate: "2021-10-10",
    //         receivedBy: "Jane Doe",
    //         status: "pending"
    //     },
    //     {
    //         _id: "123",
    //         customerInfo: {
    //             name: "John Tomas",
    //             email: "example@gmail.com",
    //             "phone": "3232942"
    //         }, 
    //         vehicleInfo : {
    //             make: "Tesla",
    //             model: "S",
    //             year: "2010"
    //         },
    //         orderDate: "2021-10-04",
    //         receivedBy: "Admin",
    //         status: "completed"
    //     },
    //     {
    //         _id: "1256",
    //         customerInfo: {
    //             name: "John Doe",
    //             email: "example@gmail.com",
    //             "phone": "1234567890"
    //         }, 
    //         vehicleInfo : {
    //             make: "Toyota",
    //             model: "Corolla",
    //             year: "2020"
    //         },
    //         orderDate: "2021-10-10",
    //         receivedBy: "Jane Doe",
    //         status: "In progress"
    //     }
        
    // ]
    const {orderList, setOrderList} = useAppStore();
    const [editOrder, setEditOrder] = useState({});
    const [isLoading, setLoading] = useState(false);
    const fetched = useRef(false);


    const getAllOrders = async() => {
        try {
            setLoading(true);
            const response = await axios.get(GETALLORDER,{withCredentials: true});
            console.log("RESPONSE: ", response)
            if(response.data.success){
                setLoading(false);
                console.log(response.data.data);
                setOrderList(response.data.data);
                // toast(response.data.message);
            } else {
                setLoading(false);
                console.log(response.data.message);
                // toast.error(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
            console.log(error);
        }
    }
    
    const handleEdit = (item) => {
        setEditOrder(item);
    }

    useEffect(() => {
        let  fetch = false;
        console.log("ORDER LIST", orderList.length)
        console.log("FETCHED: ", fetched)
        if (!fetched.current && !fetch && orderList.length === 0) {
            fetch = true;
            console.log("HI");
            fetched.current = true; // Set this immediately to prevent multiple calls
            getAllOrders();
        }
    }, []);

    if(isLoading){ 
        return <p>Loading...</p>
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
     <div className={classes.Orders}>
        {
            !editOrder._id && <div className={classes.container}>
                <div className={classes.header}> 
                    <h3>Orders</h3>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Order No</th>
                                <th>Customer</th>
                                <th>Vehicle</th>
                                <th>Order Date</th>
                                <th>Received by</th>
                                <th>Order status</th>
                                <th>View / Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList?.length > 0 
                                ? 
                                orderList?.map((item, index) => (
                                    <tr key={index} style={{backgroundColor: index % 2 !== 0 ? "#f2f2f2" : "white"}}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <h2>{`${item.customer_id.first_name} ${item.customer_id.last_name}`}</h2>
                                            <p>{item.customer_id.email}</p>
                                            <p>{item.customer_id.phone}</p>
                                        </td>
                                        <td>
                                            <h2>{item.vehicle_id.make}</h2>
                                            <p>{item.vehicle_id.model}</p>
                                            <p>{item.vehicle_id.year}</p>
                                        </td>
                                        <td>
                                            <h2>{`${formatDate(item.createdAt)}`}</h2>
                                        </td>
                                        <td>
                                            <h2>{item.employee_id ? `${item.employee_id.first_name} ${itme.employee_id.last_name}`: "Not Assigned"}</h2>
                                        </td>
                                        <td>
                                            <p style={{backgroundColor:`${getBgcolor(item.status)}`, color:`${getColor(item.status)}`, textAlign:"center", borderRadius:"30px", padding:"3px 0"}}>{item.status}</p>
                                        </td>
                                        <td style={{display:"flex", alignItems:"center", border: "none", paddingTop: "30px"}}>
                                            <p style={{fontSize:"20px"}}><CiIndent/></p>  <p style={{fontSize:"20px"}} onClick={()=>handleEdit(item)}><FaEdit/></p></td>
                                    </tr>
                                ))
                                : <tr><td colSpan="8">No data</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        }

        {
            editOrder._id && <div className={classes.EditOrders}>
            <div className={classes.container}>
                <div className={classes.header}> 
                    <h3>Edit Order</h3>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.form}>
                   
                        <div>
                            <h3>Customer :</h3>
                            <p>{`${editOrder.customer_id.first_name} ${editOrder.customer_id.last_name}`}</p>
                        </div>
                        <div>
                            <h3>Email :</h3>
                            <p>{editOrder.customer_id.email}</p>
                        </div>
                        <div>
                            <h3>Phone :</h3>
                            <p>{editOrder.customer_id.phone}</p>
                        </div>

                        <div>
                            <h3>Vehicle :</h3>
                            <p>{`${editOrder.vehicle_id.make} ${editOrder.vehicle_id.model} ${editOrder.vehicle_id.year}`}</p>
                        </div>
                       
                        <div>
                            <h3>Order Created At :</h3>
                            <p>{formatDate(editOrder.createdAt)}</p>
                        </div>
                    
                    <div className={classes.formGroup}>
                        <label>Employee</label>
                        <select className={classes.select}>
                            <option value="">Select Employee</option>
                            <option value="1">John Doe</option>
                            <option value="2">Jane Doe</option>
                            <option value="3">John Tomas</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}  style={{display: `${editOrder.employee_id? "block": "none"}`}} >
                        <label>Status</label>
                        <select>
                            <option value="Received">Received</option>
                            <option value="In progress">In progress</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}>
                        <button>Update</button>
                    </div>
                </div>
            </div>
            </div>
        }
    </div>
    
  )
}


export default Orders;