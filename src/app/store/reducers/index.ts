import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";

// Örnek bir reducer
const exampleReducer = (state = {}, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "EXAMPLE_ACTION":
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    example: exampleReducer,
    counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;