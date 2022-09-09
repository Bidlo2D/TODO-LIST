import React from "react"
const ButtonWithImage = (props) => {
  return (
    <div onClick={props.onClick} className={props.classes}>
      <img src={props.children}></img>
    </div>
  )
}

export default ButtonWithImage
