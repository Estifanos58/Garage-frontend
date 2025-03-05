import React from 'react'
import classes from './EmOrders.module.css'
import { data } from 'react-router-dom'
import { CiIndent } from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'
import moment from 'moment'

function EmOrders() {

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
            <table>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Customer</th>
                        <th>Vehicle</th>
                        <th>Order Date</th>
                        <th>Order status</th>
                        <th>View </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length > 0 
                        ? 
                        data?.map((item, index) => (
                            <tr key={index} style={{backgroundColor: index % 2 !== 0 ? "#f2f2f2" : "white"}}>
                                <td>{index + 1}</td>
                                <td>
                                    <h2>{`${item.customerInfo.name}`}</h2>
                                    <p>{item.customerInfo.email}</p>
                                    <p>{item.customerInfo.phone}</p>
                                </td>
                                <td>
                                    <h2>{item.vehicleInfo.make}</h2>
                                    <p>{item.vehicleInfo.model}</p>
                                    <p>{item.vehicleInfo.year}</p>
                                </td>
                                <td>
                                    <h2>{`${formatDate(item.orderDate)}`}</h2>
                                </td>
                                <td>
                                    <p style={{backgroundColor:`${getBgcolor(item.status)}`, color:`${getColor(item.status)}`, textAlign:"center", borderRadius:"30px", padding:"3px 0"}}>{item.status}</p>
                                </td>
                                <td style={{display:"flex", alignItems:"center", border: "none", paddingTop: "30px"}}>
                                    <p style={{fontSize:"20px"}}><CiIndent/></p></td>
                            </tr>
                        ))
                        : <tr><td colSpan="8">No data</td></tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmOrders