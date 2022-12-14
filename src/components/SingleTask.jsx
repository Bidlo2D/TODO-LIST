import React from "react"
import { useState, useEffect } from "react"
import {
  commentDelete,
  commentRefresh,
  commentUpdate,
  taskStatusChange,
} from "../redux/action"
import { useDispatch } from "react-redux"
// css
import classes from "./css/SingleTask.module.css"
// components
import ButtonWithImage from "./ButtonWithImage"
// images
import bucket from "../images/bucket.png"
import checkMark from "../images/checkMark.png"
const SingleTask = (props) => {
  const { text, id } = props.comment
  const [textComment, setTextComment] = useState("нет текста")
  const [statusTask, setStatusTask] = useState(false)
  const [styleOnClick, setStyleOnClick] = useState(classes.uncompleted)
  const dispatch = useDispatch()
  useEffect(() => {
    if (text) {
      setTextComment(text)
    }
  }, [text])
  const deleteComment = (e) => {
    dispatch(commentDelete(id))
  }
  const completeTask = () => {
    dispatch(taskStatusChange(!statusTask, id))
    setStatusTask(!statusTask)
    if (!statusTask) {
      setStyleOnClick(classes.completed)
    } else {
      setStyleOnClick(classes.uncompleted)
    }
  }
  const handleChange = (e) => {
    setTextComment(e.target.value)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(textComment, id))
  }
  //drag&drop
  const onDragOver = (event) => {
    event.preventDefault()
  }
  const onStartDrag = (event) => {
    event.dataTransfer.setData("id", event.currentTarget.id)
  }
  const Drop = (event) => {
    let itemId = event.dataTransfer.getData("id")
    dispatch(commentRefresh(itemId, event.currentTarget.id))
  }
  return (
    <form
      id={props.id}
      draggable="true"
      onDrop={Drop}
      onDragStart={onStartDrag}
      onDragOver={onDragOver}
      onSubmit={handleUpdate}
      className={`${classes.commentsItem} ${styleOnClick}`}
    >
      {/* выполнить */}
      <ButtonWithImage
        classes={`${classes.buttonTask} ${styleOnClick}`}
        onClick={completeTask}
      >
        {checkMark}
      </ButtonWithImage>
      {/* строка ввода */}
      <input
        onChange={handleChange}
        className={classes.taskText}
        type="text"
        value={textComment}
      />
      {/* удалить */}
      <ButtonWithImage
        classes={`${classes.buttonTask} ${styleOnClick}`}
        onClick={deleteComment}
      >
        {bucket}
      </ButtonWithImage>
    </form>
  )
}

export default SingleTask
