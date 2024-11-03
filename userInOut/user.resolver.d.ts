import { UserModel } from './user.model';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    userIn(newUser: string, userId: string): Promise<UserModel>;
    userOut(userId: string): Promise<boolean>;
    userChek(): AsyncIterator<unknown, any, any>;
}
