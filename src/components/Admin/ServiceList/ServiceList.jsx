import React from 'react'
import classes from "./ServiceList.module.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ServiceList() {

    const data = [
        {
            "_id": "1",
            "name": "Oil Change",
            "description": "going forward,a new normal that has evolved from generation heading",
            "price": "120 birr"
        },
        {
            "_id": "2",
            "name": "Motor Change",
            "description": "going forward,a new normal that has evolved from generation heading",
            "price": "120 birr"
        },
        {
            "_id": "3",
            "name": "Tier Change",
            "description": "going forward,a new normal that has evolved from generation heading",
            "price": "120 birr"
        },
        {
            "_id": "4",
            "name": "Spare Change",
            "description": "going forward,a new normal that has evolved from generation heading",
            "price": "120 birr"
        }
    ]


  return (
    <div className={classes.ServiceList}>
        <div className={classes.header}> 
            <h3>Services we provide</h3>
            <div className={classes.line}></div>
        </div>
        <p className={classes.text}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,a new normal that has evolved from generation heading towards.</p>

        <div className={classes.listContainer}>
                {
                    data.map((item,index)=>{
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
                    <input type="text" placeholder='Service name' />
                </div>
                <div className={classes.description}>
                    <textarea placeholder='Service description' rows={6} style={{resize:"none"}}></textarea>
                </div>
                <button className={classes.btn} >{"ADD CUSTOMER"}</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceList