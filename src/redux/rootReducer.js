import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { loaderReducer } from "./loaderReducer";
export const rootReducer = combineReducers({
    commentsReducer,
    loaderReducer
});
