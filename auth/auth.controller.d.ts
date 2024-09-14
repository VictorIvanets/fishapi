import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<unknown>;
    login({ login, password }: Pick<AuthDto, 'login' | 'password'>): Promise<object>;
    user(login: string): Promise<object>;
    deluser(login: string): Promise<string>;
}
