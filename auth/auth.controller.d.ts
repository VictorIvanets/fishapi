import { AuthService } from './auth.service';
import { AuthDto, loginDto } from './auth.dto';
import { AuthResponseT } from './auth.types';
import { AuthModel } from './auth.model';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<unknown>;
    login({ login, password }: loginDto): Promise<AuthResponseT>;
    checkServer(): Promise<string>;
    user(user: any): Promise<object>;
    deluser(id: string): Promise<AuthModel>;
}
