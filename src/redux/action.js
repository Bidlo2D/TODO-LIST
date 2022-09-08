import {
    DECREMENT,
    INCREMENT,
    TEXT_CHANGE,
    COMMENT_CREATE,
    COMMENT_DELETE,
    COMMENT_UPDATE,
    COMMENTS_LOAD,
    COMMENTS_REFRESH,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from './types'
export function incrementLikes() {
    return {
        type: INCREMENT
    }
}
export function decrementLikes() {
    return {
        type: DECREMENT
    }
}
export function textChange(text) {
    return {
        type: TEXT_CHANGE,
        text
    }
}
export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}
export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}
export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}
export function commentLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments/?_limit=10')
            const jsonData = await response.json()
            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData
                })
                dispatch(loaderOff())
            }, 1000)
        }
        catch (err) {
            dispatch(errorOn("Ошибка обращения к API"))
            dispatch(loaderOff())
        }
    }
}
export function commentRefresh(id1, id2) {
    return {
        type: COMMENTS_REFRESH,
        data: { id1, id2 }
    }
}
export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}
export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}
export function errorOn(text, timeOut = 3000) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        })
        setTimeout(() => { dispatch(errorOff()) }, timeOut)
    }
}
export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF
    }
}