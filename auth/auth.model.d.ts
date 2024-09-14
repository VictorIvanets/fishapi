import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export declare enum Sex {
    F = "female",
    M = "male"
}
export interface AuthModel extends Base {
}
export declare class AuthModel extends TimeStamps {
    login: string;
    passwordHash: string;
    name: string;
    subname: string;
    age: number;
    sex: Sex;
    country: string;
    city: string;
    img?: string;
}
