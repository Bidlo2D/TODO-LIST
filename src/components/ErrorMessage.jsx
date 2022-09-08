import React from "react"
import { useState } from "react"
import classes from "./css/ErrorMessage.module.css"
const ErrorMessage = ({ children }) => {
  const [error, setError] = useState(children)
  return <div className={classes.errorMessage}>{error}</div>
}

export default ErrorMessage
