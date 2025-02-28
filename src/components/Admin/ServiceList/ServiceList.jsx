import React, { useEffect, useState } from 'react'
import classes from "./ServiceList.module.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from 'axios';
import { ADDSERVICE, GETALLSERVICE } from '../../../utils/constant';
import { useAppStore } from '../../../hook/store';

function ServiceList() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {addServiceList,serviceList, setServiceList} = useAppStore();
    const [isLoading, setLoading] = useState(false);
    const [isFound, setFound] = useState(false);

    const getAllService = async()=> {
        try {
            setFound(false)
            const response =  await axios.get(GETALLSERVICE,{withCredentials:true});
            if(response.data.success) {
                setFound(true)
                setServiceList(response.data.data)
            }else {
                console.log("ERROR: ", error)
                setFound(true);
            }
            console.log("RESPONSE :", response)
        } catch (error) {
            setFound(true);
            console.log("ERROR: ", error)
        }
    }

    useEffect(()=>{
        if(serviceList.length == 0){
            getAllService();
        }   
    },[])

    const handleSubmit = async()=>{
        try {
            if(!name || !price || !description) {
                return toast.error("All fields are required")
            }
            setLoading(true);
            const response = await axios.post(ADDSERVICE,{name,description,price},{withCredentials:true})
            console.log("RESPONSE FOR SERVICE: ", response);
            if(response.data.success){
                setLoading(false)
                addServiceList(response.data.data);
                toast.success("SERVICE ADDED")
            }else {
                setLoading(false)
                console.log(response.data.message);
            }

        } catch (error) {
            setLoading(false)
            console.log("ERROR HAPPENED: ", error)
        }
        
    }

    // const data = [
    //     {
    //         "_id": "1",
    //         "name": "Oil Change",
    //         "description": "going forward,a new normal that has evolved from generation heading",
    //         "price": "120 birr"
    //     },
    //     {
    //         "_id": "2",
    //         "name": "Motor Change",
    //         "description": "going forward,a new normal that has evolved from generation heading",
    //         "price": "120 birr"
    //     },
    //     {
    //         "_id": "3",
    //         "name": "Tier Change",
    //         "description": "going forward,a new normal that has evolved from generation heading",
    //         "price": "120 birr"
    //     },
    //     {
    //         "_id": "4",
    //         "name": "Spare Change",
    //         "description": "going forward,a new normal that has evolved from generation heading",
    //         "price": "120 birr"
    //     }
    // ]


  return (
    <div className={classes.ServiceList}>
        <div className={classes.header}> 
            <h3>Services we provide</h3>
            <div className={classes.line}></div>
        </div>
        <p className={classes.text}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,a new normal that has evolved from generation heading towards.</p>

        <div className={classes.listContainer}>
                {
                    isFound ? <p>Loading ...</p> :
                    serviceList === null ? <p>No Service Found</p> :
                    serviceList?.map((item,index)=>{
                        return (
                            <div className={classes.itemContainer} key={index}>
                                <div className={classes.left}>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>
                                <div className={classes.right}>
                                    <button className={classes.red}><FaEdit/></button>
                                    <button><MdDelete/></button>
                                </div>
                            </div>
                        )
                    })
                }
        </div>

        <div className={classes.AddService}>
            <div className={classes.header}> 
                <h3>Add a new service</h3>
                <div className={classes.line}></div>
            </div> 
             <div className={classes.form}>
                <div className={classes.name}>
                    <input type="text" placeholder='Service name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className={classes.name}>
                    <input type="text" placeholder='Service price in Birr' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className={classes.description}>
                    <textarea placeholder='Service description' rows={6} style={{resize:"none"}} value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <button className={classes.btn} onClick={handleSubmit}>{isLoading? "Loading..":"ADD SERVICE"}</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceList