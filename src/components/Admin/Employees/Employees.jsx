import React, { useEffect, useState } from 'react'
import classes from "./Employees.module.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GETALLEMPLOYEES } from '../../../utils/constant';
import { useAppStore } from '../../../hook/store';
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import axios from 'axios';

function Employees() {

    
    const {employeeList, setEmployeeList, setSelectedEmployee} = useAppStore();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getAllEmployees = async() => {
        try {
            setLoading(true);
            const response = await axios.get(GETALLEMPLOYEES, {withCredentials: true});
            if(response.data.success){
                setEmployeeList(response.data.data);
                setLoading(false); 

            } else{
                setLoading(false)
                console.log("No data found");
            }
           
            // console.log("GETALLEMPLOYEES: ", response);
        } catch (error) {
            setLoading(false)
            console.log("Error: ", error)
        }
       
    }
    useEffect(() => {
        if (employeeList.length === 0) {
            getAllEmployees();
        }
    }, []);

    console.log("EMPLOYEES: ",employeeList);

    const formatDate = (timestamp) => moment(Number(timestamp)).format("MMM DD, YYYY");

    const getColor = (status) => {
        if(status === "initial") return "rgba(238, 238, 13, 0.52)";
        if(status === "active") return "rgba(99, 238, 13, 0.49)"
        if(status === "inactive") return "rgba(238, 13, 21, 0.49)";
    }
    if(isLoading) return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <h1>Loading</h1>
        </div>
    )

    const handleSelectUser = (employee)=> {
        setSelectedEmployee(employee);
        navigate("/admin/edit_employee")
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
                            employeeList?.length > 0 
                            ? 
                            employeeList?.map((employee, index) => (
                                <tr key={index} style={{backgroundColor: index % 2 !== 0 ? "#f2f2f2" : "white"}}>
                                    <td style={{backgroundColor: getColor(employee.status), }}>{employee.status}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>{formatDate(employee.joined_date)}</td>
                                    <td>{employee.role}</td>
                                    <td>
                                        <button onClick={()=>handleSelectUser(employee)}><FaEdit /></button>
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