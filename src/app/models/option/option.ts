import { IOption } from './option.interface';
import { User } from '../user/user';

export class Option implements IOption {
    public name: string;
    public value: number;
    public voters: Array<User>;

    constructor(option: any = {}) {
        this.name = option.name || null;
        this.value = option.value || 0;
        this.voters = option.voters || null;
    }
}