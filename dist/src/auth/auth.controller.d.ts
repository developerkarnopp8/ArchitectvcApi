import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            plan: string;
            createdAt: Date;
        };
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            plan: string;
            stripeCustomerId: string | null;
            stripeSubscriptionId: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
    me(req: Request): any;
}
