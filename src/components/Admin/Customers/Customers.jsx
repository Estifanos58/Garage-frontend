import React from 'react'
import classes from "./Customers.module.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import moment from 'moment'
function Customers() {
    const data = [
      {
        "_id": "1",
        "first_name": "Tewdaj",
        "last_name": "Shola",
        "email": "example@gmail.com",
        "phone": "123456789",
        "added_date": "Feb 3, 2001",
        "active": true,
      },
      {
        "_id": "2",
        "first_name": "Amara",
        "last_name": "Tola",
        "email": "example@gmail.com",
        "phone": "123456789",
        "added_date": "Feb 3, 2001",
        "active": false,
      },
      {
        "_id": "3",
        "first_name": "Ayele",
        "last_name": "Mamo",
        "email": "example@gmail.com",
        "phone": "123456789",
        "added_date": "Feb 3, 2001",
        "active": true,
      }
    ]

    const formatDate = (timestamp) => moment(Number(timestamp)).format("MMM DD, YYYY");

  return (
    <div className={classes.Customers}>
         <div className={classes.container}>
                    <div className={classes.header}> 
                        <h3>Customers</h3>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchContent}>
                            <input type="text" placeholder='Search for a customer using first name, last name, email address of phone number' />
                            <p><CiSearch/></p>
                        </div>
                    </div>
                    <div className={classes.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Added Date</th>
                                    <th>Active</th>
                                    <th>Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.length > 0 
                                    ? 
                                    data?.map((employee, index) => (
                                        <tr key={index} style={{backgroundColor: index % 2 !== 0 ? "#f2f2f2" : "white"}}>
                                            <td>{index}</td>
                                            <td>{employee.first_name}</td>
                                            <td>{employee.last_name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{formatDate(employee.joined_date)}</td>
                                            <td>{employee.active?"Yes":"No"}</td>
                                            <td>
                                                <button><FaEdit /></button>
                                                <button><MdDelete/></button>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr><td colSpan="8">No data</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
          </div>
    </div>
  )
}

export default Customers