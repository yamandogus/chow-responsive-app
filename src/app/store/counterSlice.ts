import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
    count: number
}
const initialState: CounterState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        incrementByAmount(state, action: { payload: number; }) {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer