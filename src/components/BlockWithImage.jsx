import React from "react"
import classes from "./css/BlockWithImage.module.css"
const BlockWithImage = (props) => {
  return (
    <div onClick={props.onClick} className={classes.BWI}>
      <img src={props.children}></img>
    </div>
  )
}

export default BlockWithImage
