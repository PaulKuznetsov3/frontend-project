import { createSlice } from '@reduxjs/toolkit';
import { CounterShema } from '../types/counterShema';

const initialState: CounterShema = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state: CounterShema) => {
            state.value += 1;
        },
        decremented: (state: CounterShema) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
