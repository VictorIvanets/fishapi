import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthModel } from './auth.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate({ login, _id, }: Pick<AuthModel, 'login' | '_id'>): Promise<Pick<AuthModel, 'login' | '_id'>>;
}
export {};
