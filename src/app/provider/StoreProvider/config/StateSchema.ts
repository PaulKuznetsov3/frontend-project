import { CounterShema } from 'entetis/Counter/model/types/counterShema';
import { UserSchema } from 'entetis/User';

export interface StateSchema {
    counter: CounterShema;
    user: UserSchema
}
