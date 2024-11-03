import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserModel } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: ModelType<UserModel>);
    userIn(user: string, userId: string): Promise<UserModel>;
    findAll(chat: string): Promise<UserModel[]>;
    userOut(userId: string): Promise<boolean>;
}
