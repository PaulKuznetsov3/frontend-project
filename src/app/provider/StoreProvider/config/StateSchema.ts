import { CounterShema } from 'entetis/Counter/model/types/counterShema';
import { UserSchema } from 'entetis/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterShema;
    user: UserSchema;
    loginForm: LoginSchema;
}
