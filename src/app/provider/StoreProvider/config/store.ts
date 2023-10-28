import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entetis/Counter';
import { StateSchema } from './StateSchema';

export function creatreReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
