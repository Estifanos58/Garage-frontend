import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHandPointUp, FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import classes from "./NewOrder.module.css"
import axios from 'axios';
import { GETALLVEHICLE, SEARCHCUSTOMER } from '../../../utils/constant';
import spinner from '../../../assets/Spinner-2.gif'

function NewOrder() {
    const [search, setSearch] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [selecteCustomer, setSelectCutomer] = useState({});
    const [customerVehicle, setCustomerVehicle] = useState({});
    const [isVehicleSearching, setVehicleSearching] = useState(false)
    

    const getSearchResult = async () =>{
        if(search){
            setLoading(true);
            const response = await axios.post(SEARCHCUSTOMER,{searchTerm: search},{withCredentials: true});
            if(response.data.success){
                setLoading(false)
                if(Array.isArray(response.data.data)){
                    setSearchResult(response.data.data);
                }else {
                    setSearchResult([response.data.data]);
                }
            }else {
                setLoading(false);
                console.log("ERROR: ", response.data.message);
            }
            console.log(response);
        }
    }

    const getCustomerVehicle = async () => {
        if(selecteCustomer._id){
            try {
                setVehicleSearching(true)
                const response = await axios.post(GETALLVEHICLE, {customer_id: selecteCustomer._id},{withCredentials: true});
                if(response.data.success){
                    setCustomerVehicle(response.data.data);
                    setVehicleSearching(false)
                }else {
                    toast.error(response.data.message);
                    setVehicleSearching(false)
                }
                console.log("RESPONSE: ", response);
            } catch (error) {
                console.log("ERROR: ", error)
                setVehicleSearching(false)
            }
        }
        
    }

    useEffect(()=>{
       getSearchResult()
       getCustomerVehicle()

    },[search, selecteCustomer])

    const handleSelect = (item)=>{
        if(selecteCustomer && item._id == selecteCustomer._id){
          setSelectCutomer(null);
        } else {
          setSelectCutomer(item)
        }
    }

    console.log("CUSTOMER VEHICLE: ", customerVehicle)


  return (
    <div className={classes.NewOrder}>
        <div className={classes.container}>
            <div className={classes.header}> 
                <h3>Create a new order</h3>
                <div className={classes.line}></div>
            </div>
            <div className={classes.customerInfo}>
                {
                    !selecteCustomer._id ? <div>
                        <div className={classes.searchContainer}>
                            <input type="text" placeholder='Search for a customer using first name, last name, email address of phone number' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                            <p>{isLoading ? <img src={spinner} alt="" /> :<CiSearch/>}</p>
                        </div>
                        {
                            searchResult.length > 0 && <table className={classes.customerList}>
                                <thead className={classes.customer}>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        searchResult.map((customer, index)=>(
                                            <tr className={classes.customer} key={index} style={{backgroundColor: selecteCustomer ? selecteCustomer._id === customer._id  && "#1E90FF" :index % 2 !== 0 ? "#f2f2f2" : "white" }}>
                                                <td>{customer.first_name}</td>
                                                <td>{customer.last_name}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.phone}</td>
                                                <td style={{fontSize:"16px", textAlign:"center", cursor:"pointer"}} onClick={()=>handleSelect(customer)}><FaHandPointUp/></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        } 
                    </div> : 
                    <div className={classes.customerDetails}>
                        <h1>{`Customer: ${selecteCustomer.first_name} ${selecteCustomer.last_name}`}</h1>
                        <p>Email: <span>{`${selecteCustomer.email}`}</span></p>
                        <p>Phone: <span>{` ${selecteCustomer.phone}`}</span></p>
                        <p>Active Customer: <span>{` ${selecteCustomer.status}`}</span></p>
                        <p>Added Date: <span>{` ${selecteCustomer.added_date}`}</span></p>
                        <div className={classes.editConteiner}>
                            <p>Edit customer info</p>
                            <p className={classes.edit}><FaEdit/></p>
                        </div>
                        <div className={classes.close} onClick={handleSelect}><IoClose/></div>
                    </div>
                }
            </div>
            {
                (!isVehicleSearching && customerVehicle.length > 0 && selecteCustomer._id)&&
                    (<div className={classes.customerVehicle}>
                        <h1>Customer Vehicle</h1>
                        <table className={classes.vehicleList}>
                            <thead>
                                <tr>
                                    <th>Vehicle Type</th>
                                    <th>Vehicle Model</th>
                                    <th>Vehicle Year</th>
                                    <th>License Serial Number</th>
                                    <th>Vehicle Model</th>
                                    <th>Vehicle Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customerVehicle.length > 0 && customerVehicle.map((vehicle, index)=>(
                                        <tr key={index}>
                                            <td>{vehicle.type}</td>
                                            <td>{vehicle.model}</td>
                                            <td>{vehicle.year}</td>
                                            <td>{vehicle.serial_number}</td>
                                            <td>{vehicle.model}</td>
                                            <td>{vehicle.color}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>)
                } 
                {(!isVehicleSearching && customerVehicle.length === 0) &&
                    <p>No vehicle found</p>
                }
            
           
            
        </div>
    </div>
  )
}

export default NewOrder

