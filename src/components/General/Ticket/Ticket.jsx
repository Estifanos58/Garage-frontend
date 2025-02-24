import React from 'react'
import classes from "./Ticket.module.css"

function Ticket({data}) {
  return (
    <div className={classes.container}>
        <p>SERVICE AND REPAIRS</p>
        <h3>{data.name}</h3>
        <div className={classes.footer}>
            <p>READ MORE +</p>
            <img src={data.icon} alt="" />
        </div>
    </div>
  )
}

export default Ticket