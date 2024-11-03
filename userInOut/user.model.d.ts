import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    userId: string;
    chat: string;
    user: string;
}
