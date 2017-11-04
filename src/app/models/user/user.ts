import { IUser } from './user.interface';

export class User implements IUser {
    public username: string;
    public id: string;
    public option: string;

    constructor(user: any = {}) {
        this.username = user.username || null;
        this.id = user.id || null;
        this.option = user.option || null;
    }
}