import React from 'react'
import classes from "./Employees.module.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Employees() {

    const data = [
        {
            "id": 1,
            "status": "Initial",
            "first_name": "John",
            "last_name": "Doe",
            "email": "example@gmail.com",
            "phone": "555-555-5555",
            "added_date": "2021-09-01",
            "role": "employee",
        },
        {
            "id": 2,
            "status": "Active",
            "first_name": "Johnnatan",
            "last_name": "Daniel",
            "email": "example@gmail.com",
            "phone": "555-876-5555",
            "added_date": "2021-09-01",
            "role": "admin",
        },
        {
            "id": 3,
            "status": "Inactive",
            "first_name": "Abel",
            "last_name": "Kebebede",
            "email": "example@gmail.com",
            "phone": "123-555-5555",
            "added_date": "2021-09-01",
            "role": "manager",
        },
        {
            "id": 4,
            "status": "Active",
            "first_name": "Jane",
            "last_name": "Kane",
            "email": "example@gmail.com",
            "phone": "555-093-5555",
            "added_date": "2021-09-01",
            "role": "employee",
        }
    ]

    const getColor = (status) => {
        if(status === "Initial") return "rgba(238, 238, 13, 0.52)";
        if(status === "Active") return "rgba(99, 238, 13, 0.49)"
        if(status === "Inactive") return "rgba(238, 13, 21, 0.49)";
    }

  return (
    <div className={classes.Employees}>
        <div className={classes.container}>
            <div className={classes.header}> 
                <h3>Employees</h3>
                <div className={classes.line}></div>
            </div>
            <div className={classes.table}>
                <table>
                    <thead>
                        <tr>
                            <th>Active</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Added Date</th>
                            <th>Role</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 
                            ? 
                            data.map((employee) => (
                                <tr key={employee.id} style={{backgroundColor: employee.id % 2 !== 0 ? "#f2f2f2" : "white"}}>
                                    <td style={{backgroundColor: getColor(employee.status), }}>{employee.status}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.added_date}</td>
                                    <td>{employee.role}</td>
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

export default Employees