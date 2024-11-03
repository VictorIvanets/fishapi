import { ModelType } from '@typegoose/typegoose/lib/types';
import { JwtService } from '@nestjs/jwt';
import { AuthModel } from './auth.model';
import { AuthDto } from './auth.dto';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: ModelType<AuthModel>, jwtService: JwtService);
    createUser(dto: AuthDto): Promise<unknown>;
    findUser(login: string): Promise<AuthModel>;
    validateUser(login: string, password: string): Promise<Pick<AuthModel, 'login' | 'userId'>>;
    login(login: string, userId: string): Promise<object>;
    findByLogin(login: string): Promise<AuthModel>;
    delByLogin(login: string): Promise<string>;
}
