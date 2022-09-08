import { TEXT_CHANGE } from "./types";
const initialState = {
    text: ''
}
export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_CHANGE:
            return { ...state, text: action.text }
        default:
            return state;
    }
}