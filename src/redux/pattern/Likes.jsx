import React from "react"
import { connect } from "react-redux"
import classes from "./css/Likes.module.css"
import { incrementLikes, decrementLikes } from "../redux/action"
const Likes = (props) => {
  return (
    <div className={classes.likeControls}>
      <button
        style={{ color: "red" }}
        onClick={props.onIncrementLikes}
        className={classes.button}
      >
        ❤ {props.likes}
      </button>
      <button
        style={{ marginLeft: 10 }}
        onClick={props.onDecrementLikes}
        className={classes.button}
      >
        ❤
      </button>
    </div>
  )
}
function mapStateToProps(state) {
  const { likesReducer } = state
  return {
    likes: likesReducer.likes,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      dispatch(incrementLikes())
    },
    onDecrementLikes: () => {
      dispatch(decrementLikes())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes) //новый компонент с подключенным Redux
