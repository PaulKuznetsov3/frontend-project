import { CounterShema } from '../types/counterShema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state:CounterShema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decremented()),
        ).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state:CounterShema = { value: 10 };
        expect(
            counterReducer(state, counterActions.incremented()),
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.incremented()),
        ).toEqual({ value: 1 });
    });
});
