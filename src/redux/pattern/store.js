import { createStore } from "redux"

const initialState = {
    likes: 10
}
const reducer = (state = initialState, action) => {
    console.log("reducer > ", action);
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, likes: state.likes += 1 }
        case 'DECREMENT':
            return { ...state, likes: state.likes -= 1 }
        default:
            return state;
    }
}
//Хранилище 
const store = createStore(reducer);

export default store;