import React from "react"
import { useState, useEffect } from "react"
import classes from "./css/SingleTask.module.css"
import { commentDelete, commentRefresh, commentUpdate } from "../redux/action"
import { useDispatch } from "react-redux"
const SingleTask = (props) => {
  const { text, id } = props.comment
  const [textComment, setTextComment] = useState("нет текста")
  const dispatch = useDispatch()
  useEffect(() => {
    if (text) {
      setTextComment(text)
    }
  }, [text])
  const deleteComment = (e) => {
    dispatch(commentDelete(id))
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
      className={classes.commentsItem}
    >
      {/* выполнить */}
      <span
        style={{ color: "green", marginRight: 15 }}
        className={classes.buttonTask}
      >
        ✓
      </span>
      {/* строка ввода */}
      <input
        onChange={handleChange}
        className={classes.taskText}
        type="text"
        value={textComment}
      />
      {/* удалить */}
      <span
        style={{ color: "red", marginLeft: 15 }}
        className={classes.buttonTask}
        onClick={deleteComment}
      >
        ✗
      </span>
    </form>
  )
}

export default SingleTask
