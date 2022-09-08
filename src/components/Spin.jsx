import React from "react"
import { TailSpin } from "react-loader-spinner"
import { useSelector } from "react-redux"
import classes from "./css/Spin.module.css"
const Spin = () => {
  const spinner = useSelector((state) => state.loaderReducer.onLoad)
  return (
    <div className={classes.loader}>
      <TailSpin color="#00BFFF" height={75} width={75} visible={spinner} />
    </div>
  )
}

export default Spin
