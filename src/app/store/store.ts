import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Reducer dosyanızı doğru şekilde içe aktarın

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;