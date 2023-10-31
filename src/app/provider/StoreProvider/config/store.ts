import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entetis/User';
import { counterReducer } from 'entetis/Counter';
import { StateSchema } from './StateSchema';

export function creatreReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
