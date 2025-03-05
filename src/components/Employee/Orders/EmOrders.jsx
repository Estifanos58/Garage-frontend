import React, { useEffect, useState , useRef} from 'react'
import classes from './EmOrders.module.css'
import { data } from 'react-router-dom'
import { CiIndent } from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'
import moment from 'moment'
import {useAppStore} from '../../../hook/store'
import { GETEMPLOYEEORDER } from '../../../utils/constant'
import {toast} from 'react-toastify';
import axios from 'axios';

function EmOrders() {
    const { orders, setOrders} = useAppStore();
    const [isLoading, setLoading] = useState(false);
    const fetched = useRef(false);
    const data = [
        {
            _id: "123",
            customerInfo: {
                name: "John Doe",
                email: "example@gmail.com",
                "phone": "1234567890"
            }, 
            vehicleInfo : {
                make: "Toyota",
                model: "Corolla",
                year: "2020"
            },
            orderDate: "2021-10-10",
            receivedBy: "Jane Doe",
            status: "Received"
        },
        {
            _id: "123",
            customerInfo: {
                name: "John Doe",
                email: "example@gmail.com",
                "phone": "1234567890"
            }, 
            vehicleInfo : {
                make: "Toyota",
                model: "Corolla",
                year: "2020"
            },
            orderDate: "2021-10-10",
            receivedBy: "Jane Doe",
            status: "pending"
        },
        {
            _id: "123",
            customerInfo: {
                name: "John Tomas",
                email: "example@gmail.com",
                "phone": "3232942"
            }, 
            vehicleInfo : {
                make: "Tesla",
                model: "S",
                year: "2010"
            },
            orderDate: "2021-10-04",
            receivedBy: "Admin",
            status: "completed"
        },
        {
            _id: "1256",
            customerInfo: {
                name: "John Doe",
                email: "example@gmail.com",
                "phone": "1234567890"
            }, 
            vehicleInfo : {
                make: "Toyota",
                model: "Corolla",
                year: "2020"
            },
            orderDate: "2021-10-10",
            receivedBy: "Jane Doe",
            status: "In progress"
        }
        
    ]

    useEffect(()=>{
        if(orders.length === 0) {
            // fetched = true;
            getOrders();
        }
    },[])

    const getOrders= async ()=> {
        try {
            setLoading(true);
            const response = await  axios.get(GETEMPLOYEEORDER, {withCredentials: true});
            console.log("Response: ", response);
            if(response.data.success){
                setLoading(false);
                setOrders(response.data.data);
            }else {
                setLoading(false);
                toast.error(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error(response.data.message);
            console.log("ERROR: ", error);
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
    <div className={classes.EmOrders}>
        <div className={classes.header}> 
                            <h3>Orders For You</h3>
                            <div className={classes.line}></div>
                        </div>
        <div className={classes.table}>
            {
                isLoading ? <p>Loading</p> :
                <table>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Customer</th>
                        <th>Vehicle</th>
                        <th>Order Date</th>
                        <th>Order status</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.length > 0 
                        ? 
                        orders?.map((item, index) => (
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
                                    <p style={{backgroundColor:`${getBgcolor(item.status)}`, color:`${getColor(item.status)}`, textAlign:"center", borderRadius:"30px", padding:"3px 0"}}>{item.status}</p>
                                </td>
                                <td style={{display:"flex", alignItems:"center", border: "none", paddingTop: "30px"}}>
                                    <p style={{fontSize:"20px"}}><CiIndent/></p></td>
                            </tr>
                        ))
                        : <tr><td style={{colSpan:"8"}}>No data</td></tr>
                    }
                </tbody>
            </table>
            }
           
        </div>
    </div>
  )
}

export default EmOrders