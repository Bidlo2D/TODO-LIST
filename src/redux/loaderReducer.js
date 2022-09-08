import {
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_OFF,
    ERROR_DISPLAY_ON
} from "./types";
const initialState = {
    onLoad: false,
    onMessage: false,
    error: null
}
export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return { ...state, onLoad: true }
        case LOADER_DISPLAY_OFF:
            return { ...state, onLoad: false }
        case ERROR_DISPLAY_ON:
            return { ...state, onMessage: true, error: action.text }
        case ERROR_DISPLAY_OFF:
            return { ...state, onMessage: false, error: null }
        default:
            return state;
    }
}