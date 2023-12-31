import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User } from '../../types/user';
import { userActions } from '../../slice/userSlice';

interface LoginByUsermaneProps {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsermaneProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
