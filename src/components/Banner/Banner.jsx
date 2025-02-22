import React from 'react'
import classes from "./Banner.module.css"

function Banner({banner, header}) {
  return (
    <div className={classes.container} style={{backgroundImage: `url(${banner})`}}>
        <div className={classes.content}>
            <h3>{header}</h3>
        </div>
        
    </div>
  )
}

export default Banner