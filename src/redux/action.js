import task from './classes/task'
import {
    TEXT_CHANGE,
    TASK_CREATE,
    TASK_DELETE,
    TASK_UPDATE,
    TASKS_LOAD,
    TASKS_REFRESH,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF,
    TASK_CHANGE_STATUS
} from './types'
export function textChange(text) {
    return {
        type: TEXT_CHANGE,
        text
    }
}
export function commentCreate(text) {
    return {
        type: TASK_CREATE,
        data: new task(text)
    }
}
export function commentDelete(id) {
    return {
        type: TASK_DELETE,
        id
    }
}
export function taskStatusChange(status, id) {
    return {
        type: TASK_CHANGE_STATUS,
        data: { status, id }
    }
}
export function commentUpdate(text, id) {
    return {
        type: TASK_UPDATE,
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
                    type: TASKS_LOAD,
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
        type: TASKS_REFRESH,
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