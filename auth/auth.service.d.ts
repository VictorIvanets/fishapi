import { ModelType } from '@typegoose/typegoose/lib/types';
import { JwtService } from '@nestjs/jwt';
import { AuthModel } from './auth.model';
import { AuthDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';
import { AuthResponseT, RegisterResponseT } from './auth.types';
import { Types } from 'mongoose';
export declare class AuthService {
    private readonly authModel;
    private readonly jwtService;
    private readonly configService;
    constructor(authModel: ModelType<AuthModel>, jwtService: JwtService, configService: ConfigService);
    createUser(dto: AuthDto): Promise<RegisterResponseT>;
    findUser(login: string): Promise<AuthModel>;
    findUserById(user: {
        _id: string;
        login: string;
    }): Promise<AuthModel>;
    validateUser(login: string, password: string): Promise<Pick<AuthModel, 'login'> & Record<'_id', Types.ObjectId>>;
    login(login: string, _id: Types.ObjectId): Promise<AuthResponseT>;
    delUserById(id: string): Promise<AuthModel>;
}
