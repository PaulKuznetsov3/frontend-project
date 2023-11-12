import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entetis/User';
import { loginReducer } from 'features/AuthByUsername';
import { counterReducer } from 'entetis/Counter';
import { StateSchema } from './StateSchema';

export function creatreReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
