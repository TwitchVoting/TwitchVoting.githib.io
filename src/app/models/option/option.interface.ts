import { User } from '../user/user';

export interface IOption {
    name: string;
    value: number;
    voters: Array<User>;
}