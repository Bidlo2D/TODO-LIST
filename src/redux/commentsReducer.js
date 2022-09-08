import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD, COMMENTS_REFRESH } from "./types";
const initialState = {
    comments: []
}
export const commentsReducer = (state = initialState, action) => {
    /* console.log("comment reducer >>> ", action) */
    /* console.log("comments >>> ", state.comments) */
    switch (action.type) {
        case COMMENT_CREATE:
            return { ...state, comments: [...state.comments, action.data] }
        case COMMENT_DELETE:
            return (() => {
                const { comments } = state
                const newComments = comments.filter(comment => comment.id !== action.id)
                return { ...state, comments: newComments }
            })()
        case COMMENT_UPDATE:
            const { data } = action
            const { comments } = state
            const index = comments.findIndex(c => c.id === data.id)
            const newComments = [
                ...comments.slice(0, index),
                data,
                ...comments.slice(index + 1)]
            return { ...state, comments: newComments }
        case COMMENTS_LOAD:
            const commentsLoad = action.data.map(comm => {
                return {
                    text: comm.name,
                    id: comm.id
                }
            })
            return { ...state, comments: commentsLoad }
        case COMMENTS_REFRESH:
            return (() => {
                //arr[a] = arr.splice(b, 1, arr[a])[0];
                //[arr[2], arr[5]]  = [arr[5], arr[2]];
                const { data } = action;
                const { comments } = state;
                const id1 = comments.findIndex(c => c.id == data.id1);
                const id2 = comments.findIndex(c => c.id == data.id2);
                const commentsRefresh = [...comments];
                [commentsRefresh[id1], commentsRefresh[id2]] = [commentsRefresh[id2], commentsRefresh[id1]]
                return { ...state, comments: commentsRefresh }
            })()
        default:
            return state;
    }
}