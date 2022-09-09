import task from "./classes/task";
import { TASK_CREATE, TASK_DELETE, TASK_UPDATE, TASKS_LOAD, TASKS_REFRESH, TASK_CHANGE_STATUS } from "./types";
const initialState = {
    tasks: []
}
export const commentsReducer = (state = initialState, action) => {
    /* console.log("comment reducer >>> ", action) */
    /* console.log("tasks >>> ", state.tasks) */
    switch (action.type) {
        case TASK_CREATE:
            return { ...state, tasks: [...state.tasks, action.data] }
        case TASK_DELETE:
            return (() => {
                const { tasks } = state
                const newComments = tasks.filter(comment => comment.id !== action.id)
                return { ...state, tasks: newComments }
            })()
        case TASK_CHANGE_STATUS:
            return (() => {
                const { tasks } = state
                const { data } = action
                const index = tasks.findIndex(c => c.id === data.id)
                const newComments = [...state.tasks]
                newComments[index].status = data.status
                return { ...state, tasks: newComments }
            })()
        case TASK_UPDATE:
            const { data } = action
            const { tasks } = state
            const index = tasks.findIndex(c => c.id === data.id)
            const newComments = [
                ...tasks.slice(0, index),
                data,
                ...tasks.slice(index + 1)]
            return { ...state, tasks: newComments }
        case TASKS_LOAD:
            const commentsLoad = action.data.map(comm => {
                return new task(comm.name);
            })
            return { ...state, tasks: commentsLoad }
        case TASKS_REFRESH:
            return (() => {
                //arr[a] = arr.splice(b, 1, arr[a])[0];
                //[arr[2], arr[5]]  = [arr[5], arr[2]];
                const { data } = action;
                const { tasks } = state;
                const id1 = tasks.findIndex(c => c.id == data.id1);
                const id2 = tasks.findIndex(c => c.id == data.id2);
                const commentsRefresh = [...tasks];
                [commentsRefresh[id1], commentsRefresh[id2]] = [commentsRefresh[id2], commentsRefresh[id1]]
                return { ...state, tasks: commentsRefresh }
            })()
        default:
            return state;
    }
}