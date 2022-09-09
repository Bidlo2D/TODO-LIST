import React, { memo } from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { commentCreate, commentLoad } from "../redux/action"
import { CSSTransition } from "react-transition-group"
import uniqid from "uniqid"
//components
import Spin from "./Spin"
import SingleTask from "./SingleTask"
import ErrorMessage from "./ErrorMessage"
import NoTask from "./NoTask"
import ButtonWithImage from "./ButtonWithImage"
//css
import "./css/CommAnim.css"
import classes from "./css/Tasks.module.css"
import classesButton from "./css/AddTaskButton.module.css"
//image
import plus from "../images/plus.png"

const Tasks = memo((props) => {
  const [textComment, setTextComment] = useState("")
  const dispatch = useDispatch()
  const show = useSelector((state) => {
    return state.loaderReducer.onMessage
  })
  const comments = useSelector((state) => {
    return state.commentsReducer.comments
  })
  const spinnerShow = useSelector((state) => state.loaderReducer.onLoad)
  const handleChange = (e) => {
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid()
    dispatch(commentCreate(textComment, id))
    setTextComment("")
  }
  useEffect(() => {
    dispatch(commentLoad())
  }, [])
  const error = useSelector((state) => state.loaderReducer.error)
  return (
    <div className={classes.cardComments}>
      <form onSubmit={handleSubmit} className={classes.itemCreate}>
        <input
          className={classes.taskNew}
          id="textInput"
          type="text"
          value={textComment}
          placeholder="Новая задача"
          onChange={handleChange}
        />
        <input type="reset" hidden={true} />
        <ButtonWithImage classes={classesButton.add} onClick={handleSubmit}>
          {plus}
        </ButtonWithImage>
      </form>
      <div className={classes.commentsWrap}>
        <Spin />
        <CSSTransition
          classNames="alert"
          in={show}
          timeout={1500}
          unmountOnExit
        >
          {<ErrorMessage>{error}</ErrorMessage>}
        </CSSTransition>
        <div>
          {comments.length > 0 || spinnerShow ? (
            comments.map((comment) => (
              <SingleTask id={comment.id} key={comment.id} comment={comment} />
            ))
          ) : (
            <NoTask />
          )}
        </div>
      </div>
    </div>
  )
})

export default Tasks
